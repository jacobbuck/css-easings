const fs = require('fs');
const prettier = require('prettier');
const easings = require('./easings.json');
const templates = require('./templates');

const outputs = [
  ['index.css', templates.css, 'css'],
  ['index.js', templates.js, 'babel'],
  ['index.json', templates.json, 'json'],
  ['index.less', templates.less, 'less'],
  ['_index.scss', templates.scss, 'scss'],
];

for (const [file, template, type] of outputs) {
  const data = prettier.format(template(easings), { parser: type });
  fs.writeFile(file, data, (err) => {
    if (err) throw err;
    console.log(`📝 ${file} was written.`);
  });
}