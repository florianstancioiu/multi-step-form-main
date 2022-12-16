import MainButton from '../UI/MainButton';
import AltButton from '../UI/AltButton';

import classes from './FooterNavigation.module.css';

const FooterNavigation = ({ currentStep }) => {
  const wrapperClasses = `${classes.wrapper} ${
    currentStep === 1 ? classes['first-step'] : ''
  }`;

  return (
    <div className={wrapperClasses}>
      {currentStep !== 1 && <AltButton title='Go Back' />}
      <MainButton title='Next Step' />
    </div>
  );
};

export default FooterNavigation;
