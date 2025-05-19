import sprite from "../assets/SVGs/sprite.svg";

function Cross({ onHandleCross }) {
    return (
        <div
            className="main__cross"
            onClick={onHandleCross}
        >
            <svg className="main__icon main__icon-cross">
                <use xlinkHref={`${sprite}#icon-close`}></use>
            </svg>
        </div>
    );
}

export default Cross;
