# Changelog - RPWP Healthcare Advanced Web Portal

All notable changes to the RPWP Healthcare web platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [v1.2.0] - 2026-08-25

### Removed
- **EECP Cardiovascular Care Module**: Permanently deleted the dedicated page `eecp.html` and script `js/eecp-wizard.js`. Removed all structural references, including navigation bar links, hero detail buttons, and the cardiovascular care teaser section from `index.html`, `audiometric-mobile.html`, and `ppe.html`.
- **Cardiovascular Booking Options**: Purged the cardiac screening selectors and initial trial options from `js/booking.js`.
- **Settings Toggle Control**: Removed the EECP row control and eecp config options from `settings.html`, `config.json`, and `js/feature-toggle.js`.
- **All Translation Keys**: Cleaned up the language dictionary in `js/i18n.js` to strip all English and Malay translation references to counterpulsation, OMAY, and cardiac care. Renumbered remaining core diagnostic pillars.

## [v1.1.0] - 2026-08-01

### Added
- **Dynamic Feature Toggle System**: Client-side visibility engine (`js/feature-toggle.js`) that reads settings from `config.json` to dynamically hide navigation links, homepage sections, shortcuts, footer links, and handle direct page redirection.
- **Interactive Toggles Dashboard**: Dedicated `settings.html` panel for non-technical administrators to test toggles locally in preview mode and copy production JSON configurations.
- **Dynamic Booking Validation**: Updated booking controller to adjust default appointment paths based on dynamic feature states.

## [v1.0.0] - 2026-07-27

### Added
- **OMAY EECP Therapy Showcase**: Full dedicated marketing landing section for OMAY (Guangzhou) Medical Technologies latest-generation Enhanced External Counterpulsation equipment.
- **EECP Clinical Mechanism & Indications**: Detailed presentation of Nitric Oxide (NO) release, VEGF angiogenesis collateral circulation, Wall Shear Stress (WSS), and Left Ventricular Ejection Fraction (LVEF) augmentation.
- **Interactive EECP Indication Checker**: 4-step diagnostic self-screening tool for cardiovascular eligibility.
- **Innohear Kajang Hearing Center Integration**: Complete audiology service portfolio (OAE, Pure Tone Audiometry, ABR, VRA) & hearing aid catalog (Oticon, Phonak, ReSound, Interton).
- **Interactive Clinical Hearing Wizard**: 5-step self-assessment tool for hearing loss matching.
- **DrMas Hand Sanitiser & PPE Section**: Showcase for MDA-registered 85% ethanol & water-based rinse-free sanitiser products.
- **E-Commerce Catalog & Slide-out Cart**: Dynamic product filtering, search, detail modal, wishlist, and cart drawer with multi-currency (MYR, SGD, USD) live switching.
- **Unified Appointment Booking Engine**: Online consultation & screening booking for Innohear Kajang and OMAY EECP center with instant confirmation voucher generation.
- **Advisory Board & Social Enterprise Mission**: Interactive profiles for RPWP Healthcare advisory panel & social impact metrics supporting a 260 pax sustainable community comprising charity members, staff, students, and co-founders at Rumah Pengasih Warga Prihatin.
- **Design System & Theme Switcher**: Glassmorphic UI with light/dark theme toggle, responsive layout, and zero-state UI handlers.
