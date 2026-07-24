/**
 * CBS — Curso Bom Semeador
 * Configurações centralizadas para fácil substituição
 */
const CBS_CONFIG = {
  // [SUBSTITUIR: LINK DE PAGAMENTO] — atualmente apontando para Kiwify
  paymentUrl: 'https://pay.kiwify.com.br/q1vCkd5',

  whatsapp: {
    phone: '5565999684655',
    message: 'Olá! Seja bem-vindo(a) ao Curso Bom Semeador. Em que posso ajudá-lo(a)?'
  },

  metaPixelId: '1332721619020867'
};

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFaqAccordion();
  initSmoothScroll();
  initPurchaseButtons();
  initWhatsAppButton();
});

/* ---- Menu mobile ---- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (!toggle || !mobileNav) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('is-open');
    mobileNav.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('is-open');
      mobileNav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---- FAQ Accordion ---- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('is-open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ---- Smooth scroll para âncoras internas ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

/* ---- Botões de compra ---- */
function initPurchaseButtons() {
  const buttons = document.querySelectorAll('[data-action="purchase"]');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.open(CBS_CONFIG.paymentUrl, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ---- WhatsApp flutuante ---- */
function initWhatsAppButton() {
  const btn = document.getElementById('whatsappFloat');
  if (!btn) return;

  const { phone, message } = CBS_CONFIG.whatsapp;
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  btn.href = url;
  btn.setAttribute('target', '_blank');
  btn.setAttribute('rel', 'noopener noreferrer');
  btn.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
}
