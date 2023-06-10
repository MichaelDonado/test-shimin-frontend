import React, { useState } from 'react';
import { Box, Button, Chip, ChipProps, Container, Grid, Typography, styled } from '@mui/material';

import logo from '@assets/img/Logo.svg';
import { useRouter } from 'next/router';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreateIcon from '@mui/icons-material/Create';

import SnackBarMessages from '@components/shared/SnackBarMessages';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';

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


const StyledCheckbox = styled(Chip,
  { shouldForwardProp: (prop) => prop !== 'checked' }
)<CustomChipProps>(({ checked }) => ({
  backgroundColor: checked ? '#EA4335' : '#D9D9D980',
  color: checked ? 'white' : 'black',
  cursor: 'pointer',
  margin: 13,
  padding: 30,
  fontWeight: 900,
  '&:hover': {
    backgroundColor: checked ? '#D9D9D980' : '#EA4335',
    color: checked ? '#EA4335' : 'black',
  },
}));


function TasteMain() {
  const router = useRouter();
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false);
  const [checkboxes, setCheckboxes] = useState([
    { Icon: <NearMeIcon color='primary' />, id: 'Movilidad', checked: false },
    { Icon: <AccountBalanceIcon />, id: 'Seguridad', checked: false },
    { Icon: <CreateIcon />, id: 'Eventos', checked: false },
  ]);

  const handleCheckboxChange = (id: any) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checkbox.id === id,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const handleReady = () => {
    const checkedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);

    if (checkedCheckboxes.length === 0) {
      handleClickOpen();
      setSnackbarMessage('Por favor, selecciona al menos un tema de interés');
      return;
    }
    router.push('/thanks');
  };


  return (
    <Container disableGutters maxWidth={false}>
      <GridMui container>
        <Grid item xs={12} sm={6} textAlign="center">
          {/* <Logo/> */}
          <img src={logo.src} alt="Logo" />
          <Typography>
            Selecciona los temas que más te interesan, Shimin AI hará el resto por ti.
          </Typography>
          <Box display="flex" justifyContent="center" flexDirection="column">
            {checkboxes.map((checkbox) => (
              <StyledCheckbox
                key={checkbox.id}
                label={`${checkbox.id}`}
                variant="outlined"
                checked={checkbox.checked}
                onClick={() => handleCheckboxChange(checkbox.id)}
                icon={checkbox.Icon}
              />
            ))}
          </Box>
          <Button
            sx={{ mx: 'auto', marginTop: 32 / 6 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleReady}
          >
            Estoy listo
          </Button>
        </Grid>
      </GridMui>
      <SnackBarMessages
        open={open}
        handleClose={handleClose}
        snackbarMessage={snackbarMessage}
        severity="error"
      />
    </Container>
  );
}



export default TasteMain;
