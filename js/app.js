/**
 * Portfolio Builder - App Core
 * Handles routing, theme management, and navigation
 */

// ============================================
// ROUTER
// ============================================

const Router = {
  views: ['landing', 'builder', 'privacy'],
  currentView: 'landing',

  init() {
    // Handle initial route
    this.handleRoute();

    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());

    // Setup navigation links
    this.setupNavigation();
  },

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'landing';
    const view = this.views.includes(hash) ? hash : 'landing';
    this.showView(view);
  },

  showView(viewName) {
    // Hide all views
    document.querySelectorAll('.view').forEach(view => {
      view.classList.remove('active');
    });

    // Show target view
    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
      targetView.classList.add('active');
      this.currentView = viewName;

      // Scroll to top
      window.scrollTo(0, 0);
    }
  },

  navigate(viewName) {
    if (viewName === 'landing') {
      window.location.hash = '';
      // Push state to remove hash completely for cleaner URL
      history.pushState('', document.title, window.location.pathname);
      this.showView('landing');
    } else {
      window.location.hash = viewName;
    }
  },

  setupNavigation() {
    // Handle all navigation links with data-nav attribute
    document.addEventListener('click', (e) => {
      const navLink = e.target.closest('[data-nav]');
      if (navLink) {
        e.preventDefault();
        const target = navLink.dataset.nav;
        this.navigate(target);
      }
    });
  }
};

// ============================================
// THEME MANAGER
// ============================================

const ThemeManager = {
  STORAGE_KEY: 'kp-theme',

  init() {
    this.setupToggles();
  },

  isDark() {
    return document.documentElement.classList.contains('dark');
  },

  setTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem(this.STORAGE_KEY, 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.removeItem(this.STORAGE_KEY);
    }
  },

  toggle() {
    this.setTheme(!this.isDark());
  },

  setupToggles() {
    // Handle all theme toggle buttons
    document.querySelectorAll('.theme-toggle').forEach(toggle => {
      toggle.addEventListener('click', () => this.toggle());
    });
  }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  Router.init();
  ThemeManager.init();
});
