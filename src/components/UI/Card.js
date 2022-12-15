import classes from './Card.module.css';

const Card = ({ children, className, title, description }) => {
  const appliedClasses = `${classes.card} ${
    className !== undefined ? className : ''
  }`;

  return (
    <div className={appliedClasses}>
      <h1>{title}</h1>
      <p className='description'>{description}</p>
      {children}
    </div>
  );
};

export default Card;
