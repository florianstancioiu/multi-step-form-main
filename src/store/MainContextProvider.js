import { useContext, useState } from 'react';
import MainContext from './main-context';
import { initialContextData } from './main-context';

const MainContextProvider = ({ children }) => {
  const ctx = useContext(MainContext);

  const [currentStep, setCurrentStep] = useState(1);

  const increaseStep = () => {
    setCurrentStep((prevState) => prevState + 1);
  };
  const decreaseStep = () => {
    setCurrentStep((prevState) => prevState - 1);
  };
  const showThankYouStep = () => {};

  return (
    <MainContext.Provider
      value={{
        ...initialContextData,
        currentStep,
        increaseStep,
        decreaseStep,
        showThankYouStep,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContextProvider;
