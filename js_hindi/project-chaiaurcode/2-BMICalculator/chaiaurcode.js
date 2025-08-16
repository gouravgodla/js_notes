const form = document.querySelector('form')
// this usecase will give you empty
//  const hight = parseInt(document.querySelector('#hight').value)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Plase give a vaild height"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Plase give a vaild weight"
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`
        // text 
        if (bmi < 18) {
            results.append(" Under weight")
        }
        else if (bmi >= 18 && bmi <= 24) {
            results.append(" Normal Weight")
        }
        else {
            results.append(" Overweight")
        }


    }


})