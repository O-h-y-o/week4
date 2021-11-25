import { Link } from "react-router-dom";
import styled from "styled-components";

export default function link() {
  return (
    <Center>
      <Link to="./components/makeCard">단어남기기</Link>
    </Center>
  );
}

const Center = styled.div`
  width: 150px;
  height: 100px;
  display: block;
  margin: auto;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100px;
  text-align: center;
  border-radius: 50%;
  /* overflow: hidden; */
  text-decoration: none;

  & a {
    display: block;
    width: 150px;
    height: 100px;
    text-decoration: none;
    color: #000;
    background-color: #999;
    line-height: 6.5;
    overflow: hidden;
    border-radius: 50%;
    transition: 0.5s;
  }

  & a:hover {
    transform: scale(1.3);
  }
`;

const Memo = styled.div`
  background-color: #eee;
  line-height: 6.5;
  border-radius: 50%;
  overflow: hidden;
`;
