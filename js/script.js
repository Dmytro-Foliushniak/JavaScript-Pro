const aboutUser = {
    age: null,
    city: null,
    favoriteSport: null
}

let countryResult = null

const userSport = {
    football: {
        type: 'Футбол',
        champion:'Лионель Мессі',
    },
    basketball: {
        type: 'Баскетбол',
        champion:'Майкл Джордан',
    },
    volleyball: {
        type: 'Волейбол',
        champion: 'Борис Терещук',
    }
}
let favoriteSportResult = null

let ageResult = null

aboutUser.age = prompt('Вкажіть будь-ласка свій рік народження')

if (aboutUser.age > 0 || aboutUser.age === !'' ){
    const date = new Date()
    const year = date.getFullYear()
    ageResult = `Ваш вік ${year - aboutUser.age}`
} else if (aboutUser.age === null){
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
}

aboutUser.city = prompt('Вкажіть будь-ласка ваше місто')

switch (aboutUser.city) {
    case 'Київ':
        countryResult = 'Ти живеш у столиці України'
        break;
    case 'Вашингтон':
        countryResult = 'Ти живеш у столиці Америки'
        break;
    case 'Лондон':
        countryResult = 'Ти живеш у столиці Англії'
        break;
    case null:
        alert('Шкода, що Ви не захотіли ввести своє місто')
        break;
    case '':
        break;
    default:
        countryResult = `Ти живеш у місті ${aboutUser.city}`
}
aboutUser.favoriteSport = prompt('Вкажіть будь-ласка ваш улюблений вид спорту')

switch (true){
    case aboutUser.favoriteSport === userSport.football.type:
        favoriteSportResult = `Круто хочеш стати як ${userSport.football.champion}`
        break;
    case aboutUser.favoriteSport === userSport.basketball.type:
        favoriteSportResult = `Круто хочеш стати як ${userSport.basketball.champion}`
        break;
    case aboutUser.favoriteSport === userSport.volleyball.type:
        favoriteSportResult = `Круто хочеш стати як ${userSport.volleyball.champion}`
        break;
    case aboutUser.favoriteSport === null:
        alert('Шкода, що Ви не захотіли ввести свій улюблений спорт')
        break;
    case aboutUser.favoriteSport === '':
        break;
    default:
        favoriteSportResult = 'Спробуй інший вид спорту!'
}

switch (true){
    case (ageResult === null || ageResult === '') && (countryResult === null || countryResult === '') && (favoriteSportResult === null || countryResult === ''):
        alert()
        break;
    case (ageResult === null || ageResult === '') && (countryResult === null || countryResult === ''):
        alert(`${favoriteSportResult}`)
        break;
    case (ageResult === null || ageResult === '') && (favoriteSportResult === null || countryResult === ''):
        alert(`${countryResult}`)
        break;
    case (countryResult === null || countryResult === '') && (favoriteSportResult === null || favoriteSportResult === ''):
        alert(`${ageResult}`)
        break;
    case ageResult === null:
    case ageResult === '':
        alert(`${countryResult}\n${favoriteSportResult}`)
        break;
    case countryResult === null:
    case countryResult === '':
        alert(`${ageResult}\n${favoriteSportResult}`)
        break;
    case favoriteSportResult === null:
    case favoriteSportResult === '':
        alert(`${ageResult}\n${countryResult}`)
        break;
    default:
        alert(`${ageResult}\n${countryResult}\n${favoriteSportResult}`)
}