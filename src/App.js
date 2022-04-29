/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App(){
let [글제목, 글제목변경] = useState(['사과', '감', '토마토']);
let [좋아요, 좋아요증가] = useState(0);
let [좋아요1, 좋아요증가1] = useState(0);
let [좋아요2, 좋아요증가2] = useState(0);
  
  function 순서변경(){
    var newArray = [...글제목];
    newArray[0] = '풋사과'
    newArray[1] = '홍시'
    newArray[2] = '방울토마토'
    글제목변경(newArray);
  }

  return (
    <div className="App">
      <div className = "black-nav">
      <div>React lecture</div>
      </div>
      <button onClick = { 순서변경 }>변경</button>

      <div className = "list">
        <h3> { 글제목[0] } <span onClick = { () => { 좋아요증가(좋아요 + 1 ) }}>🍎</span> {좋아요} </h3>
        <p> 7월말 - 8월 중순 </p>
        <hr/>
      </div>

      <div className = "list">
        <h3> { 글제목[1] } <span onClick = { () => { 좋아요증가1(좋아요1 + 1 ) }}>🍑</span> {좋아요1}</h3>
        <p> 5월 중순 - 6월 중순 </p>
        <hr/>
      </div>

      <div className = "list">
        <h3> { 글제목[2] } <span onClick = { () => { 좋아요증가2(좋아요2+ 1 ) }}>🍅</span> {좋아요2}</h3>
        <p> 6월 말 - 9월 중순 </p>
        <hr/>

    <Modal />
    </div>
    </div>
  );
}

function Modal(){
  return (
    <>
    <div className = "modal" >
      <h2>산티노 농장</h2>
      <p>2022년 4월 29일 금요일</p>
      <p>사과 감 토마토 재배중</p>
    </div>
    </>
  )
}

export default App;
