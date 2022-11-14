const p = document.querySelector("p");
console.log(p);
// p.remove();

const allP = document.querySelectorAll("p");

allP.forEach((el) => {
  //   el.remove();
  //   console.log(el.textContent);
  el.textContent = "********";
});
