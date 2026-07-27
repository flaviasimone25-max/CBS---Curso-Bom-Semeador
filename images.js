/**
 * CBS — Biblioteca de imagens cristãs (Pexels)
 * Bíblia, cruz, igreja, congregação, oração e altar.
 */
const CBS_IMG = (id, w = 800) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&dpr=1`;

const CBS_IMAGES = {
  heroSeed: CBS_IMG(4207903, 900),
  heroFaith: CBS_IMG(32113592, 900),
  heroVoice: CBS_IMG(6774238, 900),
  churchWide: CBS_IMG(208736, 1920),
  churchMedium: CBS_IMG(208736, 1200),
  churchCard: CBS_IMG(208736, 800),
  bibleOpen: CBS_IMG(4207903, 800),
  biblePages: CBS_IMG(4207904, 600),
  bibleNotes: CBS_IMG(4207905, 600),
  bibleHands: CBS_IMG(3760067, 800),
  bibleStudy: CBS_IMG(4207906, 600),
  bibleDesk: CBS_IMG(4207907, 700),
  crossBible: CBS_IMG(8468742, 900),
  crossAltar: CBS_IMG(32113592, 900),
  crossLight: CBS_IMG(2381069, 900),
  prayerBible: CBS_IMG(8468743, 600),
  prayerFaith: CBS_IMG(8468744, 600),
  devotion: CBS_IMG(8468745, 600),
  congregation: CBS_IMG(6774236, 600),
  worship: CBS_IMG(6774238, 600),
  community: CBS_IMG(8468746, 900),
  churchPeople: CBS_IMG(8468747, 800),
  faith1: CBS_IMG(8468748, 600),
  faith2: CBS_IMG(8468749, 600),
  faith3: CBS_IMG(8468750, 600),
  faith4: CBS_IMG(4207908, 600),
  faith5: CBS_IMG(4207909, 600),
  faith6: CBS_IMG(4207910, 600),
  portrait1: CBS_IMG(2379004, 400),
  portrait2: CBS_IMG(774909, 400),
  portrait3: CBS_IMG(1222271, 400),
  fallback: CBS_IMG(32113592, 800)
};

function applyCbsImages() {
  document.querySelectorAll('[data-cbs]').forEach(el => {
    const url = CBS_IMAGES[el.dataset.cbs];
    if (!url) return;
    if (el.tagName === 'IMG') el.src = url;
    else el.style.backgroundImage = `url('${url}')`;
  });
}
