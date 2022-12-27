import classes from './Addon.module.css';

const Addon = ({ title, monthlyPrice, yearlyPrice, monthlyPlan }) => {
  const price = monthlyPlan ? `+$${monthlyPrice}/mo` : `+$${yearlyPrice}/yr`;

  return (
    <div className={classes.addon}>
      <p className={classes['addon-title']}>{title}</p>
      <p className={classes['addon-price']}>{price}</p>
    </div>
  );
};

export default Addon;
