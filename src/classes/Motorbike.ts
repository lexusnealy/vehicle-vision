// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';

class Motorbike extends Vehicle {
  override numberOfWheelHubs: number= 2; 

  wheelie(): void{
    console.log(`Motorbike ${this.make} ${this.model} is doing a weheelie!`);
  }

  override printDetails(): void {
    super.printDetails()
    
  
}

  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}


// Export the Motorbike class as the default export
export default Motorbike;
