import IntroductionThree from '@components/introduction/Three';
import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';

function Three() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-introductionThree" />
      <IntroductionThree />
    </MainLayout>
  );
}

export default Three;
