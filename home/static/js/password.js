// let change = document.querySelector('grab')
// let cyber = document.querySelector('.shower')

// change.addEventListener("click", () =>{
//     change.classList.toggle('shower')
//     if(cyber.type === 'password'){
//         cyber.type = 'text';
//     }else{
//         cyber.type = 'password';
//     }
// })

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    // toggle the icon
    this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});