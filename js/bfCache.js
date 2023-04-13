// Paso 1: Detectar si el navegador es compatible con BFCache
if (window.performance && window.performance.navigation.type === 2) {
  // La página se cargó desde la caché, puedes restaurar el estado anterior.
  var state = history.state;
  if (state) {
    window.scrollTo(0, state.scrollPosition);
  }
}

// Paso 2: Almacenar el estado de la página
window.addEventListener('beforeunload', function (event) {
  history.replaceState({ scrollPosition: window.scrollY }, '');
});

// Paso 3: Restaurar el estado de la página
window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    // La página se está restaurando desde la caché, puedes restaurar el estado anterior.
    var state = history.state;
    if (state) {
      window.scrollTo(0, state.scrollPosition);
    }
  }
});