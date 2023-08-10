class Human {
  age = null;
  name = null;
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  aboutHuman(){
    console.log(`Імя: ${this.name}, Вік: ${this.age}`)
  }
}

const human1 = new Human('Коля', '22')
const human2 = new Human('Вітя', '55')
const human3 = new Human('Ігор', '17')

human1.aboutHuman()
human2.aboutHuman()
human3.aboutHuman()

class Auto{
  brand = null;
  model = null;
  owner = null;
  yearOfRelease = null
  licencePlate = null
  constructor(brand,model,yearOfRelease,licencePlate) {
    this.brand = brand
    this.model = model
    this.yearOfRelease = yearOfRelease
    this.licencePlate = licencePlate
  }

  addOwnerCar(value){
    if (value.age < 18){
      const errorText = `${value.name} вам немає 18 років.`
      console.log(errorText)
      return;
    }
    if (value.age >= 18){
      return this.owner = value
    }
}

  outputInfo(){
    if (this.owner !== null){
      this.owner.aboutHuman()
    }
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік випуску: ${this.yearOfRelease}, Номерний знак: ${this.licencePlate}`)
  }

}

const auto = new Auto('Porsche','718 Cayman',2016,'YA55 FBE')
const auto1 = new Auto('Ferrari','SF90 Stradale',2020,'WWI3 BCD')
const auto2 = new Auto('BMW','M440i xDrive Gran',2022,'BD51 SMR')


auto.addOwnerCar(human1)
auto.outputInfo()
auto1.addOwnerCar(human2)
auto1.outputInfo()
auto2.addOwnerCar(human3)
auto2.outputInfo()