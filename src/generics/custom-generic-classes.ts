class PrimitiveStorage<T extends boolean | number | string> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return this.data;
    }
}

const numberBoolStorage = new PrimitiveStorage<number | boolean>();

numberBoolStorage.addItem(true);
numberBoolStorage.addItem(false);
numberBoolStorage.addItem(0);
numberBoolStorage.addItem(7);
numberBoolStorage.addItem(98);
console.log(numberBoolStorage.getItems());
numberBoolStorage.removeItem(7);
console.log(numberBoolStorage.getItems());


const stringStorage = new PrimitiveStorage<string>();

stringStorage.addItem('true');
stringStorage.addItem('false');
stringStorage.addItem('0');
stringStorage.addItem('7');
stringStorage.addItem('98');
console.log(stringStorage.getItems());
stringStorage.removeItem('7');
console.log(stringStorage.getItems());