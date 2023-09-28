// const BASE_URL = "https://api.annamaltseva.diploma.nomoredomainsicu.ru";
const BASE_URL = "http://localhost:3001";
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const registration = (item) => {
  console.log('Api', item);
  const { name, email, password } = item;
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then((res) => checkResponse(res));
};

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => checkResponse(res));
};

export const userEdit = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  }).then((res) => checkResponse(res));
};

export const tokencheck = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then((res) => checkResponse(res));
};
