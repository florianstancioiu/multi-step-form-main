import Card from '../UI/Card';
import FooterNavigation from '../Navigation/FooterNavigation';
import AddonCheckbox from '../UI/AddonCheckbox';

const checkboxes = [
  {
    id: '1',
    title: 'Online service',
    description: 'Access to multiplayer games',
    monthlyPrice: '$1',
    yearlyPrice: '$10',
  },
  {
    id: '2',
    title: 'Larger Storage',
    description: 'Extra 1TB of cloud save',
    monthlyPrice: '$2',
    yearlyPrice: '$20',
  },
  {
    id: '3',
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    monthlyPrice: '$2',
    yearlyPrice: '$20',
  },
];

const PickAddons = () => {
  return (
    <>
      <Card
        title='Pick add-ons'
        description='Add-ons help enhance your gaming experience.'
      >
        {checkboxes.map((checkbox) => (
          <AddonCheckbox
            key={checkbox.id}
            title={checkbox.title}
            description={checkbox.description}
            monthlyPrice={checkbox.monthlyPrice}
            yearlyPrice={checkbox.yearlyPrice}
          />
        ))}
      </Card>
      <FooterNavigation />
    </>
  );
};

export default PickAddons;
