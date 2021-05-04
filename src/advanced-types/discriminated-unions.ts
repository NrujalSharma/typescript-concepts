interface Parrot {
    type: 'parrot';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Parrot | Horse;

function moveAnimal(a: Animal) {
    let speed;

    switch (a.type) {
        case 'parrot':
            speed = a.flyingSpeed;
            break;
        case 'horse':
            speed = a.runningSpeed;
            break;
        default:
            break;
    }

    console.log(`Moving at speed of ${speed}kmph`);
}

const a1: Animal = {
    type: 'parrot',
    flyingSpeed: 10
};

const a2: Animal = {
    type: 'horse',
    runningSpeed: 40
};

moveAnimal(a1);
moveAnimal(a2);