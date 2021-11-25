// import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Cards() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const cards = useSelector((state) => state.week4.list);

  return (
    <>
      {cards.map((cards, index) => {
        console.log(cards);
        return (
          <div>
            <div>제목 : {cards.title}</div>
            <div>내용 : {cards.content}</div>
            <div>그래서? : {cards.final}</div>
          </div>
        );
      })}
    </>
  );
}
