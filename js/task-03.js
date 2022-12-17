const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const tagRef = document.querySelector(".gallery");

const makeItemMarkup = (image) => {
  return `
      <li><img src="${image.url}" alt="${image.alt}" width = 215 height=144></li>
`;
};

const makeListMarkup = images.map(makeItemMarkup).join("");

tagRef.insertAdjacentHTML("afterbegin", makeListMarkup);

tagRef.style.display = "flex";
tagRef.style.gap = "20px";
tagRef.style.listStyle = "none";
tagRef.style.margin = "0";
tagRef.style.padding = "0";
