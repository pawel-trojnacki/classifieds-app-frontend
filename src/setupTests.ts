import '@testing-library/jest-dom';
global.IntersectionObserver = class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return (null as unknown) as IntersectionObserverEntry[];
  }

  unobserve() {
    return null;
  }
};
