
const API_TOKEN = "c1d4b2596391a25a380f607f473599192aa00c6a4c903f388301e7faad33d94f";
const API_BASE_URL = "https://gorest.co.in/public/v2/users/";

const requestOptions = (method) => {
  return {
    method,
    headers: {
      "Authorization": `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json"
    },
    redirect: "follow"
  };
};

const handleErrors = (response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  }
  
  // ...
  
  const getUsers = async () => {
    loader.style.display = "none";
    try {
      const response = await fetch(API_BASE_URL, requestOptions("GET"));
      const users = await handleErrors(response);
      // ...
    } catch (error) {
      console.log(error.message);
    }
    loader.style.display = "none";
  };
  

const deleteUser = async (id) => {
  list.style.display = "none";
  try {
    await fetch(`${API_BASE_URL}${id}`, requestOptions("DELETE"));
    await getUsers();
  } catch (error) {
    console.log(error);
  }
  list.style.display = "block";
};

getUsers();