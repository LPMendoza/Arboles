class Nodo {

   constructor(dato) {

      this.dato = dato;
      this.hijoIzquierdo = null;
      this.hijoDerecho = null;

   }

   setHijoIzquierdo(hijoIzquierdo) {

      this.hijoIzquierdo = hijoIzquierdo;

   }

   setHijoDerecho(hijoDerecho) {
      
      this.hijoDerecho = hijoDerecho;

   }

   getHijoIzquierdo() {

      return this.hijoIzquierdo;

   }

   getHijoDerecho() {
      
      return this.hijoDerecho;

   }


}
