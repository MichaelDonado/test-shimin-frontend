import MainLayout from '@components/layout/MainLayout';
import LoginMain from '@components/login/LoginMain';
import HeadTitle from '@components/shared/HeadTitle';

function Login() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-login" />
      <LoginMain />
    </MainLayout>
  );
}

export default Login;
