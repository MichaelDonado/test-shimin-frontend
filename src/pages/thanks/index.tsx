import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';
import ThanksMain from '@components/thanks/ThanksMain';


function thanks() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-login" />
      <ThanksMain />
    </MainLayout>
  );
}

export default thanks;
