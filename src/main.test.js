import convertCorrectFormat from "./main.js"

test ("проверяем приведение к нужному формату номер 8 (927) 000-00-00", () => {
  expect(convertCorrectFormat("8 (927) 000-00-00")).toBe('+79270000000')
});

test ("проверяем приведение к нужному формату номер +7 960 000 00 00", () => {
  expect(convertCorrectFormat("+7 960 000 00 00")).toBe('+79600000000')
});

test ("проверяем приведение к нужному формату номер +86 000 000 0000", () => {
  expect(convertCorrectFormat("+86 000 000 0000")).toBe('+860000000000')
});