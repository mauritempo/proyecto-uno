function calculateIngredients() {
  const quantity = document.getElementById("cantidad-pizzas").value;


  const harinaPorPizza = 200; // gramos
  const aguaPorPizza = 120; // ml


  const totalHarina = harinaPorPizza * quantity;
  const totalAgua = aguaPorPizza * quantity;


  document.getElementById("result").innerHTML = `Para ${quantity} pizzas necesitas ${totalHarina} gramos de harina y ${totalAgua} ml de agua.`;
}
