import MainLayout from '@layout/MainLayout';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainLayout />
    </>
  );<Component {...pageProps} />;
}

export default MyApp;
