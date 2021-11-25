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
  right: 50px;
  text-align: center;
  border-radius: 50%;
  text-decoration: none;

  & a {
    display: block;
    width: 150px;
    height: 100px;
    text-decoration: none;
    color: #000;
    border: 1px solid #fff;
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
