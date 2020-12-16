const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const findPrev = (id) => {
  let prefix = id.id.slice(0, 1);
  let number = id.id.slice(1);
  if (number > 1) number--;
  else return null;
  return prefix + number;
};

const findNext = (id) => {
  let prefix = id.id.slice(0, 1);
  let number = id.id.slice(1);
  if (number < 3) number++;
  else return null;
  return prefix + number;
};

const movePrev = (id) => {
  const prevID = findPrev(id);
  const prevElement = document.querySelector(`#${prevID}`);
  id.classList.remove("flex");
  id.classList.add("hidden");

  prevElement.classList.remove("hidden");
  prevElement.classList.add("flex");
};

const moveNext = (id) => {
  const nextID = findNext(id);
  const nextElement = document.querySelector(`#${nextID}`);
  id.classList.remove("flex");
  id.classList.add("hidden");

  nextElement.classList.remove("hidden");
  nextElement.classList.add("flex");
};
