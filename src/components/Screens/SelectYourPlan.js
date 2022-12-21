import Card from '../UI/Card';
import FooterNavigation from '../Navigation/FooterNavigation';
import PlanCheckbox from '../UI/PlanCheckbox';
import MonthyYearlyCheckbox from '../UI/MonthlyYearlyCheckbox';

import ArcadeImage from '../../images/icon-arcade.svg';
import AdvancedImage from '../../images/icon-advanced.svg';
import ProImage from '../../images/icon-pro.svg';

const checkboxes = [
  {
    id: '1',
    title: 'Arcade',
    monthlyPrice: '$9',
    yearlyPrice: '$90',
    yearlyFreeMonths: 2,
    image: ArcadeImage,
  },
  {
    id: '2',
    title: 'Advanced',
    monthlyPrice: '$12',
    yearlyPrice: '$120',
    yearlyFreeMonths: 2,
    image: AdvancedImage,
  },
  {
    id: '3',
    title: 'Pro',
    monthlyPrice: '$15',
    yearlyPrice: '$150',
    yearlyFreeMonths: 2,
    image: ProImage,
  },
];

const SelectYourPlan = () => {
  return (
    <>
      <Card
        title='Select your plan'
        description='You have the option of monthly or yearly billing.'
      >
        {checkboxes.map((checkbox) => (
          <PlanCheckbox
            key={checkbox.id}
            title={checkbox.title}
            image={checkbox.image}
            monthlyPrice={checkbox.monthlyPrice}
            yearlyPrice={checkbox.yearlyPrice}
            yearlyFreeMonths={checkbox.yearlyFreeMonths}
          />
        ))}
        <MonthyYearlyCheckbox />
      </Card>
      <FooterNavigation />
    </>
  );
};

export default SelectYourPlan;
