import { useState } from 'react';
import MainContext from './main-context';
import { initialContextData } from './main-context';

import ArcadeImage from '../images/icon-arcade.svg';
import AdvancedImage from '../images/icon-advanced.svg';
import ProImage from '../images/icon-pro.svg';

const MainContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(2);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    nameError: null,
    emailAddress: '',
    emailAddressError: null,
    phoneNumber: '',
    phoneNumberError: null,
  });
  const [plans, setPlans] = useState([
    {
      id: 1,
      title: 'Arcade',
      monthlyPrice: 9,
      yearlyPrice: 90,
      yearlyFreeMonths: 2,
      image: ArcadeImage,
      isActive: true,
    },
    {
      id: 2,
      title: 'Advanced',
      monthlyPrice: 12,
      yearlyPrice: 120,
      yearlyFreeMonths: 2,
      image: AdvancedImage,
      isActive: false,
    },
    {
      id: 3,
      title: 'Pro',
      monthlyPrice: 15,
      yearlyPrice: 150,
      yearlyFreeMonths: 2,
      image: ProImage,
      isActive: false,
    },
  ]);
  const [addons, setAddons] = useState([
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthlyPrice: 1,
      yearlyPrice: 10,
      isActive: false,
    },
    {
      id: 2,
      title: 'Larger Storage',
      description: 'Extra 1TB of cloud save',
      monthlyPrice: 2,
      yearlyPrice: 20,
      isActive: false,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthlyPrice: 2,
      yearlyPrice: 20,
      isActive: false,
    },
  ]);

  const [monthlyPlan, setMonthlyPlan] = useState(true);

  const monthlyClickHandler = () => {
    setMonthlyPlan(true);
  };

  const yearlyClickHandler = () => {
    setMonthlyPlan(false);
  };

  const monthlyCheckboxClickHandler = () => {
    setMonthlyPlan((prevState) => !prevState);
  };

  const nameChangeHandler = (event) => {
    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        name: event.target.value,
      };
    });
  };

  const emailAddressChangeHandler = (event) => {
    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        emailAddress: event.target.value,
      };
    });
  };

  const phoneNumberChangeHandler = (event) => {
    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        phoneNumber: event.target.value,
      };
    });
  };

  const validateForm = () => {
    if (personalInfo.name.trim().length === 0) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          nameError: 'This field is required',
        };
      });

      return false;
    }

    const nameRegex = new RegExp('^[a-zA-Z ]+$');
    if (!nameRegex.test(personalInfo.name)) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          nameError: 'Only alpha characters and spaces allowed.',
        };
      });

      return false;
    }

    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        nameError: null,
      };
    });

    if (personalInfo.emailAddress.trim().length === 0) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          emailAddressError: 'This field is required',
        };
      });

      return false;
    }

    const emailAddressRegex = new RegExp('^[^s@]+@[^s@]+.[^s@]+$');
    if (!emailAddressRegex.test(personalInfo.emailAddress)) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          emailAddressError: 'A valid email is required',
        };
      });

      return false;
    }

    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        emailAddressError: null,
      };
    });

    if (personalInfo.phoneNumber.trim().length === 0) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          phoneNumberError: 'This field is required',
        };
      });

      return false;
    }

    const phoneNumberRegex = new RegExp('^[0-9]*$');
    if (!phoneNumberRegex.test(personalInfo.phoneNumber)) {
      setPersonalInfo((prevState) => {
        return {
          ...prevState,
          phoneNumberError: 'Only digits allowed',
        };
      });

      return false;
    }

    setPersonalInfo((prevState) => {
      return {
        ...prevState,
        phoneNumberError: null,
      };
    });

    return true;
  };

  const increaseStep = () => {
    if (currentStep === 1) {
      validateForm() && setCurrentStep((prevState) => prevState + 1);
    } else {
      setCurrentStep((prevState) => prevState + 1);
    }
  };

  const decreaseStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };

  const goToStep = (step) => {
    if (step >= 1 && step <= 4) {
      setCurrentStep(step);
    }
  };

  const showThankYouStep = () => {
    setCurrentStep(4);
  };

  const selectPlanHandler = (id) => {
    const filteredPlans = plans.map((plan) => {
      if (plan.id === id) {
        return {
          ...plan,
          isActive: true,
        };
      }

      return {
        ...plan,
        isActive: false,
      };
    });

    setPlans(filteredPlans);
  };

  const selectAddonHandler = (id) => {
    const selectedAddons = addons.map((addon) => {
      if (addon.id === id) {
        return {
          ...addon,
          isActive: !addon.isActive,
        };
      }

      return addon;
    });

    setAddons(selectedAddons);
  };

  return (
    <MainContext.Provider
      value={{
        ...initialContextData,
        currentStep,
        personalInfo,
        monthlyPlan,
        plans,
        addons,
        increaseStep,
        decreaseStep,
        goToStep,
        showThankYouStep,
        nameChangeHandler,
        emailAddressChangeHandler,
        phoneNumberChangeHandler,
        monthlyClickHandler,
        yearlyClickHandler,
        monthlyCheckboxClickHandler,
        selectPlanHandler,
        selectAddonHandler,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
