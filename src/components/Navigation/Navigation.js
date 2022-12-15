import NavigationItem from './NavigationItem';
import classes from './Navigation.module.css';

const steps = [
  {
    id: '1',
    title: 'Your Info',
    isActive: true,
  },
  {
    id: '2',
    title: 'Select Plan',
    isActive: false,
  },
  {
    id: '3',
    title: 'Add-Ons',
    isActive: false,
  },
  {
    id: '4',
    title: 'Summary',
    isActive: false,
  },
];

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <ul>
        {steps.map((step) => (
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
