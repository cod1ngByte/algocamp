// import "./Button.css";
import getButtonBackgroundColor from "./getButtonBackgroundColor.js";

function Button({ text, onClickHandler, btnType = "primary", type }) {
     return (
          <button
               onClick={onClickHandler}
               type={type}
               className={`${getButtonBackgroundColor(
                    btnType
               )} block font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded mt-1.5`}
          >
               {text}
          </button>
     );
}

export default Button;
