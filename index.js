// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

const myFilter = (requiredRange, courses) => {
    const result = courses.filter(course => {
        const minRange = requiredRange[0] === null ? -Infinity : requiredRange[0];
        const maxRange = requiredRange[1] === null ? Infinity : requiredRange[1];
        const minPrice = course.prices[0] === null ? -Infinity : course.prices[0];
        const maxPrice = course.prices[1] === null ? Infinity : course.prices[1];
        return minRange <= maxPrice && maxRange >= minPrice
    });

    return result;
};

console.log('first range', myFilter(requiredRange1, courses));
console.log('second range', myFilter(requiredRange2, courses));
console.log('third range', myFilter(requiredRange3, courses));
