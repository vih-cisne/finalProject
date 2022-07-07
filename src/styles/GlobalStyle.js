import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 

    :root{
        --primary-color: #F57C00;
        --secondary-color: #FFB886;

        --filter-color: #FFB162;
        --hover-color: #FF6B09;

        --grey-0: #000000;
        --grey-1: #737373;
        --grey-yellow: #baae9c;

        --white-0: #ffffff;
    }

    * {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat';
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style-type: none;
    }

    button{
        cursor: pointer;
    }
    a {
        color: var(--primary-color);
        font-weight: 900;
        text-decoration: none;
    }
`;
