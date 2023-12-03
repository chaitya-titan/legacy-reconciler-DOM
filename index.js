let todos = [
  {
    id: 1,
    title: "some title",
    desc: "some description",
  },
  {
    id: 2,
    title: "check",
    desc: "check description",
  },
  {
    id: 3,
    title: "Hello",
    desc: "Hello description",
  },
];

function updateTodosOnScreen(todos) {
  console.log("todos: ", todos);
  var parent = document.getElementById("area");
  var currentChildren = Array.from(parent.children);
  console.log(currentChildren);
  let added = 0;
  let updated = 0;
  let deleted = 0;

  todos.forEach((todo) => {
    let existingChild = currentChildren.find((child) => {
      return child.id === String(todo.id);
    });

    if (existingChild) {
      updated++;
      existingChild.children[0].innerHTML = todo.title;
      existingChild.children[1].innerHTML = todo.desc;

      currentChildren = currentChildren.filter(function (child) {
        return child !== existingChild;
      });
    } else {
      added++;
      let child = document.createElement("div");
      child.id = todo.id;
      var title = document.createElement("h4");
      var desc = document.createElement("p");
      var btn = document.createElement("button");
      title.innerHTML = todo.title;
      desc.innerHTML = todo.desc;
      btn.innerHTML = "Delete";
      btn.dataset.id = todo.id; // Use dataset for custom attributes
      btn.onclick = function () {
        todos = todos.filter((t) => t.id !== Number(btn.dataset.id));
        updateTodosOnScreen(todos);
      };
      child.appendChild(title);
      child.appendChild(desc);
      child.appendChild(btn);
      parent.appendChild(child);
    }
  });

  currentChildren.forEach(function (child) {
    deleted++;
    parent.removeChild(child);
  });

  console.log("added: ", added, "updated: ", updated, "removed: ", deleted);
}

updateTodosOnScreen(todos);

function onPress() {
  var title = document.getElementById("title").value;
  var desc = document.getElementById("desc").value;
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  let id = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1; // Set the new ID correctly
  todos.push({ id: id, title: title, desc: desc });
  updateTodosOnScreen(todos);
  console.log(todos);
}
