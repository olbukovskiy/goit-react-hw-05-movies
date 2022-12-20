import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BsFilm } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';

import { NavItems } from 'components/NavItems/NavItems';
import { Loader } from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
import { AppContainer, Section, Header } from './SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <AppContainer>
        <Header>
          <BsFilm color="#fff" size={32} />
          <NavItems />
        </Header>
        <Section>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Section>
        <ToastContainer />
      </AppContainer>
    </>
  );
}
