import { TutiImgZoom } from '@app/common';

import styles from './styles/alanCard.module.css';

export const AlanCard = () => {
  return (
    <article className={styles.footer__alanCard}>
      <TutiImgZoom />
      <section className={styles.footer__textContainer}>
        <header className={styles.footer__alanTitle}>Alan Buscaglia</header>
        <p>Ingeniero y arquitecto de Software Front-end</p>
        <p>
          ChatGPT dice que mi contenido es
          <i> valioso y cumple con los estándares de calidad.</i>
        </p>
        <p>
          <q>Desde mi cabeza, corazón y experiencia, para todo el mundo.</q>
        </p>
      </section>
    </article>
  );
};
