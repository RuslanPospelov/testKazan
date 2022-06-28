/**
 * Рендерим элемент в JSON структуре
 * @param {object} el Описание элемента в формате JSON
 * @returns готовый HTML документ
 */
function renderElement(el) {
  switch (el.name) {
    case 'heading':
      return `<h1 class="heading">${el.settings.text}</h1>`;
    case 'column':
      return `<div class="column">${el.children.map(renderElement)}</div>`;
    case 'section':
      return `<section class="section">${el.children.map(renderElement)}</section>`;
    default:
      throw new Error('Unknown element type');
  }
}
/**
 * Конвертируем JSON в HTML
 * @param {object} data
 * @returns готовая строка HTML
 */
function convert(data) {
  return `<html>
      <body>${data.children.map((el) => renderElement(el))}</body>
  </html>`;
}

module.exports = convert;
