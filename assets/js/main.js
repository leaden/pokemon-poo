function Pokemon (nombre,color,poderDeAtaque){
   this.nombre = nombre;
   this.color = color;
   this.nivelDeAmistad = 0;
   this.vida = 100;
   this.poderDeAtaque = poderDeAtaque

   this.mostrarPokemon = function (){
      return ("Hola, soy: "+ this.nombre + " y soy de color: " + this.color);

      }

   this.aumentarAmistad = function(valor){
      this.nivelDeAmistad = this.nivelDeAmistad + valor;
      return ("El nuevo nivel de Amistad es" + this.nivelDeAmistad + valor);
      }

   this.atacar = function(pokemon){
      pokemon.vida = pokemon.vida - this.poderDeAtaque;
      return ("Este es un nuevo ataque" + pokemon.vida);

   }


   }
   
   const Pikachu = new Pokemon ("Pikachu", "amarillo",100);
   const Charmander = new Pokemon ("Charmander", "rojo",20);
   const Zaidoc = new Pokemon ("Zaidoc", "amarillo",50);
   const Bulbasour = new Bulbasour("Bulbasour", "verde", 70);
     
     Pikachu.atacar (Charmander);
     console.log(Charmander.vida);

 function botonPelear(){

   var pokemon1 = document.getElementById("Pok1").value;
   var pokemon2 = document.getElementById("Pok2").value;

   var registro = document.getElementById("res");
   
   var nuevoPok = new Pokemon (pokemon1,"azul",30);
   var nuevoPok2= new Pokemon (pokemon2,"rojo",60);

   if(pokemon1 == pokemon2){
      alert("Pokemones iguales no pueden luchar");

   }else{
      nuevoPok.atacar(nuevoPok2);
      var resultado = (pokemon1 + " ataco a " + pokemon2 + " y " + pokemon2 + " tiene una vida de: "+ nuevoPok2.vida + ".");
      registro.innerHTML = resultado
   }


 }








