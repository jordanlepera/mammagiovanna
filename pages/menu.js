import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import _uniqueId from 'lodash/uniqueId';
import { useTranslation } from 'next-i18next';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
// import Chip from '@mui/material/Chip';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdExpandMore, MdArrowBack } from 'react-icons/md';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MenuSubSection from '../components/MenuSubSection';
import MenuArticle from '../components/MenuArticle';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nextConfig from '../next-i18next.config';

const pitcherWines = [
  // {
  //   'name': 'Chianti DOC',
  //   'prices': [3.8, 7.5, 14, 0]
  // },
  {
    'name': 'Lambrusco Amabile DOC',
    'prices': [4.2, 7.9, 14.5, 0]
  },
  {
    'name': 'Rosé dell\'Estate',
    'prices': [4.5, 8.2, 16.5, 22]
  },
  {
    'name': 'Sélection du chef',
    'prices': [5.2, 9.9, 18.5, 27]
  }
];

const alsacianWines = [
  {
    'name': 'Edelzwicker',
    'prices': [4, 7, 13, 0]
  },
  {
    'name': 'Pinot Noir',
    'prices': [5.1, 9.9, 17.5, 25]
  },
  {
    'name': 'Pinot Gris',
    'prices': [5.1, 9.9, 17.5, 25]
  },
  {
    'name': 'Riesling',
    'prices': [5.1, 9.9, 17.5, 25]
  },
  {
    'name': 'Muscat',
    'prices': [5.1, 9.9, 17.5, 25]
  },
  {
    'name': 'Gewurtztraminer',
    'prices': [5.1, 9.9, 17.5, 25]
  },
];

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'menu'])),
      // Will be passed to the page component as props
    },
  };
}

const Menu = () => {
  const { t } = useTranslation(['common', 'menu']);

  // eslint-disable-next-line react/prop-types
  const currentLocale = i18nextConfig.i18n.defaultLocale;

  return (
    <>
      <Head>
        <title>{t('common:menu')} - {t('common:restaurant')}</title>
      </Head>
      <Header lang={currentLocale} />
      <Body>
        <MenuTitle>{t('common:menu')}</MenuTitle>
        {/* <Section>
          <Emoji>⚠️</Emoji><br />
          {t('common:dear-customers')},<br /><br />
          {t('common:lockdown2-promotion')}<br /><br />
          {t('common:lockdown2-carte')} <br /><br />
          {t('common:lockdown2-hours')} <br />
          {t('common:lockdown2-ubereats-supp')}<br /><br />
          {t('common:lockdown2-plaiz')}<br />
          <Emoji>😇</Emoji><br />
          {t('common:lockdown2-see-u')}<br />
        </Section> */}
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:our-salade')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:caprese')} ing={t('menu:caprese-ing')} price={14.5} />
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:etoile-chef')} ing={t('menu:etoile-chef-ing')} price={15.9} />
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:salade')} price={4.5} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:planchette-apero')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <TextSection>
              {t('menu:3-persons')}
              <br />
              {t('menu:planchette-apero-ing-a')}
              <br />
              {t('menu:planchette-apero-ing-b')}
              <br />
              <Price>
                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(13.5)}
              </Price>
            </TextSection>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:menu-piccolo')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <TextSection>
              {t('menu:until-10yo')}
              <br />
              {t('menu:baby-pizza')}
              <br />
              {t('menu:or')}
              <br />
              {t('menu:baby-pasta')}
              <br />
              {t('menu:or')}
              <br />
              {t('menu:ham-french-frie')}
              <br />
              {t('menu:+1-ice-cream-ball')}
              <br />
              <Price>
                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(10)}
              </Price>
            </TextSection>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:suggestion')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <TextSection>
              {t('menu:suggestion-ing')}
            </TextSection>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:formula')}<CustomChip label={t('menu:new')} color="primary" /></SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:pasta-dessert')} price={19.7} discount={10} />
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:pizza-dessert')} price={21.8} discount={12} />
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:pasta-dessert-drink')} price={23.2} discount={12} />
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:pizza-dessert-boisson')} price={25.3} discount={14} />
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:hamburger-fries-drink')} price={18} discount={13} />
            <MenuArticle key={(_uniqueId('formula-'))} name={t('menu:hamburger-fries-drink-dessert')} price={21.5} discount={15} />
          </AccordionDetails>
        </Accordion> */}
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:pasta')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('pasta-')} name={t('menu:pasta-kind')} price={13.9}>
              {t('menu:pasta-sauce')}:
              <i>
                {/* <br />
                {t('menu:arrabbiata')} */}
                <br />
                {t('menu:bolognese')}
                <br />
                {t('menu:napolitana')}
                <br />
                {t('menu:carbonara')}
                <br />
              </i>
            </MenuArticle>
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:italian-speciality')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:risotto-truffe')} ing={t('menu:risotto-truffe-ing')} price={19.9} />
            {/* <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:lasagna')} ing={t('menu:lasagna-ing')} price={14} /> */}
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:gnocchi-melanzane')} ing={t('menu:gnocchi-melanzane-ing')} price={15.5} />
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:gnocchi-gorgonzola')} ing={t('menu:gnocchi-gorgonzola-ing')} price={15.5} />
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:tagliatelle-pesto-burrata')} ing={t('menu:tagliatelle-pesto-burrata-ing')} price={15.9} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:meat-fish')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:salmon')} ing={t('menu:salmon-ing')} price={22} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:scaloppa-valdostana')} ing={t('menu:scaloppa-valdostana-ing')} price={24} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:steak-forno')} ing={t('menu:steak-forno-ing')} price={23} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:steak-forno-vitello')} ing={t('menu:steak-forno-vitello-ing')} price={23} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:milanese')} ing={t('menu:milanese-ing')} price={23.5} />
            {/*<MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:scaloppa-crema')} ing={t('menu:scaloppa-crema-ing')} price={21} /> */}
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:beef')} ing={t('menu:beef-ing')} price={23.5} />
            {/* <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:hamburger')} ing={t('menu:hamburger-ing')} price={14.5} /> */}
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:dessert')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:tiramisu')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mousse')} ing={t('menu:mousse-ing')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:panna-cotta')} ing={t('menu:panna-cotta-ing')} price={7.5} />
            <SectionTitle>{t('menu:our-ice-cream')}</SectionTitle><br />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:ice-cream-flavor')} ing={t('menu:ice-cream-flavor-ing')} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:1-scoop')} price={3} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:2-scoop')} price={5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:3-scoop')} price={7} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:dame-blanche')} ing={t('menu:dame-blanche-ing')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:chocolat-liegeois')} ing={t('menu:chocolat-liegeois-ing')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:cafe-liegeois')} ing={t('menu:cafe-liegeois-ing')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:amarena')} ing={t('menu:amarena-ing')} price={7.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mojito')} ing={t('menu:mojito-ing')} price={8.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:sorbet-arrose')} price={8.5} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:pizza')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4formaggi')} ing={t('menu:4formaggi-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak')} ing={t('menu:pizza-steak-ing')} price={16.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak-vitello')} ing={t('menu:pizza-steak-vitello-ing')} price={16.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:gamberi')} ing={t('menu:gamberi-ing')} price={18} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:frutti-del-mare')} ing={t('menu:frutti-del-mare-ing')} price={14.9} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:diavola')} ing={t('menu:diavola-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:siciliana')} ing={t('menu:siciliana-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:mamma-giovanna')} ing={t('menu:mamma-giovanna-ing')} price={14.9} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:hawaiana')} ing={t('menu:hawaiana-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:fiorentina')} ing={t('menu:fiorentina-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:capriciosa')} ing={t('menu:capriciosa-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:margherita')} ing={t('menu:margherita-ing')} price={12} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4stagioni')} ing={t('menu:4stagioni-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:bufala')} ing={t('menu:bufala-ing')} price={15} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:napoletana')} ing={t('menu:napoletana-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:vegetariana')} ing={t('menu:vegetariana-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:1000gusti')} ing={t('menu:1000gusti-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:parmigiana')} ing={t('menu:parmigiana-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:calzone')} ing={t('menu:calzone-ing')} price={14.5} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:white-pizza')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:burratina')} ing={t('menu:burratina-ing')} price={16.5} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:al-salmone')} ing={t('menu:al-salmone-ing')} price={16.5} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:chicken')} ing={t('menu:chicken-ing')} price={14.2} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:white-bufala')} ing={t('menu:white-bufala-ing')} price={15} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:italian-wine')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuSubSection title={t('menu:red-wine')} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Lambrusco DOC'} capacity="75cl" price={16.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Primitivo Quota 29 IGT Menhir'} capacity="75cl" price={29.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Nero d\'Avola Sicilia IGT'} capacity="75cl" price={24} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Negroamaro Illivia Salento IGT L. de Castris'} capacity="75cl" price={28.5} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="37,5cl" price={14.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="75cl" price={23} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Barolo DOCG Beni di Batasiolo'} capacity="75cl" price={54} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Chianti DOCG'} capacity="75cl" price={24} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Montepulciano DOC'} capacity="75cl" price={26.9} />
            <MenuSubSection title={t('menu:white-wine')} />
            <MenuArticle key={(_uniqueId('white-wine-'))} name={'Gavi del Piemonte DOC Batasiolo'} capacity="75cl" price={29} />
            <MenuSubSection title={t('menu:rose-wine')} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="37,5cl" price={15.5} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="75cl" price={24} />
            <MenuSubSection title={t('menu:pitcher-wine')} />
            <PitcherWine wines={pitcherWines} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:french-wine')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuSubSection title={t('menu:selection-wine')} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="37,5cl" price={19.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="75cl" price={32.9} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="37,5cl" price={18.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="75cl" price={29.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Vacqueyras AOC'} capacity="75cl" price={31} />
            <MenuSubSection title={t('menu:alsacian-wine')} />
            <PitcherWine wines={alsacianWines} />
          </AccordionDetails>
        </Accordion>
        <Accordion style={{ width: '90%', margin: '16px 5%' }}>
          <CustomAccordionSummary
            expandIcon={<ExpandIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <SectionTitle>{t('menu:drink')}</SectionTitle>
          </CustomAccordionSummary>
          <AccordionDetails style={{ display: 'block' }}>
            <MenuSubSection title={t('menu:aperitif')} />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:aperitif-maison')} price={6.5} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pastis')} price={4.9} capacity="2cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:campari')} price={6.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:kir-royal')} price={7.9} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:alsacian-kir')} price={5.5} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:picon')} price={4.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:suze')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:moretti')} price={4.8} capacity="33cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pelfort')} price={3.8} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pelfort')} price={6.8} capacity="50cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:fischer')} price={4.1} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:fischer')} price={7.9} capacity="50cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:amer')} price={4.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:martini')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:porto')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:gin')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:prosecco')} price={6} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:spritz')} ing={t('menu:spritz-ing')} price={8.5} capacity="18cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:whisky-coca')} price={8.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:vodka')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:malibu')} price={7} capacity="4cl" />
            <MenuSubSection title={t('menu:digestive')} />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:vodka')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:baby')} price={5.5} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:baileys')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:rhum')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:whisky-jb')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:whisky-jack')} price={8.3} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:cognac')} price={7} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:eau-de-vie')} price={7.5} ing={t('menu:eau-de-vie-ing')} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:get27')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:amaretto')} price={7} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:grappa')} price={7} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:sambuca')} price={7} capacity="3cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:limoncello')} price={6.5} capacity="3cl" />
            <MenuSubSection title={t('menu:soft-drink')} />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:lisbeth')} price={3.8} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:lisbeth')} price={4.9} capacity="1L" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:san-pellegrino')} price={3.9} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:san-pellegrino')} price={5.2} capacity="1L" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:perrier')} price={4.1} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:limonade')} price={2.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:pom-lisbeth')} price={4.1} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:coca')} price={4.1} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:orangina')} price={4.1} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:schweppes-tonic')} price={4.1} capacity="20cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:ice-tea')} price={4.1} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:cristalline')} price={2.9} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:schweppes-agrumes')} price={4.1} capacity="20cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:syrups')} price={2.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:diabolo')} price={3.4} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:nectar')} ing={t('menu:nectar-ing')} price={4.1} capacity="20cl" />
            <MenuSubSection title={t('menu:hot-drink')} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee')} price={2.3} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee-cream')} price={2.4} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:grand-coffee')} price={3.3} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:grand-coffee-cream')} price={3.5} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee-chantilly')} price={4.5} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:infusion')} ing={t('menu:infusion-ing')} price={3.2} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:irish-coffee')} price={9.5} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:italian-coffee')} price={9.5} />
          </AccordionDetails>
        </Accordion>
        <ImportantNote>{t('menu:suppl-couvert')}</ImportantNote>
        <LegalMention>{t('menu:mention')}</LegalMention>
      </Body>
      <Footer />
    </>
  );
};

const ExpandIcon = styled(MdExpandMore)(
  ({ theme }) => `
  font-size: 3rem;
  color: white;
`,
);

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => `
  background-color: #918063;
`,
);

// const CustomChip = styled(Chip)`
//   margin-left: 10px;
// `;

const ImportantNote = styled('div')`
  margin: 40px;
  text-align: center;
  font-size: 1.3em;
  font-weight: 600;
  color: tomato;
`;

const LegalMention = styled('div')`
  margin: 40px;
  text-align: center;
  white-space: pre-line;
`;

const SectionTitle = styled(Typography)(({ theme }) => `
  width: 100%;
  color: white;
  margin: 0 10px;
  font-weight: 600;
  font-size: 2.5em;
  @media (max-width: 600px) {
    font-size: 1.5em;
  }
  @media (min-width: 601px) and (max-width: 1199px) {
    font-size: 2em;
  }
`,
);

// const Emoji = styled('span')`
//   font-size: 3em;
// `;

// const Section = styled('div')`
//   font-size: 1.1em;
//   text-align: center;
//   font-weight: bold;
//   color: white;
//   width: 90%;
//   margin: 20px 5%;
//   border-radius: 30px;
//   background-color: tomato;
//   padding: 30px;
//   border: 3px solid lightcoral;
// `;

const TextSection = styled('div')`
  font-size: 2em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (min-width: 601px) and (max-width: 1199px) {
    font-size: 1.5em;
  }
`;

const Price = styled('div')`
  font-size: 1em;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  margin-top: 20px;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) and (min-width: 600px) {
    font-size: 1.5em;
  }
`;

const MenuTitle = styled('div')`
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

const PitcherWine = (props) => {
  const { wines } = props;
  const { t } = useTranslation();
  // const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: '414px' }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Verre (12cl)</TableCell>
              <TableCell>25cl</TableCell>
              <TableCell>50cl</TableCell>
              <TableCell>75cl</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wines.map(wine => {
              return (
                <TableRow key={_uniqueId('array-line-')}>
                  <TableCell>{wine.name}</TableCell>
                  <TableCell>{wine.prices[0] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[0]) : ' '}</TableCell>
                  <TableCell>{wine.prices[1] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[1]) : ' '}</TableCell>
                  <TableCell>{wine.prices[2] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[2]) : ' '}</TableCell>
                  <TableCell>{wine.prices[3] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[3]) : ' '}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <SwipeLeft>
        <table>
          <tbody>
            <tr>
              <td><MdArrowBack style={{ fontSize: 40 }} /></td>
              <td>{t('menu:swipe-left')}</td>
            </tr>
          </tbody>
        </table>
      </SwipeLeft>
    </>
  );
};

PitcherWine.defaultProps = {
  wines: []
};

PitcherWine.propTypes = {
  wines: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      prices: PropTypes.arrayOf(PropTypes.number).isRequired
    }),
  )
};

// Menu.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'menu'],
// });

// const useStyles = makeStyles({
//   table: {
//     minWidth: 414,
//   },
// });

// const StyledTableCell = styledBis(TableCell)(
//   ({ theme }) => `
//   head: {
//     backgroundColor: ${theme.palette.common.black},
//     color: ${theme.palette.common.white},
//   },
//   body: {
//     fontSize: 14,
//   },
// `,
// );

// const StyledTableRow = styledBis(TableRow)((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }));

const SwipeLeft = styled('div')`
  visibility: hidden;
  @media (max-width: 600px) {
    visibility: visible;
    margin: 10px 0px;
  }
`;

export default Menu;