let form = document.querySelector('form')
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let obj = {
        email: form.email.value,
        pass: form.pass.value,
    }
    console.log(obj)
})