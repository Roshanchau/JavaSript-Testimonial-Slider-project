// learnings-learned to grap an array of elements inside of a div for eg an array of images inside of the indicator can be grabbed by selecting the class of the div and using .children property to grab all the childrens in an array foreg: the array of images by using("indicator").children.
// learnt how to use the for loop and here we can add an eventlistener to every images like below what we did is normally we itirated through every images and added a event Listener i.e. click i.e. whenever we click any of the given images we remove the active class to every images and add a active class to the ones we have clicked.
// and also we grabbed the attribute of the image i.e. the data-id attribute through which we can show the slide of the respective images or description of the respective images.
// ---> here the while we add an callback function to every click we also itirate through every slides on a click to a image and we remove all the active classes from slides and grab the data-id attribute of the image of the one's we have clicked and add an active class of slides to the respective id i.e. show the description about the respective image we have clicked.

const slides = document.querySelector(".slider").children;
const images = document.querySelector(".indicator").children;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    for (let j = 0; j < images.length; j++) {
      images[j].classList.remove("active");
    }
    images[i].classList.add("active");

    const id = images[i].getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }
    slides[id].classList.add("active");
  });
}
