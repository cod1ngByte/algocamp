document.addEventListener("DOMContentLoaded", function () {
     const images = document.querySelectorAll("img");

     images.forEach((image) => {
          image.setAttribute("draggable", "true");
     });
     let dragElement;

     //--->draggable element
     images.forEach((image) => {
          image.addEventListener("dragstart", (e) => {
               console.log("drag started on " + e.target.title);
               dragElement = e.target;
          });
     });

     //--->drop into box
     const boxes = document.querySelectorAll(".box");
     boxes.forEach((box) => {
          box.addEventListener("dragover", (e) => {
               e.preventDefault();
          });

          box.addEventListener("drop", (e) => {
               console.log(
                    "dragging element is getting drop on " + e.target.classList
               );
               box.append(dragElement);
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
});
