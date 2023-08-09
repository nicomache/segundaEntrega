let productos = [
  { nombre: "television", precio: 150000, marca: "samsung" },
  { nombre: "heladera", precio: 250000, marca: "patrick" },
  { nombre: "mini componente", precio: 100000, marca: "sony" },
  { nombre: "cocina", precio: 200000, marca: "patrick" }
];

let carrito = [];


const mostarLista = () => {
  productos.forEach((producto) => alert(producto.nombre));
  buscador()
};

const buscador = () => {
  let productoBuscadoUsuario = prompt(
    "¿De qué producto desea saber su información?"
  );

  const productoBuscado = productos.find(
    (item) => item.nombre == productoBuscadoUsuario
  );

  if (productoBuscado) {
    alert(
      "Precio: " + productoBuscado.precio + "\nMarca: " + productoBuscado.marca
    );
    let compra = prompt("¿Desea agregar " + productoBuscado.nombre + " a su carrito?");
    if (compra.toLowerCase() === "si") {
      carrito.push(productoBuscado);
      alert(productoBuscado.nombre + " ha sido agregado al carrito");
      compraOCarrito()
    }
    else {
      mostarLista();
    }
  } else {
    alert("Producto no encontrado.");
    mostarLista();
  }
};

const compraOCarrito = () => {
  let opcionCompra = prompt("¿Desea agregar más productos al carrito(presione `m`)\no comprar(presione`c`)?")
  if(opcionCompra == "c" ){
    comprar()
  }
  else if(opcionCompra == "m"){
    buscador()
  }
  else {
    alert("Opción Incorrecta")
    mostarLista()
  }
  }
  

const comprar = () => {
  let total = carrito.reduce((acum, producto) => acum + producto.precio, 0);
  alert("su compra a sido exitosa")
  alert("su monto es de: " + total)
}


let saludo = prompt(
  "Hola, ¿deseas ver la lista de nuestros productos? \n Si o No"
);
if (saludo.toLowerCase() === "si") {
  mostarLista();
} else {
  alert("¡Qué lastima!");
}


