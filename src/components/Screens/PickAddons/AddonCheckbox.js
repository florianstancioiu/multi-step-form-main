import { useContext } from 'react';
import CheckmarkImage from '../../../images/icon-checkmark.svg';
import classes from './AddonCheckbox.module.css';
import MainContext from '../../../store/main-context';

const AddonCheckbox = ({
  id,
  title,
  description,
  monthlyPrice,
  yearlyPrice,
  isActive,
}) => {
  const ctx = useContext(MainContext);

  const wrapperClasses = `${classes.wrapper} ${isActive ? classes.active : ''}`;

  const price = ctx.monthlyPlan
    ? `+$${monthlyPrice}/mo`
    : `+$${yearlyPrice}/yr`;

  return (
    <div onClick={() => ctx.selectAddonHandler(id)} className={wrapperClasses}>
      <div className={classes.checkbox}>
        <div className={classes['checkbox-inner']}>
          <img src={CheckmarkImage} alt='' />
        </div>
      </div>
      <div className={classes.description}>
        <p className={classes.title}>{title}</p>
        <p className={classes.desc}>{description}</p>
      </div>
      <div className={classes.price}>{price}</div>
    </div>
  );
};

export default AddonCheckbox;
