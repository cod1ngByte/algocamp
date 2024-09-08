function getButtonBackgroundColor(btnType) {
     if (btnType === "primary") {
          return "bg-transparent hover:bg-green-500 text-green-700 border-green-500";
     } else if (btnType === "secondary") {
          return "bg-transparent hover:bg-blue-500 text-blue-700 border-blue-500";
     } else if (btnType === "error") {
          return "bg-transparent hover:bg-red-500 text-red-700 border-red-500";
     }
}

export default getButtonBackgroundColor;
