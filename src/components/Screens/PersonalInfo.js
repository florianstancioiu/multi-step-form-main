import Card from '../UI/Card';
import Input from '../UI/Input';
import FooterNavigation from '../Navigation/FooterNavigation';

const PersonalInfo = () => {
  return (
    <>
      <Card
        title='Personal Info'
        description='Please provide your name, email address, and phone number.'
      >
        <form>
          <Input
            id='name'
            type='text'
            label='Name'
            placeholder='e.g. Stephen King'
          />
          <Input
            id='email-address'
            type='text'
            label='Email Address'
            placeholder='e.g. stephenking@lorem.com'
          />
          <Input
            id='phone-number'
            type='text'
            label='Phone Number'
            placeholder='e.g. +1 234 567 890'
          />
        </form>
      </Card>
      <FooterNavigation currentStep={1} />
    </>
  );
};

export default PersonalInfo;
