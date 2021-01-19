import Head from "next/head";
import styles from "../styles/Home.module.css";
import {useState} from 'react'
import shortenURL from "../util/shortenURL"

export default function Home() {
  const [value, setValue] = useState(null)
  return (
    <div className={styles.container}>
      <Head>
        <title>url-shortner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.nav}>
          <div>
            <ul className={styles.nav_list}>
              <li>
                <img src="/logo.svg" alt="Logo" className={styles.logo_top} />{" "}
              </li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className={styles.btn}>
            <button className={styles.btn_gray}>Login</button>
            <button className={styles.btn_green}> Sign Up</button>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.hero}>
          <div>
            <h1 className={styles.title}>More than just shorter links</h1>
            <p className={styles.description}>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className={styles.btn_white}>Get Started</button>
          </div>
          <div>
            <img
              src="/illustration-working.svg"
              alt="working"
              className={styles.logo_hero}
            />
          </div>
        </div>
        <div className={styles.short}>
          <input
            // defaultValue="Shorten a link here"
            value={value}
            placeholder="Shorten a link here"
            id="link_shortner"
            className={styles.input}
            type="search"
            onChange={(e)=> setValue(e.target.value)}
            
          ></input>
          <button className={styles.btn_shorten}
          onClick={()=> shortenURL(value)}>Shorten It!</button>
        </div>
        <div className={styles.features}>
          <h2>Advanced Statistics</h2>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
          <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don’t 
  mean a thing. Branded links help instil confidence in your content.</p>
          </div>

          <div className={styles.card}>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where 
  people engage with your content helps inform better decisions.</p>
          </div>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3> Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable 
  links, supercharging audience engagement.</p>
          </a>

          
        </div>
        </div>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/logo.svg" alt="shortly Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
