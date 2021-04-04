import {Container } from "./styles";

import PostCard from "../PostCard/index";

function Feed({posts}) {
    return (
        
            <Container>
                {posts.map((post,index) => {
                <PostCard key={index} post={post}></PostCard>
                })}
            </Container>
     
    );
}



export default Feed;
