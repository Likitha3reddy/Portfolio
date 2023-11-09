document.getElementById('Form').addEventListener('submit',function(event){
    event.preventDefault();
    const form=event.target();
    const nameInput=form.elements['name'];
    const emailInput=form.elements['email'];
    const PhoneInput=form.elements['phonenum'];
    const messageInput=form.elements['text'];

    const errorMessages=[];
    if(!nameInput.value==trim()){
        errorMessages.push('Name is required.');
    }

    if (!emailInput.value.trim()) {
        errorMessages.push('Email is required.');
      } else if (!isValidEmail(emailInput.value)) {
        errorMessages.push('Please enter a valid email address.');
      }

    if(!PhoneInput.value==trim()){
        errorMessages.push('Phone Number is required.');
    }else if(PhoneInput.value.length!==10){
        errorMessages.push('please enter valid 10 digit number.');
    }
    if(!messageInput.value==trim()){
        errorMessages.push('Please fill out this field.')
    }
    if (errorMessages.length > 0) {
        const errorDiv = document.getElementById('errorMessages');
        errorDiv.innerHTML = '<ul><li>' + errorMessages.join('</li><li>') + '</li></ul>';
      } else {
        // If no errors, submit the form
        form.submit();
    }
});
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}