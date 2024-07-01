import getPropSortOrder from '../app';

// проверка работы с некорректными входными данными
test('incorrect input data', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  expect(() => getPropSortOrder(obj, 'invalid')).toThrow('Некорректные входные параметры');
  expect(() => getPropSortOrder(null, ['name', 'level'])).toThrow('Некорректные входные параметры');
  expect(() => getPropSortOrder('', ['name', 'level'])).toThrow('Некорректные входные параметры');
});

// проверка корректности сортировки по свойствам объекта
test('correct sorting of object properties', () => {
  const obj = {
    name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
  };

  expect(getPropSortOrder(obj, ['name', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ]);
});
