import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const demoImages = [
  {
    title: 'Home example',
    imageUrl: 'img/example-home.png',
  },
  {
    title: 'Buttons example',
    imageUrl: 'img/example-buttons.png',
  },
  {
    title: 'Text input example',
    imageUrl: 'img/example-text-input.png',
  },
];

function DemoImage({ imageUrl, title }) {
  const imgUrl = useBaseUrl(imageUrl);

  return <img src={imgUrl} alt={title} className={styles.demoImage} />;
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={siteConfig.title}
      description='Description will go into a meta tag in <head />'
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className='container'>
          <h1 className='hero__title'>{siteConfig.title}</h1>
          <p className='hero__subtitle'>{siteConfig.tagline}</p>
          <p>
            <Link to='https://react95.io/' className={styles.snackLink}>
              Try the demo on Snack
            </Link>
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.mainButton,
              )}
              to={useBaseUrl('docs/')}
            >
              Get Started
            </Link>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.mainButton,
              )}
              href='https://github.com/react95-io/react95-native'
            >
              Github
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.demoImagesContainer}>
        {demoImages.map(({ title, imageUrl }) => (
          <DemoImage key={imageUrl} title={title} imageUrl={imageUrl} />
        ))}
      </main>
    </Layout>
  );
}

export default Home;
