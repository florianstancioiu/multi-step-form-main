import classes from './NavigationItem.module.css';

const NavigationItem = ({ id, title, isActive }) => {
  const navItemClasses = `${classes['nav-item']} ${
    isActive === true ? classes.active : ''
  }`;

  return (
    <li>
      <div className={navItemClasses}>
        <div className={classes['nav-item-circle']}>{id}</div>
        <div className={classes['nav-item-info']}>
          <p className={classes['nav-item-step']}>step {id}</p>
          <p className={classes['nav-item-title']}>{title}</p>
        </div>
      </div>
    </li>
  );
};

export default NavigationItem;
