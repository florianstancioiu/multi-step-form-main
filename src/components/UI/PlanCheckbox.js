import { useState } from 'react';
import classes from './PlanCheckbox.module.css';

const PlanCheckbox = ({
  title,
  monthlyPrice,
  yearlyPrice,
  yearlyFreeMonths,
  image,
}) => {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  const planCheckboxClasses = `${classes['plan-checkbox']} ${
    isActive === true ? classes.active : ''
  }`;

  return (
    <div onClick={onClickHandler} className={planCheckboxClasses}>
      <div className={classes['image-wrapper']}>
        <img src={image} alt='' />
      </div>
      <div className={classes['plan-details']}>
        <p className={classes['plan-title']}>{title}</p>
        <p className={classes['plan-price']}>{monthlyPrice}</p>
        {Boolean(yearlyFreeMonths) && (
          <p className={classes['plan-free']}>{yearlyFreeMonths} months free</p>
        )}
      </div>
    </div>
  );
};

export default PlanCheckbox;
