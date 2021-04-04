import {
    Container,
    Header,
    PersonContainer,
    Avatar,
    Info,
    Author,
    Description,
    Tag,
    VideoContainer,
    Video,
    ActionsContainer,
    PlayerIcon,
    Actions,
    Action,
    ButtonContainer,
    
}from './styles';

import Button from '../Button';

function PostCard({post}) {
    return (
      <Container>
        <Header>
            <PersonContainer>
                <Avatar src={post?.author?.avatar}></Avatar>
                <Info>
                    <Author>
                        {post?.author?.username}
                        <span>{post?.author?.name}</span>
                    </Author>
                    <Description>
                        <span>{post?.description}</span>
                        {post?.tags.map((tag,index) =>(
                            <Tag key={index}>{tag.title}</Tag>
                        ))}
                    </Description>
                </Info>
            </PersonContainer>
            <ButtonContainer>
                <Button fontSize={14} outlined>Seguir</Button>
            </ButtonContainer>
        </Header>
        <Content>
            <Song>
                <img src="/images/songIcon.svg"></img>
                <a>{post?.songName}</a>
            </Song>
            <VideoContainer>
                <Video
                 src={post.videoUrl}
                 webkit-playsinline='true'
                 playsinline=''
                 loop='true'
                 preload='metadata'
                 ></Video>
                <ActionsContainer>
                    <PlayerIcon src="/images/playerIcon.svg"></PlayerIcon>
                </ActionsContainer>
            </VideoContainer>
        </Content>
        <Actions>
            <Action>
                <img src=""></img>
                <a></a>
            </Action>
            <Action></Action>
            <img src=""></img>
                <a></a>
            <Action>
            <img src=""></img>
                <a></a>
            </Action>
        </Actions>
      </Container>
    )
}

export default PostCard;
