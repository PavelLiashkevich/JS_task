// Список курсов
let courses = [
	{ name: 'Courses in England', prices: [0, 100] },
	{ name: 'Courses in Germany', prices: [500, null] },
	{ name: 'Courses in Italy', prices: [100, 200] },
	{ name: 'Courses in Russia', prices: [null, 400] },
	{ name: 'Courses in China', prices: [50, 250] },
	{ name: 'Courses in USA', prices: [200, null] },
	{ name: 'Courses in Kazakhstan', prices: [56, 324] },
	{ name: 'Courses in France', prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [50, 350];

// Функция, которая заменяет все null в массиве курсов. Если null на первом месте, то на 0, если на втором, то на Infinity
const replace = array => {
	return array.map(item => {
		const low = item.prices[0] ?? 0,
			high = item.prices[1] ?? Infinity;

		return { ...item, prices: [low, high] };
	});
};

console.log(replace(courses));

//  Функция, которая выбирает курсы в нужном нам диапазоне
const filterByPrice = (arrCourses, reqRange) => {
	return replace(arrCourses).filter(course => {
		return (
			(course.prices[0] >= (reqRange[0] ?? 0) &&
				course.prices[1] <= (reqRange[0] ?? Infinity) &&
				reqRange[0] <= course.prices[0] &&
				reqRange[1] >= course.prices[1]) ||
			(course.prices[0] >= reqRange[0] && course.prices[1] <= reqRange[1])
		);
	});
};

console.log(filterByPrice(courses, requiredRange3));

// Функция сортировки ( на первом месте курсы, которые начинаются с 0 и так по возрастанию )
const filterByPriceTwo = array => {
	return replace(array).sort((a, b) => (a.prices[0] > b.prices[0] ? 1 : -1));
};

console.log(filterByPriceTwo(courses));
