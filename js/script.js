class Human {
  age = null;
  gander = null;
  constructor(name, gander) {
    this.name = name
    this.gander = gander
  }

  aboutHuman(){
    console.log(`Імя: ${this.name}, Вік: ${this.age}`)
  }
}

const human1 = new Human('Коля', 'male')
const human2 = new Human('Катя', 'female')
const human3 = new Human('Ігор', 'male')

class Apartment {
  residents = []
  addResidents(value){
    this.residents.push(value.name)
  }
}

class House {
  apartments = [];
  maxCountHouses = null
  constructor(maxCountHouses) {
    this.maxCountHouses = maxCountHouses
  }
  addApartments(value){

      if (this.maxCountHouses > this.apartments.length){
        return this.apartments.push(value)
      }else {
        console.log('Досягнуто максимульну кількість квартир')
      }

  }
}

const apartment1 = new Apartment()
apartment1.addResidents(human1)
apartment1.addResidents(human2)
apartment1.addResidents(human3)

const apartment2 = new Apartment()
apartment2.addResidents(human2)
apartment2.addResidents(human1)

const apartment3 = new Apartment()
apartment3.addResidents(human3)

const house = new House(3)
house.addApartments(apartment1)
house.addApartments(apartment2)
house.addApartments(apartment3)
console.log(house.apartments)

