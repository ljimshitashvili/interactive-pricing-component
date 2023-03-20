const button = document.querySelector('.switch');
const range = document.querySelector('#range');
const views = document.querySelector('#pageviews');
const price = document.querySelector('.cost');
const active = document.querySelector('.active');
const month = document.querySelector('.month');
let cost;


range.oninput = function() {
    const value = (this.value-this.min)/(this.max-this.min)*100;
    this.style.background = 'linear-gradient(to right, #A4F3EB 0%, #ECF0FB ' + value + '%, #ECF0FB ' + value + '%, #ECF0FB 100%)';

}


function annualConverter(){
    if(button.classList.contains('active')){
        month.textContent = "/ year"
        cost = cost*12*85/100;
        return cost;
        
    }
}

function monthly(){
    if(range.value < 100){
        cost = 8;
        annualConverter();
        views.textContent = "10K pageviews";
        price.textContent = "$" + cost.toFixed(2);
    }else if(range.value >= 100 && range.value < 200){
        cost = 12;
        annualConverter();
        views.textContent = "50K pageviews";
        price.textContent = "$" + cost.toFixed(2);
    }else if(range.value >= 200 && range.value < 300){
        cost = 16;
        annualConverter();
        views.textContent = "100K pageviews";
        price.textContent = "$" + cost.toFixed(2);
    }else if(range.value >= 300 && range.value < 400){
        cost = 24;
        annualConverter();
        views.textContent = "500K pageviews";
        price.textContent = "$" + cost.toFixed(2);
    }else if(range.value >= 400 && range.value <= 500){
        cost = 36;
        annualConverter();
        views.textContent = "1M pageviews";
        price.textContent = "$" + cost.toFixed(2);
    }
}



range.addEventListener('input', monthly);

button.addEventListener('click', () => {
    button.classList.toggle('active');
});