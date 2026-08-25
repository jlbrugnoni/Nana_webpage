import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import UnderConstruction from '@/components/UnderConstruction';
import { siteFeatures } from '@/config/site';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  if (siteFeatures.underConstruction) {
    return <UnderConstruction />;
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
