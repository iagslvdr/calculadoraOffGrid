const nome = document.querySelector("#f_descequipamento");
const potencia = document.querySelector("#f_potencia");
const quantidade = document.querySelector("#f_quantidade");
const horas = document.querySelector("#f_horasuso");
const mostraConsumo = document.querySelector(".consumo-diario");
const submit = document.querySelector("#btn_enviar");
const componentes = document.querySelector(".componentes");
const list = document.querySelector("#list");
const editarbutton = document.querySelector("#editar");
const excluirbutton = document.querySelector("#excluir");
const data = [];
var index = 1;
var somaConsumoDiario = 0;

submit.addEventListener("click", () => {
  const consumoDiario = {
    nome: nome.value,
    potencia: potencia.value,
    quantidade: quantidade.value,
    horas: horas.value,
  };
  data.push(consumoDiario);
  imprimirListaItensConsumo(consumoDiario);
  imprimirConsumoDiario(consumoDiario);
  nome.value = "";
  potencia.value = "";
  quantidade.value = "";
  horas.value = "";
});

function imprimirListaItensConsumo(consumoDiario) {
  const newLi = document.createElement("li");
  newLi.classList.add("list-group-item");
  if (consumoDiario.nome == "") {
    newLi.innerHTML = `
    <h5>${"Item #" + index}</h5><br>
    ${consumoDiario.quantidade} unidades<br>
    ${consumoDiario.potencia} W <br>
    ${consumoDiario.horas} horas de uso por dia
    <button type="button" class="btn btn-success" id="editar">Editar</button>
    <button type="button" class="btn btn-danger" id="excluir">excluir</button>
    `;
    list.appendChild(newLi);
  } else {
    newLi.innerHTML = `
    <h5>${consumoDiario.nome}</h5><br>
    ${consumoDiario.quantidade} unidades<br>
    ${consumoDiario.potencia} W <br>
    ${consumoDiario.horas} horas de uso por dia
    <button type="button" class="btn btn-success" id="editar">Editar</button>
    <button type="button" class="btn btn-danger" id="excluir">excluir</button>
    `;
    list.appendChild(newLi);
  }
  index++;
}

function imprimirConsumoDiario(consumoDiario) {
  somaConsumoDiario +=
    consumoDiario.potencia * consumoDiario.horas * consumoDiario.quantidade;
  mostraConsumo.innerHTML = somaConsumoDiario;
}

if (editarbutton) {
  editarbutton.addEventListener("click", () => {
    console.log("hello world");
  });
}
