import { useState } from "react";
import Button from "../Buttons/Button";
import Logo from "../Logo/Logo";
import Img1 from "../images/dribbble-logo-1.jpg";
import Img2 from "../images/dribbble-logo-2.jpg";
import Img3 from "../images/dribbble-logo-3.jpg";

const AdditionalInfoPage = ({onhandlenext}) => {
  const [activeChoice, setActiveChoice] = useState({
    choice1: false,
    choice2: false,
    choice3: false,
  });

  const [isDisabled, setIsDisabled] = useState(true);

  const onclickgetchoice = (choice) => {
    if (choice === "choice1") {
      setActiveChoice(() => ({
        choice1: true,
        choice2: false,
        choice3: false,
      }));
    } else if (choice === "choice2") {
      setActiveChoice(() => ({
        choice1: false,
        choice2: true,
        choice3: false,
      }));
    } else {
      setActiveChoice(() => ({
        choice1: false,
        choice2: false,
        choice3: true,
      }));
    }
    setIsDisabled(false);
  };

  return (
    <div>
      <Logo />
      <div className="w-3/4 my-5 m-auto space-y-10 text-center">
        <div className="space-y-5">
          <div className="font-bold text-3xl">What brings you to Dribbble?</div>
          <div className="text-gray-400 text-sm">
            Select the options that best describe you. Don't worry, you can
            explore other options later.
          </div>
        </div>
        <div className="md:flex md:space-x-4 space-y-6 md:space-y-0 justify-between">
          <div
            onClick={(e) => onclickgetchoice("choice1")}
            className={`${
              activeChoice.choice1 ? "border-2 border-pink-700" : "border-2"
            } md:w-80 text-center rounded-md px-4 py-2 cursor-pointer`}
          >
            <div className="m-auto w-48">
              <img className="w-48" src={Img1} alt="Dribbble-1" />
            </div>
            <div className="font-bold">
              I'm a designer looking to share my work
            </div>
            <div>
              <input
                type="radio"
                name="designer"
                onChange={() => {}}
                checked={activeChoice.choice1 === true}
              />
            </div>
          </div>
          <div
            onClick={(e) => onclickgetchoice("choice2")}
            className={`${
              activeChoice.choice2 ? "border-2 border-pink-700" : "border-2"
            } md:w-80 text-center rounded-md px-4 py-2 cursor-pointer`}
          >
            <div className="m-auto w-48">
              <img className="w-48" src={Img2} alt="Dribbble-2" />
            </div>
            <div className="font-bold">I'm looking to hire a designer</div>
            <div>
              <input
                type="radio"
                name="designer"
                onChange={() => {}}
                checked={activeChoice.choice2 === true}
              />
            </div>
          </div>
          <div
            onClick={(e) => onclickgetchoice("choice3")}
            className={`${
              activeChoice.choice3 ? "border-2 border-pink-700" : "border-2"
            } md:w-80 text-center rounded-md px-4 py-2 cursor-pointer`}
          >
            <div className="m-auto w-48">
              <img className="w-48" src={Img3} alt="Dribbble-3" />
            </div>
            <div className="font-bold">I'm looking for design inspiration</div>
            <div>
              <input
                style={{ color: "pink" }}
                type="radio"
                name="designer"
                onChange={() => {}}
                checked={activeChoice.choice3 === true}
              />
            </div>
          </div>
        </div>
        <div className='space-y-5'>
          <div className={!isDisabled ? "block" : "hidden"}>
            <p className="font-semibold text-sm">Anything else? You can select multiple</p>
          </div>
          <div>
            <Button onhandlenext={onhandlenext} disabled={isDisabled} className="px-6">
              Finish
            </Button>
          </div>
          <div className={!isDisabled ? "block" : "hidden"}>
            <p className="text-gray-500 font-semibold text-sm">or Press Return</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfoPage;
