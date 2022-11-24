import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root{

--background: #A52A2A;
--brown: #800000;
--blue: #99FFFF;
--red: #FF0000;
--green: #0DF233;
}

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    body{

      background: var(--background);

    }
`
