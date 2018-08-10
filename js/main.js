const modalbody = document.querySelector('.modal-body')

const botoes = document.querySelectorAll('.btn-lg')

const faccao = {
	'horde':'Horda',
	'alliance':"Aliança"
}

const definicao = {
	'Humano':'Descobertas recentes mostraram que os humanos são descendentes dos bárbaros Vraikal, guerreiros meio gigantes que vivem em Nortúndria. Os primeiros humanos eram essencialmente um povo disperso e tribal durante milênios, até que a força crescente do império troll forçou sua unificação estratégica. Assim, a nação de Arathor foi formada, junto com sua capital, a cidade-estado de Strom.',
	'Orc':'Ao contrário das outras raças da Horda, os orcs não são nativos de Azeroth. Inicialmente, eles habitavam o exuberante mundo de Draenor, organizados em clãs xamânicos. No entanto, sua pacífica cultura foi abandonada quando Kil jaeden, um lorde demônio da Legião Ardente, corrompeu a raça a fim de usá-la em seu plano de vingança contra os draeneis, exilados de seu próprio mundo natal.',
	'Anão':'Os audaciosos e destemidos anões são uma antiga raça descendente dos terranos — seres elementais de pedra viva criados pelos titãs quando o mundo ainda era jovem. Devido a um estranho mal conhecido como Maldição da Carne, os progenitores terranos dos anões passaram por uma transformação que tornou-lhes o couro pétreo em pele macia. Por fim, as criaturas de carne e osso se arrogaram a alcunha de anões e entalharam nos picos nevados de Khaz Modan a grandiosa cidade de Altaforja',
	'Morto-vivo':'Ao longo da campanha do Lich Rei para dizimar os vivos de Lordaeron, a morte não trouxe consigo o almejado descanso eterno para os humanos. Em vez disso, aqueles que pereceram foram reerguidos na morte-viva para servir como lacaios do Flagelo, forçados a lutar uma guerra profana contra tudo... e todos... que um dia amaram.',
	'Elfo Noturno':'A ancestral e reclusa raça noctiélfica desempenhou um papel fundamental na definição do destino de Azeroth. Ainda hoje os elfos noturnos se lembram da Guerra dos Antigos, ocorrida mais de dez mil anos atrás, quando eles rechaçaram a primeira invasão da Legião Ardente a Azeroth. Séculos depois, membros remanescentes da Legião se uniram aos vis sátiros, e os elfos noturnos novamente enfrentaram a ameaça que se impunha, subjugando as forças que almejavam semear o caos em seu mundo. ',
	'Tauren':'Os pacíficos taurens — conhecidos em sua própria língua como shu halo — caminharam por muito tempo sobre Kalimdor, empenhados em preservar o equilíbrio da natureza em nome de sua deusa, a Mãe Terra. Até recentemente, viviam espalhados pelos Sertões como nômades, caçando as grandes feras kodo nativas da árida região.',
	'Gnomo':'Os inteligentes, enérgicos e muitas vezes excêntricos gnomos apresentam um paradoxo único entre as raças civilizadas de Azeroth. Inventores brilhantes com uma incontestável e animada disposição, os membros desta raça sofreram traições, migrações e quase um genocídio. O notável otimismo em face às calamidades simboliza o espírito verdadeiramente inabalável dos gnomos.',
	'Troll':'Os trolls selvagens de Azeroth são infames pela crueldade, pelo tenebroso misticismo e pelo ódio efervescente que devotam a todas as outras raças. As exceções são a tribo Lançanegra. Atormentada por uma história de subserviência e exílio, a altiva tribo estava à beira da extinção quando o chefe guerreiro Thrall e as poderosas forças da Horda foram arrastados por uma violenta tempestade rumo à remota ilha que servia de lar para os trolls nos Mares do Sul.',
	'Draenei':'Muito antes do titã caído, Sargeras, ter libertado a Legião em Azeroth, ele conquistou o mundo de Argus e seus habitantes, os eredar. Acreditando que esta raça mágica seria um componente crucial em sua sombria jornada para desfazer toda a criação, Sargeras contactou os líderes dos eredar - Kil jaeden, Arquimonde e Velen - e ofereceu-lhes conhecimento e poder em troca de sua lealdade.',
	'Elfo Sangrento':'Por quase 7.000 anos, a sociedade élfica esteve centralizada na Nascente do Sol, uma fonte mágica criada a partir de um frasco de pura energia arcana da primeira Nascente da Eternidade. Alimentado e fortalecido pelas potentes energias da Nascente, o encantado reino dos elfos superiores de Quel Thalas prosperou nas florestas verdejantes ao norte de Lordaeron.',
	'Worgen':'Por trás da imponente Muralha Greymane, uma terrível maldição se espraiou pela isolada nação humana de Guilnéas, transformando muitos de seus intrépidos cidadãos nas aterradoras feras lupinas conhecidas como worgens. Estudiosos humanos debateram acaloradamente sobre as origens da maldição worgen até a revelação de que as feras originais não eram, como se acreditava, pesadelos de outra dimensão, mas druidas noctiélficos amaldiçoados.',
	'Goblin':'Originalmente escravos dos trolls da selva da Ilha de Kezan, os goblins foram forçados a minerar jakamita das entranhas vulcânicas do Monte Jakaro. Os trolls usaram este potente minério para seus rituais de vodu, mas o mesmo causou um efeito inesperado nos escravos que estavam em constante contato as pepitas: a jakamita desenvolveu uma surpreendente inteligência na raça goblin.',
	'Pandaren':'Rodeados de mitos e lendas, raras vezes vistos e ainda mais raramente compreendidos, os enigmáticos pandarens há muito têm sido um mistério para as outras raças de Azeroth. A nobre história do povo pandaren remonta a milhares de anos, muito antes dos impérios humanos e até mesmo da cisão do mundo.',



}


botoes.forEach(botao => botao.addEventListener('click', function(){
		modalbody.innerHTML=
	fetch('https://us.api.battle.net/wow/data/character/races?locale=pt_BR&apikey=t264dwmdkajejxk9gcmccx9gmpm4mb7y')
	.then(resp => resp.json())
	.then(json => {
		for(let flag=0; flag<=json.races.length; flag++){
			if (json.races[flag].id==botao.dataset.id){
				titulomodal.innerHTML = `Informações sobre a raça ${json.races[flag].name}`
				modalbody.innerHTML = `<p><span style="color:red; font-size: 1.6em; font-weight:800;">Raça:</span> <span style="font-size: 1.2em; font-weight:800;">${json.races[flag].name}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Facção:</span> <span style="font-size: 1.2em; font-weight:800;">${faccao[json.races[flag].side]}</span></p><p><span style="color:red; font-size: 1.6em; font-weight:800;">Descrição:</span> <span style="font-size: 1.2em; font-weight:800;">${definicao[json.races[flag].name]}</span></p>`
			}
		}
	})


titulomodal = document.querySelector('.modal-title')







}))
