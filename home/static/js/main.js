
    let body = document.body
    let toggle = document.querySelector('.toggle')
    let icon = document.querySelector('.fa-moon')
    let icon1_2 = document.querySelector('.fa-sun')

    toggle.onclick = () =>{
        body.classList.toggle('dark')
        if(body.classList.contains('dark')){
            icon.classList.replace('.fa-sun', 'fa-moon')  
        }else{
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }


