/* ═══════════════════════════════════════════════════════════════
   EPIONE PHARMA — Main Application
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  // ─── Header scroll effect ───
  const header = document.querySelector('.site-header');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // ─── Mobile menu ───
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Carousel ───
  const carousel = {
    init() {
      this.track = document.querySelector('.carousel-track');
      this.prevBtn = document.querySelector('.carousel-prev');
      this.nextBtn = document.querySelector('.carousel-next');
      if (!this.track) return;

      this.scrollAmount = 0;
      this.cardWidth = this.track.querySelector('.carousel-card')?.offsetWidth || 300;
      this.gap = 24;

      if (this.prevBtn) {
        this.prevBtn.addEventListener('click', () => this.scroll(-1));
      }
      if (this.nextBtn) {
        this.nextBtn.addEventListener('click', () => this.scroll(1));
      }

      // Touch drag
      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;

      this.track.addEventListener('mousedown', (e) => {
        isDown = true;
        this.track.style.cursor = 'grabbing';
        startX = e.pageX - this.track.offsetLeft;
        scrollLeft = this.track.scrollLeft;
      });

      this.track.addEventListener('mouseleave', () => {
        isDown = false;
        this.track.style.cursor = 'grab';
      });

      this.track.addEventListener('mouseup', () => {
        isDown = false;
        this.track.style.cursor = 'grab';
      });

      this.track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - this.track.offsetLeft;
        const walk = (x - startX) * 1.5;
        this.track.scrollLeft = scrollLeft - walk;
      });

      // Touch events
      let touchStartX = 0;
      let touchScrollLeft = 0;

      this.track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - this.track.offsetLeft;
        touchScrollLeft = this.track.scrollLeft;
      }, { passive: true });

      this.track.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - this.track.offsetLeft;
        const walk = (x - touchStartX) * 1.5;
        this.track.scrollLeft = touchScrollLeft - walk;
      }, { passive: true });
    },

    scroll(dir) {
      if (!this.track) return;
      const card = this.track.querySelector('.carousel-card');
      if (!card) return;
      const cardWidth = card.offsetWidth + this.gap;
      const target = this.track.scrollLeft + (dir * cardWidth);
      this.track.scrollTo({ left: target, behavior: 'smooth' });
    }
  };

  carousel.init();

  // ─── Scroll Animations ───
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  // ─── Product Image Fallbacks ───
  const productImages = document.querySelectorAll('.product-img');
  productImages.forEach(img => {
    const productId = img.dataset.product;
    if (!productId) return;
    const product = EPIONE.getProduct(productId);
    if (!product) return;

    const colors = {
      'vitavin-woman': '#EDE4DA',
      'vitavin-man': '#D4E0D2',
      'vitavin-erovin': '#E8D5C4',
      'vitavin-cognivin': '#D4C8B8',
      'melival': '#C4B8A8',
      'menalya': '#E0D8CC',
      'ferfolya': '#D0C8BC',
      'procrelia-femme': '#E8DCC8',
      'procrelia-homme': '#D0D4C8',
      'condensyl': '#D8D0C4',
      'fertibiol': '#E0D4C4'
    };

    // Replace src with generated SVG placeholder
    const initials = product.name.substring(0, 2).toUpperCase();
    const bgColor = colors[productId] || '#E8E3DD';

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
      <rect width="200" height="200" fill="${bgColor}"/>
      <text x="100" y="100" text-anchor="middle" dominant-baseline="central"
        font-family="'Playfair Display', serif" font-size="48" font-weight="600"
        fill="${product.gender === 'female' ? '#B8A08E' : product.gender === 'male' ? '#8FAA8B' : '#1C1B1A'}">${initials}</text>
      <text x="100" y="140" text-anchor="middle" dominant-baseline="central"
        font-family="'Montserrat', sans-serif" font-size="10" font-weight="500"
        fill="#8A8580" text-transform="uppercase" letter-spacing="2">${product.tagline}</text>
    </svg>`;

    img.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
  });

  // ─── Pack Options Selector ───
  document.querySelectorAll('.pack-option').forEach(option => {
    option.addEventListener('click', () => {
      const parent = option.closest('.product-packs');
      if (parent) {
        parent.querySelectorAll('.pack-option').forEach(o => o.classList.remove('selected'));
      }
      option.classList.add('selected');
    });
  });

  // ─── Add to Cart ───
  document.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.dataset.product;
      const selectedPack = btn.closest('.product-packs')?.querySelector('.pack-option.selected');
      let variant = 'single';
      if (selectedPack) {
        const idx = Array.from(selectedPack.parentElement.children).indexOf(selectedPack);
        variant = idx === 0 ? 'single' : idx === 1 ? 'pack-3' : 'pack-6';
      }
      EPIONE.cart.add(productId, variant);

      // Quick feedback
      const original = btn.textContent;
      btn.textContent = '✓ Ajouté';
      btn.style.background = '#8FAA8B';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    });
  });

  // ─── Add to Cart from carousel / listing ───
  document.querySelectorAll('.btn-quick-add').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const productId = btn.dataset.product;
      EPIONE.cart.add(productId, 'single');

      const original = btn.innerHTML;
      btn.innerHTML = '✓';
      btn.style.background = '#8FAA8B';
      btn.style.color = '#fff';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 1200);
    });
  });

  // ─── Dynamic product row rendering ───
  function renderProductGrid(container, products) {
    if (!container) return;
    container.innerHTML = products.map(p => `
      <a href="product.html?id=${p.id}" class="carousel-card reveal">
        <div class="carousel-card-image">
          <img src="" alt="${p.name}" class="product-img" data-product="${p.id}" loading="lazy">
        </div>
        <div class="carousel-card-body">
          ${p.badges.includes('best-seller') ? '<span class="badge">Best Seller</span>' : ''}
          <h3>${p.name}</h3>
          <p class="desc">${p.tagline}</p>
          <div class="price">
            ${p.price} DH
            ${p.compareAt ? `<span class="old">${p.compareAt} DH</span>` : ''}
          </div>
        </div>
      </a>
    `).join('');
  }

  function renderPackGrid(container, packs) {
    if (!container) return;
    container.innerHTML = packs.map(p => `
      <a href="product.html?pack=${p.id}" class="carousel-card reveal">
        <div class="carousel-card-image">
          <img src="" alt="${p.name}" class="product-img" data-product="${p.products[0]}" loading="lazy" style="width:60%">
        </div>
        <div class="carousel-card-body">
          <span class="badge">Pack</span>
          <h3>${p.name}</h3>
          <p class="desc">${p.tagline}</p>
          <div class="price">
            ${p.price} DH
            ${p.compareAt ? `<span class="old">${p.compareAt} DH</span>` : ''}
          </div>
        </div>
      </a>
    `).join('');
  }

  function renderJournalGrid(container, articles, basePath) {
    if (!container) return;
    basePath = basePath || 'journal/';
    container.innerHTML = articles.map(a => `
      <a href="${basePath}?article=${a.id}" class="journal-card reveal">
        <div class="journal-card-image">
          <img src="" alt="${a.title}" class="product-img" data-article loading="lazy" style="background:var(--bg-alt);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display';font-size:2rem;color:var(--text-light);padding:2rem;text-align:center">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:1.5rem;color:var(--text-light);padding:2rem;text-align:center;background:var(--bg-alt)">
            ${a.title}
          </div>
        </div>
        <div class="meta">${a.category} · Lecture 5 min</div>
        <h3>${a.title}</h3>
        <p>${a.excerpt.substring(0, 100)}...</p>
      </a>
    `).join('');
  }

  // Expose rendering functions globally
  window.EPIONE_RENDER = {
    products: renderProductGrid,
    packs: renderPackGrid,
    journal: renderJournalGrid
  };

  // ─── Auto-render if containers exist ───
  const bestSellerTrack = document.querySelector('.carousel-track[data-render="bestsellers"]');
  if (bestSellerTrack) {
    renderProductGrid(bestSellerTrack, EPIONE.getBestSellers());
  }

  const packsTrack = document.querySelector('.carousel-track[data-render="packs"]');
  if (packsTrack) {
    renderPackGrid(packsTrack, EPIONE.packs);
  }

  const journalGrid = document.querySelector('.journal-grid[data-render="journal"]');
  if (journalGrid) {
    renderJournalGrid(journalGrid, EPIONE.articles.slice(0, 3));
  }

  // ─── Product page loader ───
  const productPage = document.querySelector('.product-page');
  if (productPage) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const packId = params.get('pack');

    if (packId) {
      const pack = EPIONE.packs.find(p => p.id === packId);
      if (pack) {
        window.location.href = `product.html?id=${pack.products[0]}&pack=${packId}`;
      }
    }

    if (productId) {
      const product = EPIONE.getProduct(productId);
      if (product) {
        renderProductPage(product);
      }
    }
  }

  function renderProductPage(product) {
    const container = document.querySelector('.product-hero');
    if (!container) return;

    document.title = `${product.name} — Epione Pharma`;

    const packOptions = product.packs ? product.packs.map((p, i) => `
      <div class="pack-option ${i === 0 ? 'selected' : ''}">
        <div>
          <span class="pack-label">${p.label}</span>
          ${p.badge ? `<span class="pack-badge">${p.badge}</span>` : ''}
        </div>
        <div>
          <span class="pack-price">${p.price} DH</span>
          ${p.save ? `<span class="pack-save">Économisez ${p.save} DH</span>` : ''}
        </div>
      </div>
    `).join('') : '';

    container.innerHTML = `
      <div class="product-gallery">
        <div class="product-gallery-main">
          <img src="" alt="${product.name}" class="product-img" data-product="${product.id}">
        </div>
      </div>
      <div class="product-info">
        <div class="breadcrumb">Accueil / ${product.gender === 'female' ? 'Espace Femme' : product.gender === 'male' ? 'Espace Homme' : 'Catalogue'} / ${product.name}</div>
        <span class="category-badge">${product.categories[0]}</span>
        <h1>${product.name}</h1>
        <div class="product-price">
          ${product.price} DH
          ${product.compareAt ? `<span class="old">${product.compareAt} DH</span>` : ''}
        </div>
        <div class="product-description">
          <p>${product.description}</p>
        </div>
        <ul class="product-benefits">
          ${product.benefits.map(b => `
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
              ${b}
            </li>
          `).join('')}
        </ul>
        <div class="product-packs">
          <h4>Choisissez votre cure</h4>
          ${packOptions || '<p style="font-size:0.85rem;color:var(--text-light)">Disponible à l\'unité</p>'}
        </div>
        <div class="product-actions">
          <button class="btn btn-primary btn-add-cart" data-product="${product.id}">Ajouter au panier</button>
          <a href="https://wa.me/212703170990?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20${product.name}" target="_blank" class="btn btn-outline" style="flex:0 0 auto">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
        <div class="product-meta">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Certifié ONSSA
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            100% Ingrédients Naturels
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Paiement à la livraison
          </span>
        </div>
      </div>
    `;

    // Re-trigger product image rendering
    const newImg = container.querySelector('.product-img');
    if (newImg) {
      const event = new Event('load');
      window.dispatchEvent(event);
    }

    // Re-bind pack options
    container.querySelectorAll('.pack-option').forEach(opt => {
      opt.addEventListener('click', function() {
        this.parentElement.querySelectorAll('.pack-option').forEach(o => o.classList.remove('selected'));
        this.classList.add('selected');
      });
    });

    // Re-bind add to cart
    container.querySelector('.btn-add-cart')?.addEventListener('click', function() {
      const selectedPack = this.closest('.product-packs')?.querySelector('.pack-option.selected');
      const idx = selectedPack ? Array.from(selectedPack.parentElement.children).indexOf(selectedPack) : -1;
      const variant = idx === 1 ? 'pack-3' : idx === 2 ? 'pack-6' : 'single';
      EPIONE.cart.add(product.id, variant);
      const original = this.textContent;
      this.textContent = '✓ Ajouté au panier';
      this.style.background = '#8FAA8B';
      setTimeout(() => {
        this.textContent = original;
        this.style.background = '';
      }, 1500);
    });

    // Manual trigger for product image rendering
    const manualImg = container.querySelector('.product-img[data-product]');
    if (manualImg) {
      const pid = manualImg.dataset.product;
      const prod = EPIONE.getProduct(pid);
      if (prod) {
        const colors = {
          'vitavin-woman': '#EDE4DA',
          'vitavin-man': '#D4E0D2',
          'vitavin-erovin': '#E8D5C4',
          'vitavin-cognivin': '#D4C8B8',
          'melival': '#C4B8A8',
          'menalya': '#E0D8CC',
          'ferfolya': '#D0C8BC',
          'procrelia-femme': '#E8DCC8',
          'procrelia-homme': '#D0D4C8',
          'condensyl': '#D8D0C4',
          'fertibiol': '#E0D4C4'
        };
        const initials = prod.name.substring(0, 2).toUpperCase();
        const bgColor = colors[pid] || '#E8E3DD';
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 200 200">
          <rect width="200" height="200" fill="${bgColor}"/>
          <text x="100" y="95" text-anchor="middle" dominant-baseline="central"
            font-family="'Playfair Display', serif" font-size="56" font-weight="600"
            fill="${prod.gender === 'female' ? '#B8A08E' : prod.gender === 'male' ? '#8FAA8B' : '#1C1B1A'}">${initials}</text>
          <text x="100" y="140" text-anchor="middle" dominant-baseline="central"
            font-family="'Montserrat', sans-serif" font-size="11" font-weight="500"
            fill="#8A8580" text-transform="uppercase" letter-spacing="2">${prod.tagline}</text>
        </svg>`;
        manualImg.src = 'data:image/svg+xml,' + encodeURIComponent(svg);
      }
    }
  }

  // ─── Journal Article Loader ───
  const articlePage = document.querySelector('.article-page');
  if (articlePage) {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get('article');
    if (articleId) {
      const article = EPIONE.getArticle(articleId);
      if (article) {
        renderArticle(article);
      }
    }
  }

  function renderArticle(article) {
    document.title = `${article.title} — Journal Epione Pharma`;

    const header = document.querySelector('.article-header');
    const image = document.querySelector('.article-image');
    const content = document.querySelector('.article-content');
    const cta = document.querySelector('.article-cta');

    if (header) {
      header.querySelector('h1').textContent = article.title;
      header.querySelector('.excerpt').textContent = article.excerpt;
      header.querySelector('.meta').innerHTML = `${article.category} · 5 min de lecture`;
    }

    if (content) {
      content.innerHTML = article.body;
    }

    if (cta && article.productCta) {
      cta.querySelector('h3').textContent = 'Produit recommandé';
      cta.querySelector('p').textContent = 'Découvrez le complément qui correspond à vos besoins.';
      const link = cta.querySelector('a');
      if (link) {
        link.href = `product.html?id=${article.productCta.productId}`;
        link.textContent = article.productCta.text;
      }
    }
  }

  // ─── Cart counter click ───
  document.querySelectorAll('.cart-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (EPIONE.cart.getCount() > 0) {
        // Show cart summary or redirect to checkout
        const total = EPIONE.cart.getTotal().toFixed(0);
        const msg = EPIONE.cart.items.map(i => {
          const p = EPIONE.getProduct(i.productId);
          return `• ${p ? p.name : i.productId} x${i.quantity}`;
        }).join('\n');
        alert(`🛒 Votre panier (${EPIONE.cart.getCount()} articles) :\n${msg}\n\nTotal: ${total} DH\n\nContactez-nous sur WhatsApp pour finaliser votre commande.`);
      } else {
        alert('Votre panier est vide');
      }
    });
  });
});
