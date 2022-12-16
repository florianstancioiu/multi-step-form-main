import classes from './MainButton.module.css';

const MainButton = ({ title }) => {
  return (
    <button type='button' className={classes.btn}>
      {title}
    </button>
  );
};

export default MainButton;
