import Head from 'next/head';
import App from '../components/App';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/pageLayout.module.scss'; // Import your custom SASS styles

function IndexPage() {
  return (
    <div className={styles.customContainer}>
      <Head>
        <meta charSet="utf-8" />
        <title>THE POKEDECKS - THE POKEMON GO CHARACTER CARD SITE</title>
      </Head>
      <main className={styles.customMain}>
        <App />
      </main>
      <footer className={styles.customFooter}>
        <Footer />
      </footer>
    </div>
  );
}

export default IndexPage;