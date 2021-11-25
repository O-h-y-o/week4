/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import styled from "styled-components";

export default function makeCard() {
  const title = React.useRef(null);
  const content = React.useRef(null);
  const final = React.useRef(null);

  return (
    <>
      asd
      <div>
        <div>제목</div>
        <input type="text" ref={title} />
        <hr />
      </div>
      <div>
        <div>내용</div>
        <input type="text" ref={content} />
        <hr />
      </div>
      <div>
        <div>남길말</div>
        <input type="text" ref={final} />
        <hr />
      </div>
      <button>작성하기</button>
    </>
  );
}
