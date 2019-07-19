
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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

export const ModuleWrapper = styled.div`
  width: 320px;
  margin: 0 0 0 1rem;
  display: flex;
  z-index: 2;
  box-sizing: border-box;
`;

export const AppWrapper = styled.section`
  width: 320px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(153, 153, 153, .4);
`;

export const ContentWrapper = styled.div`
  padding: .5rem 1rem 1rem;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  background-color: #fff;
  margin-bottom: 1rem;
`;

export const RowWrapper = styled.section`
  width: 100%;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  display: flex;
  margin-top: .5rem;
  -webkit-box-flex: 1;
  -ms-flex: 1 100%;
  flex: 1 100%;
`;

export const TextWrapper = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  align-self: center;
  text-overflow: ellipsis;
  text-decoration: inherit;
  margin: 0 0 0 .25rem;
`;

export const SectionTitle = styled.span`
  margin: 0 0 .5rem;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
`;

export const ModuleTitle = styled.h1`
  text-align: center;
  margin-top: 4px;
  margin-bottom: 4px;
  line-height: 48px;
  max-width: 320px;
`;
