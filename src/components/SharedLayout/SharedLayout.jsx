import { Container } from 'components/Container/Container';
import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <Navigation />
      <Suspense
        fallback={
          <TailSpin
            height="60"
            width="60"
            color="#fd8451"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader"
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </Container>
  );
};
