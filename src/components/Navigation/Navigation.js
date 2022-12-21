import NavigationItem from './NavigationItem';
import classes from './Navigation.module.css';
import { useContext } from 'react';
import MainContext from '../../store/main-context';

const steps = [
  {
    id: 1,
    title: 'Your Info',
    isActive: true,
  },
  {
    id: 2,
    title: 'Select Plan',
    isActive: false,
  },
  {
    id: 3,
    title: 'Add-Ons',
    isActive: false,
  },
  {
    id: 4,
    title: 'Summary',
    isActive: false,
  },
];

const Navigation = () => {
  const ctx = useContext(MainContext);
  const { currentStep } = ctx;

  const filteredSteps = steps.map((step) => {
    if (step.id === currentStep) {
      return {
        ...step,
        isActive: true,
      };
    }

    return {
      ...step,
      isActive: false,
    };
  });

  return (
    <nav className={classes.navigation}>
      <ul>
        {filteredSteps.map((step) => (
          <NavigationItem
            key={step.id}
            id={step.id}
            title={step.title}
            isActive={step.isActive}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
