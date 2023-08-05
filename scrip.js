// const valueDisplay=document.querySelectorAll(".num");
// let interval= 5000;
// var start= 21;

// valueDisplay.forEach((valueDisplay) => {
//     let startValue= 0;
//     let endValue= parseInt(valueDisplay.getAttribute ("data-val"));
//     let duration= Math.floor(interval/endValue);
//     let counter= setInterval(function () {
//         startValue +=1;
//         valueDisplay.textContent = startValue;
//         if(startValue == endValue){
//             clearInterval(counter);
//         }
//     }, duration);
// });

// asigna el valor adulto a la variable estado si la edad es mayor o igual a 18, de lo contrario le asigna el valor menor;
let valorAdulto = 14;
if (valorAdulto >=18 ) {
    console.log("es mayor")
} else {
    console.log("es menor de edad")
}
