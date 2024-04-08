import "./App.css";
import AdditionalInfoPage from "./components/Login/AdditionalInfoPage";
import CreateProfile from "./components/Login/CreateProfile";
import Signup from "./components/Login/Signup";
import VerificationPage from "./components/Login/VerificationPage";
import { useDispatch, useSelector } from 'react-redux';
import { goToNextStep } from './store/store';

function App() {
  const dispatch = useDispatch();
  const currentStep = useSelector(state => state.registration.currentStep);

  const handleNext = () => {
    dispatch(goToNextStep());
  };
  return (
    <>
      {currentStep === 1 ? (
        <Signup onhandlenext={handleNext}/>
      ) : currentStep === 2 ? (
        <CreateProfile onhandlenext={handleNext}/>
      ) : currentStep === 3 ? (
        <AdditionalInfoPage onhandlenext={handleNext}/>
      ) : (
        currentStep === 4 && <VerificationPage />
      )}
    </>
  );
}

export default App;
