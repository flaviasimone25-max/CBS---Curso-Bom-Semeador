/**
 * CBS — 7 imagens, cada uma com uso principal distinto (sem repetir em excesso)
 */
const CBS_IMAGES = {
  bibliaEstudo: 'images/01-biblia-estudo.jpg',
  montanhaOracao: 'images/02-montanha-oracao.jpg',
  oracao: 'images/03-oracao.jpg',
  pregador: 'images/04-pregador.jpg',
  jornalBiblia: 'images/05-jornal-biblia.jpg',
  bibliaNatureza: 'images/06-biblia-natureza.jpg',
  semente: 'images/07-semente.jpg',

  /* Hero: homem na montanha · semente · pregador */
  heroRiver: 'images/02-montanha-oracao.jpg',
  heroCrossSea: 'images/07-semente.jpg',
  heroPastor: 'images/04-pregador.jpg',

  /* Banners — um arquivo por bloco */
  seaCrossWide: 'images/04-pregador.jpg',
  seaSunset: 'images/02-montanha-oracao.jpg',
  churchWide: 'images/01-biblia-estudo.jpg',
  churchMedium: 'images/05-jornal-biblia.jpg',
  churchCard: 'images/06-biblia-natureza.jpg',

  crossSea: 'images/01-biblia-estudo.jpg',
  crossAltar: 'images/07-semente.jpg',
  crossHill: 'images/05-jornal-biblia.jpg',
  crossLight: 'images/04-pregador.jpg',
  crossClassic: 'images/06-biblia-natureza.jpg',
  crossDevotion: 'images/02-montanha-oracao.jpg',
  crossBible: 'images/07-semente.jpg',

  splitDores: 'images/04-pregador.jpg',
  pastorPulpit: 'images/04-pregador.jpg',
  priestPray: 'images/02-montanha-oracao.jpg',
  priestCross: 'images/07-semente.jpg',

  riverCalm: 'images/05-jornal-biblia.jpg',
  riverFlow: 'images/06-biblia-natureza.jpg',
  riverWide: 'images/01-biblia-estudo.jpg',
  riverMist: 'images/02-montanha-oracao.jpg',
  riverValley: 'images/06-biblia-natureza.jpg',
  seaHorizon: 'images/01-biblia-estudo.jpg',
  seaPeace: 'images/05-jornal-biblia.jpg',
  seaCross: 'images/04-pregador.jpg',

  congregation: 'images/04-pregador.jpg',
  worship: 'images/01-biblia-estudo.jpg',

  portrait1: 'images/05-jornal-biblia.jpg',
  portrait2: 'images/04-pregador.jpg',
  portrait3: 'images/02-montanha-oracao.jpg',

  fallback: 'images/07-semente.jpg'
};

function applyCbsImages() {
  document.querySelectorAll('[data-cbs]').forEach(el => {
    const url = CBS_IMAGES[el.dataset.cbs];
    if (!url) return;
    if (el.tagName === 'IMG') {
      el.src = url;
    } else {
      el.style.backgroundImage = `url('${url}')`;
    }
  });
}
