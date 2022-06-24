class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let salary = this.rate * this.days;
        return salary;
    }
}

let worker1 = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker1.name); //выведет 'Иван'
console.log(worker1.surname); //выведет 'Иванов'
console.log(worker1.rate); //выведет 10
console.log(worker1.days); //выведет 31
console.log(worker1.getSalary()); //выведет 310 - то есть 10*31