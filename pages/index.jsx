import Head from "next/head";
import styles from "../styles/Home.module.css";

import imgFactura from "../public/images/factura.jpeg";

//carga de componentes
import Menu from "../components/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section section-factura">
          <h1 className="title has-text-centered is-sisze-6-nobile is-size-5-tablet is-size-4 has-text-grey-dark">
            Guia descriptiva de la factura de recibo de luz de Nicaragua
          </h1>
          <div className="container container-factura">
            <div className="columns">
              <div className="column is-2">
                <Menu />
              </div>
              <div className="column">
                <figure className="image-fact">
                  <img src={imgFactura} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
