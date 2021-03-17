const breakpointMobile = 425;
const breakpointTablet = 1024;

export const mobileTablet = (content) =>
    `@media only screen and (max-width:${breakpointTablet}px){
        ${content}
    }`;

export const mobile = (content) =>
    `@media only screen and (max-width: ${breakpointMobile}px) {
        ${content}
    }`;

export const tablet = (content) =>
    `@media only screen and (min-width: ${breakpointMobile + 1}px) and (max-width:${breakpointTablet}px) {
        ${content}
    }`;
