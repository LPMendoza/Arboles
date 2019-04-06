class ArbolBinario {

   constructor() {

      this.raiz = null;

   }
   
   agregar(nuevo) {

      if(this.raiz == null)
         this.raiz = nuevo;
      else
         this.agregate(nuevo, this.raiz);

   }

   agregate(nuevo, raiz) {

      if(nuevo.dato < raiz.dato) {

         if(raiz.getHijoIzquierdo() == null)
            raiz.setHijoIzquierdo(nuevo);
         else
            this.agregate(nuevo, raiz.getHijoIzquierdo());
      }
      else {

         if(raiz.getHijoDerecho() == null)
            raiz.setHijoDerecho(nuevo);
         else
            this.agregate(nuevo, raiz.getHijoDerecho());

      }
   }

   inOrder() {

      if(this.raiz == null) {
         return "";
      }
      else {
         return this.inO(this.raiz);
      }

   }

   inO(raiz) {

      var c = "";
      
      if(raiz.getHijoIzquierdo() != null) {
         c += this.inO(raiz.getHijoIzquierdo());
      }

      c += raiz.dato;

      if(raiz.getHijoDerecho() != null) {
         c += this.inO(raiz.getHijoDerecho());
      }

      return c;

   }

   preOrder() {

      if(this.raiz == null) {
         return "";
      }
      else {
         return this.preOr(this.raiz);
      }

   }

   preOr(raiz) {

      let c = "";
      c += raiz.dato;
 
      if (raiz.getHijoIzquierdo() != null) {
         c += "" + this.preOr(raiz.getHijoIzquierdo());
      }
      if (raiz.getHijoDerecho() != null) {
         c += "" + this.preOr(raiz.getHijoDerecho());
      }

      return c;

   }

   postOrder() {
      
      if (this.raiz == null) {
         return "";
      }
      else {
         return this.postOr(this.raiz);
      }

   }

   postOr(raiz) {

      let c = "";

      if (raiz.getHijoIzquierdo() != null) {
         c += this.postOr(raiz.getHijoIzquierdo());
      }
      if (raiz.getHijoDerecho() != null) {
         c += this.postOr(raiz.getHijoDerecho());
      }

      return c += raiz.dato;

   }

   buscar(dato, raiz) {

      if(dato == raiz.dato) {
         return `${dato} ha sido encontrado`;
      }
      else if(dato > raiz.dato) {

         if (raiz.getHijoDerecho() != null) {
            return this.buscar(dato, raiz.getHijoDerecho());
         }
         else {
            return `${dato} no ha sido encontrado`;
         }

      }
      else if(dato < raiz.dato) {

         if (raiz.getHijoIzquierdo() != null) {
            return this.buscar(dato, raiz.getHijoIzquierdo());
         }
         else {
            return `${dato} no ha sido encontrado`;
         }

      }
   }
   
}
