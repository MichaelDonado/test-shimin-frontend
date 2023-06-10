import MainLayout from '@components/layout/MainLayout';
import MapsMain from '@components/maps/MapsMain';
import HeadTitle from '@components/shared/HeadTitle';



function Maps() {
  return (
    <MainLayout>
      <HeadTitle title="ShiminAI-login" />
      <MapsMain />
    </MainLayout>
  );
}

export default Maps;
