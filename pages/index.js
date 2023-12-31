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
      <header className={styles.customHeader} style={{display: 'inline-flex', flexDirection: 'column', width: '100vw', height: 'auto', borderTopWidth: '10px', borderBottomWidth: '10px', borderColor: 'black'}}>
        <Navbar className={styles.navbarMain} style={{width: '100vw', height: '30px', borderTopWidth: '10px', borderBottomWidth: '10px', borderColor: 'black'}} />
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