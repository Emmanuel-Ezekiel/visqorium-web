import styled from "styled-components";
export const Container = styled.div`
  margin: 10% 0;
  padding: 0 4rem;
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  @media (max-width: 425px) {
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 1fr;
    padding: 0;
  }
`

export const InnerContainer = styled.div`
  display: inline-flex;
  height: 100%;
  justify-self: stretch;
  flex-direction: column;
  padding: 0 20px;
  h5{
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    color: #D9D9D9;
    text-transform: capitalize;
  }
  a{
    text-transform: capitalize;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 20px;
    text-decoration: none;
  }
`
export const ContactDiv = styled.div`
  margin-bottom: 20px;
  p{
    margin: 0;
  }
  p:nth-child(1){
    text-transform: capitalize;
    color: white;
    font-weight: 600;
    padding-bottom: 7px;
  }
  p:nth-child(2){
    color: rgba(255, 255, 255, 0.4);
  }
`

export const Hiring = styled.span`
  margin-left: 5px;
  background: #D9D9D9;
  border-radius: 80px;
  padding: 0 5px;
  ::before{
    content: "We're hiring";
    font-weight: 500;
    font-size: 16px;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`

export const CommunityDiv = styled.div`
  display: flex;
  a{
    text-transform: capitalize;
    margin-left: 15px;
    text-transform: capitalize;
  }
    img{
      width: 20px;
      height: 20px;
    }
`