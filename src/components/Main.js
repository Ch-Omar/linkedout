import styled from "styled-components";
import PostModal from "./PostModal";
import {useState} from "react";

const Main = (props) => {
const [showModal,setShowModal]=useState("close");
const handleClick = (e)=>{
e.preventDefault();
if(e.target !== e.currentTarget){
  return;
}
switch(showModal){
  case "open": setShowModal("close");break;
  case "close":setShowModal("open");break;
  default:setShowModal("close");break;
}
};
return <Container>Share
  <div>
    <img src="/images/user.svg" alt=""/>
    <button onClick={handleClick}>Start a post</button>
  </div>
    <PostModal showModel ={showModal} handleClick={handleClick}/>
  </Container>
  
};

const Container = styled.div`
  grid-area: main;
  img{
    width: 40px;
    height: 40px;
  }
`;

export default Main;
