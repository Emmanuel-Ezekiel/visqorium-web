import styled from "styled-components";
import arrow from '../../assets/Icons/tiny-arrow-up.png'

export const MobileNav = styled.div`
 @media (max-width: 768px) {
  background-color:  rgba(0, 0, 0, 0.8);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0.5s ease;
  z-index: 11;
 }

  &.show {
    opacity: 1;
    overflow: hidden;
  }
  
`
export const ContainerNav = styled.div`
   @media (max-width: 768px) {
     //width: 320px;
     padding: 64px 24px;
    height: 100%;
   }
 
`
export const TopNav = styled.div`
@media (max-width: 768px) {
  display: flex;
  justify-content: space-between;
}
  
`

export const Navbar = styled.div`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: 51px;
  padding: 2% 7%;
  margin: 0;
  position: relative;
  //background-color: #61dafb;
  @media (max-width: 768px) {
    display: flex;
    
  }
`
export const Container = styled.div`
  display: none;
  flex-direction: column;
  position: absolute;
  background: rgba(0,0,0,0.6);
  width: 100vw;
  max-height: 300px;
  overflow: auto;
  z-index: 999;
`
export const SubItem = styled.div`
  text-transform: capitalize;
  p{
    color: #fff;
    padding-left: 15px;
  }

`
export const Text = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`

export const TinyArrow = styled.img`
 
`
export const ColoredArrow = styled.img`
  display: none;
`
export const Arrow = styled.img`
  display: block;
`
export const GradientDivider = styled.div`
  background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
  display: block;
  width: 95%;
  height: 2px;
  margin: 0px 10px;
`
export const SubItemDropDown = styled.div`
  //width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
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
    display: block;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
  }
 
`
export const MisionText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #FFFFFF;
  padding-left: 15px;
  //line-height: 17px;
  //margin: 16px 0;
`
export const MobileMenu = styled.a`
  width: 30px;
  height: 100%;
  position: relative;
  display: block;
  margin:0;
  padding:0;
  //background: red;
  i {
    position: absolute;
    display: block;
    height: 2px;
    background: linear-gradient(90deg, #3FA6DC 0%, #8B459A 59.8%, #D02332 110.39%);
    width: 30px;
    left: 0px;
    -webkit-transition: all .3s;
    transition: all .3s;
  }

  i:nth-child(1) {
    top: 16px;
  }

  i:nth-child(2) {
    top: 24px;
  }

  i:nth-child(3) {
    top: 32px;
  }

  &:active i:nth-child(1) {
    top: 25px;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
  }

  &:active i:nth-child(2) {
    background: transparent;
  }

  &:active i:nth-child(3) {
    top: 25px;
    -webkit-transform: rotateZ(-45deg);
    transform: rotateZ(-45deg);
  }

`
export const WaitlistButton = styled.div`
  display: flex;
  padding-left: 15px;
  margin: 20px 0;
  
`

export const ThemeButton = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background: #C7CBD1;
  margin-left: 60px;
`
export const Detailed = styled.div`
  margin-top: 15px;
  margin-left: 7px;
  background: rgba(0,0,0,1);
  border-radius: 10px;
  color: black;
  width: 94%;
  padding: 5px;
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
    color: #fff;
  }
`