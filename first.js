function Car(model,colour,price){
    this.model = model;
    this.colour = colour;
    this.price = price

 }

 let car1 = new Car("swift" ,"red" ,900);
 car1.size ="big";
 

  car1.details = function(){
    return this.model +" " + this.colour;
  }
  console.log(car1.details());
