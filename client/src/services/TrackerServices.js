// const baseURL = "http://localhost:8080/";

// // Get elements from a given end point
// export const getElements = (endPoint) => {
//   return fetch(baseURL + endPoint)
//     .then(res => res.json()
//     .then(res => console.log(res)));
// }

// // Post an element to a given endpoint
// export const postElement = (endPoint, payload) => {
//   return fetch(baseURL + endPoint, {
//     method: "POST",
//     body: JSON.stringify(payload),
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// };