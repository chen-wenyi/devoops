import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';

import Card from '../components/Card';
import { cards } from '../data/card';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className='container'>
        <Heading as='h1' className='hero__title'>
          <span className={styles.heroTitle}>{siteConfig.title}</span>
        </Heading>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description='Description will go into a meta tag in <head />'
    >
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
        <div className={styles.cardContainer}>
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>
      </main>
    </Layout>
  );
}
