// function Input({ type, placeholder, value, handlechange, id }) {
//     function change() {
//         handlechange?.(id);
//     }

//     return (
//         <input
//             type={type}
//             placeholder={placeholder}
//             value={value}
//             onChange={change}
//             id={id}
//         />
//     );
// }
//--------------------------------------------------------------passing ref to component
// function Input({ type, placeholder, ref }) {
//     return <input type={type} placeholder={placeholder} ref={ref} />;
// }
function Input({ type, placeholder, cref }) {
    return <input type={type} placeholder={placeholder} ref={cref} />;
}
export default Input;
