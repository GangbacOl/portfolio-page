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
                <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Helmet>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
