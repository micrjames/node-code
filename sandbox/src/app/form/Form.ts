export class Form {
   private formEl: HTMLFormElement;
   private fieldInputs: Element[];
   
   constructor(form: HTMLFormElement) {
	  this.formEl = form;
	  this.fieldInputs = [];
   }
   get inputs(): Element[] {
	  const fieldEls: HTMLFormControlsCollection = this.formEl.elements;
	  for(let i = 0; i < fieldEls.length; i++) {
		 if(fieldEls[i].nodeName === "INPUT")
			this.fieldInputs = [...this.fieldInputs, fieldEls[i]];
	  }
	  return this.fieldInputs;
   }
   get inputsNames(): (string | undefined)[] {
	  return this.fieldInputs.map(fieldInput => {
		 return fieldInput.attributes.getNamedItem("name")?.value;
	  });
   }
   get values(): string[] {
	  return this.fieldInputs.map(fieldInput => {
		 return fieldInput;
	  }); 
   }
   get form(): HTMLFormElement {
	  return this.formEl;
   }
}


