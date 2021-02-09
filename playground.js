/* eslint-disable prettier/prettier */
// Частина 1

// Дано рядок у форматі "Student1 - Group1; Student2 - Group2; ..."

const studentsStr = 'Дмитренко Олександр - ІП-84; Матвійчук Андрій - ІВ-83; Лесик Сергій - ІО-82; Ткаченко Ярослав - ІВ-83; Аверкова Анастасія - ІО-83; Соловйов Даніїл - ІО-83; Рахуба Вероніка - ІО-81; Кочерук Давид - ІВ-83; Лихацька Юлія- ІВ-82; Головенець Руслан - ІВ-83; Ющенко Андрій - ІО-82; Мінченко Володимир - ІП-83; Мартинюк Назар - ІО-82; Базова Лідія - ІВ-81; Снігурець Олег - ІВ-81; Роман Олександр - ІО-82; Дудка Максим - ІО-81; Кулініч Віталій - ІВ-81; Жуков Михайло - ІП-83; Грабко Михайло - ІВ-81; Іванов Володимир - ІО-81; Востриков Нікіта - ІО-82; Бондаренко Максим - ІВ-83; Скрипченко Володимир - ІВ-82; Кобук Назар - ІО-81; Дровнін Павло - ІВ-83; Тарасенко Юлія - ІО-82; Дрозд Світлана - ІВ-81; Фещенко Кирил - ІО-82; Крамар Віктор - ІО-83; Іванов Дмитро - ІВ-82';

// Завдання 1
// Заповніть словник, де:
// - ключ – назва групи
// - значення – відсортований масив студентів, які відносяться до відповідної групи

let studentsGroups = [];

// Ваш код починається тут

studentsStr
  .split('; ')
  .map(v => v.split('- ')
    .reverse()
    .map(str => str.trim())
  )
  .forEach(([group, students]) => {
    studentsGroups[group] = studentsGroups[group] ? [...studentsGroups[group], students] : [students];
  });

// Ваш код закінчується тут

console.log('Завдання 1');
console.log(studentsGroups);
console.log('\n');



// Дано масив з максимально можливими оцінками

const points = [12, 12, 12, 12, 12, 12, 12, 16];

// Завдання 2
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – масив з оцінками студента (заповніть масив випадковими значеннями, використовуючи функцію `randomValue(maxValue: Int) -> Int`)

function randomValue(maxValue) {
  const randNum = Math.floor(Math.random() * 7);
  switch (randNum) {
    case 1:
      return Math.floor(maxValue * 0.7);
    case 2:
      return Math.floor(maxValue * 0.9);
    case 3:
    case 4:
    case 5:
      return maxValue;
    default:
      return 0;
  }
}

let studentPoints = [];

// Ваш код починається тут

Object.entries(studentsGroups).forEach(([group, students]) => {
  studentPoints[group] = [];
  students.forEach(student => {
    studentPoints[group][student] = points.map(num => randomValue(num));
  });
});

// Ваш код закінчується тут

console.log('Завдання 2');
console.log(studentPoints);
console.log('\n');



// Завдання 3
// Заповніть словник, де:
// - ключ – назва групи
// - значення – словник, де:
//   - ключ – студент, який відносяться до відповідної групи
//   - значення – сума оцінок студента

let sumPoints = [];

// Ваш код починається тут

sumPoints = studentPoints;
Object.entries(sumPoints).forEach(([group, students]) => {
  Object.entries(students).forEach(([student, marks]) => {
    sumPoints[group][student] = marks.reduce((sum, v) => sum + v);
  });
});

// Ваш код закінчується тут

console.log('Завдання 3');
console.log(sumPoints);
console.log('\n');



// Завдання 4
// Заповніть словник, де:
// - ключ – назва групи
// - значення – середня оцінка всіх студентів групи

let groupAvg = [];

// Ваш код починається тут

Object.entries(sumPoints).forEach(([group, students]) => {
  const studentsArr = Object.entries(students);
  const studentsSum = studentsArr.map((student) => student[1]).reduce((sum, v) => sum + v, 0);
  groupAvg[group] = studentsSum / studentsArr.length;
});

// Ваш код закінчується тут

console.log('Завдання 4');
console.log(groupAvg);
console.log('\n');



// Завдання 5
// Заповніть словник, де:
// - ключ – назва групи
// - значення – масив студентів, які мають >= 60 балів

var passedPerGroup = [];

// Ваш код починається тут

Object.entries(sumPoints).forEach(([group, students]) => {
  passedPerGroup[group] = Object.entries(students).filter((student) => student[1] > 60);
});

// Ваш код закінчується тут

console.log('Завдання 5');
console.log(passedPerGroup);
