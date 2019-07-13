
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @font-face {
      font-family: BrandonText;
      src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff) format('woff')
    }
    @font-face {
      font-family: BrandonText;
      font-weight: 500;
      src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_med-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_med-webfont.woff) format('woff')
    }
    @font-face {
      font-family: BrandonText;
      font-weight: 700;
      src: url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_bld-webfont.woff2) format('woff2'),url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_bld-webfont.woff) format('woff')
    }
    font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
`;

const Wrapper = styled.section`
  width: 320px;
  box-shadow: 0 2px 8px rgba(153, 153, 153, .4);
`;

const Button = styled.button`
  background: #da3743;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #da3743;
  border-radius: 3px;
`;

const Form = styled.form`
  padding-top: .5rem;
  display: block;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  clear: both;
`;

const Select = styled.select`
  cursor: pointer;
  font-family: inherit;
  background-color: #fff;
  font-size: .875rem;
  display: block;
  outline: none;
  border: none;
      border-bottom-color: #d8d9db;
      border-bottom-style: none;
      border-bottom-width: medium;
  width: 100%;
  height: 35px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  border-bottom: 1px solid #d8d9db;
`;

const CalendarInput = styled.input`
  -webkit-box-flex: 1;
  -ms-flex: 1 50%;
  flex: 1 50%;
  margin-left: .5rem;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 35px;
  padding-top: 2px;
  border: 0;
`;

const TimeInput = styled.input`
  -webkit-box-flex: 1;
  -ms-flex: 1 50%;
  flex: 1 50%;
  margin-left: .5rem;
  background-color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 35px;
  padding-top: 2px;
  border: 0;
`;

export {
  GlobalStyles,
  Wrapper,
  Button,
  Form,
  Select,
  CalendarInput,
  TimeInput,
};
