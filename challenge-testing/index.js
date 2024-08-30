
class Carritocompra {
    constructor(){
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    
   calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
  aplicarDescuento(porcentaje) {
    const descuento = (porcentaje / 100) * this.calcularTotal();
    return this.calcularTotal() - descuento;
  }
}
module.exports = {
    Carritocompra,
}