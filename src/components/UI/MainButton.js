import classes from './MainButton.module.css';

const MainButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} type='button' className={classes.btn}>
      {title}
    </button>
  );
};

export default MainButton;
