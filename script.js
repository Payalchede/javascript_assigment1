
//By using var

var r, d, c, a;
    
   
    
    r = 5;
    d = 2 * 5;
    c = 2 * Math.PI * 5;
   a = Math.PI * (5 * 5);
    
    console.log("radius = " + r + " units");
    console.log("Circumference = " + c + " units");
   console.log("Area = " + a + " sq. units");
   
   //----------------------------------------------------------------------------------------------------------------------------

   //By using const


   var r=10
   var d=20


   console.log("radius="+ r +" units");

   const  z = 2*Math.PI* r 
   console.log( "Circumference= "+ z +" units");

   const area = Math.PI* (10*10);
   console.log("Area="+ area +"sq.units");


   //-------------------------------------------------------------------------------------------------------------------------------

   //By using let
//
//
   let radius=15
   console.log("radius="+ radius + "units");

   const  Circumference = 2*Math.PI* radius 
   console.log( "Circumference= "+ Circumference +" units");

   const Area = Math.PI* (15*15);
   console.log("Area="+ Area +"sq.units");