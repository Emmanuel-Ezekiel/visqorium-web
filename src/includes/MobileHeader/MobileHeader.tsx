import {
  Navbar,
  MobileMenu,
  TinyArrow,
  Text,
  Container,
  SubItem,
  SubItemDropDown,
  GradientDivider,
  Detailed,
  MobileNav,
  MisionText,
  WaitlistButton,
  ThemeButton,
} from "./MobileHeader.styles";
import MobileNavbar from "./MobileNav";
import { Logo, JoinBtn, Arrow, ColoredArrow } from "../Header2/Header2.styles";
import logo from "../../assets/Icons/logo.png";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Header2/data.json";
import DropdownContainer from "../MobileHeader/DropdownContainer/DropdownContainer";
import ScrollIntoView from "react-scroll-into-view";
// interface IMyProps {
//   myValue: boolean;
// }
const MobileHeader: React.FC = () => {
  let navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);
  let divRef = React.useRef<HTMLDivElement>(null);
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
    handleClick();
  };
  const handleClick = () => {
    if (divRef.current != null) {
      if (divRef.current.style.display == "flex") {
        divRef.current.style.display = "none";
      } else {
        divRef.current.style.display = "flex";
      }
    }
  };
  const nextPage = (e: React.MouseEvent<HTMLElement>, url: string) => {
    e.preventDefault();
    navigate(url);
    handleClick();
  };
  return (
    <>
      <Navbar>
        <Logo
          onClick={(e: React.ChangeEvent<HTMLInputElement>) => navigate("/")}
          src={logo}
        />
        <MobileMenu
          onClick={handleMobileNav}
          className={mobileNav ? "active" : ""}
        >
          <i></i>
          <i></i>
          <i></i>
        </MobileMenu>
      </Navbar>

      <Container ref={divRef}>
        <DropdownContainer
          header={"product"}
          data={data["product"]}
          closeTab={handleClick}
        />
        <DropdownContainer
          header={"creators"}
          data={data["creators"]}
          closeTab={handleClick}
        />
        <DropdownContainer
          header={"developers"}
          data={data["developers"]}
          closeTab={handleClick}
        />
        <ScrollIntoView selector="#mission">
          <MisionText>Mission</MisionText>
        </ScrollIntoView>
        <DropdownContainer header={"company"} data={data["company"]} />
        <MisionText
          onClick={(e: React.MouseEvent<HTMLElement>) =>
            nextPage(e, "/contact")
          }
        >
          Contact
        </MisionText>
        <WaitlistButton>
          <JoinBtn onClick={() => navigate("creators/waitlist")}>
            Join the waitlist
          </JoinBtn>
        </WaitlistButton>
      </Container>
    </>
  );
};

export default MobileHeader;
