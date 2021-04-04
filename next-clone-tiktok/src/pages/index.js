import Layout from '../components/Layout';
import Feed from '../components/Feed';


function Index ({posts}){
    return (
   <Layout>
     <Feed posts={posts}></Feed>
     {/*<Suggestions></Suggestions>*/}
     teste
   </Layout>

    );
}

export async function getServerSideProps(context){
//implementar a busca dos dados no mongodb
const data = [
  {
    id:1,
    author:{id:1,avatar:'https://www.tiktok.com/@institutoneymarjr?lang=pt-BR',name:'Junior',username:'Jr'},
    description:'descrição',
    tags:[{title:'#youtube'},{title:'#clone'}],
    songName:'musica',
    videoUrl:'video',
    likes:650,
    comments:10,
    replies:50,
   },
   {
   id:2,
   author:{id:2,avatar:"https://p77-sign-sg.tiktokcdn.com/musically-maliva-obj/6fa5ff56bc1211a6a3e17ad1c1251e52~c5_720x720.jpeg?x-expires=1610899200&x-signature=WmsNPfXhZBBYpn4L%2BWzigreNAU8%3D",
   name:'Junior',username:'Junior'},
   description:'descrição',
   tags:[{title:'#youtube'},{title:'#clone'}],
   songName:'musica2',
   videoUrl:'video2',
   likes:650,
   comments:10,
   replies:50
  }

 ]
  return{
      props:{
        posts:data,
      },
  } 
}   



export default Index;