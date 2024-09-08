function Input({
     type,
     placeholder = "enter your input here...",
     onChangeHandler,
     label,
}) {
     return (
          <>
               <label className="block text-gray-700 text-sm font-bold mb-2">
                    {label}
               </label>
               <input
                    type={type}
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                    className={
                         "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    }
               />
          </>
     );
}
export default Input;
