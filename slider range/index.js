const rangeValue= document.querySelector(".slider-container .price-slider");
const rangeInputvalure=(".range-input input");
// set the price gap
let priceGap = 500;
// Adding event listener to price input elements
const priceInputvalue = document.querySelectorAll("price-input input");
for(let i=0 ; i < priceInputvalue.length;i++){
    priceInputvalue[i].addEventListener("input",e)
}
// parse min and max values of the range input
let minp = parseInt(priceInputvalue[0].value);
let maxp = parseInt(priceInputvalue[1].value);
let diff= maxp- minp
if (minp<0){
    alert("minimum price cannot be less than 0");
    priceInputvalue[0].value= 0;
    minp= 0;
}
// validate the input values
if(maxp>10000){
    alert("maximum price cannot be greater than 10000")
    priceInputvalue[1].value= 10000;
    maxp = 10000;
}
if(minp > maxp - priceGap){
    priceInputvalue[0].value= maxp- priceGap;
    minp= maxp - priceGap;
    if(minp< 0){
        priceInputvalue[0]= 0;
        minp = 0;
    }
}
// check if the price gap is met and max price is within the range
if(diff >= priceGap && maxp <= rangeInputvalue[1].max)
    if(e.target.ClassName === "min- input"){
        rangeInputvalue[0].value=minp;
        let value1= rangeInputvalue[0].max;
            rangeValue.Style.left = `${(minp/value1)*100}%`;
        
    }
            else
}