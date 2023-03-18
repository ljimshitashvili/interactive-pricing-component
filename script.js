const button = document.querySelector('.switch');
const range = document.querySelector('#range');
const views = document.querySelector('#pageviews');
const price = document.querySelector('.cost');



function ranges(){
    if(range.value < 100){
        views.textContent = "10K pageviews";
        price.textContent = "$8.00";
    }else if(range.value >= 100 && range.value < 200){
        views.textContent = "50K pageviews";
        price.textContent = "$12.00";
    }else if(range.value >= 200 && range.value < 300){
        views.textContent = "100K pageviews";
        price.textContent = "$16.00";
    }else if(range.value >= 300 && range.value < 400){
        views.textContent = "500K pageviews";
        price.textContent = "$24.00";
    }else if(range.value >= 400 && range.value <= 500){
        views.textContent = "1M pageviews";
        price.textContent = "$36.00";
    }
}



range.addEventListener('input', ranges);

button.addEventListener('click', () => {
    button.classList.toggle('active');
});