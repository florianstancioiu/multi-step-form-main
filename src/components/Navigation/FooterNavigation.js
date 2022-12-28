import { useContext } from 'react';
import MainButton from '../UI/MainButton';
import AltButton from '../UI/AltButton';
import ConfirmButton from '../UI/ConfirmButton';
import MainContext from '../../store/main-context';

import classes from './FooterNavigation.module.css';

const FooterNavigation = () => {
  const ctx = useContext(MainContext);
  const { currentStep } = ctx;

  const wrapperClasses = `${classes.wrapper} ${
    currentStep === 1 ? classes['first-step'] : ''
  }`;

  return (
    <div className={wrapperClasses}>
      {currentStep !== 1 && (
        <AltButton onClick={ctx.decreaseStep} title='Go Back' />
      )}
      {currentStep !== 4 && (
        <MainButton onClick={ctx.increaseStep} title='Next Step' />
      )}
      {currentStep === 4 && (
        <ConfirmButton onClick={ctx.showThankYouStepHandler} title='Confirm' />
      )}
    </div>
  );
};

export default FooterNavigation;
