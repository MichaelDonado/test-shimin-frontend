import React from 'react';

import { useRouter } from 'next/router';
import { Box, Container, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
// import Paper, { PaperProps } from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Typography, { TypographyProps } from '@mui/material/Typography';

import Image from 'next/image';


import city from '@assets/img/smart-city.svg';

const GridMui = styled(Grid)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: theme.spacing(10, 0),
  background: theme.palette.default.main,
  boxShadow: 'none',
  textAlign: 'center',
  cursor: 'pointer',
}));
const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutrals.outline,
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightRegular,
  padding: 12
}));



function IntroductionTwo() {
  const router = useRouter();
  return (
    <Fade in timeout={350}>
      <Container disableGutters maxWidth={false} onClick={() => router.push('three')}>
        <GridMui container>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                background: 'white',
                mx: 'auto',
              }}
            >
              <Title>Con Shimin AI, obtienes información verificada y
                clasificada de múltiples fuentes, directamente para tí.</Title>
            </Box>
            <Box sx={{ mx: 'auto', width: '260px', height: '260px' }}>
              <Image
                width={500}
                height={500}
                alt="Mountains"
                src={city.src}
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Grid>
        </GridMui>
      </Container>
    </Fade >
  );
}

export default IntroductionTwo;