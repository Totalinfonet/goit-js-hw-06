const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementButtonRef = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButtonRef = document.querySelector(
  'button[data-action="increment"]'
);
const valueRef = document.querySelector("#value");

decrementButtonRef.addEventListener("click", () => {
  counterValue.decrement();
  valueRef.textContent = counterValue.value;
});
incrementButtonRef.addEventListener("click", () => {
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
