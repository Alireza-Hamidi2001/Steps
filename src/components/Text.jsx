const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
];

function Text({ step }) {
    return (
        <p className="main__text">
            Step {step} : {messages[step - 1]}{" "}
        </p>
    );
}

export default Text;
