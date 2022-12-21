import MainButton from '../UI/MainButton';
import AltButton from '../UI/AltButton';
import ConfirmButton from '../UI/ConfirmButton';

import classes from './FooterNavigation.module.css';

const FooterNavigation = ({ currentStep }) => {
  const wrapperClasses = `${classes.wrapper} ${
    currentStep === 1 ? classes['first-step'] : ''
  }`;

  return (
    <div className={wrapperClasses}>
      {currentStep !== 1 && <AltButton title='Go Back' />}
      {currentStep !== 4 && <MainButton title='Next Step' />}
      {currentStep === 4 && <ConfirmButton title='Confirm' />}
    </div>
  );
};

export default FooterNavigation;
