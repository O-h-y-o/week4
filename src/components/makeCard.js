/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { addCardFB } from "../redux/modules/week4";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { createCard } from "../redux/modules/week4";
import { useHistory } from "react-router-dom";
import { async } from "@firebase/util";
export default function makeCard() {
  const title = React.useRef(null);
  const content = React.useRef(null);
  const final = React.useRef(null);

  const dispatch = useDispatch();

  const history = useHistory();

  // const addCardList = async () => {
  //   await
  //   );
  //   // history.goBack();
  // };

  return (
    <Wrap>
      <h1>
        <Center>단어를 남겨봐</Center>
      </h1>
      <hr />
      <InputWrap>
        <div>단어</div>
        <Input type="title" ref={title} />
        <hr />
      </InputWrap>
      <InputWrap>
        <div>내용</div>
        <Input type="content" ref={content} />
        <hr />
      </InputWrap>
      <InputWrap>
        <div>예시</div>
        <Input type="final" ref={final} />
        <hr />
      </InputWrap>
      <Center>
        <button
          onClick={async () => {
            await dispatch(
              addCardFB({
                title: title.current.value,
                content: content.current.value,
                final: final.current.value,
              })
            ).then((res) => (window.location.href = "/"));
          }}
        >
          메모남기기
        </button>
      </Center>
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 300px;
  margin: auto;
  justify-content: center;
`;

const Center = styled.div`
  justify-content: center;
  text-align: center;
  overflow: hidden;
`;

const InputWrap = styled.div``;

const Input = styled.input`
  width: 100%;
`;
