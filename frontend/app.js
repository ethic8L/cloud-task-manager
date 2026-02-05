const API = "http://localhost:3000";

let token = null;

function showTasks() {
  document.getElementById("authBox").classList.add("hidden");
  document.getElementById("taskBox").classList.remove("hidden");
  loadTasks();
}

function showAuth() {
  document.getElementById("authBox").classList.remove("hidden");
  document.getElementById("taskBox").classList.add("hidden");
}

async function register() {
  const email = emailInput();
  const password = passwordInput();

  await fetch(API + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  alert("Registered!");
}

async function login() {
  const email = emailInput();
  const password = passwordInput();

  const res = await fetch(API + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  token = data.token;

  showTasks();
}

function logout() {
  token = null;
  showAuth();
}

async function addTask() {
  const input = document.getElementById("taskInput");
  const title = input.value;

  if (!title.trim()) return;

  await fetch(API + "/tasks", {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ title })
  });

  input.value = "";   
  loadTasks();
}


async function loadTasks() {
  const res = await fetch(API + "/tasks", {
    headers: authHeader()
  });

  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");

    li.innerHTML = `
        <span style="text-decoration:${t.status === "DONE" ? "line-through" : "none"}">
        ${t.title}
        </span>

        <div>
        ${t.status === "TODO"
            ? `<button onclick="markDone('${t._id}')">✔️</button>`
            : `<button onclick="markTodo('${t._id}')">🔄</button>`
        }
        <button onclick="deleteTask('${t._id}')">❌</button>
        </div>
    `;

    list.appendChild(li);
    });
}

async function deleteTask(id) {
  await fetch(API + "/tasks/" + id, {
    method: "DELETE",
    headers: authHeader()
  });

  loadTasks();
}

function authHeader() {
  return {
    "Content-Type": "application/json",
    Authorization: token
  };
}

function emailInput() {
  return document.getElementById("email").value;
}

function passwordInput() {
  return document.getElementById("password").value;
}

async function markDone(id) {
  await fetch(API + "/tasks/" + id, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ status: "DONE" })
  });
  loadTasks();
}

async function markTodo(id) {
  await fetch(API + "/tasks/" + id, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ status: "TODO" })
  });
  loadTasks();
}

