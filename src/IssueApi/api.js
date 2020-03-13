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

export function update(values) {
  const url = `http://beta-api.sitrack.io/edna/Issue/${values.id}`;
  fetch(url, {
    method: "PUT",
    body: JSON.stringify({
      titulo: values.titulo
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: "basic Z3VpbGhlcm1lLmJldGE6YmV0YQ=="
    }
  })
    .then(res => res.json())
    .then(response => console.log("Success:", response))
    .catch(error => console.error("Error:", error));
}

export function updateEstado(values) {
  if (values.estado === "open") {
    values.estado = "closed";
  } else if (values.estado === "closed") {
    values.estado = "open";
  }
  return values;
}
