// функция сортировки по свойствам объекта
export default function getPropSortOrder(obj, arrSort) {
  // проверка на валидность входных параметров
  if (!Array.isArray(arrSort) || !obj || typeof obj !== 'object') {
    throw new Error('Некорректные входные параметры');
  }

  // перебираем свойства obj и добавляем отсутствующие в arrSort свойства в массив objProps
  let objProps = [];

  for (const prop in obj) {
    if (!arrSort.includes(prop)) {
      objProps.push(prop);
    }
  }

  // объединяем массивы arrSort и objProps, последний сортируем в алфавитном порядке
  objProps = [...arrSort, ...objProps.sort((a, b) => a.localeCompare(b))];

  // возвращаем всем свойствам objProps их значения
  return objProps.map((key) => ({ key, value: obj[key] }));
}

// const obj = {
//   name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
// };

// console.log(getPropSortOrder(obj, ['name', 'level']));
