import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

function TextInputForm({
     handleChange,
     handleShowHide,
     handleSubmit,
     inputType,
}) {
     return (
          <>
               <form onSubmit={handleSubmit}>
                    <Input
                         type={inputType}
                         placeholder="enter a word or phrase"
                         onChangeHandler={handleChange}
                         label={"enter a word or phrase"}
                    />
                    <Button
                         text={inputType === "text" ? "Hide" : "Show"}
                         btnType="primary"
                         onClickHandler={handleShowHide}
                         type={"button"}
                    />
                    <Button text={"Submit"} type={"submit"} btnType={"error"} />
               </form>
          </>
     );
}

export default TextInputForm;
