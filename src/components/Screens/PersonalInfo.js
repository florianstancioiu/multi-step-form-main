import Card from '../UI/Card';
import Input from '../UI/Input';
import FooterNavigation from '../Navigation/FooterNavigation';
import { useContext } from 'react';
import MainContext from '../../store/main-context';

const PersonalInfo = () => {
  const ctx = useContext(MainContext);
  const {
    personalInfo,
    nameChangeHandler,
    emailAddressChangeHandler,
    phoneNumberChangeHandler,
  } = ctx;

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
            value={personalInfo.name}
            error={personalInfo.nameError}
            onChange={nameChangeHandler}
            label='Name'
            placeholder='e.g. Stephen King'
          />
          <Input
            id='email-address'
            type='text'
            value={personalInfo.emailAddress}
            error={personalInfo.emailAddressError}
            onChange={emailAddressChangeHandler}
            label='Email Address'
            placeholder='e.g. stephenking@lorem.com'
          />
          <Input
            id='phone-number'
            type='text'
            value={personalInfo.phoneNumber}
            error={personalInfo.phoneNumberError}
            onChange={phoneNumberChangeHandler}
            label='Phone Number'
            placeholder='e.g. +1 234 567 890'
          />
        </form>
      </Card>
      <FooterNavigation />
    </>
  );
};

export default PersonalInfo;
