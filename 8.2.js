const mycountry = {
    country: 'isreal',
    capital: 'jerusalim',
    language: 'hebrew',
    population: 8000000,
    neighbours: ['jordan', 'saudi', 'egypt'],
    describe() {
        console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they 
     have ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}’. `)
    },
    checkIsland() {
        this.isIsland = (this.neighbours.length === 0) ? true : false;
    },

}

mycountry.describe();