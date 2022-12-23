import { useContext } from 'react';
import Card from '../../UI/Card';
import FooterNavigation from '../../Navigation/FooterNavigation';
import PlanCheckbox from './PlanCheckbox';
import MonthyYearlyCheckbox from './MonthlyYearlyCheckbox';
import MainContext from '../../../store/main-context';

import ArcadeImage from '../../../images/icon-arcade.svg';
import AdvancedImage from '../../../images/icon-advanced.svg';
import ProImage from '../../../images/icon-pro.svg';

const plans = [
  {
    id: 1,
    title: 'Arcade',
    monthlyPrice: 9,
    yearlyPrice: 90,
    yearlyFreeMonths: 2,
    image: ArcadeImage,
  },
  {
    id: 2,
    title: 'Advanced',
    monthlyPrice: 12,
    yearlyPrice: 120,
    yearlyFreeMonths: 2,
    image: AdvancedImage,
  },
  {
    id: 3,
    title: 'Pro',
    monthlyPrice: 15,
    yearlyPrice: 150,
    yearlyFreeMonths: 2,
    image: ProImage,
  },
];

const SelectYourPlan = () => {
  const ctx = useContext(MainContext);
  const { selectedPlan } = ctx;
  const filteredPlans = plans.map((plan) => {
    if (plan.id === selectedPlan) {
      return {
        ...plan,
        isActive: true,
      };
    } else {
      return {
        ...plan,
        isActive: false,
      };
    }
  });

  return (
    <>
      <Card
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      >
        {filteredPlans.map((plan) => (
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
