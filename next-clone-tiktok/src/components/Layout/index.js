import Header from '../Header';
import PostCard from '../PostCard';
import Sidebar from '../Sidebar';
import Feed from '../Feed';
import {Container,SidebarContainer,ContentContainer} from './styles';


function Layout({children}) {
    return (
        <>
           <Header></Header>  
           <Container>
               <SidebarContainer>
                   <Sidebar></Sidebar>
               </SidebarContainer>
               <ContentContainer>{children}</ContentContainer>
            
           </Container>

        </>
    )
}

export default Layout
