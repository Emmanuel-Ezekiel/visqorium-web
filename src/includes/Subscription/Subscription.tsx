import {Container,InnerContainer,InputContainer ,Input,Header,SubHeader,SubmitBtn} from "./Subscription.styles";
import right_arrow from "../../assets/Icons/right_arrow.png";
import { useForm, ValidationError } from '@formspree/react';
import { toast } from 'react-toastify';
import {useEffect, useState, FormEvent, useRef} from "react";

export default function Subscription () {
    const [state, handleSubmit] = useForm("mdobgvwo");
    if (state.succeeded) {
        toast("thanks for joining")
    }

    return (
        <Container>
            <InnerContainer>
                <Header>Subscribe to
                    our Newsletter</Header>
                <SubHeader>Unsubscribe at anytime</SubHeader>
            </InnerContainer>
            <InputContainer>
                <form onSubmit={handleSubmit}>
                    <Input>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder={'Your email'}
                        />
                    </Input>
                    <SubmitBtn type="submit" disabled={state.submitting}>
                        <img src={right_arrow} alt={'right_arrow'}/>
                    </SubmitBtn>
                </form>
            </InputContainer>
        </Container>
    )
}