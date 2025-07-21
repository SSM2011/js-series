const forms = document.querySelector("form");

forms.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight";
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    if (BMI < 18.6) {
      results.innerHTML = `${BMI} - Under Weight`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      results.innerHTML = `${BMI} - Normal Range`;
    } else if (BMI > 24.9) {
      results.innerHTML = `${BMI} - Overweight`;
    }
  }
});
