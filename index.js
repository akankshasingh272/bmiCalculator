// BMI Caclcutaor using Function in JS 

function bmiCalculator(weight, height){
  var bmi = weight/(height*height);
  console.log(Math.round(bmi));
}

bmiCalculator(45,1.53);
