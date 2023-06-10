import React, { useContext, useState } from 'react';
import {
  AlertProps,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  styled,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useRouter } from 'next/router';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import logo from '@assets/img/Logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import UserApiContext from '@core/contexts/UserApiContext';
import { SuccessResponse, UserData } from '@core/interfaces/user.interface';
import SnackBarMessages from '@components/shared/SnackBarMessages';
import useToggleSnackBar from '@core/hooks/useToggleSnackBar';

const GridMui = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.palette.neutrals.white,
}));

// Define el esquema de validación utilizando Yup
const validationSchema = Yup.object().shape({
  user: Yup.string().required('El usuario es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
});

declare global {
  interface Window {
    fbAsyncInit: () => void;
  }
}

function LoginMain() {
  const router = useRouter();
  const { login } = useContext(UserApiContext);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { open, handleClickOpen, handleClose } = useToggleSnackBar(false);
  const [severity, setSeverity] = useState<AlertProps['severity']>('error');

  const onSubmit = async (params: UserData): Promise<any> => {
    const userData = { ...params, db: 'rts_dorada' };

    try {
      setLoading(true);
      const response: SuccessResponse | null = await login(userData);

      if (response?.data?.authentication) {
        setSeverity('success');
        setSnackbarMessage(`Bienvenido ${response.data.name}`);
        router.push('/personal-data');
      } else {
        setSeverity('error');
        setSnackbarMessage('Usuario o Contraseña incorrecta');
      }
    } catch (error: any) {
      setSeverity('error');
      setSnackbarMessage(error.message);
      console.error(error.message);
    } finally {
      setLoading(false);
      handleClickOpen();
    }
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container disableGutters maxWidth={false}>
      <GridMui container>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            {/* Coloca aquí el componente del logo */}
            <img src={logo.src} alt="Logo" />
          </Box>
        </Grid>
        <Grid sx={{ marginLeft: isSmallScreen ? 0 : -80 / 6 }} item xs={12} sm={6}>
          <Box p={isSmallScreen ? 2 : 4}>
            <Formik
              initialValues={{ db: '', user: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Field name="user">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <TextField label="Usuario" fullWidth {...field} />
                      {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
                    </>
                  )}
                </Field>
                <Box my={2} />
                <Field name="password">
                  {({ field, meta }: { field: any; meta: any }) => (
                    <>
                      <TextField label="Contraseña" type="password" fullWidth {...field} />
                      {meta.touched && meta.error && <div style={{ color: 'red' }}>{meta.error}</div>}
                    </>
                  )}
                </Field>
                <Box my={2} />
                <Button variant="contained" color="primary" fullWidth type="submit" disabled={loading}>
                  {loading ? 'Cargando...' : 'Iniciar sesión'}
                </Button>
              </Form>
            </Formik>
            <Box my={2} />
            <Button
              variant="contained"
              color="info"
              fullWidth
              startIcon={<FacebookIcon />}
              onClick={() => {
                //   FB.login(function (response: any) {
                //     if (response.authResponse) {
                //       // El usuario ha iniciado sesión con éxito
                //       const accessToken = response.authResponse.accessToken;
                //       // Aquí puedes llamar a tu API o realizar cualquier acción adicional con el token de acceso
                //     } else {
                //       // El usuario no ha iniciado sesión con Facebook
                //     }
                //   });
              }}
            >
              Iniciar con Facebook
            </Button>
            <Box my={2} />
            <Button
              variant="contained"
              color="inherit"
              fullWidth
              startIcon={<GoogleIcon />}
              onClick={() => {
                // Lógica para iniciar sesión con Google
              }}
            >
              Iniciar con Google
            </Button>
          </Box>
        </Grid>
        <SnackBarMessages open={open} handleClose={handleClose} snackbarMessage={snackbarMessage} severity={severity} />
      </GridMui>
    </Container>
  );
}

export default LoginMain;


