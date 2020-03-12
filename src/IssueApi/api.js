export function get(id) {
  const url = `http://beta-api.sitrack.io/edna/Issue/${id}`;
  return fetch(url, {
    headers: {
      "content-type": "application/json",
      Authorization: "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ==",
      Accept: "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => console.log(error));
}
