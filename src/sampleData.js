import moment from "moment";
export const sampleData = [
  {
    id: 1,
    titulo: "Arreglar error al dar de alta",
    contenido: "El error se da en el ABM de clientes",
    estado: "open",
    usuario: "aceccoli",
    fecha: 1579263883,
    modificado: null
  },
  {
    id: 2,
    titulo: "ABM Productos",
    contenido: "Desarrollar el ABM de productos",
    estado: "closed",
    usuario: "aceccoli",
    fecha: 1579263883,
    modificado: 1579587883
  },
  {
    id: 3,
    titulo: "Arreglar error al dar de alta",
    contenido: "El error se da en el ABM de clientes",
    estado: "open",
    usuario: "aceccoli",
    fecha: 1579458283,
    modificado: null
  },
  {
    id: 4,
    titulo: "ABM Productos",
    contenido: "Desarrollar el ABM de productos",
    estado: "closed",
    usuario: "aceccoli",
    fecha: 1579458283,
    modificado: 1579587883
  }
];

//retorna un json con los issues almacenados localmente
function load() {
  const issuesStr = localStorage.getItem("issues");
  if (issuesStr) {
    return JSON.parse(issuesStr);
  }
  return [];
}
//guarda la lista de issues
function save(issues) {
  localStorage.setItem("issues", JSON.stringify(issues));
}

export function listIssues() {
  return load();
}
//recibe un issue y le asigna los valores faltantes
export function addIssue(issue) {
  const issues = load();

  issue.id = issues.length + 1;
  issue.fecha = moment().unix();
  issue.estado = "open";

  issues.push(issue);
  save(issues);
}
//recibe un id y lo busca en el json
export function get(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) return filtered[0];
  return null;
}
//recibe un id, lo busca en el json, y cambia el estado a cerrado
export function close(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) {
    const issue = filtered[0];
    issue.estado = "closed";
    issue.modificado = moment().unix();
    save(issues);
  }
}
//recibe un id, lo busca en el json y cambia estado a abierto
export function reopen(id) {
  const issues = load();
  const filtered = issues.filter(i => i.id === id);
  if (filtered.length > 0) {
    const issue = filtered[0];
    issue.estado = "open";
    issue.modificado = moment().unix();
    save(issues);
  }
}
