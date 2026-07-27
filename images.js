/**
 * CBS — Imagens cristãs (Pexels CDN confiável)
 */
const CBS_IMG = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=1`;

const CBS_IMAGES = {
  bibleStudy: CBS_IMG(2724263, 900),
  bibleHands: CBS_IMG(3760067, 900),
  churchInterior: CBS_IMG(208736, 1920),
  worshipHands: CBS_IMG(853408, 900),
  crossChurch: CBS_IMG(3776151, 900),
  congregation: CBS_IMG(6774236, 600),
  congregationWide: CBS_IMG(6774238, 800),
  praying: CBS_IMG(8460210, 600),
  microphone: CBS_IMG(164745, 600),
  books: CBS_IMG(159866, 600),
  prayerBible: CBS_IMG(3776149, 600),
  community: CBS_IMG(8460161, 900),
  messageAlive: CBS_IMG(3992943, 600),
  faithScene: CBS_IMG(3993449, 800),
  worshipScene: CBS_IMG(3993448, 900),
  churchLight: CBS_IMG(3997379, 800),
  bibleOpen: CBS_IMG(1370296, 800),
  altar: CBS_IMG(1370295, 800),
  candleFaith: CBS_IMG(1598505, 600),
  trust: CBS_IMG(256541, 900),
  portrait1: CBS_IMG(2379004, 400),
  portrait2: CBS_IMG(774909, 400),
  portrait3: CBS_IMG(1222271, 400),
  fallback: CBS_IMG(2724263, 800)
};

function imgUrl(id, w) {
  return CBS_IMG(id, w);
}
