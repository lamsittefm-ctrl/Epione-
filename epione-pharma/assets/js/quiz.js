/* ═══════════════════════════════════════════════════════════════
   EPIONE PHARMA — Diagnostic Quiz Engine
   ═══════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const quizData = [
    {
      question: 'Quel est votre objectif bien-être principal ?',
      options: [
        { value: 'energie', label: 'Retrouver mon énergie', emoji: '⚡', category: 'vitalite' },
        { value: 'sommeil', label: 'Mieux dormir et récupérer', emoji: '🌙', category: 'sommeil' },
        { value: 'jeunesse', label: 'Préserver ma jeunesse', emoji: '✨', category: 'anti-age' },
        { value: 'fertilité', label: 'Booster ma fertilité', emoji: '🌱', category: 'fertilité' },
        { value: 'focus', label: 'Améliorer ma concentration', emoji: '🧠', category: 'focus' }
      ]
    },
    {
      question: 'Quel est votre profil ?',
      options: [
        { value: 'femme', label: 'Femme', emoji: '👩', gender: 'female' },
        { value: 'homme', label: 'Homme', emoji: '👨', gender: 'male' }
      ]
    },
    {
      question: 'Quel est votre tranche d\'âge ?',
      options: [
        { value: '20-30', label: '20-30 ans', emoji: '🌻', ageGroup: 'young' },
        { value: '30-40', label: '30-40 ans', emoji: '🌺', ageGroup: 'adult' },
        { value: '40-50', label: '40-50 ans', emoji: '🌸', ageGroup: 'mature' },
        { value: '50+', label: '50 ans et plus', emoji: '🌹', ageGroup: 'senior' }
      ]
    },
    {
      question: 'Quel est votre rythme de vie ?',
      options: [
        { value: 'intense', label: 'Intense et stressant', emoji: '🔥', lifestyle: 'intense' },
        { value: 'actif', label: 'Actif mais équilibré', emoji: '💪', lifestyle: 'active' },
        { value: 'sedentaire', label: 'Plutôt sédentaire', emoji: '🪑', lifestyle: 'sedentary' },
        { value: 'sportif', label: 'Sportif régulier', emoji: '🏃', lifestyle: 'sporty' }
      ]
    },
    {
      question: 'Quelle durée de cure préférez-vous ?',
      options: [
        { value: '1mois', label: '1 mois — Découverte', emoji: '🔍', duration: '1' },
        { value: '3mois', label: '3 mois — Résultats visibles', emoji: '🎯', duration: '3', recommended: true },
        { value: '6mois', label: '6 mois — Transformation', emoji: '🌟', duration: '6' }
      ]
    },
    {
      question: 'Quel est votre budget mensuel ?',
      options: [
        { value: 'petit', label: 'Moins de 150 DH', emoji: '💰', budget: 'low' },
        { value: 'moyen', label: 'Entre 150 et 250 DH', emoji: '💎', budget: 'mid', recommended: true },
        { value: 'large', label: 'Plus de 250 DH', emoji: '👑', budget: 'high' }
      ]
    }
  ];

  const recommendations = {
    female: {
      energie: { pack: 'pack-vitalite-eclat', alt: ['vitavin-woman', 'melival'] },
      sommeil: { pack: 'pack-nuits-paisibles', alt: ['melival', 'menalya'] },
      jeunesse: { pack: 'pack-vitalite-eclat', alt: ['vitavin-woman', 'condensyl'] },
      fertilité: { pack: 'pack-maternite-sereine', alt: ['procrelia-femme', 'ferfolya'] },
      focus: { pack: 'pack-vitalite-eclat', alt: ['vitavin-woman', 'vitavin-cognivin'] }
    },
    male: {
      energie: { pack: 'pack-peak-performance', alt: ['vitavin-man', 'vitavin-cognivin'] },
      sommeil: { pack: 'pack-peak-performance', alt: ['melival', 'vitavin-man'] },
      jeunesse: { pack: 'pack-peak-performance', alt: ['vitavin-man', 'condensyl'] },
      fertilité: { pack: 'pack-vitalite-fertile', alt: ['procrelia-homme', 'vitavin-erovin'] },
      focus: { pack: 'pack-peak-performance', alt: ['vitavin-cognivin', 'vitavin-man'] }
    }
  };

  let currentStep = 0;
  let answers = {};
  let totalSteps = quizData.length;

  function init() {
    const quizContainer = document.getElementById('quiz-app');
    if (!quizContainer) return;

    renderProgress();
    renderStep(0);
    bindEvents();
  }

  function renderProgress() {
    const container = document.querySelector('.quiz-progress');
    if (!container) return;
    container.innerHTML = quizData.map((_, i) =>
      `<div class="quiz-progress-step ${i === 0 ? 'active' : ''}" data-step="${i}"></div>`
    ).join('');
  }

  function renderStep(index) {
    const container = document.querySelector('.quiz-steps');
    if (!container) return;

    const data = quizData[index];
    if (!data) return;

    container.innerHTML = `
      <div class="quiz-step active">
        <div class="step-counter">Question ${index + 1} / ${totalSteps}</div>
        <h2>${data.question}</h2>
        <div class="quiz-options" data-step="${index}">
          ${data.options.map((opt, i) => `
            <div class="quiz-option" data-value="${opt.value}" data-index="${i}">
              <span class="emoji">${opt.emoji || ''}</span>
              <span>${opt.label}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Update progress
    document.querySelectorAll('.quiz-progress-step').forEach((el, i) => {
      el.classList.remove('active', 'done');
      if (i === index) el.classList.add('active');
      else if (i < index) el.classList.add('done');
    });

    // Pre-select if already answered
    const answered = answers[index];
    if (answered !== undefined) {
      const options = container.querySelectorAll('.quiz-option');
      if (options[answered]) options[answered].classList.add('selected');
    }

    // Bind option clicks
    container.querySelectorAll('.quiz-option').forEach(opt => {
      opt.addEventListener('click', function() {
        const step = parseInt(this.closest('.quiz-options').dataset.step);
        const value = this.dataset.value;
        const idx = parseInt(this.dataset.index);

        // Deselect others
        this.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');

        // Save answer
        answers[step] = idx;
        answers[`${step}_value`] = value;

        // Auto-advance after brief delay
        setTimeout(() => goNext(), 400);
      });
    });

    // Update nav buttons
    const nav = document.querySelector('.quiz-nav');
    if (nav) {
      nav.innerHTML = `
        <button class="btn btn-outline ${index === 0 ? 'disabled' : ''}" id="quiz-prev" ${index === 0 ? 'disabled' : ''}>
          ${index === 0 ? '' : '← Précédent'}
        </button>
        ${index < totalSteps - 1 ? `
          <button class="btn btn-primary ${answers[index] === undefined ? 'disabled' : ''}" id="quiz-next">
            Suivant →
          </button>
        ` : `
          <button class="btn btn-primary ${answers[index] === undefined ? 'disabled' : ''}" id="quiz-submit">
            Voir mon programme →
          </button>
        `}
      `;

      document.getElementById('quiz-prev')?.addEventListener('click', goPrev);
      document.getElementById('quiz-next')?.addEventListener('click', goNext);
      document.getElementById('quiz-submit')?.addEventListener('click', submitQuiz);
    }
  }

  function goNext() {
    if (answers[currentStep] === undefined) return;
    if (currentStep < totalSteps - 1) {
      currentStep++;
      renderStep(currentStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function goPrev() {
    if (currentStep > 0) {
      currentStep--;
      renderStep(currentStep);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  function submitQuiz() {
    if (answers[currentStep] === undefined) return;

    const gender = answers['1_value'] || 'femme';
    const goal = answers['0_value'] || 'energie';
    const duration = answers['4_value'] || '3mois';
    const budget = answers['5_value'] || 'moyen';

    const genderKey = gender === 'homme' ? 'male' : 'female';
    const goalKey = goal === 'jeunesse' ? 'jeunesse' : goal === 'fertilité' ? 'fertilité' : goal === 'focus' ? 'focus' : goal === 'sommeil' ? 'sommeil' : 'energie';

    const rec = recommendations[genderKey]?.[goalKey] || recommendations[genderKey]?.energie;
    const pack = EPIONE.packs.find(p => p.id === rec.pack);
    const altProducts = rec.alt.map(id => EPIONE.getProduct(id)).filter(Boolean);

    // Hide steps and show results
    const container = document.querySelector('.quiz-steps');
    const nav = document.querySelector('.quiz-nav');
    const results = document.querySelector('.quiz-result');

    if (container) container.style.display = 'none';
    if (nav) nav.style.display = 'none';

    if (results) {
      results.classList.add('visible');

      results.innerHTML = `
        <div class="result-icon">${genderKey === 'female' ? '✨' : '⚡'}</div>
        <div class="result-title">Votre programme personnalisé</div>
        <div class="result-subtitle">Basé sur vos réponses, voici la formule idéale pour vous.</div>

        ${pack ? `
          <div class="result-pack reveal visible">
            <div class="result-pack-image">
              <img src="" alt="${pack.name}" class="product-img" data-product="${pack.products[0]}" loading="lazy" style="width:60%">
            </div>
            <h3>${pack.name}</h3>
            <p class="pack-desc">${pack.description}</p>
            <p class="pack-price">${pack.price} DH <span style="font-weight:400;font-size:0.85rem;color:var(--text-muted);text-decoration:line-through;margin-left:0.5rem">${pack.compareAt} DH</span></p>
            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:1rem">${pack.savings} · Cure 1 mois</p>
            <a href="product.html?id=${pack.products[0]}" class="btn btn-primary">Ajouter au panier — ${pack.price} DH</a>
          </div>
        ` : ''}

        ${altProducts.length > 0 ? `
          <div class="result-alt">
            <h4>Vous pouvez aussi commencer par :</h4>
            ${altProducts.map(p => `
              <div class="result-alt-item">
                <a href="product.html?id=${p.id}" class="alt-name">${p.name}</a>
                <span class="alt-price">${p.price} DH</span>
              </div>
            `).join('')}
          </div>
        ` : ''}

        <div class="result-actions">
          <a href="https://wa.me/212703170990?text=Bonjour%2C%20j%27ai%20fait%20le%20quiz%20bien-%C3%AAtre%20et%20je%20souhaite%20des%20conseils%20personnalis%C3%A9s." target="_blank" class="btn btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style="margin-right:0.5rem"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Parler à un conseiller WhatsApp
          </a>
          <a href="index.html" class="btn-ghost" style="text-align:center;display:block">Retour à l'accueil</a>
        </div>
      `;

      // Trigger product image rendering for result
      const resultImg = results.querySelector('.product-img');
      if (resultImg) {
        const pid = resultImg.dataset.product;
        const prod = EPIONE.getProduct(pid);
        if (prod) {
          const colors = {
            'vitavin-woman': '#EDE4DA', 'vitavin-man': '#D4E0D2', 'vitavin-erovin': '#E8D5C4',
            'vitavin-cognivin': '#D4C8B8', 'melival': '#C4B8A8', 'menalya': '#E0D8CC',
            'ferfolya': '#D0C8BC', 'procrelia-femme': '#E8DCC8', 'procrelia-homme': '#D0D4C8',
            'condensyl': '#D8D0C4', 'fertibiol': '#E0D4C4'
          };
          const initials = prod.name.substring(0, 2).toUpperCase();
          const bgColor = colors[pid] || '#E8E3DD';
          const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
            <rect width="200" height="200" fill="${bgColor}"/>
            <text x="100" y="100" text-anchor="middle" dominant-baseline="central"
              font-family="'Playfair Display', serif" font-size="48" font-weight="600"
              fill="${prod.gender === 'female' ? '#B8A08E' : prod.gender === 'male' ? '#8FAA8B' : '#1C1B1A'}">${initials}</text>
          </svg>`;
          resultImg.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
        }
      }
    }

    // Save quiz result
    try {
      localStorage.setItem('epione-quiz', JSON.stringify({ gender: genderKey, goal: goalKey, pack: rec.pack, date: new Date().toISOString() }));
    } catch (e) {}
  }

  function bindEvents() {
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        const nextBtn = document.getElementById('quiz-next');
        const submitBtn = document.getElementById('quiz-submit');
        if (nextBtn && !nextBtn.disabled) goNext();
        else if (submitBtn && !submitBtn.disabled) submitQuiz();
      }
      if (e.key === 'ArrowLeft') goPrev();
    });
  }

  // Expose
  window.EPIONE_QUIZ = { init, goNext, goPrev, submitQuiz };

  // Auto-init if quiz element exists
  if (document.getElementById('quiz-app')) {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
