window.addEventListener('load', e => {
    registerSW();
  });

  async function registerSW() { (1)
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        alert('ServiceWorker registration failed. Sorry about that.' + e);
      }
    } else {
      document.querySelector('.alert').removeAttribute('hidden');
    }
  }