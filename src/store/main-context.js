import { createContext } from 'react';

import ArcadeImage from '../images/icon-arcade.svg';
import AdvancedImage from '../images/icon-advanced.svg';
import ProImage from '../images/icon-pro.svg';

export const initialContextData = {
  currentStep: 1,
  increaseStep: () => {},
  decreaseStep: () => {},
  goToStep: (step) => {},
  showThankYouStep: () => {},
  personalInfo: {
    name: '',
    nameError: null,
    emailAddress: '',
    emailAddressError: null,
    phoneNumber: '',
    phoneNumberError: null,
  },
  nameChangeHandler: (event) => {},
  emailAddressChangeHandler: (event) => {},
  phoneNumberChangeHandler: (event) => {},
  selectPlanHandler: (id) => {},
  monthlyPlan: true,
  monthlyClickHandler: () => {},
  yearlyClickHandler: () => {},
  monthlyCheckboxClickHandler: () => {},
  plans: [
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
  ],
  addons: [
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
  ],
  selectAddonHandler: (id) => {},
};

const MainContext = createContext(initialContextData);

export default MainContext;
