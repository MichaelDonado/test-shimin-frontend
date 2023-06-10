import React, { useState } from 'react';
import { Box, BoxProps, Button, Chip, ChipProps, Container, Grid, Typography, TypographyProps, styled } from '@mui/material';

import logo from '@assets/img/Logo.svg';
import { useRouter } from 'next/router';
import person from '@assets/img/people.svg';


interface CustomChipProps extends ChipProps {
  checked?: boolean;
}

const GridMui = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.palette.neutrals.white,
}));

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutrals.white,
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold
}));


const ContentBox = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: '#EA4335',
  cursor: 'pointer',
  margin: 13,
  padding: 30,
  fontWeight: 900,
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '483px',
  width: '345px',
  borderRadius: 50
}));

function ThanksMain() {

  const router = useRouter();
  return (
    <Container disableGutters maxWidth={false}>
      <GridMui container>
        <Grid item xs={12} sm={6} textAlign="center">
          <img src={logo.src} alt="Logo" />
          <ContentBox sx={{ mx: 'auto' }} onClick={() => router.push('/maps')}>
            <img src={person.src} alt="person" width='300' height='300' />
            <Title>
              Gracias por ser
              parte de Shimin.ai
            </Title>
          </ContentBox>
        </Grid>
      </GridMui>
    </Container>
  );
};

export default ThanksMain;
