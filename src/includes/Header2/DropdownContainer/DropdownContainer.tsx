import {Arrow, Col, ColoredArrow, Detailed, Dropdown, GradientDivider, SubItemDropDown} from "../Header2.styles";
import arrow from "../../../assets/Icons/right_arrow.png";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function DropdownContainer (props: any) {
    const [header,setHeader] = useState('')
    const [text,setText] = useState('');
    let navigate = useNavigate();
    const changeText = (header: string,text: string) => {
        setHeader(header)
        setText(text)
    }
    type Data = {
        link: string,
        header: string,
        description: string
    }

    return (
        <Dropdown>
            <Col>
                {
                    props.data.map(({link,header,description}: Data, i:number)=>{
                        return (
                            <>
                                <SubItemDropDown onClick={(e:React.FormEvent<EventTarget>)=>(navigate(link))} onMouseOver={()=> (changeText(header,description))}>
                                    <p>{header}</p>
                                    <Arrow src={process.env.PUBLIC_URL + '/images/Icons/arrow-right.png'} alt={'icon'}/>
                                    <ColoredArrow src={process.env.PUBLIC_URL + '/images/Icons/arrow-right-colorful.png'} alt={'icon'}/>
                                </SubItemDropDown>
                                <GradientDivider/>
                            </>
                        )
                    })
                }
            </Col>
            <Col>
                <Detailed>
                    <p>{header}</p>
                    <p>{text}</p>
                </Detailed>
            </Col>
        </Dropdown>
    )
}