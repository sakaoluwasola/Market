let signup = document.form
let username = document.form.username
let fname = document.form.firstname
let lname = document.form.lastname
let email = document.form.email
let state = document.form.state
let phone = document.form.phone
let address = document.form.address
let password = document.form.password

let validate = () =>{
    if(username.value.length <=0){
        alert('please, supply username')
        username.focus()
        return form();
    }

    if(fname.value.length <=0){
        alert('supply first name');
        fname.focus();
    }

    if(lname.value.length <=0){
        alert('please, supply last name')
        lname.focus()
        return form;
    }

    if(email.value.length <=0){
        alert('please, supply email address');
        email.focus()
        return form;
    }

    if(state.value.length <=0){
        alert('please, state');
        state.focus()
        return form;
    }
R
    if(phone.value.length <=0){
        alert('please, phone Number');
        phone.focus()
        return form;
    }
    if(address.value.length <=0){
        alert('please, Home address');
        address.focus()
        return form;
    }
    if(password.value.length <=0){
        alert('please, password');
        password.focus()
        return form;
    }
}

  








//  let body = document.body
    //  let toggle = document.querySelector('.toggle')
    //  let icon = document.querySelector('fa-moon')

    //  function checkIcon(){
    //     if(body.classList.contains('dark')){
    //         icon.classList.add('fa-moon')
    //         icon.classList.replace('fa-sun')
    //     }else{
    //         icon.classList.add('fa-sun')
    //         icon.classList.replace('fa-moon')
    //     }
    // }
    // checkIcon()

    // toggle.onclick = () =>{
    //     body.classList.toggle('dark')
    //     setTimeout(()=>{
    //         checkIcon()
    //     },100)
 
    // }

    // let body = document.body
    // let captain = document.querySelector()
 

