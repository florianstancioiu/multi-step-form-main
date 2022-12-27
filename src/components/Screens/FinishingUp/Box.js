import { useContext } from 'react';
import classes from './Box.module.css';
import MainContext from '../../../store/main-context';
import Addon from './Addon';

const Box = () => {
  const ctx = useContext(MainContext);

  const { monthlyPlan, plans, addons, goToStep } = ctx;

  const currentPlan = plans.filter((plan) => plan.isActive === true)[0];
  const currentAddons = addons.filter((addon) => addon.isActive === true);
  const currentPlanTitle = monthlyPlan
    ? `${currentPlan.title} (Monthly)`
    : `${currentPlan.title} (Yearly)`;
  const currentPlanPrice = monthlyPlan
    ? `$${currentPlan.monthlyPrice}/mo`
    : `$${currentPlan.yearlyPrice}/yr`;
  const totalTitle = monthlyPlan ? `Total (per month)` : `Total (per year)`;
  const totalPriceRaw = currentAddons.reduce(
    (total, addon) => {
      if (monthlyPlan) {
        return total + addon.monthlyPrice;
      }

      return total + addon.yearlyPrice;
    },
    monthlyPlan ? currentPlan.monthlyPrice : currentPlan.yearlyPrice
  );
  const totalPrice = monthlyPlan
    ? `$${totalPriceRaw}/mo`
    : `$${totalPriceRaw}/yr`;

  return (
    <div className={classes.wrapper}>
      <div className={classes['plan-wrapper']}>
        <div className={classes.plan}>
          <div className={classes['plan-title-wrapper']}>
            <div className={classes['plan-title']}>{currentPlanTitle}</div>
            <div onClick={() => goToStep(2)} className={classes['plan-change']}>
              Change
            </div>
          </div>
          <div className={classes['plan-price']}>{currentPlanPrice}</div>
        </div>
        <div className={classes.addons}>
          {currentAddons.map((addon) => (
            <Addon
              key={addon.id}
              title={addon.title}
              monthlyPlan={monthlyPlan}
              monthlyPrice={addon.monthlyPrice}
              yearlyPrice={addon.yearlyPrice}
            />
          ))}
        </div>
      </div>
      <div className={classes.total}>
        <p className={classes['total-title']}>{totalTitle}</p>
        <p className={classes['total-price']}>{totalPrice}</p>
      </div>
    </div>
  );
};

export default Box;
