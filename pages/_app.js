import Head from 'next/head';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Xwiftrx AI</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Xwiftrx AI is the next-generation memecoin, powered by advanced AI technologies. Join us in redefining the crypto space with innovation and community-driven growth."
      />
      <meta
        name="keywords"
        content="Xwiftrx, AI memecoin, crypto, blockchain, decentralized, cryptocurrency, next-gen tokens, memecoin AI"
      />
      <meta name="author" content="Xwiftrx Team" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Xwiftrx AI" />
      <meta
        property="og:description"
        content="Discover Xwiftrx AI, the cutting-edge memecoin merging AI technology with blockchain innovation. Explore the future of decentralized finance."
      />
      <meta property="og:image" content="/xwai.png" />
      <meta property="og:url" content="https://www.xwiftrx-ai.vercel.app" />
      <meta property="og:site_name" content="Xwiftrx AI" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Xwiftrx AI" />
      <meta
        name="twitter:description"
        content="Xwiftrx AI combines advanced AI with the decentralized world of memecoins. Experience innovation and growth together."
      />
      <meta name="twitter:image" content="/xwai.png" />
      <meta name="twitter:site" content="@XwiftrxAi" />
      <meta name="twitter:creator" content="@XwiftrxAi" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Fonts */}
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />

      {/* Canonical Link */}
      <link rel="canonical" href="https://www.xwiftrx-ai.vercel.app" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
