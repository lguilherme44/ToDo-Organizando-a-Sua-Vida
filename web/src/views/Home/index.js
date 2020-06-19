import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
/* Components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

/* Styles */
import { Container, FilterArea } from './styles';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/themes/theme';

function Home() {
  const [filterActived, setFilterActived] = useState('today');

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />

          <FilterArea>
            <button onClick={() => setFilterActived('all')} type='button'>
              <FilterCard title='Todos' actived={filterActived == 'all'} />
            </button>

            <button onClick={() => setFilterActived('today')} type='button'>
              <FilterCard title='Hoje' actived={filterActived == 'today'} />
            </button>

            <button onClick={() => setFilterActived('week')} type='button'>
              <FilterCard title='Semana' actived={filterActived == 'week'} />
            </button>

            <button onClick={() => setFilterActived('month')} type='button'>
              <FilterCard title='Mês' actived={filterActived == 'month'} />
            </button>

            <button onClick={() => setFilterActived('year')} type='button'>
              <FilterCard title='Ano' actived={filterActived == 'year'} />
            </button>
          </FilterArea>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
