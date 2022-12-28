import { useContext } from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import SelectYourPlan from './SelectYourPlan/SelectYourPlan';
import PickAddons from './PickAddons/PickAddons';
import FinishingUp from './FinishingUp/FinishingUp';
import ThankYou from './ThankYou/ThankYou';
import MainContext from '../../store/main-context';

import classes from './Screens.module.css';

const Screens = () => {
  const ctx = useContext(MainContext);
  const { currentStep, showThankYouStep } = ctx;

  return (
    <div className={classes.screens}>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectYourPlan />}
      {currentStep === 3 && <PickAddons />}
      {currentStep === 4 && !showThankYouStep && <FinishingUp />}
      {currentStep === 4 && showThankYouStep && <ThankYou />}
    </div>
  );
};

export default Screens;
