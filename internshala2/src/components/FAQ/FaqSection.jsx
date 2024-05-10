import { useState } from "react";

const FaqSection = () => {
  const [accordionDisp, setAccordionDisp] = useState({
    accordion1: false,
    accordion2: false,
    accordion3: false,
  });

  function onclickaccordion(val) {
    if ("accordion1" === val) {
      setAccordionDisp(() => {
        return {
          ...accordionDisp,
          accordion1: !accordionDisp.accordion1,
        };
      });
    } else if ("accordion2" === val) {
      setAccordionDisp(() => {
        return {
          ...accordionDisp,
          accordion2: !accordionDisp.accordion2,
        };
      });
    } else if ("accordion3" === val) {
      setAccordionDisp(() => {
        return {
          ...accordionDisp,
          accordion3: !accordionDisp.accordion3,
        };
      });
    }
  }

  return (
    <div className="md:w-3/5 md:ml-40 space-y-6">
      <div>
        <span className="text-gradient font-bold text-3xl">FAQ</span>
      </div>
      <div
        className="cursor-pointer border rounded-xl border-blue-500"
        onClick={() => onclickaccordion("accordion1")}
      >
        <div className="px-2 p-2 rounded-lg flex justify-between">
          <div>Can education flashcards be used for all age groups?</div>
          <div>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        {accordionDisp.accordion1 && <div className="px-2"> this is sample accordion</div>}
      </div>
      <div
        className="cursor-pointer border rounded-xl border-blue-500"
        onClick={() => onclickaccordion("accordion2")}
      >
        <div className="px-2 p-2 rounded-lg flex justify-between">
          <div>How do education flashcards work?</div>
          <div>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        {accordionDisp.accordion2 && <div className="px-2"> this is sample accordion</div>}
      </div>
      <div
        className="cursor-pointer border rounded-xl border-blue-500"
        onClick={() => onclickaccordion("accordion3")}
      >
        <div className="px-2 p-2 rounded-lg flex justify-between">
          <div>Can education flashcards be used for test preparation?</div>
          <div>
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        {accordionDisp.accordion3 && <div className="px-2"> this is sample accordion</div>}
      </div>
    </div>
  );
};

export default FaqSection;
