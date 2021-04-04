import {Container,MenuItem,HomeIcon,PeopleIcon,Following,FollowingHeader,InfoContainer,Links}from "./styles";
import User from '../User/index';

function Sidebar() {
    return (
        <Container>
            <MenuItem active>
              <HomeIcon src="/images/homeIcon.svg"></HomeIcon>
              <span>Para você</span>
            </MenuItem>
            <MenuItem>
              <PeopleIcon src="/images/peopleIcon.svg"></PeopleIcon>
              <span>Seguindo</span>
            </MenuItem>
            <Following>
                <FollowingHeader>Suas pricipais contas</FollowingHeader>
                <User user={{
                    name:'Will Smith',
                    username:'willsmith',
                    avatar:'https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/6fa5ff56bc1211a6a3e17ad1c1251e52~c5_720x720.jpeg?x-expires=1610899200&x-signature=WmsNPfXhZBBYpn4L%2BWzigreNAU8%3D'}}>
                        
                </User>
            </Following>
            <InfoContainer>
                <Links margin>
                 <a>Inicio</a>
                 <a>Sobre</a>
                 <a>Sala de imprensa</a>
                 <a>Carreira</a>
                 <a>ByteDance</a>
                </Links>
                 <a>Ajuda</a>
                 <a>Segurança</a>
                <Links>
                </Links>
                <Links margin>
                <a>Diretrizes da comunidade</a>
                <a>Termos</a>
                </Links>
                <Links margin>
                <a>Privacidade</a>
                <a>₢  2020 TikTok</a>
                </Links>
            </InfoContainer>
        </Container>
    )
}

export default Sidebar;