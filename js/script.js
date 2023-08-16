class Human {
  name = null;
  gander = null;
  constructor(name, gander) {
    this.name = name
    this.gander = gander
  }

  aboutHuman(){
    console.log(`Імя: ${this.name}, Стать: ${this.gander}`)
  }
}

const human1 = new Human('Коля', 'male')
const human2 = new Human('Катя', 'female')
const human3 = new Human('Ігор', 'male')

class Apartment {
  residents = []
  addResident(value){
    this.residents.push(value)
  }
}

class House {
  apartments = [];
  maxCountHouses = null
  constructor(maxCountHouses) {
    this.maxCountHouses = maxCountHouses
  }
  addApartment(value){

      if (this.maxCountHouses > this.apartments.length){
        return this.apartments.push(value)
      }else {
        console.log('Досягнуто максимульну кількість квартир')
      }

  }
}

const apartment1 = new Apartment()
apartment1.addResident(human1)
apartment1.addResident(human2)
apartment1.addResident(human3)

const apartment2 = new Apartment()
apartment2.addResident(human2)
apartment2.addResident(human1)

const apartment3 = new Apartment()
apartment3.addResident(human3)

const house = new House(3)
house.addApartment(apartment1)
house.addApartment(apartment2)
house.addApartment(apartment3)
console.log(house.apartments)

