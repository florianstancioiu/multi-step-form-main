import { useContext } from 'react';
import Card from '../../UI/Card';
import FooterNavigation from '../../Navigation/FooterNavigation';
import PlanCheckbox from './PlanCheckbox';
import MonthyYearlyCheckbox from './MonthlyYearlyCheckbox';
import MainContext from '../../../store/main-context';

const SelectYourPlan = () => {
  const ctx = useContext(MainContext);
  const { plans } = ctx;

  return (
    <>
      <Card
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      >
        {plans.map((plan) => (
          <PlanCheckbox
            key={plan.id}
            id={plan.id}
            title={plan.title}
            image={plan.image}
            isActive={plan.isActive}
            monthlyPrice={plan.monthlyPrice}
            yearlyPrice={plan.yearlyPrice}
            yearlyFreeMonths={plan.yearlyFreeMonths}
          />
        ))}
        <MonthyYearlyCheckbox />
      </Card>
      <FooterNavigation />
    </>
  );
};

export default SelectYourPlan;
