
const apiUrl = process.env.REACT_APP_API_URL;

export const fetchData = () => {
  return fetch(`${apiUrl}/users`)
    .then(response => response.json())
    .catch(error => console.error('Error:', error));
};
