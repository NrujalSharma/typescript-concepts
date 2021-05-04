// '!' in the emnd says that the value can never be null

// Type casting method 1
// const inputElement = <HTMLInputElement>document.getElementById('user-input');

// Type casting method 2
// const inputElement = document.getElementById('user-input')! as HTMLInputElement;


const inputElement = document.getElementById('user-input');

let i = 0;
if (inputElement) {
    setInterval(() => {
        (inputElement as HTMLInputElement).value = (i++).toString();
    }, 1000);
}