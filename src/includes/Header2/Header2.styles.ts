import styled from "styled-components";

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;
  background-color: transparent;
  color: #fff;
  width: 92%;
  //background-color: #61dafb;
  @media (max-width: 768px) {
    display: none;
  }
`

export const JoinBtn = styled.button`
  color: #fff;
  --border-width: 1px;
  --border-radius: 32px;
  border-radius: var(--border-radius);
  border-width: var(--border-width);
  background: linear-gradient(90deg, #D32027 0%, #B620E0 59.8%, #32C5FF 110.39%);
  height: 51px;
  padding: 12px 22px;
  font-size: 16px;
  border-style: none;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    height: calc(100% - calc(var(--border-width)) * 2);
    width: calc(100% - calc(var(--border-width)) * 2);
    border-radius: calc(var(--border-radius) - var(--border-width));
    background: #000000FF;
    z-index: -1;
  }
  @media (max-width: 425px){
    // padding: 7px 18px;
     padding: 12px 18px;
     border-radius: 32px;
     width: 145px;
     height: 51px;
     float: left;
     font-weight: 400;
     font-size: 14px;
     line-height: 19px;

    &::before {
    content: "";
    position: absolute;
    top: var(--border-width);
    left: var(--border-width);
    height: calc(100% - calc(var(--border-width)) * 2);
    width: calc(100% - calc(var(--border-width)) * 2);
    border-radius: calc(var(--border-radius) - var(--border-width));
    background: #000000FF;
    z-index: -1;
  }
  }
`
export const Logo = styled.img`
  @media (max-width: 425px) {
    transform: scale(0.75);
    margin-left: -10%;
  }
  
`
export const Logo2 = styled.img`
  @media (max-width: 425px) {
    transform: scale(0.75);
    margin-left: -10%;
    width: 19px;
    height: 19px;
  }
  
`
export const Menu = styled.div`
  //background-color: red;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 425px) {
      display: none;
    }
`

export const NavItem = styled.div`
  padding: 16px 16px;
  cursor: pointer;
  vertical-align: middle;
  position: relative;
  a {
    
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
  }
  a:hover{
    font-weight: 700;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: background-color linear 0.6s;
  }
  p{
    padding: 0;
    margin: 0;
    text-transform: capitalize;
  }
  &:hover > div{
    display: block;
  }
  &:hover > div:nth-child(3){
    transform: rotate(135deg);
    top: 23px;
  }
`
export const GradientDivider = styled.div`
  background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
  display: block;
  width: 100%;
  height: 2px;
  margin: 0px;
`
export const Dropdown = styled.div`
  z-index: 99;
  display: none;
  width: 40vw;
  flex-direction: column;
  //background-color: #61dafb;
  border-top: 4px solid transparent;
  background: rgba(0, 0, 0, 1);
  border-radius: 0px 0px 10px 10px;
  padding: 1em;
  position: absolute;
  top: 50px;
  left: -18.5vw;
  //right: -10px;
  ::after{
    content:"";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid  transparent;
  }
 
  a {
    padding: 0.5em 0.5em;
    width: 7em;
    text-align: center;
    margin: 0 15px;
    text-transform: capitalize;
  }
  a:after {
    content:"";
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    display: block;
    width: 100%;
    height: 1px;
    margin-top: 10px;
    margin-bottom: 0;
  }
  a:hover {
    cursor: pointer;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`
export const Up = styled.div`
  position: absolute;
  top: 25px;
  right: 2px;
  content: "";
  display: inline-block;
  width: 4px;
  height: 4px;
  border-right: 2px solid white;
  border-top: 2px solid white;
  transform: rotate(-45deg);
  //margin-right: 0.5em;
  //margin-left: 1.0em;
`
export const ColoredArrow = styled.img`
  display: none;
`
export const Arrow = styled.img`
  display: block;
`
export const SubItemDropDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  p{
     font-weight: 500;
    font-size: 14px;
    line-height: 17px;
  }
  img{
    transform: scale(1.2);
  }
  :hover > p{
    cursor: pointer;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  :hover > ${ColoredArrow}{
    display: block;
  }
  :hover > ${Arrow}{
    display: none;
  }
 
`

export const Detailed = styled.div`
  margin-left: 25px;
  background: #F5F4F4;
  border-radius: 10px;
  color: black;
  width: 96%;
  padding: 7px;
  p:nth-child(1){
    font-weight: 500;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  p:nth-child(2){
    margin-top: 5px;
    font-weight: 400;
    font-size: 14px;
    //text-align: justify;
    color: #585858;
  }
`

export const Col = styled.div`
display: inline-flex;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color: red;
  row-gap: 20px;
  
`