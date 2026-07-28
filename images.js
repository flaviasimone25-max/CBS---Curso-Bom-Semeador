/**
 * CBS — Imagens alinhadas à jornada do iniciante (persona Anderson)
 */
const CBS_IMAGES = {
  bibliaEstudo: 'images/01-biblia-estudo.jpg',
  montanhaOracao: 'images/02-montanha-oracao.jpg',
  oracao: 'images/03-oracao.jpg',
  pregador: 'images/04-pregador.jpg',
  jornalBiblia: 'images/05-jornal-biblia.jpg',
  bibliaNatureza: 'images/06-biblia-natureza.jpg',
  semente: 'images/07-semente.jpg',

  /* Hero — desejo → chamado → preparação */
  heroRiver: 'images/03-oracao.jpg',
  heroCrossSea: 'images/07-semente.jpg',
  heroPastor: 'images/05-jornal-biblia.jpg',

  /* Banners */
  seaCrossWide: 'images/02-montanha-oracao.jpg',
  seaSunset: 'images/02-montanha-oracao.jpg',
  churchWide: 'images/06-biblia-natureza.jpg',
  churchMedium: 'images/06-biblia-natureza.jpg',
  churchCard: 'images/06-biblia-natureza.jpg',

  crossSea: 'images/02-montanha-oracao.jpg',
  crossAltar: 'images/07-semente.jpg',
  crossHill: 'images/02-montanha-oracao.jpg',
  crossLight: 'images/03-oracao.jpg',
  crossClassic: 'images/07-semente.jpg',
  crossDevotion: 'images/03-oracao.jpg',
  crossBible: 'images/07-semente.jpg',

  splitDores: 'images/03-oracao.jpg',
  pastorPulpit: 'images/04-pregador.jpg',
  priestPray: 'images/03-oracao.jpg',
  priestCross: 'images/07-semente.jpg',

  riverCalm: 'images/05-jornal-biblia.jpg',
  riverFlow: 'images/06-biblia-natureza.jpg',
  riverWide: 'images/02-montanha-oracao.jpg',
  riverMist: 'images/06-biblia-natureza.jpg',
  riverValley: 'images/06-biblia-natureza.jpg',
  seaHorizon: 'images/02-montanha-oracao.jpg',
  seaPeace: 'images/03-oracao.jpg',
  seaCross: 'images/02-montanha-oracao.jpg',

  congregation: 'images/04-pregador.jpg',
  worship: 'images/04-pregador.jpg',

  portrait1: 'images/05-jornal-biblia.jpg',
  portrait2: 'images/03-oracao.jpg',
  portrait3: 'images/06-biblia-natureza.jpg',

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
