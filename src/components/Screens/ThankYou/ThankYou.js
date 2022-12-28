import Card from '../../UI/Card';

import classes from './ThankYou.module.css';
import IconThankYou from '../../../images/icon-thank-you.svg';

const ThankYou = () => {
  return (
    <>
      <Card>
        <img className={classes.img} src={IconThankYou} alt='' />
        <p className={classes.title}>Thank You!</p>
        <p className={classes.description}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </Card>
    </>
  );
};

export default ThankYou;
