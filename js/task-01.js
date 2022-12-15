const elementRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${elementRef.length}`);
console.log("");
for (let i = 0; i < elementRef.length; i += 1) {
  console.log(`Category: ${elementRef[i].firstElementChild.textContent}`);
  console.log(`Elements: ${elementRef[i].lastElementChild.children.length}`);
  console.log("");
}
