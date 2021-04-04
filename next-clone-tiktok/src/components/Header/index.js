
import {Container,Content,LogoContainer,LogoIcon,Logo,OptionsContainer,Icon,Avatar} from './styles';


function Header() {
    return (
        <Container>
            <Content>
                <LogoContainer>
                    <LogoIcon src="/images/logoIcon.svg"></LogoIcon>
                        <Logo src="/images/logo.svg"></Logo>
                </LogoContainer>
                <OptionsContainer>
                    <Icon src="/images/uploadIcon.svg"></Icon>
                    <Avatar>
                        <img src="https://sf16-passport-va.ibytedtos.com/img/user-avatar-musically/6fe3867740b420c4ca9572f2f4a975b2~120x256.image"/>
                    </Avatar>
                </OptionsContainer>
            </Content>
        </Container>
    )
}

export default Header;