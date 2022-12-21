import Card from '../../UI/Card';
import FooterNavigation from '../../Navigation/FooterNavigation';
import Box from './Box';

const FinishingUp = () => {
  return (
    <>
      <Card
        title='Finishing up'
        description='Double-check everything looks OK before confirming.'
      >
        <Box />
      </Card>
      <FooterNavigation />
    </>
  );
};

export default FinishingUp;
