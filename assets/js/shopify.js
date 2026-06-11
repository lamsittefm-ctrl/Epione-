/* ═══════════════════════════════════════════════════════════════
   EPIONE PHARMA — Shopify Storefront API Client & Product Data
   ═══════════════════════════════════════════════════════════════ */

const EPIONE = {
  // ─── Product Catalog ───
  products: [
    {
      id: 'vitavin-woman',
      name: 'VITAVIN Woman',
      tagline: 'Énergie & Éclat au Quotidien',
      description: 'Multivitamines complet formulé pour les besoins spécifiques de la femme active. CoQ10, Resvératrol et 22 vitamines et minéraux pour une vitalité optimale.',
      price: 140,
      compareAt: 198,
      image: null,
      gender: 'female',
      categories: ['vitalite', 'anti-age'],
      badges: ['best-seller'],
      benefits: ['Énergie durable', 'Peau plus lumineuse', 'Anti-âge visible', 'Ongles renforcés'],
      ingredients: 'CoQ10, Resvératrol, Vitamine C, Zinc, Fer, Vitamine D3, Complexe B',
      usage: '1 comprimé par jour avec un repas',
      packs: [
        { label: '3 mois', price: 376, save: 44, badge: 'Économisez 44 DH' },
        { label: '6 mois', price: 672, save: 168, badge: 'Économisez 168 DH' }
      ]
    },
    {
      id: 'vitavin-man',
      name: 'VITAVIN Man',
      tagline: 'Performance & Vitalité',
      description: 'Multivitamines premium pour l\'homme moderne. Formule IOM dosée pour soutenir énergie, immunité, fonction cardiaque et fertilité masculine.',
      price: 140,
      compareAt: 198,
      image: null,
      gender: 'male',
      categories: ['energie', 'performance'],
      badges: ['best-seller'],
      benefits: ['Énergie brute', 'Soutien immunitaire', 'Santé cardiaque', 'Vitalité masculine'],
      ingredients: 'Vitamine C, Zinc, Sélénium, Magnésium, Vitamine D3, Complexe B, CoQ10',
      usage: '1 comprimé par jour avec un repas',
      packs: [
        { label: '3 mois', price: 376, save: 44, badge: 'Économisez 44 DH' },
        { label: '6 mois', price: 672, save: 168, badge: 'Économisez 168 DH' }
      ]
    },
    {
      id: 'vitavin-erovin',
      name: 'VITAVIN Erovin',
      tagline: 'Fertilité Masculine Optimale',
      description: 'Formule concentrée pour soutenir la fertilité masculine. Zinc, Sélénium et antioxydants pour améliorer la qualité et la mobilité des spermatozoïdes.',
      price: 140,
      compareAt: 198,
      image: null,
      gender: 'male',
      categories: ['fertilité', 'performance'],
      badges: ['best-seller'],
      benefits: ['Améliore la fertilité', 'Augmente la mobilité', 'Qualité spermatique', 'Vitalité'],
      ingredients: 'Zinc, Sélénium, Vitamine E, CoQ10, L-Carnitine, Acide folique',
      usage: '1 comprimé par jour',
      packs: [
        { label: '3 mois', price: 376, save: 44, badge: 'Économisez 44 DH' },
        { label: '6 mois', price: 672, save: 168, badge: 'Économisez 168 DH' }
      ]
    },
    {
      id: 'vitavin-cognivin',
      name: 'VITAVIN Cognivin',
      tagline: 'Focus Mental & Mémoire',
      description: 'Complément cognitif pour stimuler la concentration, la mémoire et la clarté mentale. Formulé avec des nootropiques naturels et des antioxydants.',
      price: 140,
      compareAt: 198,
      image: null,
      gender: 'male',
      categories: ['focus', 'performance'],
      badges: ['best-seller'],
      benefits: ['Concentration accrue', 'Mémoire renforcée', 'Clarté mentale', 'Anti-fatigue cérébrale'],
      ingredients: 'Ginkgo Biloba, Bacopa Monnieri, Phosphatidylsérine, Vitamine B6, Magnésium',
      usage: '1 comprimé par jour',
      packs: [
        { label: '3 mois', price: 376, save: 44, badge: 'Économisez 44 DH' },
        { label: '6 mois', price: 672, save: 168, badge: 'Économisez 168 DH' }
      ]
    },
    {
      id: 'melival',
      name: 'Melival',
      tagline: 'Sommeil Paisible & Récupération',
      description: 'Formule naturelle à base de mélatonine et plantes adaptogènes pour retrouver un sommeil réparateur et une récupération optimale.',
      price: 96,
      compareAt: 139,
      image: null,
      gender: 'unisex',
      categories: ['sommeil', 'bien-etre'],
      badges: ['best-seller'],
      benefits: ['Endormissement rapide', 'Sommeil profond', 'Récupération nocturne', 'Sans accoutumance'],
      ingredients: 'Mélatonine, Valériane, Passiflore, Camomille, Magnésium bisglycinate',
      usage: '1 comprimé 30 min avant le coucher',
      packs: [
        { label: '3 mois', price: 249, save: 39, badge: 'Économisez 39 DH' },
        { label: '6 mois', price: 456, save: 120, badge: 'Économisez 120 DH' }
      ]
    },
    {
      id: 'menalya',
      name: 'Menalya',
      tagline: 'Équilibre Féminin — Ménopause',
      description: 'Phytoestrogènes naturels à base de soja, sauge et luzerne pour accompagner la femme pendant la ménopause. Réduit les bouffées de chaleur et améliore le bien-être général.',
      price: 96,
      compareAt: 139,
      image: null,
      gender: 'female',
      categories: ['menopause', 'vitalite'],
      badges: ['best-seller'],
      benefits: ['Réduit les bouffées de chaleur', 'Améliore l\'humeur', 'Soutien osseux', 'Peau plus belle'],
      ingredients: 'Isoflavones de Soja, Sauge, Luzerne, Calcium, Vitamine D3',
      usage: '1 comprimé par jour',
      packs: [
        { label: '3 mois', price: 249, save: 39, badge: 'Économisez 39 DH' },
        { label: '6 mois', price: 456, save: 120, badge: 'Économisez 120 DH' }
      ]
    },
    {
      id: 'ferfolya',
      name: 'Ferfolya',
      tagline: 'Fer & Énergie — Grossesse',
      description: 'Fer liposomal (Lipofer®) de haute absorption pour les femmes enceintes et les personnes carencées. Sans goût métallique, sans constipation.',
      price: 96,
      compareAt: 109.90,
      image: null,
      gender: 'female',
      categories: ['grossesse', 'vitalite'],
      badges: ['best-seller'],
      benefits: ['Absorption optimale', 'Sans effets secondaires', 'Énergie retrouvée', 'Soutien grossesse'],
      ingredients: 'Lipofer® (Fer liposomal), Vitamine C, Acide folique, Vitamine B12',
      usage: '1 comprimé par jour',
      packs: [
        { label: '3 mois', price: 249, save: 39, badge: 'Économisez 39 DH' },
        { label: '6 mois', price: 456, save: 120, badge: 'Économisez 120 DH' }
      ]
    },
    {
      id: 'procrelia-femme',
      name: 'PROCRELIA FEMME',
      tagline: 'Fertilité & Conception',
      description: 'Complexe nutritionnel pour préparer la grossesse. Riche en acide folique, zinc et antioxydants pour favoriser la fertilité féminine.',
      price: 149,
      compareAt: null,
      image: null,
      gender: 'female',
      categories: ['fertilité', 'grossesse'],
      badges: [],
      benefits: ['Soutient la fertilité', 'Prépare la grossesse', 'Acide folique', 'Équilibre hormonal'],
      ingredients: 'Acide folique, Zinc, Sélénium, Vitamine D3, Inositol, CoQ10',
      usage: '2 gélules par jour',
      packs: [
        { label: '3 mois', price: 399, save: 48, badge: 'Économisez 48 DH' },
        { label: '6 mois', price: 720, save: 174, badge: 'Économisez 174 DH' }
      ]
    },
    {
      id: 'procrelia-homme',
      name: 'PROCRELIA HOMME',
      tagline: 'Fertilité & Vitalité Masculine',
      description: 'Formule spécifique pour soutenir la fertilité masculine avec des antioxydants puissants et des acides aminés essentiels.',
      price: 149,
      compareAt: null,
      image: null,
      gender: 'male',
      categories: ['fertilité', 'performance'],
      badges: [],
      benefits: ['Qualité spermatique', 'Antioxydant', 'Énergie', 'Vitalité'],
      ingredients: 'Zinc, Sélénium, L-Carnitine, CoQ10, Vitamine E, Acide folique',
      usage: '2 gélules par jour',
      packs: [
        { label: '3 mois', price: 399, save: 48, badge: 'Économisez 48 DH' },
        { label: '6 mois', price: 720, save: 174, badge: 'Économisez 174 DH' }
      ]
    },
    {
      id: 'condensyl',
      name: 'CONDENSYL',
      tagline: 'Protection Antioxydante',
      description: 'Formule antioxydante concentrée pour lutter contre le stress oxydatif et préserver la santé cellulaire.',
      price: 149,
      compareAt: null,
      image: null,
      gender: 'unisex',
      categories: ['bien-etre', 'anti-age'],
      badges: [],
      benefits: ['Protection cellulaire', 'Anti-oxydant puissant', 'Anti-âge', 'Vitalité'],
      ingredients: 'Resvératrol, Quercétine, Vitamine C, Sélénium, Zinc, Polyphénols de thé vert',
      usage: '1 gélule par jour',
      packs: [
        { label: '3 mois', price: 399, save: 48, badge: 'Économisez 48 DH' },
        { label: '6 mois', price: 720, save: 174, badge: 'Économisez 174 DH' }
      ]
    },
    {
      id: 'fertibiol',
      name: 'FERTIBIOL',
      tagline: 'Fertilité Naturelle',
      description: 'Complément nutritionnel pour soutenir la fertilité chez l\'homme et la femme. Formule équilibrée pour les deux partenaires.',
      price: 149,
      compareAt: null,
      image: null,
      gender: 'unisex',
      categories: ['fertilité', 'bien-etre'],
      badges: [],
      benefits: ['Soutien fertilité', 'Équilibre hormonal', 'Vitalité', 'Bien-être général'],
      ingredients: 'Zinc, Sélénium, Vitamine B6, Acide folique, Magnésium, CoQ10',
      usage: '1 gélule par jour',
      packs: [
        { label: '3 mois', price: 399, save: 48, badge: 'Économisez 48 DH' },
        { label: '6 mois', price: 720, save: 174, badge: 'Économisez 174 DH' }
      ]
    }
  ],

  // ─── Pre-built Packs ───
  packs: [
    {
      id: 'pack-vitalite-eclat',
      name: 'Pack Vitalité & Éclat',
      tagline: 'Le rituel bien-être de la femme active',
      description: 'VITAVIN Woman + Menalya — Énergie, équilibre hormonal et éclat au quotidien.',
      price: 198,
      compareAt: 236,
      products: ['vitavin-woman', 'menalya'],
      gender: 'female',
      duration: '1 mois',
      savings: 'Économisez 38 DH'
    },
    {
      id: 'pack-maternite-sereine',
      name: 'Pack Maternité Sereine',
      tagline: 'Préparez votre corps à accueillir la vie',
      description: 'Ferfolya + Vitavin Woman — Fer liposomal et multivitamines pour une grossesse en pleine santé.',
      price: 198,
      compareAt: 236,
      products: ['ferfolya', 'vitavin-woman'],
      gender: 'female',
      duration: '1 mois',
      savings: 'Économisez 38 DH'
    },
    {
      id: 'pack-nuits-paisibles',
      name: 'Pack Nuits Paisibles',
      tagline: 'Retrouvez un sommeil réparateur',
      description: 'Melival + Menalya — Sommeil profond et équilibre féminin pour des nuits paisibles.',
      price: 169,
      compareAt: 192,
      products: ['melival', 'menalya'],
      gender: 'female',
      duration: '1 mois',
      savings: 'Économisez 23 DH'
    },
    {
      id: 'pack-peak-performance',
      name: 'Pack Peak Performance',
      tagline: 'Le programme de l\'homme performant',
      description: 'VITAVIN Man + VITAVIN Cognivin — Énergie brute et focus mental pour dominer votre journée.',
      price: 249,
      compareAt: 280,
      products: ['vitavin-man', 'vitavin-cognivin'],
      gender: 'male',
      duration: '1 mois',
      savings: 'Économisez 31 DH'
    },
    {
      id: 'pack-vitalite-fertile',
      name: 'Pack Vitalité Fertile',
      tagline: 'Boostez votre capital fertilité',
      description: 'VITAVIN Erovin + VITAVIN Man — Fertilité et vitalité masculine combinées.',
      price: 249,
      compareAt: 280,
      products: ['vitavin-erovin', 'vitavin-man'],
      gender: 'male',
      duration: '1 mois',
      savings: 'Économisez 31 DH'
    },
    {
      id: 'pack-couple',
      name: 'Pack Woman & Man',
      tagline: 'Le duo bien-être du couple',
      description: 'VITAVIN Woman + VITAVIN Man — Elle rayonne, il performe. Le pack équilibre pour le couple.',
      price: 249,
      compareAt: 280,
      products: ['vitavin-woman', 'vitavin-man'],
      gender: 'unisex',
      duration: '1 mois',
      savings: 'Économisez 31 DH'
    }
  ],

  // ─── Journal Articles ───
  articles: [
    {
      id: 'retrouver-sommeil-naturellement',
      title: 'Comment retrouver un sommeil profond naturellement',
      excerpt: 'Découvrez les clés d\'un sommeil réparateur sans médicaments : routines, plantes et compléments naturels.',
      category: 'Bien-être',
      image: null,
      body: `
        <p>Le sommeil est le pilier fondamental de notre santé. Pourtant, plus d'un Marocain sur trois souffre de troubles du sommeil selon les études récentes.</p>
        <p>Avant de vous tourner vers des solutions médicamenteuses, sachez qu'il existe des alternatives naturelles tout aussi efficaces pour retrouver des nuits paisibles.</p>
        <h2>Les clés d'un sommeil réparateur</h2>
        <p>Notre corps fonctionne selon un rythme circadien naturel. Pour l'aider à s'endormir, commencez par créer un environnement propice : chambre fraîche (18-20°C), obscurité totale, et pas d'écrans au moins 1h avant le coucher.</p>
        <p>La mélatonine, notre hormone du sommeil, est naturellement produite par le cerveau en réponse à l'obscurité. Les écrans émettent une lumière bleue qui perturbe cette production. Remplacer votre téléphone par un livre en soirée peut déjà faire une différence significative.</p>
        <h2>Les plantes qui favorisent l'endormissement</h2>
        <p>La valériane, la passiflore et la camomille sont reconnues pour leurs propriétés apaisantes. Associées au magnésium bisglycinate — forme la mieux absorbée — elles constituent une synergie naturelle puissante contre l'insomnie.</p>
        <p>Notre formule <strong>Melival</strong> combine précisément ces actifs à de la mélatonine pour une action complète : endormissement rapide et sommeil profond.</p>
      `,
      productCta: {
        productId: 'melival',
        text: 'Découvrir Melival — Votre allié sommeil'
      }
    },
    {
      id: 'anti-age-naturel-femme',
      title: 'Anti-âge au naturel : les secrets d\'une peau qui rayonne',
      excerpt: 'Le vieillissement cutané n\'est pas une fatalité. Découvrez les nutriments essentiels pour préserver votre éclat.',
      category: 'Beauté',
      image: null,
      body: `
        <p>La quête de la jeunesse éternelle est aussi vieille que l'humanité. Si nous n'avons pas encore trouvé la fontaine de Jouvence, la science a identifié des nutriments clés qui ralentissent significativement le vieillissement cellulaire.</p>
        <h2>Le stress oxydatif : l'ennemi numéro un</h2>
        <p>Chaque jour, nos cellules sont agressées par les radicaux libres — pollution, UV, stress, alimentation transformée. Ce stress oxydatif accélère le vieillissement de la peau, des cheveux et des organes.</p>
        <p>Les antioxydants sont vos meilleurs alliés pour contrer ce phénomène. Le Resvératrol, le CoQ10 et la Vitamine C sont particulièrement efficaces pour neutraliser les radicaux libres et stimuler la production de collagène.</p>
        <h2>Les 3 nutriments anti-âge essentiels</h2>
        <p><strong>Le CoQ10</strong> : Cette coenzyme est naturellement présente dans nos cellules mais diminue avec l'âge. Elle est essentielle à la production d'énergie cellulaire et à la protection contre le vieillissement.</p>
        <p><strong>Le Resvératrol</strong> : Présent dans le raisin et le vin rouge, c'est l'un des antioxydants les plus puissants connus. Il active les gènes de longévité et protège l'ADN.</p>
        <p><strong>La Vitamine C</strong> : Indispensable à la synthèse du collagène, elle maintient la fermeté et l'élasticité de la peau.</p>
        <p>Notre <strong>VITAVIN Woman</strong> associe ces trois actifs à 22 vitamines et minéraux pour une synergie anti-âge complète.</p>
      `,
      productCta: {
        productId: 'vitavin-woman',
        text: 'Découvrir VITAVIN Woman — Votre éclat au quotidien'
      }
    },
    {
      id: 'fertile-naturellement',
      title: 'Fertilité naturelle : préparez votre corps à concevoir',
      excerpt: 'Que vous soyez en projet bébé ou que vous souhaitiez préserver votre capital fertilité, adoptez les bons réflexes nutritionnels.',
      category: 'Fertilité',
      image: null,
      body: `
        <p>La fertilité est le reflet de notre santé globale. Avant même de consulter un spécialiste, certaines carences nutritionnelles peuvent être corrigées pour améliorer significativement votre potentiel de conception.</p>
        <h2>Pour les femmes : l'importance de l'acide folique</h2>
        <p>L'acide folique (Vitamine B9) est LE nutriment numéro un pour préparer une grossesse. Il réduit les risques de malformations du tube neural et améliore la qualité ovocytaire. Idéalement, commencez une supplémentation 3 mois avant la conception.</p>
        <p>Le zinc et le sélénium sont également cruciaux pour l'équilibre hormonal féminin et la qualité des ovocytes.</p>
        <h2>Pour les hommes : le Zinc, le roi de la fertilité</h2>
        <p>Le zinc est l'oligo-élément le plus important pour la fertilité masculine. Il est directement impliqué dans la production de testostérone et la formation des spermatozoïdes. Une carence en zinc peut réduire significativement la qualité et la mobilité spermatiques.</p>
        <p>Notre <strong>VITAVIN Erovin</strong> est spécifiquement formulé avec du zinc, du sélénium et des antioxydants pour soutenir la fertilité masculine de façon optimale.</p>
        <p>Pour les femmes, <strong>PROCRELIA FEMME</strong> associe acide folique, zinc et inositol pour préparer le corps à la conception.</p>
      `,
      productCta: {
        productId: 'procrelia-femme',
        text: 'Découvrir PROCRELIA FEMME — Préparez votre grossesse'
      }
    },
    {
      id: 'ménopause-bien-vivre',
      title: 'Ménopause : bien vivre cette transition naturelle',
      excerpt: 'Bouffées de chaleur, troubles de l\'humeur, fatigue... Des solutions naturelles existent pour traverser la ménopause en pleine vitalité.',
      category: 'Bien-être',
      image: null,
      body: `
        <p>La ménopause n'est pas une maladie, c'est une transition naturelle dans la vie de toute femme. Pourtant, ses symptômes peuvent être inconfortables. Bonne nouvelle : la nature offre des solutions pour les atténuer significativement.</p>
        <h2>Les phytoestrogènes : vos alliés naturels</h2>
        <p>Les isoflavones de soja, la sauge et la luzerne sont des phytoestrogènes naturels — des composés végétaux qui miment l'action des œstrogènes dans l'organisme. Ils aident à réduire les bouffées de chaleur, les sueurs nocturnes et les sautes d'humeur.</p>
        <p>Des études cliniques montrent une réduction de 70% des bouffées de chaleur après 4 semaines de supplémentation en phytoestrogènes de soja.</p>
        <h2>Calcium et vitamine D : protégez vos os</h2>
        <p>La baisse d'œstrogènes accélère la perte osseuse. Un apport suffisant en calcium et vitamine D est essentiel pour prévenir l'ostéoporose après la ménopause.</p>
        <p>Notre formule <strong>Menalya</strong> combine précisément isoflavones de soja, sauge, luzerne, calcium et vitamine D3 pour une approche complète du bien-être ménopausique.</p>
      `,
      productCta: {
        productId: 'menalya',
        text: 'Découvrir Menalya — Votre équilibre au naturel'
      }
    },
    {
      id: 'immunite-renforcer-naturellement',
      title: 'Renforcez votre immunité naturellement',
      excerpt: 'Vitamine D, zinc, probiotiques... Les clés nutritionnelles pour un système immunitaire au top toute l\'année.',
      category: 'Santé',
      image: null,
      body: `
        <p>Notre système immunitaire est notre première ligne de défense. Pour fonctionner de manière optimale, il a besoin de nutriments spécifiques. Voici comment le soutenir naturellement.</p>
        <h2>La Vitamine D : l'indispensable</h2>
        <p>Surnommée la "vitamine du soleil", la vitamine D est cruciale pour l'immunité. Au Maroc, malgré un ensoleillement généreux, une grande partie de la population présente des taux insuffisants, notamment en hiver ou pour les personnes qui travaillent en intérieur.</p>
        <h2>Le Zinc : le chef d'orchestre immunitaire</h2>
        <p>Le zinc est impliqué dans plus de 300 réactions enzymatiques, dont la production et l'activation des globules blancs. Une carence en zinc se traduit par une susceptibilité accrue aux infections.</p>
        <h2>Les probiotiques : l'immunité vient aussi de l'intestin</h2>
        <p>70% de notre système immunitaire se trouve dans l'intestin. Un microbiote équilibré est essentiel pour une immunité forte. Les probiotiques et prébiotiques aident à maintenir cet équilibre.</p>
        <p>Notre <strong>VITAVIN Man</strong> et <strong>VITAVIN Woman</strong> contiennent des doses optimales de zinc, vitamine D3 et antioxydants pour soutenir votre immunité au quotidien.</p>
      `,
      productCta: {
        productId: 'vitavin-man',
        text: 'Découvrir VITAVIN Man — Vitalité & Immunité'
      }
    }
  ],

  // ─── GETTERS ───
  getProduct(id) {
    return this.products.find(p => p.id === id);
  },

  getProductsByGender(gender) {
    return this.products.filter(p => p.gender === gender || p.gender === 'unisex');
  },

  getBestSellers() {
    return this.products.filter(p => p.badges.includes('best-seller'));
  },

  getPacksByGender(gender) {
    return this.packs.filter(p => p.gender === gender || p.gender === 'unisex');
  },

  getArticle(id) {
    return this.articles.find(a => a.id === id);
  },

  // ─── Cart Helpers ───
  cart: {
    items: [],

    add(productId, variant = 'single', quantity = 1) {
      const existing = this.items.find(i => i.productId === productId && i.variant === variant);
      if (existing) {
        existing.quantity += quantity;
      } else {
        this.items.push({ productId, variant, quantity });
      }
      this.save();
      this.updateUI();
    },

    remove(productId, variant = 'single') {
      this.items = this.items.filter(i => !(i.productId === productId && i.variant === variant));
      this.save();
      this.updateUI();
    },

    getTotal() {
      return this.items.reduce((sum, item) => {
        const product = EPIONE.getProduct(item.productId);
        if (!product) return sum;
        let price = product.price;
        if (item.variant === 'pack-3') price = product.packs?.[0]?.price || price;
        if (item.variant === 'pack-6') price = product.packs?.[1]?.price || price;
        return sum + price * item.quantity;
      }, 0);
    },

    getCount() {
      return this.items.reduce((sum, item) => sum + item.quantity, 0);
    },

    save() {
      try {
        localStorage.setItem('epione-cart', JSON.stringify(this.items));
      } catch (e) {}
    },

    load() {
      try {
        const data = localStorage.getItem('epione-cart');
        if (data) this.items = JSON.parse(data);
      } catch (e) {}
    },

    updateUI() {
      const counters = document.querySelectorAll('.cart-count');
      counters.forEach(el => {
        el.textContent = this.getCount();
        el.style.display = this.getCount() > 0 ? 'flex' : 'none';
      });
    }
  },

  // ─── Init ───
  init() {
    this.cart.load();
    this.cart.updateUI();
  }
};

// ─── Auto-init ───
document.addEventListener('DOMContentLoaded', () => EPIONE.init());
