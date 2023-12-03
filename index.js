let todos = [
  {
    title: "some title",
    desc: "some description",
  },
  {
    title: "check",
    desc: "check description",
  },
  {
    title: "Hello",
    desc: "Hello description",
  },
];

function updateTodosOnScreen() {
  var parent = document.getElementById("area");
  parent.innerHTML = "";
  let child;
  let added = 0;

  todos.forEach((todo) => {
    added++;
    child = document.createElement("div");
    var title = document.createElement("h1");
    var desc = document.createElement("p");
    var btn = document.createElement("button");
    title.innerHTML = todo.title;
    desc.innerHTML = todo.desc;
    btn.innerHTML = "Delete";
    btn.id = title;
    btn.onclick = function () {
      todos = todos.filter((todo) => todo.title !== title.innerHTML);
      updateTodosOnScreen();
    };
    child.appendChild(title);
    child.appendChild(desc);
    child.appendChild(btn);
    parent.appendChild(child);
  });

  console.log(added);
}

updateTodosOnScreen();

function onPress() {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  todos.push({ title: title, desc: desc });
  updateTodosOnScreen();
  console.log(todos);
}
