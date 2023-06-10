import React from 'react';

import { useRouter } from 'next/router';
import { styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Typography, { TypographyProps } from '@mui/material/Typography';


const Container = styled(Paper)<PaperProps>(({ theme }) => ({
  boxSizing: 'border-box',
  margin: theme.spacing(0, 0),
  background: theme.palette.default.main,
  boxShadow: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  position: 'relative',
}));
const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutrals.outline,
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold
}));


function HomeMain() {
  const router = useRouter();
  return (
    <Fade in timeout={350}>
      <Container sx={{mx: 'auto', my: 'auto'}} onClick={()=> router.push('introduction/one')}>
        <Grid container>
          <Title>
            Shimin
          </Title>
        </Grid>
      </Container>
    </Fade >

  );
}

export default HomeMain;