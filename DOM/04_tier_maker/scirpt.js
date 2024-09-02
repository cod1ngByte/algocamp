document.addEventListener("DOMContentLoaded", function () {
     const inputImage = document.querySelector("#upload-image");
     const imageContainer = document.querySelector(".image-container");
     let dragElement;

     function init() {
          const images = document.querySelectorAll("img");
          images.forEach((image) => {
               image.setAttribute("draggable", "true");
          });

          //--->draggable element
          images.forEach((image) => {
               image.addEventListener("dragstart", (e) => {
                    dragElement = e.target;
                    // console.log(dragElement);
               });
          });
     }

     inputImage.addEventListener("change", uploadImages);

     function uploadImages(e) {
          const files = e.target.files;
          for (let i = 0; i < files.length; i++) {
               const file = files[i];

               if (file.type.startsWith("image/")) {
                    const img = document.createElement("img");
                    img.src = URL.createObjectURL(file); // Create an object URL for the file
                    img.setAttribute("draggable", "true");
                    img.onload = function () {
                         // Release the object URL after the image is loaded
                         URL.revokeObjectURL(img.src);
                    };
                    imageContainer.appendChild(img);
               }
          }
          init();
     }

     init();
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
               // console.log(dragElement);
               box.append(dragElement);
               box.classList.remove("hover");
               // console.log(box);
               // console.log(dragElement);
          });
     });

     //--->drop back to image container

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
