import PersonalInfo from './PersonalInfo';

import classes from './Screens.module.css';
import SelectYourPlan from './SelectYourPlan';

const Screens = () => {
  return (
    <div className={classes.screens}>
      {/*
      <PersonalInfo />
       */}
      <SelectYourPlan />
    </div>
  );
};

export default Screens;
