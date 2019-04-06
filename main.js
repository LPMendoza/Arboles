let arbol = new ArbolBinario();

document.getElementById('btnAdd').addEventListener('click', () => {

   let newNodo = new Nodo(document.getElementById('txtDato').value);
   arbol.agregar(newNodo);

   console.log(arbol);

});

document.getElementById('btnBuscar').addEventListener('click', () => {
   document.getElementById('contInOrder').innerHTML = arbol.buscar(document.getElementById('txtDato').value, arbol.raiz);
});

document.getElementById('btnInOrder').addEventListener('click', () => {

   document.getElementById('contInOrder').innerHTML = arbol.inOrder();

});

document.getElementById('btnPreOrder').addEventListener('click', () => {

   document.getElementById('contInOrder').innerHTML = arbol.preOrder();

});

document.getElementById('btnPostOrder').addEventListener('click', () => {

   document.getElementById('contInOrder').innerHTML = arbol.postOrder();

});