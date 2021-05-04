class Car {
    constructor(public readonly n: number) {}

    drive() {
        console.log('Driving Car...');
    }

    countPassengers() {
        console.log('Total Passengers:', this.n);
    }
}

class Truck {
    constructor(public readonly n: number) {}

    drive() {
        console.log('Driving Truck...');
    }

    getCargoWeight() {
        console.log(`Cargo weight: ${this.n}kg`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car(3);
const v2 = new Truck(300);

function useVehicle(v: Vehicle) {
    // This is a type guard
    if ('getCargoWeight' in v) {
        v.getCargoWeight();
    }
    
    // This is a type guard
    if (v instanceof Car) {
        v.countPassengers()
    }

    v.drive();
}

useVehicle(v1);
useVehicle(v2);