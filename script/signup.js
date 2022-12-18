let form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let obj = {
        fname: form.fname.value,
        lname: form.lname.value,
        email: form.email.value,
        pass: form.pass.value,
        cpass: form.cpass.value,
        phone: form.phone.value,
    }
    if(pass)
})