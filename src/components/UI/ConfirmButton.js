import classes from './ConfirmButton.module.css';

const ConfirmButton = ({ title }) => {
  return (
    <button type='button' className={classes.btn}>
      {title}
    </button>
  );
};

export default ConfirmButton;
