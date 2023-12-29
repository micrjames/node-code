require(["./auth/Auth", "./form/Form"], function (Auth, Form) {
   Auth = exports.Auth;
   const auth = new Auth();
   
   Form = exports.Form;
   const forms = document.forms;
   const loginForm = new Form(forms[0]);
   console.log(loginForm.form);
   console.log(loginForm.inputs);
   console.log(loginForm.inputsNames);

});
