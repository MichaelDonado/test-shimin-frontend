import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TypographyProps,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';

import logo from '@assets/img/Logo.svg';
import fondo from '@assets/img/Fondo.svg';
import MicIcon from '@mui/icons-material/Mic';

interface CustomBoxProps {
  isFull?: boolean;
}

const GridMui = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

const ContainerMiu = styled(Container, { shouldForwardProp: (prop) => prop !== 'isFull' })<CustomBoxProps>(
  ({ isFull }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: isFull ? '180vh' : '100vh',
    background: `url(${fondo.src}) no-repeat center center / cover`,
  }));

const ContentBoxInfo = styled(Box, { shouldForwardProp: (prop) => prop !== 'isFull' })<CustomBoxProps>(
  ({ isFull }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    cursor: 'pointer',
    margin: 13,
    padding: 30,
    fontWeight: 900,
    height: isFull ? '350px' : '122px',
    width: isFull ? '450px' : '200px',
    borderRadius: 10,
  })
);

const ContentBox = styled(Box, { shouldForwardProp: (prop) => prop !== 'isFull' })<CustomBoxProps>(
  ({ isFull }) => ({
    backgroundColor: '#D9D9D980',
    cursor: 'pointer',
    margin: 13,
    padding: 30,
    fontWeight: 900,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: isFull ? '483px' : '240px',
    width: '98%',
    borderRadius: 50,
    textAlign: 'left',
  })
);

const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.neutrals.outline,
  fontWeight: theme.typography.fontWeightBold,
}));

const Description = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.neutrals.outline,
  fontWeight: theme.typography.fontWeightLight,
  lineHeight: 1,
}));

const info = [
  {
    title: 'Cierre de vías!',
    description: 'Se cerrará debido a protestas el anillo 2 de Santa Cruz',
    fullText: 'Se cerrará debido a protestas el anillo 2 de Santa Cruz.Los docentes de las instituciones públicas cerrarán la via entre las 6 am y 8 am debido a la nueva norma',
  },
  {
    title: 'Festival de la Guayaba',
    description: '26 de Marzo Plaza Costanera',
    fullText: '26 de Marzo Plaza Costanera.Los docentes de las instituciones públicas cerrarán la via entre las 6 am y 8 am debido a la nueva norma',
  },
];

function MapMain() {
  const [isFull, setIsFull] = useState(false);
  const [infoSelected, setInfoSelected] = useState([] as any);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  function expandBox(infoS: any) {
    setIsFull((prevIsFull) => !prevIsFull);
    setInfoSelected(infoS);
  }

  return (
    <ContainerMiu isFull={isFull} disableGutters maxWidth={false}>
      <GridMui container>
        <Grid item xs={12} sm={6} textAlign="center">
          <Box sx={{ left: 10, top: 9, position: 'absolute' }}>
            <img src={logo.src} alt="Logo" />
          </Box>
          <ContentBox isFull={isFull} sx={{ mx: 'auto' }}>
            <Title>Importante para tí</Title>
            <Stack direction="row">
              {infoSelected.length === 0 ? (
                info.map((inf) => (
                  <React.Fragment key={inf.title}>
                    <ContentBoxInfo isFull={isFull} onClick={() => expandBox(inf)}>
                      <Title>{inf.title}</Title>
                      <Description>{inf.description}</Description>
                    </ContentBoxInfo>
                  </React.Fragment>
                ))
              ) : (
                <React.Fragment key={infoSelected?.title}>
                  <ContentBoxInfo isFull={isFull} onClick={() => expandBox([])}>
                    <Title>{infoSelected?.title}</Title>
                    <Description>{infoSelected?.fullText}</Description>
                  </ContentBoxInfo>
                </React.Fragment>
              )}
            </Stack>
          </ContentBox>
          <Box
            sx={{
              mx: 'auto',
              mt: 10,
              width: '108px',
              height: '36px',
              background: 'rgba(217, 217, 217, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px',
            }}
          >
            <Typography variant="body1" align="center" fontWeight="bold">
              En tu zona
            </Typography>
          </Box>
          <Box
            sx={{
              mx: 'auto',
              zIndex: -1,
              marginTop: '-1px',
              width: '20px',
              height: '20px',
              background: 'rgba(218, 64, 54, 1)',
              borderRadius: '29.5px',
            }}
          />
          <Box
            sx={{
              mx: 'auto',
              mt: 10,
              height: '89px',
              background: '#D9D9D9',
              borderRadius: '12px',
              padding: 0,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flexDirection: 'column',
              width: isSmallScreen ? '100%' : '482px',
            }}
          >
            <Box
              sx={{
                mx: 'auto',
                padding: '13px',
                marginTop: '15px',
                my: 'auto',
                background: 'white',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <MicIcon color="primary" fontSize="large" />
            </Box>
            <Title>Iniciar ruta</Title>
          </Box>
        </Grid>
      </GridMui>
    </ContainerMiu>
  );
}

export default MapMain;

