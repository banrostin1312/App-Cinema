const {Carritocompra} = require("../index")

describe("Class Carritocompra",()=>{
  let carrito;
  beforeEach(()=>{
    carrito = new Carritocompra();
  })  
  it("Deberia inciar como un carrito de compras vacio",()=>{
    expect(carrito.productos).toHaveLength(0);
})
 
  it("Deberia agregar un producto al carrito",()=>{
    const producto = {name: "Prodcuto A", precio: 20};
    carrito.agregarProducto(producto);
    expect(carrito.productos).toHaveLength(1);
    expect(carrito.productos[0]).toBe(producto);
 })

 it("Deberia calcular el total de los productos.",()=>{
    const productos = [{name: "Prodcuto A", precio: 20}, {name: "Prodcuto B", precio: 40}]
    productos.forEach(producto => {
        carrito.agregarProducto(producto)
        });
    expect(carrito.calcularTotal()).toBe(60);
 })

 it("Deberia aplicar correctamente el descuento al total de la compra",()=>{
    const productos = [{name: "Prodcuto A", precio: 20}, {name: "Prodcuto B", precio: 40}]
    productos.forEach(producto => {
        carrito.agregarProducto(producto);
    });
    const porcentajeDescuento = 10;
    const totalConDescuento = carrito.aplicarDescuento(porcentajeDescuento);
    expect(totalConDescuento).toBe(54)
    
 }) 
})
 