// Función para aplicar estilos
function applyStyles(element, styles) {
    for (let prop in styles) {
      element.style[prop] = styles[prop];
    }
  }
  
  // Función para validar los checks
  function validateChecks() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          checkbox.parentNode.classList.add('checked');
        } else {
          checkbox.parentNode.classList.remove('checked');
        }
      });
    });
  }
  
  // Ejecutar la función de estilos
  window.onload = function () {
    const labels = document.querySelectorAll('.labels label');
    labels.forEach((label) => {
      applyStyles(label, {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '20px',
      });
    });
  
    // Ejecutar la función de validación de checks
    validateChecks();
  };
  