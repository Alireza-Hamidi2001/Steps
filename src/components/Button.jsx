import sprite from "../assets/SVGs/sprite.svg";

function Button({ onHandlePrevious, onHandleNext }) {
    return (
        <div className="button__container">
            <button onClick={onHandlePrevious}>
                <svg className="main__icon">
                    <use xlinkHref={`${sprite}#icon-undo2`}></use>
                </svg>
                <p>Previous</p>
            </button>
            <button onClick={onHandleNext}>
                <p>Next</p>
                <svg className="main__icon">
                    <use xlinkHref={`${sprite}#icon-redo2`}></use>
                </svg>
            </button>
        </div>
    );
}

export default Button;
