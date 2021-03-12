import { GlobalStyle } from '../styles/globalStyle';
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>GangbacOl Portfolio</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
