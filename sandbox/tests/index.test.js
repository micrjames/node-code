const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
require('@testing-library/jest-dom');

const { Form } = require("../dist/app/form/Form");

describe("Form.", () => {
   let dom;
   let document;
   let login;
   beforeAll(() => {
	  const html = fs.readFileSync(path.resolve(__dirname, "..", "dist", "app", "views", 'index.ejs'), 'utf8');
	  dom = new JSDOM(html, {runScripts: 'dangerously'});
	  document = dom.window.document;
	  login = new Form(document.forms[0]);
   });
   test("Should be the form.", () => {
	  expect(login.form).toBeInTheDocument();
   });
   test("Should output name on click.", () => {
	  console.log(login.form.children);
   });
});
