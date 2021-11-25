/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import * as Redux from "react-redux";
import styled from "styled-components";
import { loadCardFB } from "../redux/modules/week4";

import { useDispatch } from "react-redux";

export default function Cards() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCardFB());
  }, []);

  const cards = Redux.useSelector((state) => state.week4.list);

  return (
    <CardWrap>
      {cards.map((cards, index) => {
        return (
          <Card>
            <Sector>
              <CardTitle>단어</CardTitle>
              {cards.title}
            </Sector>
            <hr />
            <Sector>
              <CardTitle>내용</CardTitle>
              {cards.content}
            </Sector>
            <hr />
            <Sector>
              <CardTitle>예시</CardTitle>
              <Blue>{cards.final}</Blue>
            </Sector>
          </Card>
        );
      })}
    </CardWrap>
  );
}

const CardWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
  border-left: 1px solid cornflowerblue;
  border-right: 1px solid cornflowerblue;
  border-radius: 10%;
  background-color: cornflowerblue;
`;

const Card = styled.div`
  width: 260px;
  height: 300px;
  margin: 10px;
  /* text-align: center; */
  background-color: #999;
  border: 1px solid #000;
  border-radius: 5%;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardTitle = styled.div`
  text-decoration: underline;
`;

const Sector = styled.div`
  margin: 7px;
  height: 80px;
  overflow: hidden;
  white-space: pre-wrap;
  text-overflow: ellipsis;
`;

const Blue = styled.div`
  color: blue;
  overflow: hidden;
`;
