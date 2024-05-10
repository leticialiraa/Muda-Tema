const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContente= "Escuro";
}
    else{
        this.textContente="Claro";
    }
})