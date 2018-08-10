const estrutura = document.querySelector('.row')
const modalbody = document.querySelector('.modal-body')
const titulomodal = document.querySelector('.modal-title')


fetch('https://us.api.battle.net/wow/data/pet/types?locale=pt_BR&apikey=t264dwmdkajejxk9gcmccx9gmpm4mb7y')
.then(resp => resp.json())
.then(json =>{
  for (let value in json.petTypes){
    estrutura.insertAdjacentHTML('beforeend',`<div class="col-lg-4 col-sm-6 text-center mb-4 view overlay">
      <img class="rounded-circle img-fluid d-block mx-auto img-fluid hoverable" src="${fortefraco[json.petTypes[value].id].url}" alt="">
      <div class="mask flex-center">
      <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" data-id="${json.petTypes[value].id}">${json.petTypes[value].name}</button>
      </div>
    </div>`)
  }
  const botoes = document.querySelectorAll('.btn-lg')
  botoes.forEach(botao => botao.addEventListener('click', function(){
    for (let valor in json.petTypes){
      if (json.petTypes[valor].id==botao.dataset.id){
        titulomodal.innerHTML=`Informações sobre o tipo de pet ${fortefraco[json.petTypes[valor].id].nome}`
        modalbody.innerHTML =`<p><span style="color:red; font-size: 1.6em; font-weight:800;">Tipo de pet: </span><span style="font-size: 1.2em; font-weight:800;">${fortefraco[json.petTypes[valor].id].nome}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Forte contra:</span> <span style="font-size: 1.2em; font-weight:800;<span>">${fortefraco[json.petTypes[valor].strongAgainstId].nome}</span></p> <p><span style="color:red; font-size: 1.6em; font-weight:800;">Fraco contra:</span> <span style="font-size: 1.2em; font-weight:800;">${fortefraco[json.petTypes[valor].weakAgainstId].nome}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Quantidade de pets disponiveis:</span> <span style="font-size: 1.2em; font-weight:800">${fortefraco[json.petTypes[valor].id].quantidade}</span></p>`
      }
    }
  }))

})





const fortefraco = {
  "0":{"nome":"Humanoide","url":"img/petypes/humanoid.png","quantidade":"68"},
  "1":{"nome":"Draconiano","url":"img/petypes/dragonkin.png","quantidade":"48"},
  "2":{"nome":"Voador","url":"img/petypes/flying.png","quantidade":"151"},
  "3":{"nome":"Morto-Vivo","url":"img/petypes/undead.png","quantidade":"58"},
  "4":{"nome":"Bicho","url":"img/petypes/critter.png","quantidade":"133"},
  "5":{"nome":"Mágico","url":"img/petypes/magic.png","quantidade":"84"},
  "6":{"nome":"Elemental","url":"img/petypes/elemental.png","quantidade":"87"},
  "7":{"nome":"Fera","url":"img/petypes/beast.png","quantidade":"190"},
  "8":{"nome":"Aquático","url":"img/petypes/water.png","quantidade":"92"},
  "9":{"nome":"Mecânio","url":"img/petypes/mechanical.png","quantidade":"57"}
}
