import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
      margin:0px;
      padding: 0px;
      inset:0px;
      box-sizing: border-box;
    }
    
    html,body{
      font-family: 'Montserrat', Arial;
      
      height: 100%;
      width: 100%;
      color: #000000;
      scroll-behavior: smooth;
    }
    
    a{
        text-decoration:  none;
        color: inherit;
    }

    button {
        background-color: transparent;
        border: none ;
        outline: none ;
    }

    img, svg{
      user-select: none;
    }
`;

export default GlobalStyles;
