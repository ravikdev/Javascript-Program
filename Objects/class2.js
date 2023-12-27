class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isEngineOn = false;
      this.speed = 0;
    }
   
    startEngine() {
      this.isEngineOn = true;
      console.log('Engine started.');
    }
  
   
  
    stopEngine() {
      this.isEngineOn = false;
      console.log('Engine stopped.');
    }
     
  
    accelerate(speedIncrement) {
      if (this.isEngineOn) {
        this.speed += speedIncrement;
        console.log(`Accelerating. Current speed: ${this.speed} km/h`);
      } else {
        console.log('Engine is not running. Cannot accelerate.');
      }
    }
  
   
  
    brake(speedDecrement) {
      if (this.speed >= speedDecrement) {
        this.speed -= speedDecrement;
      } else {
        this.speed = 0;
      }
      console.log(`Braking. Current speed: ${this.speed} km/h`);
    }
  
   
  
    getSpeed() {
      console.log(`Current speed: ${this.speed} km/h`);
    }
  }
  
   
  
  // Program using all methods of the Car class
  const myCar = new Car('Toyota', 'Camry', 2022);
  
   
  
  console.log('--- Starting the car ---');
  myCar.startEngine();
  
   
  
  console.log('\n--- Accelerating ---');
  myCar.accelerate(20);
  myCar.getSpeed();
  
   
  
  console.log('\n--- Accelerating more ---');
  myCar.accelerate(30);
  myCar.getSpeed();
  
   
  
  console.log('\n--- Braking ---');
  myCar.brake(15);
  myCar.getSpeed();
  
   
  
  console.log('\n--- Stopping the car ---');
  myCar.stopEngine();