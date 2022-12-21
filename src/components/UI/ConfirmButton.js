import classes from './ConfirmButton.module.css';

const ConfirmButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} type='button' className={classes.btn}>
      {title}
    </button>
  );
};

export default ConfirmButton;
