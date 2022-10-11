 //this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassenger = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this. scheduleService = false;
    }

    checkService(){
        if (this.mileage > 3000){
            this.scheduleService = true
            return this.scheduleService;
        }
    }

    start() {
        if (this.fuel > 0) { 
            console.log('engine has started');
            return this.started = true
         } else {
            console.log('no fuel');
            return this.started = false;
         }
    }

    loadPassenger(num) {
        if (this.passenger < this.maximumPassengers) {
            if((num + this.passenger) <= this.maxPassenger) {
                this.passenger = num;
                return this.passeneger;
            } else {
                console.log(this.model + " " + this.make + "max capacity of passengers are reached!");

            }
        } else {
            console.log(this.model + " " + this.make + "is full")
        }
    }
}
//this shows how to call from this module...
let myCar = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");

myCar.checkService()
myCar.start()
myCar.loadPassenger()


console.log(myCar)


