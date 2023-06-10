import { ReactNode } from 'react';

import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

const Main = styled(Container)(() => ({
  height: '100vh',
  paddingTop: 1,
  backgroundColor: '#DA4036',
  display: 'flex',
  justifyContent: 'flex-center',
  alignItems: 'flex-center',
}));

function MainLayout({ children }: MainLayoutProps) {
  return (
    <Main disableGutters maxWidth={false}>
      {children}
    </Main>
  );
}
export interface MainLayoutProps {
  children: ReactNode;
}

export default MainLayout;
