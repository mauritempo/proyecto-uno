function calcularTotal() {
    const cantidadPizzas = document.getElementById('cantidad-pizzas').value;
    const tamanioPizza = document.getElementById('tamanio-pizza').value; // Suponiendo que hay otro select para el tamaño
    let precioPorPizza;
  
    switch (tamanioPizza) {
      case 'chica':
        precioPorPizza = 10;
        break;
      case 'mediana':
        precioPorPizza = 15;
        break;
      case 'grande':
        precioPorPizza = 20;
        break;
    }
  
    const total = cantidadPizzas * precioPorPizza;
    // ... resto del código ...
  }