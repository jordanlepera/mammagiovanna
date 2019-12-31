import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import _uniqueId from 'lodash/uniqueId';
import MenuSection from '../components/MenuSection';
import MenuArticle from '../components/MenuArticle';
import { withTranslation } from '../i18n';

const Menu = ({ t }) => {

  const antipasti = [
    {
      name: t('menu:carpaccio-polipo'),
      ing: t('menu:carpaccio-polipo-ing'),
      price: 12
    },
    {
      name: t('menu:bresaola'),
      ing: t('menu:bresaola-ing'),
      price: 14
    }
  ];

  const Antipasti = antipasti.map(elem => {
    return <MenuArticle key={_uniqueId('antipasti-')} name={elem.name} ing={elem.ing} price={elem.price} />;
  });

  return (
    <>
      <Head>
        <title>{t('common:menu')} - {t('common:restaurant')}</title>
      </Head>
      <MenuSection title={t('menu:antipasti')}>
        {/* <Antipasti /> */}
        <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:carpaccio-polipo')} ing={t('menu:carpaccio-polipo-ing')} price={12} />
        <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:bresaola')} ing={t('menu:bresaola-ing')} price={14} />
        <MenuArticle key={_uniqueId('antipasti-')} name={t('menu:vitello')} ing={t('menu:vitello-ing')} price={12.5} />
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
        <MenuArticle key={_uniqueId('primo-')} name={t('menu:fritto-misto')} ing={t('menu:fritto-misto-ing')} price={14} />
        <MenuArticle key={_uniqueId('primo-')} name={t('menu:risotto-gamberi')} ing={t('menu:risotto-gamberi-ing')} price={17} />
        <MenuArticle key={_uniqueId('primo-')} name={t('menu:gnocchi-sorentina')} ing={t('menu:gnocchi-sorentina-ing')} price={15} />
        <MenuArticle key={_uniqueId('primo-')} name={t('menu:gnocchi-gorgonzola')} ing={t('menu:gnocchi-gorgonzola-ing')} price={15.5} />
      </MenuSection>
      <MenuSection title={t('menu:secondo')}>
        <MenuArticle key={_uniqueId('secondo-')} name={t('menu:salmon')} ing={t('menu:salmon-ing')} price={18} />
        <MenuArticle key={_uniqueId('secondo-')} name={t('menu:shrimp')} ing={t('menu:shrimp-ing')} price={18.5} />
        <MenuArticle key={_uniqueId('secondo-')} name={t('menu:beef')} ing={t('menu:beef-ing')} price={19.5} />
      </MenuSection>
      <MenuSection title={t('menu:dessert')}>
        <MenuArticle key={_uniqueId('dessert-')} name={t('menu:tiramisu')} price={6.8} />
        <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mille-feuille')} ing={t('menu:mille-feuille-ing')} price={6.8} />
        <MenuArticle key={_uniqueId('dessert-')} name={t('menu:panna-cotta')} ing={t('menu:panna-cotta-ing')} price={6.8} />
      </MenuSection>
      <MenuSection title={t('menu:pizza')}>
        <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4formaggi')} ing={t('menu:4formaggi-ing')} price={12.5} />
        <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak')} ing={t('menu:pizza-steak-ing')} price={15} />
        <MenuArticle key={_uniqueId('pizza-')} name={t('menu:gamberi')} ing={t('menu:gamberi-ing')} price={15} />
        <MenuArticle key={_uniqueId('pizza-')} name={t('menu:frutti-del-mare')} ing={t('menu:frutti-del-mare-ing')} price={12.8} />
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
        <MenuArticle key={_uniqueId('pizza-')} name={t('menu:calzone')} ing={t('menu:calzone-ing')} price={12.8} />
      </MenuSection>
      <MenuSection title={t('menu:white-pizza')}>
        <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:burratina')} ing={t('menu:burratina-ing')} price={15.9} />
        <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:al-salmone')} ing={t('menu:al-salmone-ing')} price={15} />
        <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:chicken')} ing={t('menu:chicken-ing')} price={12.8} />
        <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:white-bufala')} ing={t('menu:white-bufala-ing')} price={13.5} />
      </MenuSection>
    </>
  );
};

Menu.getInitialProps = async () => ({
  namespacesRequired: ['common', 'menu'],
});

Menu.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'menu'])(Menu);