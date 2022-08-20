import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubItemDropDown,
  GradientDivider,
  Detailed,
  Text,
  TinyArrow,
  SubItem,
} from "../MobileHeader.styles";
import { Arrow, ColoredArrow } from "../../Header2/Header2.styles";
import data from "../../Header2/data.json";

type Data = {
  link: string;
  header: string;
  description: string;
};

export default function DropdownContainer(props: any) {
  let navigate = useNavigate();
  const subItem = React.useRef<HTMLDivElement>(null);
  const Item = React.useRef<HTMLDivElement>(null);
  const tinyArrow = React.useRef<HTMLImageElement>(null);
  const arrow = React.useRef<HTMLImageElement>(null);
  const itemsRef = React.useRef<Array<HTMLDivElement | null>>([]);
  const handleChange = () => {
    if (subItem.current !== null && tinyArrow.current !== null) {
      let current = subItem.current.style.display;
      if (current == "block") {
        subItem.current.style.display = "none";
        tinyArrow.current.style.transform = "rotate(0deg)";
      } else {
        subItem.current.style.display = "block";
        tinyArrow.current.style.transform = "rotate(180deg)";
      }
    }
  };
  const handleDescription = (e: React.MouseEvent<HTMLElement>) => {
    let id = parseInt(e.currentTarget.id);
    let current = itemsRef.current[id];
    if (current !== null && arrow.current !== null) {
      if (current.style.display == "block") {
        current.style.display = "none";
        arrow.current.style.transform = "rotate(0deg)";
      } else {
        current.style.display = "block";
        arrow.current.style.transform = "rotate(90deg)";
      }
    }
  };
  const nextPage = (e: React.MouseEvent<HTMLElement>, url: string) => {
    e.preventDefault();
    navigate(url);
    props.closeTab()
  };
  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, props.data.length);
  }, [props.data]);
  return (
    <SubItem>
      <Text onClick={handleChange}>
        <p>{props.header}</p>
        <TinyArrow
          ref={tinyArrow}
          src={process.env.PUBLIC_URL + "/images/Icons/tiny-arrow-up.png"}
          alt={"arrow"}
        />
      </Text>
      <div ref={subItem} style={{ display: "none" }}>
        {props.data.map(({ link, header, description }: Data, i: number) => {
          return (
            <>
              <SubItemDropDown
                onClick={(e: React.MouseEvent<HTMLElement>) => handleDescription(e)}
                key={i}
                id={i.toString()}
              >
                <p
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    nextPage(e, link)
                  }
                >
                  {header}
                </p>
                <Arrow
                  ref={arrow}
                  src={process.env.PUBLIC_URL + "/images/Icons/arrow-right.png"}
                  alt={"icon"}
                />
                <ColoredArrow
                  src={
                    process.env.PUBLIC_URL +
                    "/images/Icons/arrow-down-colorful.png"
                  }
                  alt={"icon"}
                />
              </SubItemDropDown>
              <div
                ref={(el) => (itemsRef.current[i] = el)}
                style={{ display: "none" }}
                key={i}
              >
                <GradientDivider />
                {description != "" || description != null ? (
                  <Detailed
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                      nextPage(e, link)
                    }
                  >
                    <p>{header}</p>
                    <p>{description}</p>
                  </Detailed>
                ) : null}
              </div>
            </>
          );
        })}
      </div>
    </SubItem>
  );
}
