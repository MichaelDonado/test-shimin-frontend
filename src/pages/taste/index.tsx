import MainLayout from '@components/layout/MainLayout';
import HeadTitle from '@components/shared/HeadTitle';
import TasteMain from '@components/taste/TasteMain';

function Taste() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-login" />
      <TasteMain />
    </MainLayout>
  );
}

export default Taste;
