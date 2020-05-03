import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import _uniqueId from 'lodash/uniqueId';
import useTranslation from 'next-translate/useTranslation';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import MenuArticle from '../components/MenuArticle';

const Menu = () => {
  const { t, lang } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:menu')} - {t('common:restaurant')}</title>
      </Head>
      <Header lang={lang.toString()} />
      <Body>
        <MenuTitle>{t('common:menu')}</MenuTitle>
        <Section>
          <Emoji>⚠️</Emoji><br />
          {t('common:dear-customers')},<br /><br />
          {t('common:only-to-take-away')}.<br />
          {t('common:delivery')}.<br /><br />
          {t('common:menu-adapted')}.<br /><br />
          {t('common:contact-us')} !<br /><br />
          {t('common:thanks')} !<br />
          <Emoji>😋🍕</Emoji><br /><br />
          {t('common:the-board')}.
        </Section>
        {/* <MenuSection title={t('menu:antipasti')}>
          <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:caprese')} ing={t('menu:caprese-ing')} price={13} />
          <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:bruschetta')} ing={t('menu:bruschetta-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:bresaola')} ing={t('menu:bresaola-ing')} price={14} />
        </MenuSection>
        <MenuSection title={t('menu:pasta')}>
          <MenuArticle key={_uniqueId('pasta-')} name={t('menu:pasta-kind')} price={12.9}>
            {t('menu:pasta-sauce')}:
            <i>
              <br />
              {t('menu:arrabbiata')}
              <br />
              {t('menu:bolognese')}
              <br />
              {t('menu:napolitana')}
              <br />
              {t('menu:carbonara')}
              <br />
            </i>
          </MenuArticle>
        </MenuSection>
        <MenuSection title={t('menu:primo')}>
          <MenuArticle key={_uniqueId('primo-')} name={t('menu:risotto-gamberi-funghi')} ing={t('menu:risotto-gamberi-funghi-ing')} price={18.5} />
          <MenuArticle key={_uniqueId('primo-')} name={t('menu:gnocchi-sorentina')} ing={t('menu:gnocchi-sorentina-ing')} price={15} />
          <MenuArticle key={_uniqueId('primo-')} name={t('menu:gnocchi-gorgonzola')} ing={t('menu:gnocchi-gorgonzola-ing')} price={15.5} />
        </MenuSection>
        <MenuSection title={t('menu:secondo')}>
          <MenuArticle key={_uniqueId('secondo-')} name={t('menu:salmon')} ing={t('menu:salmon-ing')} price={18} />
          <MenuArticle key={_uniqueId('secondo-')} name={t('menu:steak-forno')} ing={t('menu:steak-forno-ing')} price={20} />
          <MenuArticle key={_uniqueId('secondo-')} name={t('menu:scaloppa-valdostana')} ing={t('menu:scaloppa-valdostana-ing')} price={21.5} />
          <MenuArticle key={_uniqueId('secondo-')} name={t('menu:beef')} ing={t('menu:beef-ing')} price={19.5} />
          <MenuArticle key={_uniqueId('secondo-')} name={t('menu:polpette')} ing={t('menu:polpette-ing')} price={16.9} />
        </MenuSection>
        <MenuSection title={t('menu:dessert')}>
          <MenuArticle key={_uniqueId('dessert-')} name={t('menu:tiramisu')} price={6.8} />
          <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mille-feuille')} ing={t('menu:mille-feuille-ing')} price={6.8} />
          <MenuArticle key={_uniqueId('dessert-')} name={t('menu:panna-cotta')} ing={t('menu:panna-cotta-ing')} price={6.8} />
        </MenuSection> */}
        <MenuSection title={t('menu:pizza')}>
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4formaggi')} ing={t('menu:4formaggi-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak')} ing={t('menu:pizza-steak-ing')} price={15} />
          {/* <MenuArticle key={_uniqueId('pizza-')} name={t('menu:gamberi')} ing={t('menu:gamberi-ing')} price={15} /> */}
          {/* <MenuArticle key={_uniqueId('pizza-')} name={t('menu:frutti-del-mare')} ing={t('menu:frutti-del-mare-ing')} price={12.8} /> */}
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:diavola')} ing={t('menu:diavola-ing')} price={12.8} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:siciliana')} ing={t('menu:siciliana-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:mamma-giovanna')} ing={t('menu:mamma-giovanna-ing')} price={13.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:hawaiana')} ing={t('menu:hawaiana-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:fiorentina')} ing={t('menu:fiorentina-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:capriciosa')} ing={t('menu:capriciosa-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:margherita')} ing={t('menu:margherita-ing')} price={10.7} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4stagioni')} ing={t('menu:4stagioni-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:bufala')} ing={t('menu:bufala-ing')} price={13.8} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:napoletana')} ing={t('menu:napoletana-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:vegetariana')} ing={t('menu:vegetariana-ing')} price={12.5} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:1000gusti')} ing={t('menu:1000gusti-ing')} price={12.8} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:parmigiana')} ing={t('menu:parmigiana-ing')} price={12.8} />
          <MenuArticle key={_uniqueId('pizza-')} name={t('menu:calzone')} ing={t('menu:calzone-ing')} price={12.8} />
        </MenuSection>
        <MenuSection title={t('menu:white-pizza')}>
          <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:burratina')} ing={t('menu:burratina-ing')} price={15.9} />
          {/* <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:al-salmone')} ing={t('menu:al-salmone-ing')} price={15} />*/}
          <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:chicken')} ing={t('menu:chicken-ing')} price={12.8} />
          <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:white-bufala')} ing={t('menu:white-bufala-ing')} price={13.5} />
        </MenuSection>
      </Body>
      <Footer />
    </>
  );
};

const Emoji = styled.span`
  font-size: 3em;
`;

const Section = styled.div`
  font-size: 1.5em;
  text-align: center;
  font-weight: bold;
  color: white;
  width: 90%;
  margin: 20px 5%;
  border-radius: 30px;
  background-color: tomato;
  padding: 30px;
  border: 3px solid lightcoral;
`;

const MenuTitle = styled.div`
  font-size: 10em;
  font-family: 'Monoton', cursive;
  text-align: center;
  margin-top: 30px;
  color: #3D3D3D;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 4em;
  }
`;

export default Menu;