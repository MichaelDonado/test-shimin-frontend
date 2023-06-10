import IntroductionOne from '@components/introduction/One';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function One() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-introductionOne" />
      <IntroductionOne/>
    </MainLayout>
  );
}

export default One;
