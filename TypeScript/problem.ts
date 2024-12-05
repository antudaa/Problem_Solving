// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

interface IPerson {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other'
};

const people: IPerson[] = [
    {
        name: 'Antu Das',
        age: 24,
        gender: 'male',
    },
    {
        name: 'Ayon Das',
        age: 19,
        gender: 'male',
    },
    {
        name: 'Nayon Das',
        age: 14,
        gender: 'male',
    },
    {
        name: 'Piu Das',
        age: 18,
        gender: 'female',
    },
];

const filterMales = (people: IPerson[]): string[] => {
    const males = people.filter(person => person.gender === 'male');

    return males.map(male => male.name);
}

// console.log(filterMales(people));

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
interface IBook {
    title: string;
    author: string;
    year: number;
};

const bookList: IBook[] = [
    {
        title: 'Antus Book',
        author: 'Antu Das',
        year: 2022,
    },
    {
        title: 'Ayons Book',
        author: 'Ayon Das',
        year: 2023,
    },
    {
        title: 'Nayons Book',
        author: 'Nayon Das',
        year: 2024,
    },
    {
        title: 'Pius Book',
        author: 'Piu Das',
        year: 2020,
    },
];

const BookName = (bookList: IBook[]) => {
    return bookList.map(book => book.title)
}

// console.log(BookName(bookList));


// 3.Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

const squareNumber = (value: number) => value * value;
const doubleNumber = (value: number) => value * 2;
const addFive = (value: number) => value + 5;

const requiredFunction = (value: number) => {
    // let result = squareNumber(value);
    // result = doubleNumber(result);
    // result = addFive(result);
    // return result;

    return addFive(doubleNumber(squareNumber(value)));
}

// console.log(requiredFunction(2))

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
interface ICar {
    make: string;
    model: string;
    year: number;
};

const carList: ICar[] = [
    {
        make: 'Jaguar',
        model: 'Jaguar XJL',
        year: 2024,
    },
    {
        make: 'Range Rover',
        model: 'Range Rover Vouge',
        year: 2023,
    },
    {
        make: 'BMW',
        model: 'BMW M5 Series',
        year: 2022,
    },
    {
        make: 'Mclearn',
        model: 'Mclearn P9',
        year: 2020,
    },
];

const sortCarsByManufactureYear = (carList: ICar[]) => {
    return carList.sort((a, b) => a.year - b.year);
};

// console.log(sortCarsByManufactureYear(carList));

// 5.Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.
interface IHuman {
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other'
};

const list: IHuman[] = [
    {
        name: 'Antu Das',
        age: 24,
        gender: 'male',
    },
    {
        name: 'Ayon Das',
        age: 19,
        gender: 'male',
    },
    {
        name: 'Nayon Das',
        age: 14,
        gender: 'male',
    },
    {
        name: 'Piu Das',
        age: 18,
        gender: 'female',
    },
];

const findPersonByName = (peopleList: IHuman[], name: string, updatedAge: number) => {
    return peopleList.map((person) => person.name === name ? { ...person, age: updatedAge } : person);;
};

// console.log(findPersonByName(list, "Piu Das", 25));


// 6.Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers: number[] = [3, 5, 6, 9, 10, 2, 4];

const calculateEvenSum = (numberList: number[]) => {
    const sum = numberList.reduce((sum, number) => (number % 2 === 0 ? sum + number : sum), 0);
    return sum;
};

// console.log(calculateEvenSum(numbers));

// Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

const isLeapYear = (year: number): boolean => {
    if ((year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)){
        return true;
    }
    return false;
}

// console.log(isLeapYear(2020))

// 8.Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

// 9.Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

// 10.Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.