import { useState } from 'react';
export default function Form() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword, setconfirmPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

const [sucessmessage,setsucessmessage] = useState("");
const [errormessage,seterrormessage] = useState("");

// Handling the name change
const handleName = (e) => {
setName(e.target.value);
setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
setEmail(e.target.value);
setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
setPassword(e.target.value);
setSubmitted(false);
};

const handleconfirmPassword = (e) => {
setconfirmPassword(e.target.value);
setSubmitted(false);
};


// Handling the form submission
const handleSubmit = (e) => {
e.preventDefault();
if (name === '' || email === '' || password === '' || confirmpassword === '') {
setError(true);
seterrormessage('Error: All fields are mandatory');
} 
else if(name === ''){
    seterrormessage('Please enter your name');
}
else if( !email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
    seterrormessage('please enter valid email id');
}
else if(password===""){
    seterrormessage('Please enter valid password ');
}
else if(confirmpassword !==password){
    seterrormessage("please enter same password");
}
else {
setSubmitted(true);
setError(false);
setsucessmessage("successfully signed up!");
}
};

// Showing success message
const successMessage = () => {
return (
<div
className="success"
style={{
display: submitted ? '' : 'none',
}}>
<p>{sucessmessage}</p>
</div>
);
};

// Showing error message if error is true
const errorMessage = () => {
return (
<div
className="error"
style={{
display: error ? '' : 'none',
}}>
<p>{errormessage}</p>
</div>
);
};

return (
<div className="form">
<div>

</div>

{/* Calling to the methods
 */}

<form className="formspace">
<h1>Sign up</h1>
{/* Labels and inputs for form data */}
{/* <label className="label">Name</label> */}
<input onChange={handleName} className="input" placeholder='Name'
value={name} type="text" / >

{/* <label className="label">Email</label> */}
<input onChange={handleEmail} className="input" placeholder='Email'
value={email} type="email" />

{/* <label className="label">Password</label> */}
<input onChange={handlePassword} className="input" placeholder='password'
value={password} type="password" />

{/* <label className="label">Confirm Password</label> */}
<input onChange={handleconfirmPassword} className="input" placeholder='confirmpassword'
value={confirmpassword} type="password" />

<div className="messages">
{errorMessage()}
{successMessage()}
</div>

<button onClick={handleSubmit} className="btn" type="submit">
Submit
</button>
</form>
</div>
);
}