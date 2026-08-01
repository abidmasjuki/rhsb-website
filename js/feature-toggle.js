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

  // Run immediately and on DOM load to guarantee execution
  initializeEngine();
  document.addEventListener('DOMContentLoaded', () => {
    applyToggles(activeFeatures);
  });
})();
