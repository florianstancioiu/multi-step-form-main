import { useContext } from 'react';
import classes from './MonthlyYearlyCheckbox.module.css';
import MainContext from '../../../store/main-context';

const MonthyYearlyCheckbox = () => {
  const ctx = useContext(MainContext);

  const {
    monthlyPlan,
    monthlyClickHandler,
    yearlyClickHandler,
    monthlyCheckboxClickHandler,
  } = ctx;

  const wrapperClasses = `${classes.wrapper} ${
    monthlyPlan ? '' : classes.active
  }`;

  return (
    <div className={wrapperClasses}>
      <div onClick={monthlyClickHandler} className={classes.monthly}>
        Monthly
      </div>
      <div onClick={monthlyCheckboxClickHandler} className={classes.checkbox}>
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
