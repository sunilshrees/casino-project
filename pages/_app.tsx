import { useEffect } from 'react';
import '../styles/globals.css';
import Head from 'next/head';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        console.error = () => {};
        console.log = () => {};
    }, []);

    return (
        <>
            <Head>
                <title>Casino : A Gambling Website</title>
            </Head>

            <Layout>
                <Component {...pageProps} />
            </Layout>
            <link
                href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css"
                rel="stylesheet"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"
            />
        </>
    );
}

export default MyApp;
