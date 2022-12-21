import PersonalInfo from './PersonalInfo';
import SelectYourPlan from './SelectYourPlan';
import PickAddons from './PickAddons';
import FinishingUp from './FinishingUp/FinishingUp';

import classes from './Screens.module.css';

const Screens = () => {
  return (
    <div className={classes.screens}>
      {/*
      <PersonalInfo />
      <SelectYourPlan />
      <PickAddons />
       */}
      <FinishingUp />
    </div>
  );
};

export default Screens;
