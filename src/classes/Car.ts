// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';

// Car class that extends Vehicle class
class Car extends Vehicle {

  override printDetails(): void {
    super.printDetails();
  }
}

// Export the Car class as the default export
export default Car;
