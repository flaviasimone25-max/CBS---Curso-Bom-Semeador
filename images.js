/**
 * CBS — 7 imagens exclusivas do curso
 */
const CBS_IMAGES = {
  bibliaEstudo: 'images/01-biblia-estudo.jpg',
  montanhaOracao: 'images/02-montanha-oracao.jpg',
  oracao: 'images/03-oracao.jpg',
  pregador: 'images/04-pregador.jpg',
  jornalBiblia: 'images/05-jornal-biblia.jpg',
  bibliaNatureza: 'images/06-biblia-natureza.jpg',
  semente: 'images/07-semente.jpg',

  /* Hero */
  heroRiver: 'images/02-montanha-oracao.jpg',
  heroCrossSea: 'images/01-biblia-estudo.jpg',
  heroPastor: 'images/04-pregador.jpg',

  /* Banners */
  seaCrossWide: 'images/02-montanha-oracao.jpg',
  seaSunset: 'images/02-montanha-oracao.jpg',
  churchWide: 'images/01-biblia-estudo.jpg',
  churchMedium: 'images/01-biblia-estudo.jpg',
  churchCard: 'images/01-biblia-estudo.jpg',

  /* Fé & cruz */
  crossSea: 'images/02-montanha-oracao.jpg',
  crossAltar: 'images/07-semente.jpg',
  crossHill: 'images/02-montanha-oracao.jpg',
  crossLight: 'images/03-oracao.jpg',
  crossClassic: 'images/07-semente.jpg',
  crossDevotion: 'images/03-oracao.jpg',
  crossBible: 'images/07-semente.jpg',

  /* Ministério */
  splitDores: 'images/04-pregador.jpg',
  pastorPulpit: 'images/04-pregador.jpg',
  priestPray: 'images/03-oracao.jpg',
  priestCross: 'images/07-semente.jpg',

  /* Estudo & natureza */
  riverCalm: 'images/05-jornal-biblia.jpg',
  riverFlow: 'images/06-biblia-natureza.jpg',
  riverWide: 'images/02-montanha-oracao.jpg',
  riverMist: 'images/06-biblia-natureza.jpg',
  riverValley: 'images/06-biblia-natureza.jpg',
  seaHorizon: 'images/02-montanha-oracao.jpg',
  seaPeace: 'images/02-montanha-oracao.jpg',
  seaCross: 'images/02-montanha-oracao.jpg',

  /* Congregação */
  congregation: 'images/04-pregador.jpg',
  worship: 'images/04-pregador.jpg',

  /* Depoimentos */
  portrait1: 'images/03-oracao.jpg',
  portrait2: 'images/06-biblia-natureza.jpg',
  portrait3: 'images/04-pregador.jpg',

  fallback: 'images/01-biblia-estudo.jpg'
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
