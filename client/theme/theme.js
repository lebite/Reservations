
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff2) format("woff2"),
        url(https://cdn.otstatic.com/common/font/Brandon/Brandon_txt_reg-webfont.woff) format("woff");
    font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  }
`;

const Wrapper = styled.section`
  width: 320px;
  box-shadow: 0 2px 8px rgba(153, 153, 153, .4);
`;

export {
  GlobalStyles,
  Wrapper,
};
