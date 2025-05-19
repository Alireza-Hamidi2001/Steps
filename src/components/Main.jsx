import Numbers from "./Numbers";
import Button from "./Button";
import Cross from "./Cross";
import Text from "./Text";
import { useState } from "react";

function Main() {
    const [step, setStep] = useState(1);
    const [isOpen, setIsOpen] = useState(true);

    function handleCross() {
        setIsOpen(!isOpen);
    }

    function handlePrevious() {
        if (step > 1) setStep(step - 1);
    }

    function handleNext() {
        if (step < 3) setStep(step + 1);
    }

    return (
        <main className="main">
            <Cross onHandleCross={handleCross} />
            <div className={`main__container ${!isOpen ? "hide" : ""}`}>
                <Numbers step={step} />
                <Text step={step} />
                <Button
                    onHandlePrevious={handlePrevious}
                    onHandleNext={handleNext}
                />
            </div>
        </main>
    );
}

export default Main;
