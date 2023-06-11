let image = document.querySelector(".slider");
let button = document.getElementById("sliderIcon");
let buttonOne = document.getElementById("sliderIconOne");
let whole = document.getElementById("one");

const property = [
  {
    name: "Awesome Pecky",
    url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=853&q=80",
  },

  {
    name: "Awesome Pecky",
    url:
      "https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?w=900&t=st=1686314947~exp=1686315547~hmac=d79ff61908f803d2077be13d62aaea6af4c6693452c8000ea81bee10e8818d4c",
  },

  {
    name: "Awesome Pecky",
    url:
      "https://img.freepik.com/free-photo/low-angle-shot-facade-white-modern-building-blue-clear-sky_181624-48219.jpg?w=900&t=st=1686315167~exp=1686315767~hmac=59cfce01b1a39e17a72cfb8443bc87e0f0406cb147be334d3327e51340a2beca",
  },

  {
    name: "Awesome Pecky",
    url:
      "https://img.freepik.com/free-photo/road-city_1417-1426.jpg?w=900&t=st=1686315196~exp=1686315796~hmac=a919ddc2062260558d2a0a0297e261d303a88cb5983f73a17272dec3e279880c",
  },

  {
    name: "Awesome Pecky",
    url:
      "https://img.freepik.com/free-photo/bangkok-city-skyline_74190-7280.jpg?w=900&t=st=1686315249~exp=1686315849~hmac=108826f549b3613bb7b428e3a441e88e1b0f5421ce7c05598744e05f1731a660",
  },

  {
    name: "Adjustable Pawm",
    url:
      "http://127.0.0.1:5501/images/3d-rendering-modern-dining-room-living-room-with-luxury-decor.jpg",
  },
];

let count = 1;
let secondCount = 1;

buttonOne.addEventListener("click", (event) => {
  event.preventDefault();
  let randomArray = Math.floor(Math.random() * property.length);
  whole.src = property[randomArray].url;
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  let randomArray = Math.floor(Math.random() * property.length);
  whole.src = property[randomArray].url;
});
