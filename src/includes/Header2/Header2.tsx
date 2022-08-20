import {
    Navbar,
    NavItem,
    Menu,
    Dropdown,
    Up,
    Logo,
    SubItemDropDown,
    Detailed,
    Col,
    GradientDivider,
    JoinBtn,
    ColoredArrow,
    Arrow
} from "./Header2.styles";
import logo from "../../assets/Icons/logo.png";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import GradientCircle from "../../includes/GradientCircle/GradientCircle";
import ScrollIntoView from 'react-scroll-into-view'
import { useNavigate } from "react-router-dom";
import data from './data.json'
import DropdownContainer from "./DropdownContainer/DropdownContainer";
import styled from 'styled-components';
export default function Header2 () {
    const [header,setHeader] = useState('')
    const [text,setText] = useState('');
    let navigate = useNavigate();
    const changeText = (header: string,text: string) => {
        setHeader(header)
        setText(text)
    }

    return (
        <Navbar>
            <Logo onClick={(e:React.FormEvent<EventTarget>)=>(navigate('/'))} src={logo}/>
            <Menu>
                <NavItem>
                    <Link to={'/'}>product</Link>
                    <DropdownContainer data={
                        data['product']
                    } />
                </NavItem>
                <NavItem>
                    <Link to={'/'}>For Creators</Link>
                    <DropdownContainer data={
                        data['creators']
                    } />
                </NavItem>
                <NavItem>
                    <p>For Developers</p>
                    <DropdownContainer data={
                        data['developers']
                    } />
                </NavItem>
                <NavItem>
                    <ScrollIntoView selector={'#mission'}>
                        <Link to={'/'}>Mission</Link>
                    </ScrollIntoView>
                </NavItem>
                <NavItem>
                    <Link to={'/'}>Company</Link>
                    <DropdownContainer data={
                        data['company']
                    } />
                </NavItem>
                <NavItem>
                    <Link to={'/contact'}>Contact</Link>
                </NavItem>
            </Menu>
            <GradientCircle
                size={20}
                top={-10}
                right={-5}
                bottom={0}
                left={0}
            />
            <JoinBtn onClick={()=>(navigate('creators/waitlist'))}>Join the waitlist</JoinBtn>
        </Navbar>
    )
}