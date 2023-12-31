export class Form {
   private formEl: HTMLFormElement;
   private fieldInputs: Element[];
   
   constructor(form: HTMLFormElement) {
	  this.formEl = form;
	  this.fieldInputs = this.inputs;

	  this.formEl.addEventListener("submit", event => {
		 event.preventDefault();

		 console.log(this.inputsNames);
		 const fieldSet = this.formEl.children[0];
		 const formEls = fieldSet.children;
	  });
   }
   get inputs(): Element[] {
	  const fieldEls: HTMLFormControlsCollection = this.formEl.elements;
	  let fieldInputs: Element[] = [];
	  for(let i = 0; i < fieldEls.length; i++) {
		 if(fieldEls[i].nodeName === "INPUT")
			fieldInputs = [...fieldInputs, fieldEls[i]];
	  }
	  return fieldInputs;
   }
   get inputsNames(): (string | undefined)[] {
	  return this.fieldInputs.map(fieldInput => {
		 return fieldInput.attributes.getNamedItem("name")?.value;
	  });
   }
   get form(): HTMLFormElement {
	  return this.formEl;
   }
}
