import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

/* Components */
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

/* Styles */
import { Container, FilterArea, Content, Title } from './styles';
import GlobalStyles from '../../styles/global';
import theme from '../../styles/themes/theme';

function Home() {
  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function loadTasks() {
      await api
        .get(`/task/filter/${filterActived}/${isConnected}`)
        .then((response) => {
          setTasks(response.data);
        });
    }

    loadTasks();

    if (!isConnected) {
      setRedirect(true);
    }
  }, [filterActived]);

  function Notification() {
    setFilterActived('late');
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          {redirect && <Redirect to='/qrcode' />}
          <Header clickNotification={Notification} />

          <FilterArea>
            <button onClick={() => setFilterActived('all')} type='button'>
              <FilterCard title='Todos' actived={filterActived === 'all'} />
            </button>

            <button onClick={() => setFilterActived('today')} type='button'>
              <FilterCard title='Hoje' actived={filterActived === 'today'} />
            </button>

            <button onClick={() => setFilterActived('week')} type='button'>
              <FilterCard title='Semana' actived={filterActived === 'week'} />
            </button>

            <button onClick={() => setFilterActived('month')} type='button'>
              <FilterCard title='Mês' actived={filterActived === 'month'} />
            </button>

            <button onClick={() => setFilterActived('year')} type='button'>
              <FilterCard title='Ano' actived={filterActived === 'year'} />
            </button>
          </FilterArea>

          <Title>
            <h3>
              {filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS'}
            </h3>
          </Title>

          <Content>
            {tasks.map((task) => (
              <>
                <Link to={`/task/${task._id}`}>
                  <TaskCard
                    key={task._id}
                    type={task.type}
                    title={task.title}
                    when={task.when}
                    done={task.done}
                  />
                </Link>
              </>
            ))}
          </Content>
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default Home;
