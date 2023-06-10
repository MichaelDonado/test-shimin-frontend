import MainLayout from '@components/layout/MainLayout';
import PersonalMain from '@components/personal-data/PersonalMain';
import HeadTitle from '@components/shared/HeadTitle';

function PersonalData() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-personal-data" />
      <PersonalMain />
    </MainLayout>
  );
}

export default PersonalData;
