import classes from './Box.module.css';

const Box = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['plan-wrapper']}>
        <div className={classes.plan}>
          <div className={classes['plan-title-wrapper']}>
            <div className={classes['plan-title']}>Arcade (Yearly)</div>
            <div className={classes['plan-change']}>Change</div>
          </div>
          <div className={classes['plan-price']}>$90/yr</div>
        </div>
        <div className={classes.addons}>
          <div className={classes.addon}>
            <p className={classes['addon-title']}>Online service</p>
            <p className={classes['addon-price']}>+$10/yr</p>
          </div>
          <div className={classes.addon}>
            <p className={classes['addon-title']}>Larger storage</p>
            <p className={classes['addon-price']}>+$20/yr</p>
          </div>
        </div>
      </div>
      <div className={classes.total}>
        <p className={classes['total-title']}>Total (per year)</p>
        <p className={classes['total-price']}>$120/yr</p>
      </div>
    </div>
  );
};

export default Box;
