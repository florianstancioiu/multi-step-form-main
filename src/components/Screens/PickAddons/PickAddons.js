import { useContext } from 'react';
import Card from '../../UI/Card';
import FooterNavigation from '../../Navigation/FooterNavigation';
import AddonCheckbox from './AddonCheckbox';
import MainContext from '../../../store/main-context';

const PickAddons = () => {
  const ctx = useContext(MainContext);

  return (
    <>
      <Card
        title='Pick add-ons'
        description='Add-ons help enhance your gaming experience.'
      >
        {ctx.addons.map((addon) => (
          <AddonCheckbox
            id={addon.id}
            key={addon.id}
            title={addon.title}
            description={addon.description}
            monthlyPrice={addon.monthlyPrice}
            yearlyPrice={addon.yearlyPrice}
            isActive={addon.isActive}
          />
        ))}
      </Card>
      <FooterNavigation />
    </>
  );
};

export default PickAddons;
