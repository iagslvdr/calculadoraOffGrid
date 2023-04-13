const nome = document.querySelector("#f_descequipamento");
const potencia = document.querySelector("#f_potencia");
const quantidade = document.querySelector("#f_quantidade");
const horas = document.querySelector("#f_horasuso");
const mostraConsumo = document.querySelector(".consumo-diario");
const submit = document.querySelector("#btn_enviar");
const componentes = document.querySelector(".componentes");
const list = document.querySelector("#list");
const editarbutton = document.getElementById("#editar");
const excluirbutton = document.querySelector("#excluir");
const data = [];
var index = 0;
var somaConsumoDiario = 0;

submit.addEventListener("click", () => {
  const consumoDiario = {
    ID: data.length,
    nome: nome.value,
    potencia: potencia.value,
    quantidade: quantidade.value,
    horas: horas.value,
  };
  data.push(consumoDiario);
  imprimirListaItensConsumo();
  imprimirConsumoDiario(consumoDiario);
  nome.value = "";
  potencia.value = "";
  quantidade.value = "";
  horas.value = "";
  index++;
});

function imprimirListaItensConsumo() {
  let listHtml = "";

  data.forEach((element) => {
    if (element.nome == "") {
      listHtml += `<li class="list-group-item">
    <h5>${"Item #" + element.ID}</h5><br>
    ${element.quantidade} unidades<br>
    ${element.potencia} W <br>
    ${element.horas} horas de uso por dia
    <button type="button" class="btn btn-success" onclick="editar()" id="editar">Editar</button>
    <button type="button" class="btn btn-danger" onclick="excluir(${
      element.ID
    })" id="excluir">excluir</button>
    </li>`;
    } else {
      listHtml += `<li class="list-group-item">
    <h5>${element.nome}</h5><br>
    ${element.quantidade} unidades<br>
    ${element.potencia} W <br>
    ${element.horas} horas de uso por dia
    <button type="button" class="btn btn-success" onclick="editar()" id="editar">Editar</button>
    <button type="button" class="btn btn-danger" onclick="excluir(${element.ID})" id="excluir">excluir</button>
    </li>`;
    }
  });
  list.innerHTML = listHtml;
  console.log(data);
}

function imprimirConsumoDiario(consumoDiario) {
  somaConsumoDiario +=
    consumoDiario.potencia * consumoDiario.horas * consumoDiario.quantidade;
  mostraConsumo.innerHTML = somaConsumoDiario;
}

function excluir(id) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].ID == id) {
      data.splice(i, 1);
    }
  }
  imprimirListaItensConsumo();
}
