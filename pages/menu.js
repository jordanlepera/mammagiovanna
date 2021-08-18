import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';
import _uniqueId from 'lodash/uniqueId';
import { i18n, useTranslation } from '../i18n';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import Chip from '@material-ui/core/Chip';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Header from '../components/Header';
import Body from '../components/Body';
import Footer from '../components/Footer';
import MenuSubSection from '../components/MenuSubSection';
import MenuArticle from '../components/MenuArticle';
import ArrowBack from '@material-ui/icons/ArrowBack';

const pitcherWines = [
  {
    'name': 'Chianti DOC',
    'prices': [3.8, 7.5, 14, 0]
  },
  {
    'name': 'Lambrusco Amabile DOC',
    'prices': [3.1, 6, 11, 0]
  },
  {
    'name': 'Rosé d\'été',
    'prices': [3.6, 6.9, 13, 18]
  },
  {
    'name': 'Sélection du chef',
    'prices': [4.9, 9.2, 17, 26]
  }
];

const alsacianWines = [
  {
    'name': 'Edelzwicker Gross',
    'prices': [2.5, 4.5, 8, 0]
  },
  {
    'name': 'Pinot Noir Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Pinot Gris Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Riesling Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Muscat Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
  {
    'name': 'Gewurtztraminer Bio Gross',
    'prices': [4.1, 8.1, 14.9, 23]
  },
];

const Menu = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:menu')} - {t('common:restaurant')}</title>
      </Head>
      <Header lang={i18n.language} />
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
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:bresaola')} ing={t('menu:bresaola-ing')} price={13.5} />
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:etoile-chef')} ing={t('menu:etoile-chef-ing')} price={14.9} />
            <MenuArticle key={_uniqueId('our-salade-')} name={t('menu:salade')} price={3.5} />
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
                {new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(8)}
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
            <MenuArticle key={_uniqueId('pasta-')} name={t('menu:pasta-kind')} price={12.9}>
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
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:risotto-truffe')} ing={t('menu:risotto-truffe-ing')} price={18.5} />
            {/* <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:lasagna')} ing={t('menu:lasagna-ing')} price={14} /> */}
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:gnocchi-melanzane')} ing={t('menu:gnocchi-melanzane-ing')} price={14.5} />
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:gnocchi-gorgonzola')} ing={t('menu:gnocchi-gorgonzola-ing')} price={14.5} />
            <MenuArticle key={_uniqueId('italian-speciality-')} name={t('menu:tagliatelle-pesto-burrata')} ing={t('menu:tagliatelle-pesto-burrata-ing')} price={14.5} />
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
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:salmon')} ing={t('menu:salmon-ing')} price={18} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:scaloppa-valdostana')} ing={t('menu:scaloppa-valdostana-ing')} price={22} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:steak-forno')} ing={t('menu:steak-forno-ing')} price={21} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:steak-forno-vitello')} ing={t('menu:steak-forno-vitello-ing')} price={21} />
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:milanese')} ing={t('menu:milanese-ing')} price={21} />
            {/*<MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:scaloppa-crema')} ing={t('menu:scaloppa-crema-ing')} price={21} /> */}
            <MenuArticle key={_uniqueId('meat-fish-')} name={t('menu:beef')} ing={t('menu:beef-ing')} price={19.5} />
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
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:tiramisu')} price={6.8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mousse')} ing={t('menu:mousse-ing')} price={6.8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:panna-cotta')} ing={t('menu:panna-cotta-ing')} price={6.8} />
            <SectionTitle>{t('menu:our-ice-cream')}</SectionTitle><br />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:ice-cream-flavor')} ing={t('menu:ice-cream-flavor-ing')} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:1-scoop')} price={2.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:2-scoop')} price={4.5} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:3-scoop')} price={6.0} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:dame-blanche')} ing={t('menu:dame-blanche-ing')} price={6.8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:chocolat-liegeois')} ing={t('menu:chocolat-liegeois-ing')} price={6.8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:cafe-liegeois')} ing={t('menu:cafe-liegeois-ing')} price={6.8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:amarena')} ing={t('menu:amarena-ing')} price={7} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:mojito')} ing={t('menu:mojito-ing')} price={8} />
            <MenuArticle key={_uniqueId('dessert-')} name={t('menu:sorbet-arrose')} price={8} />
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
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:4formaggi')} ing={t('menu:4formaggi-ing')} price={12.5} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak')} ing={t('menu:pizza-steak-ing')} price={15} />
            <MenuArticle key={_uniqueId('pizza-')} name={t('menu:pizza-steak-vitello')} ing={t('menu:pizza-steak-vitello-ing')} price={15} />
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
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:burratina')} ing={t('menu:burratina-ing')} price={15.9} />
            {/* <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:al-salmone')} ing={t('menu:al-salmone-ing')} price={15} /> */}
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:chicken')} ing={t('menu:chicken-ing')} price={12.8} />
            <MenuArticle key={_uniqueId('white-pizza-')} name={t('menu:white-bufala')} ing={t('menu:white-bufala-ing')} price={13.5} />
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
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Lambrusco DOC'} capacity="75cl" price={15.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Primitivo Quota 29 IGT Menhir'} capacity="75cl" price={29.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Nero d\'Avola Sicilia IGT'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Negroamaro Illivia Salento IGT L. de Castris'} capacity="75cl" price={26.5} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="37,5cl" price={13.9} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Valpolicella DOC D. V. Negrar'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Barolo DOCG Beni di Batasiolo'} capacity="75cl" price={48} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Chianti DOCG'} capacity="75cl" price={21} />
            <MenuArticle key={(_uniqueId('red-wine-'))} name={'Montepulciano DOC'} capacity="75cl" price={24.9} />
            <MenuSubSection title={t('menu:white-wine')} />
            <MenuArticle key={(_uniqueId('white-wine-'))} name={'Gavi del Piemonte DOC Batasiolo'} capacity="75cl" price={26} />
            <MenuSubSection title={t('menu:rose-wine')} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="37,5cl" price={13.5} />
            <MenuArticle key={(_uniqueId('rose-wine-'))} name={'Bardolino Chiar. DOC D. V. Negrar'} capacity="75cl" price={21} />
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
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="37,5cl" price={16.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Bordeaux Saint-Emilion AOC'} capacity="75cl" price={29.9} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="37,5cl" price={15.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Brouilly Briante AOC'} capacity="75cl" price={25.5} />
            <MenuArticle key={(_uniqueId('selection-wine-'))} name={'Vacqueyras AOC'} capacity="75cl" price={25} />
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
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:aperitif-maison')} price={4.9} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pastis')} price={3.5} capacity="2cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:campari')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:kir-royal')} price={6.5} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:alsacian-kir')} price={3.9} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:picon')} price={3.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:suze')} price={3.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pelfort')} price={3.5} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:pelfort')} price={6.5} capacity="50cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:fischer')} price={3.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:fischer')} price={7.5} capacity="50cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:amer')} price={3.9} capacity="25cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:martini')} price={3.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:porto')} price={3.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:gin')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:prosecco')} price={4.9} capacity="12cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:spritz')} ing={t('menu:spritz-ing')} price={6.8} capacity="18cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:whisky-coca')} price={6.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:vodka')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('aperitif-')} name={t('menu:malibu')} price={5.5} capacity="4cl" />
            <MenuSubSection title={t('menu:digestive')} />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:vodka')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:baby')} price={3.5} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:baileys')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:rhum')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:whisky-jb')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:whisky-jack')} price={6.9} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:cognac')} price={6.5} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:eau-de-vie')} price={6.5} ing={t('menu:eau-de-vie-ing')} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:get27')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:amaretto')} price={5.5} capacity="4cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:grappa')} price={6} capacity="2cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:sambuca')} price={5.5} capacity="3cl" />
            <MenuArticle key={_uniqueId('digestive-')} name={t('menu:limoncello')} price={5.5} capacity="3cl" />
            <MenuSubSection title={t('menu:soft-drink')} />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:lisbeth')} price={3} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:lisbeth')} price={4.5} capacity="1L" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:san-pellegrino')} price={3.5} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:san-pellegrino')} price={4.9} capacity="1L" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:perrier')} price={3.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:limonade')} price={2.5} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:pom-lisbeth')} price={3.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:coca')} price={3.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:orangina')} price={3.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:schweppes-tonic')} price={3.5} capacity="20cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:ice-tea')} price={3.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:cristalline')} price={2.9} capacity="50cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:moretti')} price={4.5} capacity="33cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:schweppes-agrumes')} price={3.5} capacity="20cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:syrups')} price={2.5} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:diabolo')} price={2.8} capacity="25cl" />
            <MenuArticle key={_uniqueId('soft-drink-')} name={t('menu:nectar')} ing={t('menu:nectar-ing')} price={3.5} capacity="20cl" />
            <MenuSubSection title={t('menu:hot-drink')} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee')} price={2.1} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee-cream')} price={2.2} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:grand-coffee')} price={2.9} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:grand-coffee-cream')} price={3} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:coffee-chantilly')} price={3.5} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:infusion')} ing={t('menu:infusion-ing')} price={2.9} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:irish-coffee')} price={8} />
            <MenuArticle key={_uniqueId('hot-drink-')} name={t('menu:italian-coffee')} price={8} />
          </AccordionDetails>
        </Accordion>
        {/* <ImportantNote>{t('menu:suppl-couvert')}</ImportantNote> */}
        <LegalMention>{t('menu:mention')}</LegalMention>
      </Body>
      <Footer />
    </>
  );
};

const ExpandIcon = styled(ExpandMoreIcon)`
  color: white;
`

const CustomAccordionSummary = styled(AccordionSummary)`
  background-color: #918063;
`;

const CustomChip = styled(Chip)`
  margin-left: 10px;
`

const ImportantNote = styled.div`
  margin: 40px;
  text-align: center;
  font-size: 1.3em;
  font-weight: 600;
  color: tomato;
`;

const LegalMention = styled.div`
  margin: 40px;
  text-align: center;
  white-space: pre-line;
`;

const SectionTitle = styled(Typography)`
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
`;

const Emoji = styled.span`
  font-size: 3em;
`;

const Section = styled.div`
  font-size: 1.1em;
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

const TextSection = styled.div`
  font-size: 2em;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 1em;
  }
  @media (min-width: 601px) and (max-width: 1199px) {
    font-size: 1.5em;
  }
`;

const Price = styled.div`
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

const PitcherWine = (props) => {
  const { wines } = props;
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>&nbsp;</StyledTableCell>
              <StyledTableCell>Verre (12cl)</StyledTableCell>
              <StyledTableCell>25cl</StyledTableCell>
              <StyledTableCell>50cl</StyledTableCell>
              <StyledTableCell>75cl</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wines.map(wine => {
              return (
                <StyledTableRow key={_uniqueId('array-line-')}>
                  <StyledTableCell>{wine.name}</StyledTableCell>
                  <StyledTableCell>{wine.prices[0] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[0]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[1] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[1]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[2] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[2]) : ' '}</StyledTableCell>
                  <StyledTableCell>{wine.prices[3] !== 0 ? new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(wine.prices[3]) : ' '}</StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <SwipeLeft>
        <table>
          <tbody>
            <tr>
              <td><ArrowBack style={{ fontSize: 40 }} /></td>
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

Menu.getInitialProps = async () => ({
  namespacesRequired: ['common', 'menu'],
});

const useStyles = makeStyles({
  table: {
    minWidth: 414,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const SwipeLeft = styled.div`
  visibility: hidden;
  @media (max-width: 600px) {
    visibility: visible;
    margin: 10px 0px;
  }
`;

export default Menu;