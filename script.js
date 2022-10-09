const password = document.getElementById('input');
const car = document.getElementById('car');
const div = document.getElementById('container')
 
document.getElementById('car').onclick = function() {myFunction()};
function myFunction(){


if(car.type='password'){ 
    document.getElementById('input').type = 'text';
    car.classList = "fa-solid fa-book"
}

else{
    document.getElementById('input').type = 'password'
    document.getElementById('input').type = 'password'
    car.classList = 'fa-solid fa-car'
}
}

// car.addEventListener('onClick',()=>{
    
//     // document.getElementById('input').type = 'text';
//     car.classList = "fa-solid fa-book"


    
    
// })

