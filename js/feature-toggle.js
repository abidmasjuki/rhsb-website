/**
 * RPWP Healthcare - Dynamic Feature Toggle Engine
 * Version: 1.1.0
 * Manages runtime visibility of major modules (e.g., EECP, PPE) based on config.json
 */

(function() {
  const defaultFeatures = {
    eecp: true,
    ppe: true
  };

  // Keep a reference to current settings
  let activeFeatures = { ...defaultFeatures };

  // 1. Inject hidden class style immediately
  const style = document.createElement('style');
  style.id = 'feature-toggle-style';
  style.innerHTML = '.hidden-feature { display: none !important; }';
  if (document.head) {
    document.head.appendChild(style);
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      document.head.appendChild(style);
    });
  }

  // 2. Hide matching elements in the DOM
  function applyToggles(features) {
    activeFeatures = features;
    const elements = document.querySelectorAll('[data-feature]');
    elements.forEach(elem => {
      const featureName = elem.getAttribute('data-feature');
      if (features[featureName] === false) {
        elem.classList.add('hidden-feature');
      } else {
        elem.classList.remove('hidden-feature');
      }
    });

    // 3. Handle Direct Page Redirections
    const currentPath = window.location.pathname.toLowerCase();
    if (currentPath.includes('ppe.html') && features.ppe === false) {
      window.location.replace('index.html');
    }
    if (currentPath.includes('eecp.html') && features.eecp === false) {
      window.location.replace('index.html');
    }

    // 3.5 Clean up textual references
    cleanDOMText(features);
  }

  // 3.8 Dynamic Text Cleaning for Audit Compliance
  function cleanDOMText(features) {
    // 1. Clean Title
    if (features.eecp === false) {
      document.title = document.title
        .replace(', Medical Supplies & EECP Therapy', '')
        .replace(' & EECP Therapy', '')
        .replace('EECP Therapy & ', '')
        .replace('Enhanced External Counterpulsation (EECP) Therapy | ', '');
    }
    if (features.ppe === false) {
      document.title = document.title
        .replace('Medical Supplies & ', '')
        .replace(' & Medical Supplies', '')
        .replace(', Medical Supplies &', ' &')
        .replace('PPE Products & ', '');
    }

    // 2. Clean Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      let desc = metaDesc.getAttribute('content') || '';
      if (features.eecp === false) {
        desc = desc
          .replace(', and Enhanced External Counterpulsation (EECP) Therapy', '')
          .replace('Enhanced External Counterpulsation (EECP) Therapy at RPWP Healthcare Kajang. ', '')
          .replace(' and Enhanced External Counterpulsation (EECP) Therapy.', '.');
      }
      if (features.ppe === false) {
        desc = desc
          .replace(', DrMas medical supplies', '')
          .replace(', and DrMas medical supplies', '')
          .replace('and DrMas medical supplies. ', '');
      }
      metaDesc.setAttribute('content', desc);
    }

    // 3. Clean Hero text paragraphs
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
      let txt = heroText.textContent || '';
      if (features.eecp === false) {
        txt = txt
          .replace('clinically proven Enhanced External Counterpulsation (EECP) cardiac therapy, ', '')
          .replace('terapi jantung Enhanced External Counterpulsation (EECP) terbukti secara klinikal, ', '')
          .replace('Enhanced External Counterpulsation (EECP) cardiac therapy, ', '');
      }
      if (features.ppe === false) {
        txt = txt
          .replace(', and DrMas medical supplies', '')
          .replace(', dan bekalan perubatan DrMas', '')
          .replace('and DrMas medical supplies. ', '');
      }
      // Fix grammar after replacement (e.g. double spaces, trailing commas)
      txt = txt.replace(/\s+/g, ' ').replace(/,\s*,/g, ',').trim();
      heroText.textContent = txt;
    }

    // 4. Clean Search Input Placeholder
    const searchInputs = document.querySelectorAll('.search-input');
    searchInputs.forEach(input => {
      let p = input.getAttribute('placeholder') || '';
      if (features.eecp === false) {
        p = p
          .replace(', EECP therapy', '')
          .replace(', terapi EECP', '')
          .replace('EECP protocol, ', '');
      }
      if (features.ppe === false) {
        p = p
          .replace(', DrMas sanitisers', '')
          .replace(', pembersih DrMas', '')
          .replace('DrMas sanitisers, ', '');
      }
      input.setAttribute('placeholder', p);
      if (input.placeholder) input.placeholder = p;
    });
  }

  // 4. Expose dynamic triggers globally so wizards can query feature states
  window.RPWP_FEATURES = {
    isEnabled: function(featureName) {
      return activeFeatures[featureName] !== false;
    },
    getActiveConfig: function() {
      return { ...activeFeatures };
    },
    updatePreview: function(features) {
      applyToggles(features);
    }
  };

  // 5. Watch for dynamically added elements using MutationObserver
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) { // Element Node
          // Check if the node itself has data-feature
          if (node.hasAttribute('data-feature')) {
            const featureName = node.getAttribute('data-feature');
            if (activeFeatures[featureName] === false) {
              node.classList.add('hidden-feature');
            }
          }
          // Also check all nested elements with data-feature
          node.querySelectorAll('[data-feature]').forEach(elem => {
            const featureName = elem.getAttribute('data-feature');
            if (activeFeatures[featureName] === false) {
              elem.classList.add('hidden-feature');
            }
          });
        }
      });
    });
  });

  // Start observing
  if (document.documentElement) {
    observer.observe(document.documentElement, { childList: true, subtree: true });
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      observer.observe(document.documentElement, { childList: true, subtree: true });
    });
  }

  // 6. Main Load Sequence
  function initializeEngine() {
    // Check for client-side local overrides (preview mode)
    const localOverrides = localStorage.getItem('rpwp_feature_overrides');
    if (localOverrides) {
      try {
        const parsed = JSON.parse(localOverrides);
        applyToggles({ ...defaultFeatures, ...parsed });
        return;
      } catch(e) {
        console.error('Failed to parse feature overrides from localStorage:', e);
      }
    }

    // Load from central server config.json
    // Use relative path to work across different sub-paths
    fetch('config.json?t=' + Date.now())
      .then(res => {
        if (!res.ok) throw new Error('Network response not ok');
        return res.json();
      })
      .then(config => {
        const activeConfig = { ...defaultFeatures, ...config.features };
        applyToggles(activeConfig);
      })
      .catch((err) => {
        console.warn('Feature-toggle config load failed. Falling back to defaults.', err);
        applyToggles(defaultFeatures);
      });
  }

  // 7. Silent Admin console entry (Alt+S keyboard shortcut or double click on footer version text)
  document.addEventListener('keydown', (e) => {
    if (e.altKey && e.key.toLowerCase() === 's') {
      window.location.href = 'settings.html';
    }
  });

  // Run immediately and on DOM load to guarantee execution
  initializeEngine();
  document.addEventListener('DOMContentLoaded', () => {
    applyToggles(activeFeatures);
    
    // Bind double click listener to footer copyright
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
      footerText.addEventListener('dblclick', () => {
        window.location.href = 'settings.html';
      });
    }

    // Intercept language toggle to clean up text after translations run
    if (window.toggleLanguage) {
      const origToggle = window.toggleLanguage;
      window.toggleLanguage = function() {
        origToggle();
        setTimeout(() => {
          cleanDOMText(activeFeatures);
        }, 10);
      };
    }
    
    // Run cleanup delayed to ensure i18n has processed its initial DOM rendering
    setTimeout(() => {
      cleanDOMText(activeFeatures);
    }, 10);
  });
})();
