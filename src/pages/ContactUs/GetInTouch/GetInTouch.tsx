import { makeStyles } from "@material-ui/core";
import { AppStylePropType } from "../../../utils/types";
import classNames from "classnames";
import TextField from "../GetInTouch/TextField/TextField";
import { JoinBtn } from "../../../includes/Header2/Header2.styles";
import { useForm } from "@formspree/react";
import { toast } from "react-toastify";

const style = makeStyles(({ colors, breakpoints }: AppStylePropType) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    maxWidth: "1100px",
    width: "60%",
    margin: "auto",
    background: colors.black,
    borderRadius: "15px",
    padding: "30px 41px",

    //   background-color: rgba(0, 0, 0, 0.5);
    //   background-size: 100% 0.5px;
    //   background-position: 0 0, 0 100%;
    //   background-repeat: no-repeat;
  },
  item: {},
  item1: {},
  item2: {
    marginLeft: "20px",
  },
  item4: {
    gridColumn: "1 / span 4",
    width: "100%",
  },

  item5: {
    // background: 'lightcoral',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    placeSelf: "stretch",
  },
  item6: {
    // background: 'lightpink',
    margin: "30px 0",
    gridColumnStart: 1,
    gridColumnEnd: 3,
  },
  textArea: {
    width: "99.91%",
    height: "116px",
    margin: "10px 0",
    borderRadius: "6.5px",
    padding: 0,
  },
  submitBtn: {
    float: "right",
    background:
      "linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
    borderRadius: 6.5,
    height: 41,
    width: 171,
    border: 0,
    cursor: "pointer",
    margin: "10px 0",
    // btn text
    color: "#FFFFFF",
    fontWeight: 700,
    fontSize: 12,
  },

  "@media (max-width: 980px)": {
    root: {
      width: "80%",
      margin: "auto",
      padding: "15px 17px",
      display: "block",

      borderLeft: "0.5px solid #d32027b2",

      borderRight: "0.5px solid #32c5ffb2",
    },

    item: {
      margin: "25px 0",
      width: "100%",
    },

    item5: {
      gridColumnStart: 1,
      gridColumnEnd: 3,
      placeSelf: "stretch",
      height: "150px",
    },
    textArea: {
      width: "99.91%",
      height: "100%",
      margin: "10px 0",
      borderRadius: "6.5px",
      padding: 0,
    },
    submitBtn: {
      float: "none",
      background:
        "linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%)",
      borderRadius: 6.5,
      height: 41,
      width: 171,
      border: 0,
      cursor: "pointer",
      margin: "10px 0",
      // btn text
      color: "#FFFFFF",
      fontWeight: 700,
      fontSize: 12,
    },
  },
}));

export default function GetInTouch() {
  const classes = style();
  const [state, handleSubmit] = useForm("mdobgvwo");
  if (state.succeeded) {
    toast("thanks for joining");
  }
  const data = [
    {
      label: "name",
      placeholder: "Full name",
      classname: classes.item1,
      type: "text",
    },
    {
      label: "Email",
      placeholder: "Email address",
      classname: classes.item2,
      type: "email",
    },
    {
      label: "subject",
      placeholder: "Name the subject",
      classname: classes.item4,
      type: "text",
    },
  ];
  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      {data.map(({ classname, label, placeholder }, index) => {
        return (
          <div className={classNames(classes.item, classname)}>
            <TextField label={label} placeholder={placeholder} />
          </div>
        );
      })}
      <div className={classNames(classes.item, classes.item5)}>
        <textarea name="message" id="message" className={classes.textArea} />
      </div>
      <div className={classNames(classes.item, classes.item6)}>
        <JoinBtn type="submit" disabled={state.submitting}>
          submit now
        </JoinBtn>
      </div>
    </form>
  );
}
