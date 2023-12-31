require(["./auth/Auth", "./form/Form"], function (Auth, Form) {
   Auth = exports.Auth;
   const auth = new Auth();
   
   Form = exports.Form;
   const forms = document.forms;
   const loginForm = new Form(forms[0]);

   console.log(loginForm.form);

   // retreive the first element child
   const topLevelFirstChild = loginForm.form.firstElementChild;		// fieldset

   /******* work on each level of the tree*******
   // iterate through the children of that one, if any.
   const topLevelFirstChildChildren = topLevelFirstChild.children;
   console.log(topLevelFirstChildChildren);
   if(topLevelFirstChildChildren.length) {
	  const topLevelFirstChildFirstChild = topLevelFirstChild.firstElementChild;	// legend
	  console.log(topLevelFirstChildFirstChild);
	  let topLevelFirstChildNextChild = topLevelFirstChildFirstChild.nextElementSibling; // div.form-row
	  while(topLevelFirstChildNextChild) {
		 console.log(topLevelFirstChildNextChild);
		 topLevelFirstChildNextChild = topLevelFirstChildNextChild.nextElementSibling; // button
	  } // the whole node tree of fieldset has been traversed.
   }

   // recurse for each of the following child elements of the form after 'legend'
   **************/
   /* TODO:
	* bring in each node on the tree
	* 	check if there is a child node(s)
	* 	traverse through children as necessary,
	* 	on each branch of the tree.
	* 	
	* 	the above code: the top level first child
	* 					enumerates the children of that node.
	*
	* 					in future, continue on to enumerate the children of further nodes.
	*
	* 					then recurse back to the top level next child
	*
	* 					and so forth.
	*/
/*
   console.log(legend.nextElementSibling.children[1].nodeName);
   console.log(legend.nextElementSibling.children[1].type);

   loginForm.form.addEventListener("submit", event => {
	  console.log(legend.nextElementSibling.children[1].value);
   });
   */
});
