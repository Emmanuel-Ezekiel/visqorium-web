import { CommunityDiv, ContactDiv, Container, Hiring } from "./Links.styles";
import { Link } from "react-router-dom";
import data from "./data.json";
import { InnerContainer } from "./Links.styles";
import GradientCircle from "../../GradientCircle/GradientCircle";
import React from "react";
export default function Links() {
  // @ts-ignore
  return (
    <Container>
      <InnerContainer>
        <h5>resources</h5>
        {data["resources"].map(({ url_link, link_name }, index) => {
          return <Link to={url_link}>{link_name}</Link>;
        })}
      </InnerContainer>
      <InnerContainer>
        <h5>contact</h5>
        {data["contact"].map(({ header, email }, index) => {
          return (
            <ContactDiv>
              <p>{header}</p>
              <p>{email}</p>
            </ContactDiv>
          );
        })}
      </InnerContainer>
      <InnerContainer>
        <h5>community</h5>
        {data["community"].map(({ url_link, link_name, icon }, index) => {
          return (
            <CommunityDiv>
              <img
                src={process.env.PUBLIC_URL + "/images/Icons" + icon}
                alt={"icon"}
              />
              <a href={url_link}>{link_name}</a>
            </CommunityDiv>
          );
        })}
      </InnerContainer>
      <InnerContainer>
        <h5>company</h5>
        {data["company"].map(({ title, link }, index) => {
          return <Link to={link}>{title}</Link>;
        })}
        <div>
          <Link to={"/careers"}>careers</Link>
          <Hiring />
        </div>
      </InnerContainer>
      <GradientCircle size={30} top={0} right={10} bottom={0} left={0} />
    </Container>
  );
}
