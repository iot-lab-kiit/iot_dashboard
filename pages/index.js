import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>IoT Lab KiiT</title>

                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <meta
                    name='description'
                    content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
                ></meta>
                <meta property='og:type' content='website'></meta>
                <meta property='og:url' content='https://iotkiit.in'></meta>
                <meta property='og:title' content='IoT Lab KiiT'></meta>
                <meta
                    property='og:description'
                    content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
                ></meta>
                <meta
                    property='og:image'
                    content='/images/logo_small.webp'
                ></meta>

                <meta
                    property='twitter:card'
                    content='summary_large_image'
                ></meta>
                <meta
                    property='twitter:url'
                    content='https://iotkiit.in'
                ></meta>
                <meta property='twitter:title' content='IoT Lab KiiT'></meta>
                <meta
                    property='twitter:description'
                    content='IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions.'
                ></meta>
                <meta
                    property='twitter:image'
                    content='/images/logo_small.webp'
                ></meta>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href='https://iotkiit.in'>IoT Lab KiiT</a>
                </h1>
            </main>
        </div>
    );
}
