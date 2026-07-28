/**
 * CBS — Curso Bom Semeador
 * Configurações centralizadas para fácil substituição
 */
const CBS_CONFIG = {
  paymentUrl: 'https://pay.kiwify.com.br/q1vCkd5',
  price: 'R$ 997,00',
  installments: '12x de R$ 97,00',

  whatsapp: {
    phone: '5565999684655',
    message: 'Olá! Seja bem-vindo(a) ao Curso Bom Semeador. Em que posso ajudá-lo(a)?'
  },

  metaPixelId: '1332721619020867'
};

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initSmoothScroll();
  initPurchaseButtons();
  initWhatsAppButton();
  initScrollReveal();
  initStickyCta();
  initHeaderScroll();
  initImageFallbacks();
  applyCbsImages();
});

/* ---- Fallback para imagens ---- */
function initImageFallbacks() {
  const fallback = typeof CBS_IMAGES !== 'undefined' ? CBS_IMAGES.fallback : '';
  if (!fallback) return;

  document.querySelectorAll('img').forEach(img => {
    img.decoding = 'async';
    img.addEventListener('error', () => {
      if (img.src !== fallback) img.src = fallback;
    }, { once: true });
  });
}

/* ---- FAQ Accordion ---- */
function initFaqAccordion() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(other => {
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

/* ---- Smooth scroll ---- */
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
  document.querySelectorAll('[data-action="purchase"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof fbq === 'function') {
        fbq('track', 'InitiateCheckout', {
          content_name: 'Curso Bom Semeador',
          content_category: 'Curso Online',
          value: 997,
          currency: 'BRL'
        });
      }
      window.open(CBS_CONFIG.paymentUrl, '_blank', 'noopener,noreferrer');
    });
  });
}

/* ---- WhatsApp flutuante ---- */
function initWhatsAppButton() {
  const btn = document.getElementById('whatsappFloat');
  if (!btn) return;
  const { phone, message } = CBS_CONFIG.whatsapp;
  btn.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  btn.setAttribute('target', '_blank');
  btn.setAttribute('rel', 'noopener noreferrer');
  btn.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');
}

/* ---- Scroll reveal ---- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ---- Sticky CTA mobile ---- */
function initStickyCta() {
  const sticky = document.getElementById('stickyCta');
  const hero = document.getElementById('inicio');
  if (!sticky || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('is-visible', !entry.isIntersecting);
  }, { threshold: 0 });

  observer.observe(hero);
}

/* ---- Header shadow on scroll ---- */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 20
      ? '0 4px 24px rgba(26,26,24,0.08)'
      : 'none';
  }, { passive: true });
}
