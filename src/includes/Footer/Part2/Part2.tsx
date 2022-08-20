import {Container, ImgContainer, InnerContainer} from "./Part2.styles";
import logo from '../../../assets/logo.png'
import location from '../../../assets/Icons/location.png'
export default function Part2 () {
    return (
        <Container>
                <InnerContainer theme={{ align:'flex-start'}}>
                    <ImgContainer>
                        <img src={process.env.PUBLIC_URL + '/images/visqorium.png'}/>
                    </ImgContainer>
                    <p>Visqorium Labs is a Blockchain-based company built to power Next-Generation Content Creation.</p>
                </InnerContainer>
                <InnerContainer theme={{align: 'flex-end'}}>
                    <ImgContainer>
                        <img src={location} alt={'icon'}/>
                        <h3>Business Address.</h3>
                    </ImgContainer>
                    <p>256 Champman Road, Newark, DE 19702, US.</p>
                </InnerContainer>
        </Container>
    )
}