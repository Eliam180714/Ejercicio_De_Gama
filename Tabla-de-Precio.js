
const filas = document.querySelectorAll('tbody tr');


filas.forEach((fila, index) => {
  fila.addEventListener('mouseover', () => {
    
    switch (index) {
      case 0:
        fila.style.backgroundColor = '#007bff'; 
        break;
      case 1:
        fila.style.backgroundColor = '#28a745'; 
        break;
      case 2:
        fila.style.backgroundColor = '#dc3545';
        break;
      case 3:
        fila.style.backgroundColor = '#ffc107'; 
        break;
      case 4:
        fila.style.backgroundColor = '#fd7e14'; 
        break;
      case 5:
        fila.style.backgroundColor = '#8B4513'; 
        break;
      case 6:
        fila.style.backgroundColor = '#17a2b8'; 
        break;
      case 7:
        fila.style.backgroundColor = '#000'; 
        break;
      case 8:
        fila.style.backgroundColor = '#6f42c1'; 
        break;
      case 9:
        fila.style.backgroundColor = '#e83e8c'; 
        break;
    }
  });


  fila.addEventListener('mouseout', () => {
    fila.style.backgroundColor = '';
  });
});