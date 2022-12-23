import classes from './Input.module.css';

const Input = ({ id, type, label, value, placeholder, error, onChange }) => {
  const wrapperClasses = `${classes.wrapper} ${
    error !== null ? classes.error : ''
  }`;

  return (
    <div className={wrapperClasses}>
      <label className={classes.label} htmlFor={id}>
        {label}
        {error && <p className={classes['label-error']}>{error}</p>}
      </label>
      <input
        className={classes.input}
        onChange={onChange}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
