/**
 * Amazonga — Global Multi-Marketplace Amazon Search Engine
 * Supports all 23 official Amazon regional stores worldwide.
 */

const MARKETPLACES = [
  // Featured Core + Americas / Europe / MEA / APAC
  {
    code: 'US',
    country: 'United States',
    domain: 'amazon.com',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    region: 'americas',
    core: true,
    langParam: 'en_US',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    domain: 'amazon.co.uk',
    flag: '🇬🇧',
    currency: 'GBP',
    symbol: '£',
    region: 'europe',
    core: true,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 2
  },
  {
    code: 'DE',
    country: 'Germany',
    domain: 'amazon.de',
    flag: '🇩🇪',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: true,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 3
  },
  {
    code: 'JP',
    country: 'Japan',
    domain: 'amazon.co.jp',
    flag: '🇯🇵',
    currency: 'JPY',
    symbol: '¥',
    region: 'apac',
    core: true,
    langParam: 'en_US',
    priceMinorUnit: 1,
    keepaDomain: 5
  },
  {
    code: 'SA',
    country: 'Saudi Arabia',
    domain: 'amazon.sa',
    flag: '🇸🇦',
    currency: 'SAR',
    symbol: 'SAR ',
    region: 'mea',
    core: true,
    langParam: 'en_AE',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'EG',
    country: 'Egypt',
    domain: 'amazon.eg',
    flag: '🇪🇬',
    currency: 'EGP',
    symbol: 'EGP ',
    region: 'mea',
    core: true,
    langParam: 'en_AE',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'FR',
    country: 'France',
    domain: 'amazon.fr',
    flag: '🇫🇷',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: true,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 4
  },
  {
    code: 'AE',
    country: 'United Arab Emirates',
    domain: 'amazon.ae',
    flag: '🇦🇪',
    currency: 'AED',
    symbol: 'AED ',
    region: 'mea',
    core: false,
    langParam: 'en_AE',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'CA',
    country: 'Canada',
    domain: 'amazon.ca',
    flag: '🇨🇦',
    currency: 'CAD',
    symbol: 'C$',
    region: 'americas',
    core: false,
    langParam: 'en_CA',
    priceMinorUnit: 100,
    keepaDomain: 6
  },
  {
    code: 'IT',
    country: 'Italy',
    domain: 'amazon.it',
    flag: '🇮🇹',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 8
  },
  {
    code: 'ES',
    country: 'Spain',
    domain: 'amazon.es',
    flag: '🇪🇸',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 9
  },
  {
    code: 'NL',
    country: 'Netherlands',
    domain: 'amazon.nl',
    flag: '🇳🇱',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 3
  },
  {
    code: 'SE',
    country: 'Sweden',
    domain: 'amazon.se',
    flag: '🇸🇪',
    currency: 'SEK',
    symbol: 'kr ',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 3
  },
  {
    code: 'PL',
    country: 'Poland',
    domain: 'amazon.pl',
    flag: '🇵🇱',
    currency: 'PLN',
    symbol: 'zł ',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 3
  },
  {
    code: 'TR',
    country: 'Turkey',
    domain: 'amazon.com.tr',
    flag: '🇹🇷',
    currency: 'TRY',
    symbol: '₺',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 3
  },
  {
    code: 'BE',
    country: 'Belgium',
    domain: 'amazon.com.be',
    flag: '🇧🇪',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: false,
    langParam: 'en_GB',
    priceMinorUnit: 100,
    keepaDomain: 4
  },
  {
    code: 'IE',
    country: 'Ireland',
    domain: 'amazon.ie',
    flag: '🇮🇪',
    currency: 'EUR',
    symbol: '€',
    region: 'europe',
    core: false,
    langParam: 'en_IE',
    priceMinorUnit: 100,
    keepaDomain: 2
  },
  {
    code: 'AU',
    country: 'Australia',
    domain: 'amazon.com.au',
    flag: '🇦🇺',
    currency: 'AUD',
    symbol: 'A$',
    region: 'apac',
    core: false,
    langParam: 'en_AU',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'IN',
    country: 'India',
    domain: 'amazon.in',
    flag: '🇮🇳',
    currency: 'INR',
    symbol: '₹',
    region: 'apac',
    core: false,
    langParam: 'en_IN',
    priceMinorUnit: 100,
    keepaDomain: 10
  },
  {
    code: 'SG',
    country: 'Singapore',
    domain: 'amazon.sg',
    flag: '🇸🇬',
    currency: 'SGD',
    symbol: 'S$',
    region: 'apac',
    core: false,
    langParam: 'en_SG',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'MX',
    country: 'Mexico',
    domain: 'amazon.com.mx',
    flag: '🇲🇽',
    currency: 'MXN',
    symbol: 'Mex$',
    region: 'americas',
    core: false,
    langParam: 'es_MX',
    priceMinorUnit: 100,
    keepaDomain: 11
  },
  {
    code: 'BR',
    country: 'Brazil',
    domain: 'amazon.com.br',
    flag: '🇧🇷',
    currency: 'BRL',
    symbol: 'R$',
    region: 'americas',
    core: false,
    langParam: 'pt_BR',
    priceMinorUnit: 100,
    keepaDomain: 1
  },
  {
    code: 'ZA',
    country: 'South Africa',
    domain: 'amazon.co.za',
    flag: '🇿🇦',
    currency: 'ZAR',
    symbol: 'R ',
    region: 'mea',
    core: false,
    langParam: 'en_ZA',
    priceMinorUnit: 100,
    keepaDomain: 2
  }
];

// Fallback exchange rates (relative to 1 USD) in case offline
const FALLBACK_RATES = {
  USD: 1,
  EUR: 0.9,
  GBP: 0.76,
  JPY: 155.0,
  SAR: 3.75,
  EGP: 50.0,
  AED: 3.6725,
  CAD: 1.39,
  AUD: 1.48,
  INR: 86.0,
  SEK: 10.3,
  PLN: 3.95,
  TRY: 38.0,
  SGD: 1.32,
  MXN: 19.5,
  BRL: 5.3,
  ZAR: 17.5
};

const state = {
  query: '',
  detectedAsin: null,
  detectedSourceDomain: null,
  directAsinMode: true,
  department: 'aps',
  sort: 'relevanceblender',
  minPrice: '',
  maxPrice: '',
  forceEnglish: true,
  fourStarOnly: false,
  dealsOnly: false,
  activeRegion: 'all',
  countryFilter: '',
  baseCurrency: localStorage.getItem('amazonga_currency') || 'USD',
  rates: { ...FALLBACK_RATES },
  selectedStores: new Set(
    JSON.parse(localStorage.getItem('amazonga_selected') || '["US","UK","DE","JP","SA","EG","FR"]')
  ),
  pinnedStores: new Set(
    JSON.parse(localStorage.getItem('amazonga_pinned') || '["US","UK","DE","JP","SA","EG","FR"]')
  ),
  recentSearches: JSON.parse(localStorage.getItem('amazonga_recent') || '[]'),
  comparatorInputs: {},
  pendingQueueStores: []
};

// DOM References
const dom = {
  searchForm: document.getElementById('searchForm'),
  searchInput: document.getElementById('searchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  autocompleteDropdown: document.getElementById('autocompleteDropdown'),
  departmentSelect: document.getElementById('departmentSelect'),
  sortSelect: document.getElementById('sortSelect'),
  minPriceInput: document.getElementById('minPriceInput'),
  maxPriceInput: document.getElementById('maxPriceInput'),
  priceCurrencyLabel: document.getElementById('priceCurrencyLabel'),
  forceEnglishCheckbox: document.getElementById('forceEnglishCheckbox'),
  fourStarCheckbox: document.getElementById('fourStarCheckbox'),
  dealsOnlyCheckbox: document.getElementById('dealsOnlyCheckbox'),
  asinDetectedBanner: document.getElementById('asinDetectedBanner'),
  detectedAsinCode: document.getElementById('detectedAsinCode'),
  detectedSourceDomain: document.getElementById('detectedSourceDomain'),
  directAsinModeCheckbox: document.getElementById('directAsinModeCheckbox'),
  keepaLink: document.getElementById('keepaLink'),
  camelLink: document.getElementById('camelLink'),
  marketplacesGrid: document.getElementById('marketplacesGrid'),
  regionTabs: document.querySelectorAll('.region-tab'),
  pinnedCountBadge: document.getElementById('pinnedCountBadge'),
  countrySearchInput: document.getElementById('countrySearchInput'),
  selectCoreBtn: document.getElementById('selectCoreBtn'),
  selectAllVisibleBtn: document.getElementById('selectAllVisibleBtn'),
  deselectAllBtn: document.getElementById('deselectAllBtn'),
  launchSelectedBtn: document.getElementById('launchSelectedBtn'),
  selectedCountLabel: document.getElementById('selectedCountLabel'),
  baseCurrencySelect: document.getElementById('baseCurrencySelect'),
  fxStatusBadge: document.getElementById('fxStatusBadge'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  themeIcon: document.getElementById('themeIcon'),
  recentSearchesRow: document.getElementById('recentSearchesRow'),
  recentSearchesList: document.getElementById('recentSearchesList'),
  clearHistoryBtn: document.getElementById('clearHistoryBtn'),
  globalGoogleXrayBtn: document.getElementById('globalGoogleXrayBtn'),
  globalDdgXrayBtn: document.getElementById('globalDdgXrayBtn'),
  globalBingXrayBtn: document.getElementById('globalBingXrayBtn'),
  openCompareModalBtn: document.getElementById('openCompareModalBtn'),
  closeCompareModalBtn: document.getElementById('closeCompareModalBtn'),
  compareModal: document.getElementById('compareModal'),
  compareShippingInput: document.getElementById('compareShippingInput'),
  resetComparatorBtn: document.getElementById('resetComparatorBtn'),
  comparatorTableWrap: document.getElementById('comparatorTableWrap'),
  launchQueueModal: document.getElementById('launchQueueModal'),
  closeQueueModalBtn: document.getElementById('closeQueueModalBtn'),
  queueRemainingCount: document.getElementById('queueRemainingCount'),
  openNextQueueBtn: document.getElementById('openNextQueueBtn'),
  nextStoreNameLabel: document.getElementById('nextStoreNameLabel'),
  retryAllQueueBtn: document.getElementById('retryAllQueueBtn'),
  queueStoresList: document.getElementById('queueStoresList'),
  toastContainer: document.getElementById('toastContainer')
};

/**
 * Extract ASIN and optional domain from raw input string (either standalone 10-char ASIN or full Amazon URL)
 */
function parseAsinOrUrl(rawInput) {
  const trimmed = rawInput.trim();
  if (!trimmed) return { asin: null, domain: null };

  // Check if standalone 10-char ASIN (starts with B0 or 10-char alphanumeric uppercase/numbers)
  if (/^(B[0-9A-Z]{9}|[0-9]{9}[0-9X])$/i.test(trimmed)) {
    return { asin: trimmed.toUpperCase(), domain: null };
  }

  // Check if Amazon URL containing /dp/ASIN or /gp/product/ASIN
  const urlMatch = trimmed.match(/(?:amazon\.[a-z.]+).*?(?:\/dp\/|\/gp\/product\/|\/exec\/obidos\/ASIN\/|\/product\/)([A-Z0-9]{10})/i);
  if (urlMatch) {
    const domainMatch = trimmed.match(/(amazon\.[a-z.]+)/i);
    return {
      asin: urlMatch[1].toUpperCase(),
      domain: domainMatch ? domainMatch[1].toLowerCase() : null
    };
  }

  return { asin: null, domain: null };
}

/**
 * Convert amount from baseCurrency to targetCurrency
 */
function convertCurrency(amount, fromCurr, toCurr) {
  const num = parseFloat(amount);
  if (isNaN(num) || num < 0) return null;
  const fromRate = state.rates[fromCurr] || 1;
  const toRate = state.rates[toCurr] || 1;
  const inUsd = num / fromRate;
  return inUsd * toRate;
}

/**
 * Format currency value cleanly
 */
function formatMoney(amount, currencyCode) {
  if (amount === null || isNaN(amount)) return '';
  const isZeroDecimal = currencyCode === 'JPY';
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: isZeroDecimal ? 0 : 2,
    minimumFractionDigits: 0
  }).format(isZeroDecimal ? Math.round(amount) : amount);
}

/**
 * Build the Amazon URL for a given store based on current state
 */
function buildStoreUrl(store) {
  const baseUrl = `https://www.${store.domain}`;
  const rawQuery = state.query.trim();

  // If ASIN detected and direct product page mode is enabled
  if (state.detectedAsin && state.directAsinMode) {
    const params = new URLSearchParams();
    if (state.forceEnglish && store.langParam) {
      params.set('language', store.langParam);
    }
    const qs = params.toString();
    return `${baseUrl}/dp/${state.detectedAsin}${qs ? '?' + qs : ''}`;
  }

  // If no search query entered, open homepage or deals
  const effectiveQuery = state.detectedAsin || rawQuery;
  if (!effectiveQuery) {
    if (state.dealsOnly) {
      return `${baseUrl}/gp/goldbox`;
    }
    const params = new URLSearchParams();
    if (state.forceEnglish && store.langParam) {
      params.set('language', store.langParam);
    }
    const qs = params.toString();
    return `${baseUrl}/${qs ? '?' + qs : ''}`;
  }

  const params = new URLSearchParams();
  params.set('k', effectiveQuery);

  if (state.department && state.department !== 'aps') {
    params.set('i', state.department);
  }

  if (state.sort && state.sort !== 'relevanceblender') {
    params.set('s', state.sort);
  }

  if (state.forceEnglish && store.langParam) {
    params.set('language', store.langParam);
  }

  // Build rh filter array (price range in local currency + 4-star filter)
  const rhParts = [];
  const minConverted = state.minPrice !== '' ? convertCurrency(state.minPrice, state.baseCurrency, store.currency) : null;
  const maxConverted = state.maxPrice !== '' ? convertCurrency(state.maxPrice, state.baseCurrency, store.currency) : null;

  if (minConverted !== null || maxConverted !== null) {
    const minUnits = minConverted !== null ? Math.round(minConverted * store.priceMinorUnit) : '';
    const maxUnits = maxConverted !== null ? Math.round(maxConverted * store.priceMinorUnit) : '';
    rhParts.push(`p_36:${minUnits}-${maxUnits}`);
  }

  if (state.fourStarOnly) {
    rhParts.push('p_72:4-');
  }

  if (rhParts.length > 0) {
    params.set('rh', rhParts.join(','));
  }

  if (state.dealsOnly) {
    params.set('pct-off', '10-');
  }

  return `${baseUrl}/s?${params.toString()}`;
}

/**
 * Build Google & DuckDuckGo X-Ray URLs for a single store or multiple stores
 */
function buildStoreGoogleXrayUrl(store) {
  const q = (state.detectedAsin || state.query.trim() || 'deals');
  return `https://www.google.com/search?q=${encodeURIComponent(`site:${store.domain} ${q}`)}`;
}

function buildGlobalXrayUrls() {
  const q = state.detectedAsin || state.query.trim() || 'Nintendo Switch';
  const activeDomains = MARKETPLACES.filter(m => state.selectedStores.has(m.code)).map(m => `site:${m.domain}`);
  const sitesClause = (activeDomains.length ? activeDomains.slice(0, 8) : ['site:amazon.com', 'site:amazon.co.uk', 'site:amazon.de', 'site:amazon.co.jp', 'site:amazon.sa', 'site:amazon.eg', 'site:amazon.fr']).join(' OR ');
  const fullQuery = `${q} (${sitesClause})`;

  dom.globalGoogleXrayBtn.href = `https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`;
  dom.globalDdgXrayBtn.href = `https://duckduckgo.com/?q=${encodeURIComponent(fullQuery)}`;
  dom.globalBingXrayBtn.href = `https://www.bing.com/search?q=${encodeURIComponent(fullQuery)}`;
}

/**
 * Render the ASIN Detection Banner
 */
function updateAsinBanner() {
  const parsed = parseAsinOrUrl(state.query);
  state.detectedAsin = parsed.asin;
  state.detectedSourceDomain = parsed.domain;

  if (parsed.asin) {
    dom.asinDetectedBanner.classList.remove('hidden');
    dom.detectedAsinCode.textContent = parsed.asin;
    dom.detectedSourceDomain.textContent = parsed.domain ? `(from ${parsed.domain})` : '';
    dom.keepaLink.href = `https://keepa.com/#!product/1-${parsed.asin}`;
    dom.camelLink.href = `https://camelcamelcamel.com/product/${parsed.asin}`;
  } else {
    dom.asinDetectedBanner.classList.add('hidden');
  }
}

/**
 * Check if a store matches current region tab and country filter
 */
function getVisibleMarketplaces() {
  const filterText = state.countryFilter.trim().toLowerCase();

  return MARKETPLACES.filter(store => {
    if (state.activeRegion === 'core' && !store.core) return false;
    if (state.activeRegion === 'pinned' && !state.pinnedStores.has(store.code)) return false;
    if (['mea', 'americas', 'europe', 'apac'].includes(state.activeRegion) && store.region !== state.activeRegion) {
      return false;
    }

    if (filterText) {
      const hay = `${store.country} ${store.code} ${store.domain} ${store.currency}`.toLowerCase();
      if (!hay.includes(filterText)) return false;
    }

    return true;
  });
}

/**
 * Render all marketplace cards
 */
function renderMarketplaces() {
  updateAsinBanner();
  buildGlobalXrayUrls();

  dom.pinnedCountBadge.textContent = state.pinnedStores.size;
  dom.selectedCountLabel.textContent = state.selectedStores.size;
  dom.priceCurrencyLabel.textContent = state.baseCurrency;

  const visibleStores = getVisibleMarketplaces();
  dom.marketplacesGrid.innerHTML = '';

  if (visibleStores.length === 0) {
    dom.marketplacesGrid.innerHTML = `
      <div class="card-panel" style="grid-column: 1 / -1; text-align: center;">
        <p>No Amazon marketplaces match your current filter. Try switching to <strong>All Stores</strong>.</p>
      </div>
    `;
    return;
  }

  const effectiveQuery = state.detectedAsin || state.query.trim();

  visibleStores.forEach(store => {
    const isSelected = state.selectedStores.has(store.code);
    const isPinned = state.pinnedStores.has(store.code);
    const storeUrl = buildStoreUrl(store);
    const xrayUrl = buildStoreGoogleXrayUrl(store);
    const dealsUrl = `https://www.${store.domain}/gp/goldbox`;
    const bestsellersUrl = `https://www.${store.domain}/gp/bestsellers`;

    // Exchange rate badge relative to baseCurrency
    const fxRate = convertCurrency(1, state.baseCurrency, store.currency);
    const fxText = store.currency === state.baseCurrency
      ? `Base: ${store.currency}`
      : `1 ${state.baseCurrency} ≈ ${formatMoney(fxRate, store.currency)} ${store.currency}`;

    // Local converted price range preview
    let convertedPriceBadge = '';
    const minConv = state.minPrice !== '' ? convertCurrency(state.minPrice, state.baseCurrency, store.currency) : null;
    const maxConv = state.maxPrice !== '' ? convertCurrency(state.maxPrice, state.baseCurrency, store.currency) : null;
    if (minConv !== null || maxConv !== null) {
      const minStr = minConv !== null ? `${store.symbol}${formatMoney(minConv, store.currency)}` : '0';
      const maxStr = maxConv !== null ? `${store.symbol}${formatMoney(maxConv, store.currency)}` : '∞';
      convertedPriceBadge = `<span class="meta-pill price-converted" title="Local price filter applied to Amazon URL">🎯 ${minStr} – ${maxStr}</span>`;
    }

    const actionLabel = state.detectedAsin && state.directAsinMode
      ? `Open ASIN ${state.detectedAsin}`
      : effectiveQuery
        ? `Search "${effectiveQuery.length > 20 ? effectiveQuery.slice(0, 20) + '…' : effectiveQuery}"`
        : `Explore ${store.domain}`;

    const card = document.createElement('article');
    card.className = `store-card${isSelected ? ' selected' : ''}`;
    card.innerHTML = `
      <div>
        <div class="store-card-top">
          <div class="store-identity">
            <span class="store-flag" aria-hidden="true">${store.flag}</span>
            <div class="store-title-wrap">
              <div class="store-name-row">
                <span class="store-country">${store.country}</span>
                <span class="store-code-badge">${store.code}</span>
              </div>
              <a href="https://www.${store.domain}" target="_blank" rel="noopener noreferrer" class="store-domain">${store.domain}</a>
            </div>
          </div>

          <div class="store-top-controls">
            <button type="button" class="pin-btn ${isPinned ? 'pinned' : ''}" data-pin="${store.code}" title="${isPinned ? 'Unpin store' : 'Pin store to My Pinned'}">
              📌
            </button>
            <input
              type="checkbox"
              class="store-select-checkbox"
              data-select="${store.code}"
              ${isSelected ? 'checked' : ''}
              title="Include ${store.country} in batch launch"
              aria-label="Select ${store.country}"
            />
          </div>
        </div>

        <div class="store-meta" style="margin-top: 0.7rem;">
          <span class="meta-pill">💵 ${store.currency}</span>
          <span class="meta-pill">${fxText}</span>
          ${convertedPriceBadge}
        </div>
      </div>

      <div class="store-actions">
        <a href="${storeUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary store-search-btn" data-launch-single="${store.code}">
          <span>${actionLabel}</span>
          <span>↗</span>
        </a>
        <div class="store-sub-actions">
          <a href="${xrayUrl}" target="_blank" rel="noopener noreferrer" class="sub-action-link" title="Google site:${store.domain} search">🔎 Google X-Ray</a>
          <a href="${dealsUrl}" target="_blank" rel="noopener noreferrer" class="sub-action-link" title="Today's Deals on ${store.domain}">🏷️ Deals</a>
          <a href="${bestsellersUrl}" target="_blank" rel="noopener noreferrer" class="sub-action-link" title="Best Sellers on ${store.domain}">🏆 Best Sellers</a>
        </div>
      </div>
    `;

    dom.marketplacesGrid.appendChild(card);
  });
}

/**
 * Save state to localStorage
 */
function persistPreferences() {
  localStorage.setItem('amazonga_selected', JSON.stringify([...state.selectedStores]));
  localStorage.setItem('amazonga_pinned', JSON.stringify([...state.pinnedStores]));
  localStorage.setItem('amazonga_currency', state.baseCurrency);
  localStorage.setItem('amazonga_recent', JSON.stringify(state.recentSearches.slice(0, 8)));
}

/**
 * Add query to recent search history
 */
function recordSearchHistory(query) {
  const q = query.trim();
  if (!q) return;
  state.recentSearches = [q, ...state.recentSearches.filter(item => item.toLowerCase() !== q.toLowerCase())].slice(0, 8);
  persistPreferences();
  renderRecentSearches();
}

function renderRecentSearches() {
  if (!state.recentSearches.length) {
    dom.recentSearchesRow.classList.add('hidden');
    return;
  }
  dom.recentSearchesRow.classList.remove('hidden');
  dom.recentSearchesList.innerHTML = '';
  state.recentSearches.forEach(item => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'query-chip';
    btn.textContent = `🕒 ${item.length > 26 ? item.slice(0, 26) + '…' : item}`;
    btn.addEventListener('click', () => {
      dom.searchInput.value = item;
      state.query = item;
      dom.clearSearchBtn.classList.toggle('hidden', !state.query);
      renderMarketplaces();
    });
    dom.recentSearchesList.appendChild(btn);
  });
}

/**
 * Live Autocomplete via Google Shopping JSONP (works on static GitHub Pages with zero CORS issues)
 */
let autocompleteTimeout = null;
let jsonpScriptEl = null;

window.__amazongaSuggestCallback = function (data) {
  if (!Array.isArray(data) || !Array.isArray(data[1])) return;
  const suggestions = data[1].slice(0, 8);
  if (!suggestions.length || !dom.searchInput.value.trim()) {
    dom.autocompleteDropdown.classList.add('hidden');
    return;
  }

  dom.autocompleteDropdown.innerHTML = '';
  suggestions.forEach(text => {
    const div = document.createElement('div');
    div.className = 'autocomplete-item';
    div.setAttribute('role', 'option');
    div.innerHTML = `<span>🔍</span> <span>${escapeHtml(text)}</span>`;
    div.addEventListener('mousedown', e => {
      e.preventDefault();
      dom.searchInput.value = text;
      state.query = text;
      dom.autocompleteDropdown.classList.add('hidden');
      recordSearchHistory(text);
      renderMarketplaces();
    });
    dom.autocompleteDropdown.appendChild(div);
  });
  dom.autocompleteDropdown.classList.remove('hidden');
};

function fetchAutocompleteSuggestions(query) {
  const q = query.trim();
  if (q.length < 2 || parseAsinOrUrl(q).asin) {
    dom.autocompleteDropdown.classList.add('hidden');
    return;
  }

  if (jsonpScriptEl) {
    jsonpScriptEl.remove();
  }

  jsonpScriptEl = document.createElement('script');
  jsonpScriptEl.src = `https://suggestqueries.google.com/complete/search?client=chrome&ds=sh&q=${encodeURIComponent(q)}&callback=__amazongaSuggestCallback`;
  jsonpScriptEl.async = true;
  jsonpScriptEl.onerror = () => {
    dom.autocompleteDropdown.classList.add('hidden');
  };
  document.body.appendChild(jsonpScriptEl);
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, s => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[s]));
}

/**
 * Fetch Live Exchange Rates from open.er-api.com
 */
async function loadLiveExchangeRates() {
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/USD');
    if (!res.ok) throw new Error('FX fetch failed');
    const data = await res.json();
    if (data && data.rates) {
      state.rates = { ...FALLBACK_RATES, ...data.rates };
      dom.fxStatusBadge.textContent = `✅ Live FX Rates (${state.baseCurrency})`;
      renderMarketplaces();
      renderComparator();
    }
  } catch (err) {
    dom.fxStatusBadge.textContent = `⚡ Offline FX Rates (${state.baseCurrency})`;
  }
}

/**
 * Cross-Border Price Comparator Modal
 */
function renderComparator() {
  const shippingBase = parseFloat(dom.compareShippingInput.value) || 0;
  dom.comparatorTableWrap.innerHTML = '';

  // Find cheapest converted total
  let cheapestCode = null;
  let lowestTotal = Infinity;

  MARKETPLACES.forEach(store => {
    const localVal = parseFloat(state.comparatorInputs[store.code]);
    if (!isNaN(localVal) && localVal > 0) {
      const converted = convertCurrency(localVal, store.currency, state.baseCurrency);
      const total = converted + shippingBase;
      if (total < lowestTotal) {
        lowestTotal = total;
        cheapestCode = store.code;
      }
    }
  });

  MARKETPLACES.forEach(store => {
    const rawVal = state.comparatorInputs[store.code] ?? '';
    const localVal = parseFloat(rawVal);
    const hasVal = !isNaN(localVal) && localVal > 0;
    const converted = hasVal ? convertCurrency(localVal, store.currency, state.baseCurrency) : null;
    const total = hasVal ? converted + shippingBase : null;
    const isCheapest = store.code === cheapestCode;

    const item = document.createElement('div');
    item.className = `comp-item${isCheapest ? ' cheapest' : ''}`;
    item.innerHTML = `
      <div class="comp-item-head">
        <span>${store.flag} ${store.country} (${store.code})</span>
        <span>${isCheapest ? '🏆 Best Price' : store.currency}</span>
      </div>
      <div class="comp-input-row">
        <input
          type="number"
          class="comp-local-input"
          data-comp-store="${store.code}"
          placeholder="Price in ${store.currency}..."
          value="${rawVal}"
          min="0"
          step="any"
        />
      </div>
      <div class="comp-converted">
        <span>In ${state.baseCurrency}:</span>
        <strong>${total !== null ? `${formatMoney(total, state.baseCurrency)} ${state.baseCurrency}` : '—'}</strong>
      </div>
    `;
    dom.comparatorTableWrap.appendChild(item);
  });

  dom.comparatorTableWrap.querySelectorAll('.comp-local-input').forEach(input => {
    input.addEventListener('input', e => {
      const code = e.target.getAttribute('data-comp-store');
      state.comparatorInputs[code] = e.target.value;
      updateComparatorTotalsOnly();
    });
  });
}

function updateComparatorTotalsOnly() {
  const shippingBase = parseFloat(dom.compareShippingInput.value) || 0;
  let cheapestCode = null;
  let lowestTotal = Infinity;

  MARKETPLACES.forEach(store => {
    const localVal = parseFloat(state.comparatorInputs[store.code]);
    if (!isNaN(localVal) && localVal > 0) {
      const converted = convertCurrency(localVal, store.currency, state.baseCurrency);
      const total = converted + shippingBase;
      if (total < lowestTotal) {
        lowestTotal = total;
        cheapestCode = store.code;
      }
    }
  });

  dom.comparatorTableWrap.querySelectorAll('.comp-item').forEach((card, idx) => {
    const store = MARKETPLACES[idx];
    const localVal = parseFloat(state.comparatorInputs[store.code]);
    const hasVal = !isNaN(localVal) && localVal > 0;
    const converted = hasVal ? convertCurrency(localVal, store.currency, state.baseCurrency) : null;
    const total = hasVal ? converted + shippingBase : null;
    const isCheapest = store.code === cheapestCode;

    card.classList.toggle('cheapest', isCheapest);
    const badgeSpan = card.querySelector('.comp-item-head span:last-child');
    if (badgeSpan) badgeSpan.textContent = isCheapest ? '🏆 Best Price' : store.currency;
    const strongEl = card.querySelector('.comp-converted strong');
    if (strongEl) strongEl.textContent = total !== null ? `${formatMoney(total, state.baseCurrency)} ${state.baseCurrency}` : '—';
  });
}

/**
 * Show Toast Notification
 */
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  dom.toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3800);
}

/**
 * Batch Launch Selected Stores
 */
function launchSelectedStores() {
  const selectedList = MARKETPLACES.filter(m => state.selectedStores.has(m.code));
  if (!selectedList.length) {
    showToast('⚠️ Select at least one Amazon marketplace to launch.');
    return;
  }

  if (state.query.trim()) {
    recordSearchHistory(state.query.trim());
  }

  launchStoreList(selectedList);
}

function launchStoreList(storesToLaunch) {
  const blockedStores = [];
  let openedCount = 0;

  storesToLaunch.forEach(store => {
    const url = buildStoreUrl(store);
    // Important: Do NOT pass 'noopener,noreferrer' in windowFeatures because
    // HTML spec forces window.open() to return null when noopener is specified,
    // AND restricts multi-window creation. Instead, null out win.opener manually.
    const win = window.open(url, '_blank');
    if (win) {
      try {
        win.opener = null;
      } catch (_) {}
      openedCount++;
    } else {
      blockedStores.push(store);
    }
  });

  state.pendingQueueStores = blockedStores;

  if (blockedStores.length > 0) {
    renderLaunchQueueModal();
    dom.launchQueueModal.classList.remove('hidden');
    setTimeout(() => dom.openNextQueueBtn.focus(), 60);
  } else {
    dom.launchQueueModal.classList.add('hidden');
    showToast(`🚀 Opened all ${openedCount} Amazon store(s)!`);
  }
}

function renderLaunchQueueModal() {
  const remaining = state.pendingQueueStores;
  if (!remaining.length) {
    dom.launchQueueModal.classList.add('hidden');
    showToast('🎉 All selected Amazon stores have been opened!');
    return;
  }

  dom.queueRemainingCount.textContent = remaining.length;
  const nextStore = remaining[0];
  dom.nextStoreNameLabel.textContent = `${nextStore.flag} ${nextStore.country} (${nextStore.code})`;

  dom.queueStoresList.innerHTML = '';
  remaining.forEach(store => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'queue-store-btn';
    btn.innerHTML = `
      <span>${store.flag} ${store.country} (${store.code})</span>
      <span>↗</span>
    `;
    btn.addEventListener('click', () => {
      const url = buildStoreUrl(store);
      const win = window.open(url, '_blank');
      if (win) {
        try { win.opener = null; } catch (_) {}
      }
      state.pendingQueueStores = state.pendingQueueStores.filter(s => s.code !== store.code);
      renderLaunchQueueModal();
    });
    dom.queueStoresList.appendChild(btn);
  });
}

function openNextQueuedStore() {
  if (!state.pendingQueueStores.length) return;
  // Try opening all remaining in case the user just enabled pop-ups;
  // otherwise at least the first one in the queue will open with this click gesture!
  launchStoreList([...state.pendingQueueStores]);
}

/**
 * Initialize Event Listeners
 */
function initEvents() {
  // Search Input
  dom.searchInput.addEventListener('input', e => {
    state.query = e.target.value;
    dom.clearSearchBtn.classList.toggle('hidden', !state.query);
    renderMarketplaces();

    clearTimeout(autocompleteTimeout);
    autocompleteTimeout = setTimeout(() => {
      fetchAutocompleteSuggestions(state.query);
    }, 180);
  });

  dom.searchInput.addEventListener('blur', () => {
    setTimeout(() => dom.autocompleteDropdown.classList.add('hidden'), 150);
  });

  dom.clearSearchBtn.addEventListener('click', () => {
    state.query = '';
    dom.searchInput.value = '';
    dom.clearSearchBtn.classList.add('hidden');
    dom.autocompleteDropdown.classList.add('hidden');
    renderMarketplaces();
    dom.searchInput.focus();
  });

  // Form submit
  dom.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    dom.autocompleteDropdown.classList.add('hidden');
    if (state.query.trim()) {
      recordSearchHistory(state.query.trim());
    }
    renderMarketplaces();
    document.getElementById('marketplacesGrid').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    showToast(`🔍 Updated search links across all 23 Amazon stores! Click any store or "Open Selected Tabs".`);
  });

  // Filters
  dom.departmentSelect.addEventListener('change', e => {
    state.department = e.target.value;
    renderMarketplaces();
  });

  dom.sortSelect.addEventListener('change', e => {
    state.sort = e.target.value;
    renderMarketplaces();
  });

  dom.minPriceInput.addEventListener('input', e => {
    state.minPrice = e.target.value;
    renderMarketplaces();
  });

  dom.maxPriceInput.addEventListener('input', e => {
    state.maxPrice = e.target.value;
    renderMarketplaces();
  });

  dom.forceEnglishCheckbox.addEventListener('change', e => {
    state.forceEnglish = e.target.checked;
    renderMarketplaces();
  });

  dom.fourStarCheckbox.addEventListener('change', e => {
    state.fourStarOnly = e.target.checked;
    renderMarketplaces();
  });

  dom.dealsOnlyCheckbox.addEventListener('change', e => {
    state.dealsOnly = e.target.checked;
    renderMarketplaces();
  });

  dom.directAsinModeCheckbox.addEventListener('change', e => {
    state.directAsinMode = e.target.checked;
    renderMarketplaces();
  });

  // Quick query chips
  document.querySelectorAll('.query-chip[data-query]').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.getAttribute('data-query');
      dom.searchInput.value = q;
      state.query = q;
      dom.clearSearchBtn.classList.remove('hidden');
      recordSearchHistory(q);
      renderMarketplaces();
    });
  });

  dom.clearHistoryBtn.addEventListener('click', () => {
    state.recentSearches = [];
    persistPreferences();
    renderRecentSearches();
  });

  // Region Tabs
  dom.regionTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      dom.regionTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeRegion = tab.getAttribute('data-region');
      renderMarketplaces();
    });
  });

  // Country filter
  dom.countrySearchInput.addEventListener('input', e => {
    state.countryFilter = e.target.value;
    renderMarketplaces();
  });

  // Selection buttons
  dom.selectCoreBtn.addEventListener('click', () => {
    state.selectedStores = new Set(MARKETPLACES.filter(m => m.core).map(m => m.code));
    persistPreferences();
    renderMarketplaces();
  });

  dom.selectAllVisibleBtn.addEventListener('click', () => {
    getVisibleMarketplaces().forEach(m => state.selectedStores.add(m.code));
    persistPreferences();
    renderMarketplaces();
  });

  dom.deselectAllBtn.addEventListener('click', () => {
    state.selectedStores.clear();
    persistPreferences();
    renderMarketplaces();
  });

  dom.launchSelectedBtn.addEventListener('click', launchSelectedStores);

  // Delegate clicks on marketplace cards (pin & select checkboxes)
  dom.marketplacesGrid.addEventListener('click', e => {
    const pinBtn = e.target.closest('[data-pin]');
    if (pinBtn) {
      const code = pinBtn.getAttribute('data-pin');
      if (state.pinnedStores.has(code)) {
        state.pinnedStores.delete(code);
      } else {
        state.pinnedStores.add(code);
      }
      persistPreferences();
      renderMarketplaces();
      return;
    }

    const selectBox = e.target.closest('[data-select]');
    if (selectBox) {
      const code = selectBox.getAttribute('data-select');
      if (selectBox.checked) {
        state.selectedStores.add(code);
      } else {
        state.selectedStores.delete(code);
      }
      persistPreferences();
      renderMarketplaces();
      return;
    }

    const singleLaunch = e.target.closest('[data-launch-single]');
    if (singleLaunch && state.query.trim()) {
      recordSearchHistory(state.query.trim());
    }
  });

  // Base Currency Change
  dom.baseCurrencySelect.value = state.baseCurrency;
  dom.baseCurrencySelect.addEventListener('change', e => {
    state.baseCurrency = e.target.value;
    dom.fxStatusBadge.textContent = `✅ Live FX Rates (${state.baseCurrency})`;
    persistPreferences();
    renderMarketplaces();
    renderComparator();
  });

  // Theme Toggle
  const savedTheme = localStorage.getItem('amazonga_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  dom.themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

  dom.themeToggleBtn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', current);
    localStorage.setItem('amazonga_theme', current);
    dom.themeIcon.textContent = current === 'dark' ? '☀️' : '🌙';
  });

  // Price Comparator Modal
  dom.openCompareModalBtn.addEventListener('click', () => {
    renderComparator();
    dom.compareModal.classList.remove('hidden');
  });

  dom.closeCompareModalBtn.addEventListener('click', () => {
    dom.compareModal.classList.add('hidden');
  });

  dom.compareModal.addEventListener('click', e => {
    if (e.target === dom.compareModal) {
      dom.compareModal.classList.add('hidden');
    }
  });

  dom.compareShippingInput.addEventListener('input', updateComparatorTotalsOnly);

  dom.resetComparatorBtn.addEventListener('click', () => {
    state.comparatorInputs = {};
    renderComparator();
  });

  // Multi-Store Launch Queue Modal
  dom.openNextQueueBtn.addEventListener('click', openNextQueuedStore);
  dom.retryAllQueueBtn.addEventListener('click', openNextQueuedStore);

  dom.closeQueueModalBtn.addEventListener('click', () => {
    dom.launchQueueModal.classList.add('hidden');
  });

  dom.launchQueueModal.addEventListener('click', e => {
    if (e.target === dom.launchQueueModal) {
      dom.launchQueueModal.classList.add('hidden');
    }
  });

  // Check URL query parameter (?q=...)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('q')) {
    state.query = urlParams.get('q');
    dom.searchInput.value = state.query;
    dom.clearSearchBtn.classList.remove('hidden');
  }
}

// Boot
initEvents();
renderRecentSearches();
renderMarketplaces();
loadLiveExchangeRates();
