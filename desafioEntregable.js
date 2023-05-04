class ProductManager {
  #products;
  #nextId;
  constructor() {
    this.#products = [];
    this.#nextId = 1;
  }

  #validateProducts = (product) => {
    // Validamos que todos los campos sean obligatorios
    for (const key in product) {
      if (!product[key]) {
        console.log("Todos los campos son obligatorios");
        return false;
      }
    }

    // Validamos que no se repita el campo "code"
    const existingProduct = this.#products.find(
      (prod) => prod.code === product.code
    );
    if (existingProduct) {
      console.log("Ya existe un producto con el mismo código");
      return false;
    }
    return true;
  };

  // Buscamos en el arreglo el producto que coincida con el id
  getProductsById = (id) => {
    const productId = this.#products.find(prod => prod.id === id)
    if (!productId) return "Not Found"
    return productId;
  }

  // Generamos el id autoincrementable
  #getNextId = () => {
    return this.#nextId++;
  }

  // Agregamos un producto al arreglo de productos inicial
  addProduct = (title, description, price, thumbnail, code, stock) => {
    const product = {
      id: this.#getNextId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    // Si pasamos la Validacion, agregamos el producto y generamos su Id
    if (this.#validateProducts(product)) {
      this.#products.push(product);
      this.#nextId++;
      console.log("Producto agregado con éxito:", product.title);
    }
    
  };

  // Devolvemos el arreglo con todos los productos creados hasta ese momento
  getProducts() {
    return this.#products;
  }
}

// Ejemplos:
const productManager = new ProductManager();

productManager.addProduct(
  "Producto 1",
  "Descripción del Producto 1",
  10,
  "ruta-imagen-1.jpg",
  "001",
  5
);
productManager.addProduct(
  "Producto 2",
  "Descripción del Producto 2",
  20,
  "ruta-imagen-2.jpg",
  "002",
  10
);
productManager.addProduct(
  "Producto 3",
  "Descripción del Producto 3",
  30,
  "ruta-imagen-3.jpg",
  "003",
  3
);
productManager.addProduct(
  "Producto 4",
  "Descripción del Producto 4",
  40,
  "ruta-imagen-3.jpg",
  "001", // Intentamos agregar un producto con el mismo "code"
  4
);
productManager.addProduct( // Intentamos agregar un producto con campos insuficientes
  "Producto 3",
  "Descripción del Producto 3",
  30,
  5
);
// Llamamos a todo el arreglo con sus productos
console.log(productManager.getProducts());
// Buscamos un producto por su Id
console.log(productManager.getProductsById(1));
// Hacemos la busqueda de un producto con un Id inexistente para probar el error
console.log(productManager.getProductsById(10));
