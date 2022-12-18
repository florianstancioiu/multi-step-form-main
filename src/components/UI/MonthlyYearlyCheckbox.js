import { useState } from 'react';
import classes from './MonthlyYearlyCheckbox.module.css';

const MonthyYearlyCheckbox = () => {
  const [isActive, setIsActive] = useState(false);

  const wrapperClasses = `${classes.wrapper} ${isActive ? classes.active : ''}`;

  const montlyClickHandler = () => {
    setIsActive(false);
  };

  const yearlyClickHandler = () => {
    setIsActive(true);
  };

  const checkboxClickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div className={wrapperClasses}>
      <div onClick={montlyClickHandler} className={classes.monthly}>
        Monthly
      </div>
      <div onClick={checkboxClickHandler} className={classes.checkbox}>
        <div className={classes['checkbox-inner']}>
          <div className={classes['checkbox-dot']}></div>
        </div>
      </div>
      <div onClick={yearlyClickHandler} className={classes.yearly}>
        Yearly
      </div>
    </div>
  );
};

export default MonthyYearlyCheckbox;
