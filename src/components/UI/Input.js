import classes from './Input.module.css';

const Input = ({ id, type, label, value, placeholder }) => {
  return (
    <div className={classes.wrapper}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      <input
        className={classes.input}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
