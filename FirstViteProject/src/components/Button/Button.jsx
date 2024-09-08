// import "./Button.css";
import getButtonBackgroundColor from "./getButtonBackgroundColor.js";

function Button({ text, onClickHandler, btnType = "primary" }) {
     return (
          <button
               onClick={onClickHandler}
               className={`${getButtonBackgroundColor(
                    btnType
               )} px-4 py-2 my-2 text-black bg-orange-500`}
          >
               {text}
          </button>
     );
}

export default Button;
