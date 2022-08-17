const downButton = document.querySelector('.downbutton');
const hamburger = document.querySelector('#hamburger');
const options = document.querySelector('#options');
const option = document.querySelectorAll('.option');
const contact = document.querySelector('#contact');
let closed = true;
let containers = [
    document.querySelector('#inicio'),
    document.querySelector('#projetos'),
    document.querySelector('#aboutme'),
    document.querySelector('#contato')
];

downButton.addEventListener('click', function(){
   goDown(0); 
});

contact.addEventListener('click', function(){
   goDown(3); 
});

option.forEach(function(a, i){
    a.addEventListener('click', () => {
        goDown(i-1);
        console.log(i)
    })
})

window.addEventListener('resize', () => {
    if(window.innerWidth >= 1000){
        if(closed){
            options.style.display = 'flex';
        }
    }
    else{
        options.style.display = 'none';
        closed = true;
    }
});

function goDown(x){
    AtualizarAltura();
    let soma = 0;
    for(let i = 0; i<=x; i++){
        soma += containers[i].offsetHeight;
    }
    console.log(soma);
    let altura = soma;
        window.scrollTo({
            top: Number(altura),
            left: 0,
            behavior: 'smooth'
        });
}

function AtualizarAltura(){
containers = [
    document.querySelector('#inicio'),
    document.querySelector('#projetos'),
    document.querySelector('#aboutme'),
    document.querySelector('#contato')
];
}


hamburger.addEventListener('click', () => {
    console.log(closed);
    if(closed){
        options.style.display = 'flex';
        closed = false;
    }
    else{
        options.style.display = 'none';
        closed = true;
    }
});

