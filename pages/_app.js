import { PiPriceProvider } from '../context/PiPriceContext';

function MyApp({ Component, pageProps }) {
  return (
    <PiPriceProvider>
      <Component {...pageProps} />
    </PiPriceProvider>
  );
}

export default MyApp;
