import { createGlobalStyle } from 'styled-components';

import * as mixin from './mixin';

export const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        ${mixin.mobile(`
            font-size: 10px;
        `)}
        ${mixin.tablet(`
            font-size: 11px;
        `)}
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    * {
        box-sizing: border-box;
    }
`;
