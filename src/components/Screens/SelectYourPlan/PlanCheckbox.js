import { useContext } from 'react';
import MainContext from '../../../store/main-context';
import classes from './PlanCheckbox.module.css';

const PlanCheckbox = ({
  id,
  title,
  monthlyPrice,
  yearlyPrice,
  yearlyFreeMonths,
  image,
  isActive,
}) => {
  const ctx = useContext(MainContext);

  const price = ctx.monthlyPlan ? `$${monthlyPrice}/mo` : `$${yearlyPrice}/yr`;

  const planCheckboxClasses = `${classes['plan-checkbox']} ${
    isActive === true ? classes.active : ''
  }`;

  return (
    <div
      onClick={() => ctx.selectPlanHandler(id)}
      className={planCheckboxClasses}
    >
      <div className={classes['image-wrapper']}>
        <img src={image} alt='' />
      </div>
      <div className={classes['plan-details']}>
        <p className={classes['plan-title']}>{title}</p>
        <p className={classes['plan-price']}>{price}</p>
        {!ctx.monthlyPlan && (
          <p className={classes['plan-free']}>{yearlyFreeMonths} months free</p>
        )}
      </div>
    </div>
  );
};

export default PlanCheckbox;
