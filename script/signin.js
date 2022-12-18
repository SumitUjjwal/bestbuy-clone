let form = document.querySelector('form')
let obj = JSON.parse(localStorage.getItem('authDetails'))

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = form.email.value;
    let Password = form.pass.value;
    console.log(email, Password)
    console.log(obj.email, obj.pass)
    console.log(obj.pass == Password)
    console.log(obj.email == Password)
    console.log(obj)
    if(email==obj.email && Password == obj.pass){
        alert('Login Successfully!')
        window.location.href = '../index.html'

    } else {
        alert('Wrong Credentials!')
    }
})