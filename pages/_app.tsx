import { AppProps } from 'next/app';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import { Cairo } from 'next/font/google';

const cairoFont = Cairo({
  display: 'swap',
  fallback: ['arial', 'system-ui'],
  variable: '--cairo-font',
  subsets: ['arabic', 'latin', 'latin-ext'],
});

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>كتب مستعملة</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <div className={cairoFont.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default trpc.withTRPC(App);
