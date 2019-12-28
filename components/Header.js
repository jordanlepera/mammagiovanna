import React from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Banner from './Banner';

const Header = () => {
  return (
    <>
      <Head>
        <base href="./" />
        <link data-react-helmet="true" rel="icon" href="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media" />
        <meta name="description" content="Restaurant Mamma Giovanna à Colmar. Venez déguster nos délicieuses pizzas et nos authentiques spécialités italiennes."></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Banner />
    </>
  );
};

export default Header;