import classes from './AltButton.module.css';

const AltButton = ({ title, onClick }) => {
  return (
    <button onClick={onClick} type='button' className={classes['alt-btn']}>
      {title}
    </button>
  );
};

export default AltButton;
