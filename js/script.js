const car = { brand: "", model: "", color: "" };

const updatedProperties = { type: "" }

Object.assign(car, updatedProperties)

const electro = Object.assign({},car, {type:"electro", maxDistance:0})

const common = Object.assign({},car, { type: "common", gas: "", gearBox: "" })

const tesla = {...electro, brand: "Tesla", model: "S Plaid", color: "", type: "electro", maxDistance: 850}

const leaf = {...electro, brand: "Nissan", model: "Leaf", color: "", type: "electro", maxDistance: 270}

const x5 = {...common, brand: "BMW", model: "X5", color: "", type: "common", gas: "Diesel", gearBox: "auto"}

const kenga = {...common, brand: "Renault", model: "Kangoo", color: "", type: "common", gas: "Petrol", gearBox: "mechanic"}

const models = {tesla, leaf, x5, kenga }

for (let modelCar in models){
    console.log(`${modelCar}:`)
    let modelDescription = []
    Object.entries(models[modelCar]).forEach(([key,value])=> {
        modelDescription.push(`${key}: "${value}"`);
    })
    console.log(`${modelDescription.join(", ")}`);
}