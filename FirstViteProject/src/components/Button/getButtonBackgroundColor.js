function getButtonBackgroundColor(btnType) {
     if (btnType === "primary") {
          return "bg-green-500";
     } else if (btnType === "secondary") {
          return "bg-blue-500";
     } else if (btnType === "red") {
          return "bg-red-500";
     }
}

export default getButtonBackgroundColor;
