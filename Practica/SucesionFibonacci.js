//Declaracion de variables.
      var a = 0;
      var b = 1;
      var c = 0;
      var n = 15;
      //Estructura de control
      for (let k = 0; k <= n; k++) {
          c = b+a;
          a = b;
          b = c;            
      }
      console.log(a);