const nome= document.querySelector("#f_descequipamento")
const potencia= document.querySelector("#f_potencia")
const quantidade= document.querySelector("#f_quantidade")
const horas= document.querySelector("#f_horasuso")
const mostraConsumo = document.querySelector(".consumo-diario")
const submit= document.querySelector("#btn_enviar")

submit.addEventListener("click", ()=>{
    
    mostraConsumo.innerHTML=parseInt(horas.value*potencia.value*quantidade.value)
})
