const baseURL = "http://localhost:8080/";

export const getElements = (endPoint) => {
  return fetch(baseURL + endPoint)
    .then(res => res.json()
    .then(res => console.log(res)));
}