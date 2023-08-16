class Student {
    name = '';
    lastName = '';
    yearOfBirth = '';
    arrEstimates = [];
    constructor(name, lastName, yearOfBirth, estimates) {
        this.name = name;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.arrEstimates = estimates
    }

    getStudentAge (){
        const date = new Date()
        return `Вам ${date.getFullYear() - this.yearOfBirth} років`
    }

    averageScore(){
    const overallSumEstimate = this.arrEstimates.reduce((sum, item)=> sum +=item,0)
        return overallSumEstimate / this.arrEstimates.length
    }

    isAttending = new Array(25).fill('');

    present(count){
        const counter = count - 1
        for (let i = 0; i < counter; i++){
                this.present()
        }
        const indexAttending = this.isAttending.findIndex(item => item === '')
        this.isAttending[indexAttending] = true

        return this.isAttending
    }

    absent(count){
        const counter = count - 1
        for (let i =0; i < counter; i++){
            this.absent()
        }
        const indexAttending = this.isAttending.findIndex(item => item === '')
        this.isAttending[indexAttending] = false

        return this.isAttending
    }

    averageAttending(){
        const overallAverageAttending = this.isAttending.reduce((sum, item)=> {
            const convertInNumber = +item
                return sum += convertInNumber
        },0)
        return overallAverageAttending  / this.isAttending.length
    }

    summary(){
        if (this.averageScore() > 90 && this.averageAttending() > 0.9 ){
            console.log('Молодець!')
        }else if (this.averageScore() > 90 || this.averageAttending() > 0.9){
            console.log('Добре, але можна краще')
        }else if (this.averageScore() < 90 && this.averageAttending() < 0.9){
            console.log('Редиска')
        }
    }

}

const pointsForStudent1 = [0, 100, 98, 100, 99, 90, 80, 95,90, 100, 63, 99, 100, 100, 90, 100, 66, 100, 97, 96, 99, 92, 94, 87, 95]

const student1 = new Student('Dima', 'Foliushniak', '1994', pointsForStudent1)

console.log(student1.getStudentAge());
console.log(student1.averageScore());
student1.present(23);
student1.absent(2);
student1.averageAttending();
student1.summary();

const pointsForStudent2 = [100, 100, 98, 100, 99, 90, 80, 95,90, 100, 99, 99, 100, 100, 90, 100, 98, 100, 97, 96, 99, 92, 94, 87, 95]

const student2 = new Student('Nikola', 'Chashechkin', '2000', pointsForStudent2)
console.log(student2.getStudentAge());
console.log(student2.averageScore());
student2.present(25);
student2.averageAttending();
student2.summary();

const pointsForStudent3 = [60, 100, 98, 50, 99, 90, 80, 95,90, 80, 99, 99, 64, 100, 90, 66, 98, 100, 97, 96, 99, 92, 94, 87, 95]

const student3 = new Student('Nikola', 'Chashechkin', '2000', pointsForStudent3)
console.log(student3.getStudentAge());
console.log(student3.averageScore());
student3.present(20);
student1.absent(5);
student3.averageAttending();
student3.summary();