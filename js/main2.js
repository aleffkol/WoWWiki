const estrutura = document.querySelector('.row')
const modalbody = document.querySelector('.modal-body')

const classes = [
	{
	"nome":"Guerreiro",
	"classes":"Draenei, Anão, Gnomo, Humano, Elfo Noturno, Elfo Sangrento, Worgen, Goblin, Orc, Tauren, Troll, Morto-Vivo, Pandaren",
	"funcao":"Tanque, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/RPOZRXV8MCMC1457037487166.png"

	},
	{
	"nome":"Paladino",
	"classes":"Draenei, Anão, Humano, Elfo Sangrento, Tauren",
	"funcao":"Tanque, Cura, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/19XLRJMFTB881457037521481.png"
	},
	{
	"nome":"Caçador",
	"classes":"Draenei, Anão, Gnomo, Humano, Elfo Noturno, Elfo Sangrento, Worgen, Goblin, Orc, Tauren, Troll, Morto-Vivo, Pandaren",
	"funcao":"Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/PHD55VWE4ZG71457037542377.png"
	},
	{
	"nome":"Ladino",
	"classes":"Anão, Gnomo, Goblin, Humano, Elfo Noturno, Elfo Sangrento, Worgen, Orc, Troll, Morto-Vivo, Pandaren",
	"funcao":"Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/ORHZR0HIQOW81457037509031.png"
	},
	{
	"nome":"Sacerdote",
	"classes":"Dranei, Anão, Gnomo, Humano, Elfo Noturno, Worgen, Elfo sangrento, Goblin, Tauren, Troll, Morto-Vivo, Pandaren",
	"funcao":"Cura, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/XZAE7Z08UVZM1457037515730.png"
	},
	{
	"nome":"Cavaleiro da morte",
	"classes":"Draenei, Gnomo, Anão, Humano, 	Elfo Noturno, Elfo Sangrento, Worgen, Goblin, Orc, Tauren, Troll, Morto-Vivo",
	"funcao":"Tanque, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/IMLWRYPWBRYL1457037563416.png"
	},
	{
	"nome":"Xamã",
	"classes":"Draenei, Anão, Goblin, Orc, Tauren, Troll, Pandaren",
	"funcao":"Cura, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/IJFM2IEVGM6N1457037501982.png"
	},
	{
	"nome":"Mago",
	"classes":"Draenei, Anão, Gnomo, Humano, Elfo Noturno, Elfo Sangrento, Orc, Tauren",
	"funcao":"Tanque, Cura, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/OGQYW3GHV8RL1457037534068.png"
	},
	{
	"nome":"Bruxo",
	"classes":"Anão, Gnomo, Goblin, Worgen, Humano, Elfo Sangrento, Orc, Troll, Morto-Vivo",
	"funcao":"Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/ODSDYFWLT9B01457037493681.png"
	},
	{
	"nome":"Monge",
	"classes":"Draenei, Anão, Gnomo, Human, Elfo Sangrento, Elfo Noturno, Orc, Tauren, Troll, Morto-Vivo, Pandaren",
	"funcao":"Tanque, Cura, Dano",
	"url":"https://orig00.deviantart.net/7d16/f/2016/297/f/e/_wow__pandaren__render__by_popokupingupop90-dam61bp.png"
	},
	{
	"nome":"Druida",
	"classes":"Elfo Noturno, Worgen, Tauren, Troll",
	"funcao":"Tanque, Cura, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/gallery/LI82P1DRVSNA1447154373009.png"
	},
	{
	"nome":"Caçador de Demônios",
	"classes":"Elfo Sangrento, Elfo Noturno",
	"funcao":"Tanque, Dano",
	"url":"http://bnetcmsus-a.akamaihd.net/cms/template_resource/4B35S4Z5N11X1457037556292.png"
	}
]


titulomodal = document.querySelector('.modal-title')

  for (let value in classes){
  estrutura.insertAdjacentHTML('beforeend', `<div class="col-lg-4 col-sm-6 text-center mb-4 view overlay">
    <img class="rounded-circle img-fluid d-block mx-auto img-fluid hoverable" src="${classes[value].url}" alt="">
    <h3>${classes[value].nome}</h3>
    <div class="mask flex-center">
    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" data-id="${classes[value].nome}">${classes[value].nome}</button>
    </div>
  </div>`)
}

const botoes = document.querySelectorAll('.btn-lg')
botoes.forEach(botao => botao.addEventListener('click',function(){
  modalbody.innerHTML=""
  for (let valor in classes){
    if(botao.dataset.id == classes[valor].nome){
      titulomodal.innerHTML=`Informações sobre a classe ${classes[valor].nome}`
      modalbody.innerHTML = `<p><span style="color:red; font-size: 1.6em; font-weight:800;">Classe:</span> <span style="font-size: 1.2em; font-weight:800;">${classes[valor].nome}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Raças:</span>
      <span style="font-size: 1.2em; font-weight:800;">${classes[valor].classes}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Funções:</span> <span style="font-size: 1.2em; font-weight:800;">${classes[valor].funcao}</span></p>`
    }
  }
}))
