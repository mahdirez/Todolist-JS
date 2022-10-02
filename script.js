const form = document.querySelector("form");
const inputTodo = document.querySelector(".inputTodo");
const btnSubmit = document.querySelector(".btnSubmit");
const ulTodo = document.querySelector(".ulTodo");
const filter = document.querySelector(".filter");
const body = document.body;

btnSubmit.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();

  if (inputTodo.value) {
    const todos = document.createElement("div");
    todos.classList.add("todos");

    const li = document.createElement("li");
    li.classList.add("li");
    li.innerText = inputTodo.value;

    const btnList = document.createElement("button");
    btnList.classList.add("btnList");
    btnList.innerHTML = '<i class="bi bi-check-circle"></i>';

    todos.appendChild(li);
    todos.appendChild(btnList);

    ulTodo.appendChild(todos);

    local(inputTodo.value)

    btnList.addEventListener("click", () => {
      li.classList.toggle("done");
      todos.classList.toggle("doneContainer");
      if (btnList.innerHTML == '<i class="bi bi-check-circle"></i>') {
        btnList.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
      } else if (
        btnList.innerHTML == '<i class="bi bi-check-circle-fill"></i>'
      ) {
        btnList.innerHTML = '<i class="bi bi-check-circle"></i>';
      }
    });

    todos.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      todos.remove();
    });
  }

  inputTodo.value = "";
}

filter.addEventListener("click", (e) => {
  console.log(e.target.value);
  console.log(ulTodo.childNodes);
  const todo = ulTodo.childNodes;
  todo.forEach((t) => {
    switch (e.target.value) {
      case "all":
        t.style.display = "flex";
        break;
      case "completed":
        if (t.classList.contains("doneContainer")) {
          t.style.display = "flex";
        } else {
          t.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!t.classList.contains("doneContainer")) {
          t.style.display = "flex";
        } else {
          t.style.display = "none";
        }
        break;
    }
  });
});

function changeBg(number) {
  let check;
  if (body.className) {
    check = body.className;
  }
  body.className = "";
  switch (number) {
    case "1":
      return check === "background1"
        ? false
        : body.classList.add("background1");
    case "2":
      return check === "background2"
        ? false
        : body.classList.add("background2");
    case "3":
      return check === "background3"
        ? false
        : body.classList.add("background3");
    case "4":
      return check === "background4"
        ? false
        : body.classList.add("background4");
  }
}


function local(event){
   let i;
   if(localStorage.getItem("todos")===null){
    i = [];
   }
   else{
    i = JSON.parse(localStorage.getItem("i"))
   }
   i.push(event)
   localStorage.setItem("i",JSON.stringify(i))
}