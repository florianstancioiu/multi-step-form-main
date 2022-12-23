import { useState } from 'react';
import MainContext from './main-context';
import { initialContextData } from './main-context';

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

  const [selectedPlan, setSelectedPlan] = useState(1);
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

  const showThankYouStep = () => {
    setCurrentStep(4);
  };

  const selectPlanHandler = (id) => {
    setSelectedPlan(id);
  };

  return (
    <MainContext.Provider
      value={{
        ...initialContextData,
        currentStep,
        personalInfo,
        selectedPlan,
        monthlyPlan,
        increaseStep,
        decreaseStep,
        showThankYouStep,
        nameChangeHandler,
        emailAddressChangeHandler,
        phoneNumberChangeHandler,
        monthlyClickHandler,
        yearlyClickHandler,
        monthlyCheckboxClickHandler,
        selectPlanHandler,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
