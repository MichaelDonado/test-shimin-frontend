import React from 'react';

import { useRouter } from 'next/router';
import { Box, Container, Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Fade from '@mui/material/Fade';
import Typography, { TypographyProps } from '@mui/material/Typography';

import Image from 'next/image';

import socialMedias from '@assets/img/socialMedia.svg';
import line from '@assets/img/Line.svg';
import shimin from '@assets/img/Shimin.svg';
import AI from '@assets/img/AI.svg';
import icon from '@assets/img/Icon.svg';
import phone from '@assets/img/using-phone.svg';

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
  color: theme.palette.neutrals.white,
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold,
  marginTop: 80
}));


const StackImage = styled(Image)(({ theme }) => ({
  width: '150px',
  height: '150px',
}));


function IntroductionThree() {
  const router = useRouter();
  return (
    <Fade in timeout={350}>
      <Container disableGutters maxWidth={false} onClick={() => router.push('/login')}>
        <GridMui container>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                mx: 'auto',
              }}
            >
              <div style={{
                width: '162px',
                height: '167px',
                marginLeft: '26px',
                marginTop: '13px',
              }}>
                <Image
                  width={180}
                  height={180}
                  alt="Mountains"
                  src={socialMedias.src}
                  sizes="100vw"
                  style={{
                    zIndex: 1,
                    objectFit: 'contain',
                  }}
                />
              </div>
              <div style={{
                width: '162px',
                height: '167px',
                marginLeft: '26px',
                marginTop: '13px',
              }}>
                <Image
                  width={180}
                  height={180}
                  alt="Mountains"
                  src={socialMedias.src}
                  sizes="100vw"
                  style={{
                    zIndex: 1,
                    objectFit: 'contain',
                  }}
                />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box sx={{ mx: 'auto', width: '260px', height: '260px', marginTop: -54 / 6 }}>
              <Image
                width={200}
                height={200}
                alt="Mountains"
                src={line.src}
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </Box>
            <Box
              sx={{
                paddingX: '20%',
                marginY: '-3%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Box sx={{ width: '150px', height: '150px' }}>
                <Image
                  width={200}
                  height={200}
                  alt="Mountains"
                  src={shimin.src}
                  sizes="100vw"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box sx={{
                width: '80px',
                height: '80px',
                my: 'auto',
                background: 'white',
                paddingX: 16 / 6,
                paddingY: 16 / 6,
                marginLeft: 10 / 6,
                borderRadius: '50%'
              }}>
                <Image
                  width={100}
                  height={100}
                  alt="Mountains"
                  src={AI.src}
                  sizes="50vw"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box
              sx={{
                paddingX: '21%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                mx: 'auto',
                ml: '133px',
                marginBottom: '7px'
              }}
            >
              <Box sx={{ width: '100px', height: '100px', my: 'auto', paddingX: 16 / 6, paddingY: 16 / 6, marginLeft: 10 / 6, borderRadius: ' 50%' }}>
                <Image
                  width={200}
                  height={200}
                  alt="Mountains"
                  src={icon.src}
                  sizes="100vw"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box sx={{ mx: 'auto', width: '260px', height: '260px' }}>
                <Image
                  width={200}
                  height={200}
                  alt="Mountains"
                  src={line.src}
                  sizes="100vw"
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </Box>
              <Box sx={{ width: '250px', height: '250px' }}>
                <Title>
                  Verificada y
                  Personalizada
                </Title>
              </Box>
            </Box>
          </Grid>
          <StackImage width={200} height={200} src={phone.src} alt="Image 9" />
        </GridMui>
      </Container>
    </Fade >

  );
}

export default IntroductionThree;