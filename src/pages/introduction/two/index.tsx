import IntroductionTwo from '@components/introduction/Two';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function Two() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-introductionTwo" />
      <IntroductionTwo />
    </MainLayout>
  );
}

export default Two;
