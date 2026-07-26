/**
 * RPWP Healthcare Cart & Multi-Currency Manager
 * Version: 1.0.0
 */

class CartManager {
  constructor() {
    this.cartKey = "rpwp_cart_v1";
    this.wishlistKey = "rpwp_wishlist_v1";
    this.currentCurrency = localStorage.getItem("rpwp_currency") || "MYR";
    this.cart = this.loadStorage(this.cartKey, []);
    this.wishlist = this.loadStorage(this.wishlistKey, []);
  }

  loadStorage(key, defaultVal) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : defaultVal;
    } catch (e) {
      return defaultVal;
    }
  }

  saveStorage(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error("Storage error:", e);
    }
  }

  setCurrency(currCode) {
    if (RPWP_DATA.currencies[currCode]) {
      this.currentCurrency = currCode;
      localStorage.setItem("rpwp_currency", currCode);
      this.updateUI();
      if (window.appManager) window.appManager.renderCatalog();
    }
  }

  formatPrice(amountInMYR) {
    const currObj = RPWP_DATA.currencies[this.currentCurrency] || RPWP_DATA.currencies.MYR;
    const converted = amountInMYR * currObj.rate;
    return `${currObj.symbol} ${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  addItem(productId, qty = 1) {
    const existing = this.cart.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      this.cart.push({ id: productId, qty: qty });
    }
    this.saveStorage(this.cartKey, this.cart);
    this.updateUI();
    this.openDrawer();
    this.showToast("Item added to cart!");
  }

  removeItem(productId) {
    this.cart = this.cart.filter(i => i.id !== productId);
    this.saveStorage(this.cartKey, this.cart);
    this.updateUI();
  }

  updateQty(productId, qty) {
    if (qty <= 0) {
      this.removeItem(productId);
      return;
    }
    const item = this.cart.find(i => i.id === productId);
    if (item) {
      item.qty = qty;
      this.saveStorage(this.cartKey, this.cart);
      this.updateUI();
    }
  }

  toggleWishlist(productId) {
    const idx = this.wishlist.indexOf(productId);
    if (idx > -1) {
      this.wishlist.splice(idx, 1);
      this.showToast("Removed from wishlist");
    } else {
      this.wishlist.push(productId);
      this.showToast("Saved to wishlist");
    }
    this.saveStorage(this.wishlistKey, this.wishlist);
    this.updateUI();
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  getTotalMYR() {
    return this.cart.reduce((sum, item) => {
      const prod = RPWP_DATA.products.find(p => p.id === item.id);
      return sum + (prod ? prod.priceMYR * item.qty : 0);
    }, 0);
  }

  openDrawer() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) drawer.classList.add("open");
  }

  closeDrawer() {
    const drawer = document.getElementById("cart-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  updateUI() {
    // Update badge count
    const totalCount = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const countBadges = document.querySelectorAll(".cart-count-badge");
    countBadges.forEach(b => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? "inline-flex" : "none";
    });

    const wishBadges = document.querySelectorAll(".wishlist-count-badge");
    wishBadges.forEach(b => {
      b.textContent = this.wishlist.length;
      b.style.display = this.wishlist.length > 0 ? "inline-flex" : "none";
    });

    // Render cart items
    const cartBody = document.getElementById("cart-drawer-items");
    const cartFooter = document.getElementById("cart-drawer-footer");

    if (!cartBody) return;

    if (this.cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-zero-state">
          <div class="zero-icon">🛒</div>
          <h4>Your Cart is Empty</h4>
          <p>Explore our MDA-certified medical supplies, hearing aids, or OMAY EECP cardiac therapy packages.</p>
          <button class="btn btn-primary" onclick="window.cartManager.closeDrawer(); window.location.hash='#catalog';">Browse Products</button>
        </div>
      `;
      if (cartFooter) cartFooter.style.display = "none";
    } else {
      let itemsHTML = "";
      this.cart.forEach(item => {
        const prod = RPWP_DATA.products.find(p => p.id === item.id);
        if (!prod) return;
        itemsHTML += `
          <div class="cart-item-row">
            <div class="cart-item-info">
              <div class="cart-item-badge">${prod.categoryLabel}</div>
              <h4 class="cart-item-title">${prod.name}</h4>
              <div class="cart-item-price">${this.formatPrice(prod.priceMYR)}</div>
            </div>
            <div class="cart-item-controls">
              <button class="qty-btn" onclick="window.cartManager.updateQty('${prod.id}', ${item.qty - 1})">-</button>
              <span class="qty-num">${item.qty}</span>
              <button class="qty-btn" onclick="window.cartManager.updateQty('${prod.id}', ${item.qty + 1})">+</button>
              <button class="remove-btn" onclick="window.cartManager.removeItem('${prod.id}')" title="Remove">🗑️</button>
            </div>
          </div>
        `;
      });
      cartBody.innerHTML = itemsHTML;

      if (cartFooter) {
        cartFooter.style.display = "block";
        const totalMYR = this.getTotalMYR();
        const totalFormatted = this.formatPrice(totalMYR);
        const earnedPoints = Math.floor(totalMYR);
        cartFooter.innerHTML = `
          <div class="cart-summary-line">
            <span>Subtotal:</span>
            <strong class="cart-total-val">${totalFormatted}</strong>
          </div>
          <div class="rewards-earned-pill" style="background: rgba(255, 183, 3, 0.15); border: 1px solid rgba(255, 183, 3, 0.3); padding: 8px 12px; border-radius: 8px; font-size: 0.8rem; color: var(--accent-gold); margin: 8px 0; text-align: center;">
            🎁 Earns <strong>${earnedPoints.toLocaleString()} AmalPoints</strong> (Redeemable at SARC, WERDA & AmalMall)
          </div>
          <div class="cart-summary-note">Prices include GDPMD quality check & local delivery.</div>
          <button class="btn btn-primary btn-block mt-2" onclick="window.cartManager.startCheckout()">Proceed to Checkout</button>
        `;
      }
    }
  }

  startCheckout() {
    this.closeDrawer();
    const modal = document.getElementById("checkout-modal");
    if (!modal) return;

    const totalMYR = this.getTotalMYR();
    const body = document.getElementById("checkout-modal-body");
    if (body) {
      body.innerHTML = `
        <div class="checkout-form-container">
          <h3>Order & Checkout Summary</h3>
          <p class="text-muted">Currency: ${this.currentCurrency} (${RPWP_DATA.currencies[this.currentCurrency].symbol})</p>
          
          <div class="checkout-items-list">
            ${this.cart.map(i => {
              const p = RPWP_DATA.products.find(x => x.id === i.id);
              return `<div class="chk-item"><span>${i.qty}x ${p.name}</span><strong>${this.formatPrice(p.priceMYR * i.qty)}</strong></div>`;
            }).join('')}
            <div class="chk-total"><span>Total Payable:</span><strong>${this.formatPrice(totalMYR)}</strong></div>
          </div>

          <form id="checkout-form" onsubmit="window.cartManager.submitOrder(event)">
            <div class="form-group">
              <label>Full Name *</label>
              <input type="text" class="form-control" required placeholder="e.g. Dr. Ahmad Razak">
            </div>
            <div class="form-group">
              <label>Email Address *</label>
              <input type="email" class="form-control" required placeholder="e.g. ahmad@example.com">
            </div>
            <div class="form-group">
              <label>Phone / WhatsApp Number *</label>
              <input type="tel" class="form-control" required placeholder="e.g. +60123456789">
            </div>
            <div class="form-group">
              <label>Delivery Address / Clinic Location *</label>
              <textarea class="form-control" rows="2" required placeholder="Full shipping address"></textarea>
            </div>
            <div class="form-group">
              <label>Preferred Payment Method</label>
              <select class="form-control">
                <option>Online Banking (FPX / Direct Transfer)</option>
                <option>Credit / Debit Card</option>
                <option>Corporate Purchase Order (PO / Invoice)</option>
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block mt-3">Confirm & Place Order</button>
          </form>
        </div>
      `;
    }

    modal.classList.add("active");
  }

  submitOrder(e) {
    e.preventDefault();
    const orderNo = "RPWP-" + Math.floor(100000 + Math.random() * 900000);
    const modal = document.getElementById("checkout-modal");
    const body = document.getElementById("checkout-modal-body");
    
    if (body) {
      body.innerHTML = `
        <div class="order-success-card">
          <div class="success-icon">🎉</div>
          <h3>Order Successfully Received!</h3>
          <p class="order-ref">Order Reference: <strong>${orderNo}</strong></p>
          <p>Thank you for supporting RPWP Healthcare. Our team will verify your medical order and send an official invoice/dispatch confirmation via WhatsApp & Email.</p>
          <div class="impact-reminder-box">
            🌱 <strong>Social Impact:</strong> Your order directly contributes to sustaining a 260 pax sustainable community comprising charity members, staff, students, and co-founders at Rumah Pengasih Warga Prihatin.
          </div>
          <button class="btn btn-primary mt-3" onclick="document.getElementById('checkout-modal').classList.remove('active')">Close</button>
        </div>
      `;
    }

    // Clear cart
    this.cart = [];
    this.saveStorage(this.cartKey, this.cart);
    this.updateUI();
  }

  showToast(msg) {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }
    const toast = document.createElement("div");
    toast.className = "rpwp-toast";
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.classList.add("show"), 10);
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2500);
  }
}

window.cartManager = new CartManager();
