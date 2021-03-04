import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import SiteLayout from '../components/common/SiteLayout';
import '../styles/fonts.css';

/**
 * A wrapper for the root website component.
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}
