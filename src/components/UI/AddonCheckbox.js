import { useState } from 'react';
import CheckmarkImage from '../../images/icon-checkmark.svg';

import classes from './AddonCheckbox.module.css';

const AddonCheckbox = ({ title, description, monthlyPrice, yearlyPrice }) => {
  const [isActive, setIsActive] = useState(false);

  const clickHandler = () => {
    setIsActive((prevState) => !prevState);
  };

  const wrapperClasses = `${classes.wrapper} ${isActive ? classes.active : ''}`;

  return (
    <div onClick={clickHandler} className={wrapperClasses}>
      <div className={classes.checkbox}>
        <div className={classes['checkbox-inner']}>
          <img src={CheckmarkImage} alt='' />
        </div>
      </div>
      <div className={classes.description}>
        <p className={classes.title}>{title}</p>
        <p className={classes.desc}>{description}</p>
      </div>
      <div className={classes.price}>+{monthlyPrice}</div>
    </div>
  );
};

export default AddonCheckbox;
