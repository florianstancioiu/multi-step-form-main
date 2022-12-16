import classes from './AltButton.module.css';

const AltButton = ({ title }) => {
  return (
    <button type='button' className={classes['alt-btn']}>
      {title}
    </button>
  );
};

export default AltButton;
