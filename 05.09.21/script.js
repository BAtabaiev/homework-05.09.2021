//-----------------------------------------\\
//1 УРОВЕНЬ
console.log('==============Level 1==============');
//-----------------------------------------\\
// Задание 1
console.log('-----------TASK 1-------------');
let task1Array = [11, 12, 13, 14, 15, 16, 17];
const sumOdds  = task1Array.filter(el => el%2==1).reduce((n, v) => n +=v);
console.log(task1Array);
console.log(sumOdds);
//Задание 2
console.log('-----------TASK 2-------------');
let task2Array = [12, 0, 5, 0, 61, 0, 0, 11, 11, 11, 0];
console.log(task2Array);
let zeroPos = Array.from(task2Array.entries()).filter(i => i[1] === 0).map(i => i[0]);
console.log(zeroPos);
//Задание 3
console.log('-----------TASK 3-------------');
let task3Array1 = [1, 2, 3, 4, 5];
console.log(task3Array1);
let task3Array2 = [6, 7, 8, 9, 10];
console.log(task3Array2);
console.log(task3Array1.concat(task3Array2).join(',')); 
//Задание 5
console.log('-----------TASK 5-------------');
/*function filterZero(num){
    return num > 0;
}
let task5Array = [0, 1, 0, 10, 5, 6, 7, 11, 0, 0, 2, 9, 9];
console.log(task5Array);
console.log(task5Array.filter(filterZero));
*/
let task5Array = [0, 1, 0, 10, 5, 6, 7, 11, 0, 0, 2, 9, 9];
console.log(task5Array.filter( i => i != 0 ));
//Задание 6
console.log('-----------TASK 6-------------');
const worker = {
    name: 'John',
    age: 30,
    nationality: 'American',
    experience: '10 years',
    edu: {
        univesity: 'Massachusetts Institute of Technology',
        degree: 'master',
    },
    religion: 'ortodox',
    MS: 'married',
};
console.log(worker);
const {edu} = worker;
console.log(edu);
//Задание 7
console.log('-----------TASK 7-------------');
const worker1 = class {
    constructor(name, age, nationality, experience, edu, religion, MS) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
        this.experience = experience;
        this.edu = edu;
        this.religion = religion;
        this.MS = MS;
    }
};
let Bohdan = new worker1    (
    'Bohdan', 
    27, 
    'Ukrainian', 
    0, 
    {
        univesity: 'Massachusetts Institute of Technology',
        degree: 'master',
    }, 
    'ortodox', 
    'single'
);
console.log(Bohdan);

//-----------------------------------------\\
//2 УРОВЕНЬ
//-----------------------------------------\\
console.log('==============Level 2==============');
// Задание 1
console.log('-----------TASK 1-------------');
function filterZero2(num){
    return num > 0;
}
console.log([1,0,0,0,2,2,3,0].filter(filterZero2).join(','));
// Задание 2
console.log('-----------TASK 2-------------');
let task2Users = [
    {id: 1, name: 'Tom', lastname: 'Black'},
    {id: 2, name: 'Olivia', lastname: 'White'},
    {id: 3, name: 'John', lastname: 'Walker'},
    {id: 4, name: 'Ian', lastname: 'Cooper'},
    {id: 1, name: 'Bred', lastname: 'Potter'},
];
console.log(task2Users.map (({id, name, lastname}) => `\n${name} ${lastname}`).join('')); 
//здесь у меня не получилось по id вывести каждого пользователя, задание за мной остается


// Задание 3
console.log('-----------TASK 3-------------');
function myString(str){
    return str.split(' ').map((w, i) => i == 0 ? w : w[0].toUpperCase() + w.slice(1)).join('');
}
console.log(myString('the sky is blue'));
// Задание 4
console.log('-----------TASK 4-------------');
function checkPalidrome(str){
    str = str.toLowerCase().replace(/\s/g, '');
    return str ===str.split('').reverse().join('');
}
console.log(checkPalidrome('Аргентина манит негра'));

// Задание 6    
console.log('-----------TASK 6-------------');
const workerLvl2 = class {
    constructor(name, lastname, patronomic, age, experience, salary) {
        this.name = name;
        this.lastname = lastname;
        this.patronomic = patronomic;
        this.age = age;
        this.experience = experience;
        this.salary = salary;
    }
    fullName(){
        return console.log(this.name, this.lastname, this.patronomic);
    }
    checkExp(){ 
        if(this.experience > 8) {
           this.salary = this.salary + this.salary*0.1;
           return this.salary;
         } else if (this.experience <= 8 || this.experience >=5) {
            this.salary = this.salary + this.salary*0.05;
            return this.salary;
         }
    }

}
let Bohdan1 = new workerLvl2    (
    'Bohdan',
    'Atabaiev',
    'Oleksandrovych',
    27, 
    0, 
    600,
);
console.log(Bohdan1);
Bohdan1.fullName();
console.log(Bohdan1.checkExp());