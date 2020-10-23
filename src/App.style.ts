import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;  
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Noto Sans JP', sans-serif;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > p {
    color: #000;
  }
  .score {
    color: #000;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    background-image: linear-gradient(180deg, #fff, #ffcc91);
    border: solid 2px #d38558;
    box-shadow: 0px 5px10px rgba(0, 0, 0, 0.25);
    height: 40px;
    margin: 20px 0;
    border-radius: 10px;
    padding: 0 40px;
  }
`;
