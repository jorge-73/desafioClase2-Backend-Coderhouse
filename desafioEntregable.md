# Funcionalidades principales:
La clase ProductManager está diseñada para administrar una lista de productos. Permite agregar nuevos productos, validar sus campos y generar Ids únicas para ellos. También proporciona un método para recuperar todos los productos de la lista y otro para buscar un producto por su ID.

## Métodos:
#validateProducts: valida que todos los campos de un producto sean obligatorios y que el campo "code" sea único.

getProductsById: busca un producto en la lista por su ID y lo devuelve si lo encuentra, o "Not Found" en caso contrario.

addProduct: agrega un nuevo producto a la lista, generando una Id única para él y validando sus campos antes de hacerlo.

getProducts: devuelve la lista completa de productos.

## Campos:
#products: una matriz que contiene todos los productos administrados por la class.
#nextId: un número que representa el ID que se le asignará al próximo producto agregado a la lista.
