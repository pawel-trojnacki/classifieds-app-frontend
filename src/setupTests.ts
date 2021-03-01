import '@testing-library/jest-dom';
// import '__mocks__/intersectionObserver.mock';
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
