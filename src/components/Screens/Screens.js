import { useContext } from 'react';
import PersonalInfo from './PersonalInfo';
import SelectYourPlan from './SelectYourPlan/SelectYourPlan';
import PickAddons from './PickAddons';
import FinishingUp from './FinishingUp/FinishingUp';
import MainContext from '../../store/main-context';

import classes from './Screens.module.css';

const Screens = () => {
  const ctx = useContext(MainContext);
  const { currentStep } = ctx;

  return (
    <div className={classes.screens}>
      {currentStep === 1 && <PersonalInfo />}
      {currentStep === 2 && <SelectYourPlan />}
      {currentStep === 3 && <PickAddons />}
      {currentStep === 4 && <FinishingUp />}
    </div>
  );
};

export default Screens;
