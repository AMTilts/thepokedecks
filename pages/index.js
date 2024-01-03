import Head from 'next/head';
import Navbar from '../components/Navbar';
import NavbarSearch from '../components/NavbarSearch';
import App from '../components/App';
import Footer from '../components/Footer';
import styles from '../styles/pageLayout.module.scss'; // Import your custom SASS styles

function IndexPage() {
  return (
    <div className={styles.customContainer}>
      <Head>
        <meta charSet="utf-8" />
        <title>PokeDex Desticles</title>
      </Head>
      <header className={styles.customHeader}>
        <Navbar className={styles.navbarMain} />
        <NavbarSearch className={styles.navbarSearch} style={{width: '100vw', height: '30px', border: '10px black', borderStyle: 'solid none'}}/>
      </header>
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