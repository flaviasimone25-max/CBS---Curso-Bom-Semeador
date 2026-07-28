/**
 * CBS — Imagens clássicas cristãs
 * Cruz, padre/pastor, igreja, rios e mar.
 */
const CBS_IMG = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=1`;

const CBS_IMAGES = {
  /* Hero */
  heroRiver: CBS_IMG(2441454, 900),
  heroCrossSea: CBS_IMG(18929145, 900),
  heroPastor: CBS_IMG(6266086, 900),

  /* Banners */
  seaCrossWide: CBS_IMG(12003150, 1920),
  seaSunset: CBS_IMG(248797, 1920),
  churchWide: CBS_IMG(208736, 1920),
  churchMedium: CBS_IMG(208736, 1200),
  churchCard: CBS_IMG(208736, 800),

  /* Cruz clássica */
  crossSea: CBS_IMG(18929145, 800),
  crossAltar: CBS_IMG(32113592, 800),
  crossHill: CBS_IMG(2683370, 600),
  crossLight: CBS_IMG(2381069, 900),
  crossClassic: CBS_IMG(2683371, 600),
  crossDevotion: CBS_IMG(2683372, 600),

  /* Padres & pastores */
  pastorPulpit: CBS_IMG(6266086, 800),
  priestPray: CBS_IMG(8817474, 600),
  priestCross: CBS_IMG(8857686, 600),

  /* Natureza — rios & mar */
  riverCalm: CBS_IMG(2441454, 600),
  riverFlow: CBS_IMG(2441457, 600),
  riverWide: CBS_IMG(2441458, 800),
  riverMist: CBS_IMG(2699415, 600),
  riverValley: CBS_IMG(1770315, 700),
  seaHorizon: CBS_IMG(1007657, 800),
  seaPeace: CBS_IMG(1179229, 800),
  seaCross: CBS_IMG(12003150, 900),

  /* Igreja & congregação */
  congregation: CBS_IMG(6774236, 600),
  worship: CBS_IMG(6774238, 600),

  /* Depoimentos */
  portrait1: CBS_IMG(2379004, 400),
  portrait2: CBS_IMG(774909, 400),
  portrait3: CBS_IMG(1222271, 400),

  fallback: CBS_IMG(18929145, 800)
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
