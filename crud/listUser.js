const API_KEY = "c1d4b2596391a25a380f607f473599192aa00c6a4c903f388301e7faad33d94f";
const API_BASE_URL = "https://gorest.co.in/public/v2/users";

const titleElement = document.getElementById("title");
const nameInput = document.getElementById("userName");
const emailInput = document.getElementById("email");
const genderInput = document.getElementById("gender");
const statusInput = document.getElementById("status");
const formElement = document.querySelector(".form");
const loaderElement = document.getElementById("loader");
const submitButton = document.getElementById("submit");

let editUserId = '';

function setTitle(title) {
  titleElement.textContent = title;
}

function showLoader() {
  loaderElement.style.display = "block";
  formElement.style.display = "none";
}

function hideLoader() {
  loaderElement.style.display = "none";
  formElement.style.display = "block";
}

function setFormData(user) {
  nameInput.value = user.name;
  emailInput.value = user.email;
  genderInput.value = user.gender;
  statusInput.value = user.status;
}

async function fetchUserById(userId) {
  showLoader();
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const user = await response.json();
    setFormData(user.data);
    hideLoader();
  } catch (error) {
    console.error(error);
  }
}

async function updateUser(userId, userData) {
  try {
    const response = await fetch(`${API_BASE_URL}/${userId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = "./listUser.html";
  } catch (error) {
    console.error(error);
  }
}

async function createUser(userData) {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();
    console.log(data);
    window.location.href = "./listUser.html";
  } catch (error) {
    console.error(error);
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    gender: genderInput.value,
    status: statusInput.value,
  };
  if (editUserId) {
    updateUser(editUserId, userData);
  } else {
    createUser(userData);
  }
}

function initializeForm() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("editId");
  if (userId) {
    editUserId = userId;
    setTitle("Edit user");
    submitButton.textContent = "Save Changes";
    fetchUserById(userId);
  } else {
    setTitle("Create user");
    submitButton.textContent = "Create";
  }
  formElement.addEventListener("submit", handleSubmit);
}

initializeForm();