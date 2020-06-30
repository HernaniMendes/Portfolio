import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  
  *{
    margin : 0;
    padding : 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background:white;
    -webkit-font-smoothing: antialiased;
    font: 14px Roboto, sans-serif;
  }

  

  li{
    list-style-type: none;
    cursor:pointer;

  }
  
`;
