const user = {
    id: 1,
    name: 'Nrujal',
    address: {
        city: 'Ahmedabad',
        country: 'India'
    }
}

const user2: any = {
    id: 2,
    name: 'Nrujal2',
}

console.log(user.address.city)
console.log(user2.address?.city)