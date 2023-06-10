import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Chip, ChipProps, Container, Grid, MenuItem, Select, Typography, styled } from '@mui/material';

import SnackBarMessages from '@components/shared/SnackBarMessages';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';

import logo from '@assets/img/Logo.svg';


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

const StyledSelect = styled(Select)({
  marginBottom: '20px',
});

const StyledCheckbox = styled(Chip,
  { shouldForwardProp: (prop) => prop !== 'checked' }
)<CustomChipProps>(({ checked }) => ({
  backgroundColor: checked ? '#EA4335' : '#D9D9D980',
  color: checked ? 'white' : 'black',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: checked ? '#D9D9D980' : '#EA4335',
    color: checked ? '#EA4335' : 'black',
  },
}));


function PersonalMain() {
  const router = useRouter();
  const [selectedSex, setSelectedSex] = useState('');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false);
  const [checkboxes, setCheckboxes] = useState([
    { id: '<18', checked: false },
    { id: '18-60', checked: false },
    { id: '+60', checked: false },
  ]);

  const handleCheckboxChange = (id: any) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: checkbox.id === id,
    }));
    setCheckboxes(updatedCheckboxes);
  };

  const handleContinue = () => {
    if (!selectedSex) {
      handleClickOpen();
      setSnackbarMessage('Por favor, selecciona tu sexo');
      return;
    }

    const checkedCheckbox = checkboxes.find((checkbox) => checkbox.checked);
    if (!checkedCheckbox) {
      handleClickOpen();
      setSnackbarMessage('Por favor, selecciona tu rango de edad');
      return;
    }

    router.push('/taste');
  };


  return (
    <Container disableGutters maxWidth={false}>
      <GridMui container>
        <Grid item xs={12} sm={6} textAlign="center">
          {/* <Logo/> */}
          <img src={logo.src} alt="Logo" />
          <Typography>Déjanos saber más de ti</Typography>
          <StyledSelect
            fullWidth
            value={selectedSex}
            onChange={(e) => setSelectedSex(e.target.value as any)}
            label="Sexo"
          >
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
          </StyledSelect>
          <Typography>Indícanos tu edad</Typography>
          <Box display="flex" justifyContent="center">
            {checkboxes.map((checkbox) => (
              <StyledCheckbox
                key={checkbox.id}
                label={`${checkbox.id}`}
                variant="outlined"
                checked={checkbox.checked}
                onClick={() => handleCheckboxChange(checkbox.id)}
              />
            ))}
          </Box>
          <Button
            sx={{ mx: 'auto', marginTop: 32 / 6 }}
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleContinue}
          >
            Continuar
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

export default PersonalMain;
