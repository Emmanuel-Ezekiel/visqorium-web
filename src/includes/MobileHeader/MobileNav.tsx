import React, { useState } from 'react'
import { MobileNav, ContainerNav,  TopNav, Container } from "./MobileHeader.styles";
import {Logo, JoinBtn, Arrow, ColoredArrow, Logo2} from "../Header2/Header2.styles";
import {useNavigate} from "react-router-dom";
import logo from "../../assets/Icons/logo.png";
import Cancel from "../../assets/Icons/Vector.png";
import DropdownContainer from '../MobileHeader/DropdownContainer/DropdownContainer'



interface CounterProps {
  booleanState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const MobileNavbar: React.FC<CounterProps> = ( {booleanState: [active, setActive]}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    setActive(false);
  };


  return (
    <div>
        <MobileNav className="show">
          <ContainerNav>
             <TopNav>
                <Logo onClick={(e:React.ChangeEvent<HTMLInputElement>)=>(navigate('/'))} src={logo}/>
                <Logo2 onClick={handleClick} src={Cancel} />
             </TopNav>
            <Container>
                {/*<DropdownContainer header={'product'} />*/}
                {/*<DropdownContainer header={'creators'} />*/}
                {/*<DropdownContainer header={'developers'} />*/}
                {/*<DropdownContainer header={'company'} />*/}
                {/*<DropdownContainer header={'contact'} />*/}
            </Container>
            <JoinBtn onClick={()=>(navigate('creators/waitlist'))}>join the waitlist</JoinBtn>
          </ContainerNav>
         </MobileNav>
    </div>
  )
}

export default MobileNavbar;