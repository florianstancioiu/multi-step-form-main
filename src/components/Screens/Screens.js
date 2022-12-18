import PersonalInfo from './PersonalInfo';
import SelectYourPlan from './SelectYourPlan';
import PickAddons from './PickAddons';

import classes from './Screens.module.css';

const Screens = () => {
  return (
    <div className={classes.screens}>
      {/*
      <PersonalInfo />
      <SelectYourPlan />
       */}
      <PickAddons />
    </div>
  );
};

export default Screens;
