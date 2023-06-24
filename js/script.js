const aboutUser = {
    age: null,
    city: null,
    favoriteSport: null
}

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

const date = new Date()
const year = date.getFullYear()

aboutUser.age = prompt('Вкажіть будь-ласка свій рік народження')
console.log(aboutUser.age)
aboutUser.city = prompt('Вкажіть будь-ласка ваше місто')
aboutUser.favoriteSport = prompt('Вкажіть будь-ласка ваш улюблений вид спорту')

if (aboutUser.age > 0 ){
    alert(`Ваш вік ${year - aboutUser.age}`)
} else {
    alert('Шкода, що Ви не захотіли ввести свій рік народження')
}


switch (aboutUser.city) {
    case 'Київ':
        alert('Ти живеш у столиці України')
        break;
    case 'Вашингтон':
        alert('Ти живеш у столиці Америки')
        break;
    case 'Лондон':
        alert('Ти живеш у столиці Англії')
        break;
    case '':
    case null:
        alert('Шкода, що Ви не захотіли ввести своє місто')
        break;
    default:
        alert(`Ти живеш у місті ${aboutUser.city}`)
}

switch (true){
    case aboutUser.favoriteSport === userSport.football.type:
        alert(`Круто хочеш стати як ${userSport.football.champion}`)
        break;
    case aboutUser.favoriteSport === userSport.basketball.type:
        alert(`Круто хочеш стати як ${userSport.basketball.champion}`)
        break;
    case aboutUser.favoriteSport === userSport.volleyball.type:
        alert(`Круто хочеш стати як ${userSport.volleyball.champion}`)
        break;
    case aboutUser.favoriteSport === '':
    case aboutUser.favoriteSport === null:
        alert('Шкода, що Ви не захотіли ввести свій улюблений спорт')
        break;
    default:
        alert('Спробуй інший вид спорту!')
}