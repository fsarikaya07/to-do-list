const ekleEl = document.querySelector("#ekle");
const ulEl = document.querySelector("#my-ul");
const inputEl = document.querySelector("#input");
const toDo = document.querySelector("to-do");

const createValue = () => {
  const li = document.createElement("li");
  li.classList.add("list");
  li.innerHTML = `<a href="#">${inputEl.value}</a> <i class="fa-regular xBtn fa-circle-xmark"></i>`;
  ulEl.appendChild(li);
  const xBtn = document.querySelectorAll(".xBtn");

  xBtn.forEach((x) => {
    x.addEventListener("click", () => {
      x.parentElement.classList.add("d-none");
    });
  });
};

const creatLi = () => {
  const input = document.getElementById("input");
  createValue();
  inputEl.value=""
};

ekleEl.addEventListener("click", creatLi);

inputEl.addEventListener("keyup", (e)=>{
    if(e.code==="Enter"){
        ekleEl.click()
    }
});
