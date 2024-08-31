document.addEventListener("DOMContentLoaded", function () {
     const images = document.querySelectorAll("img");

     images.forEach((image) => {
          image.setAttribute("draggable", "true");
     });
     let dragElement;

     //--->draggable element
     images.forEach((image) => {
          image.addEventListener("dragstart", (e) => {
               // console.log("drag started on " + e.target.title);
               dragElement = e.target;
          });
     });

     //--->drop into box
     const boxes = document.querySelectorAll(".box");
     boxes.forEach((box) => {
          box.addEventListener("dragover", (e) => {
               e.preventDefault();
          });
          box.addEventListener("dragenter", () => {
               box.classList.add("hover");
          });
          box.addEventListener("dragleave", () => {
               box.classList.remove("hover");
          });

          box.addEventListener("drop", (e) => {
               // console.log(
               //      "dragging element is getting drop on " + e.target.classList
               // );
               box.append(dragElement);
               box.classList.remove("hover");
               // console.log(box);
               // console.log(dragElement);
          });
     });

     //--->drop back to image container

     const imageContainer = document.querySelector(".image-container");

     imageContainer.addEventListener("dragover", (e) => {
          e.preventDefault();
     });

     imageContainer.addEventListener("drop", (e) => {
          imageContainer.append(dragElement);
     });

     //---> changing the name of tier
     const settings = document.querySelectorAll(".setting");
     settings.forEach((setting) => {
          setting.addEventListener("click", (e) => {
               const newName = prompt("add the new name for rating ");
               if (newName) {
                    const box = e.target.closest(".box");
                    //closest(selector) will find the nearest parent element from target  element
                    box.firstElementChild.textContent = newName;
               }
          });
     });
});
