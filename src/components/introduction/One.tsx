import React from 'react';

import { useRouter } from 'next/router';
import { Stack, styled } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Typography, { TypographyProps } from '@mui/material/Typography';

import Image from 'next/image';

import socialMedias from '@assets/img/socialMedia.svg';
import rectangle from '@assets/img/Rectangle.svg';
import confused from '@assets/img/confused.svg';

const Container = styled(Paper)<PaperProps>(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-center',
  alignItems: 'flex-center',
  margin: theme.spacing(0, 0),
  background: theme.palette.default.main,
  boxShadow: 'none',
  textAlign: 'center',
  cursor: 'pointer',
  // padding: theme.spacing(154 / 6, 649 / 6),
}));
const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  ...theme.typography.h1,
  color: theme.palette.neutrals.outline,
  marginBottom: theme.spacing(4),
  fontWeight: theme.typography.fontWeightBold
}));

const StackContainer = styled(Stack)(({ theme }) => ({
  // display: 'flex',
  // flexDirection: 'row',
  gap: '16px',
}));

const StackImage = styled(Image)(({ theme }) => ({
  width: '150px',
  height: '150px',
}));



function IntroductionOne() {
  const router = useRouter();

  return (
    <Fade in timeout={350}>
      <Container sx={{ mx: 'auto', my: 'auto' }} onClick={() => router.push('two')}>
        <Grid container>
          <StackContainer>
            <div style={{
              width: '136px',
              height: '164px',
              marginLeft: '33px',
              marginTop: '24px',
            }}>
              {/* <StackImage sx={{zIndex: 1}} width={180} height={180}  src={socialMedias.src} alt="Image 1" /> */}
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
            <div style={{ position: 'absolute', width: '200px', height: '200px' }}>
              <Image
                width={400}
                height={400}
                alt="Mountains"
                src={rectangle.src}
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <div style={{ width: '150px', height: '150px', marginLeft: 26 }}>
              <Image
                width={200}
                height={200}
                alt="Mountains"
                src={confused.src}
                sizes="100vw"
                style={{
                  objectFit: 'contain',
                }}
              />
            </div>
            <Typography sx={{fontWeight: 900, color: 'white', width: 213, textAlign: 'center'}}>
              ¿No sabes dónde buscar
              información actualizada
              de lo que ocurre tu ciudad?
            </Typography>
          </StackContainer>
        </Grid>
      </Container>
    </Fade >
  );
}

export default IntroductionOne;