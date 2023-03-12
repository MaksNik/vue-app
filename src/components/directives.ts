import { Ref } from 'vue';

export const vShowIfInViewport = {
  mounted(el: Element, callback: Ref, options: IntersectionObserverInit = {
    rootMargin: '0px',
    threshold: 1.0,
  }) {
    const observer = new IntersectionObserver(callback.value, options);
    observer.observe(el);
  },
};

export default {
  vShowIfInViewport,
};
