( () => {

    const fieldNumber = document.querySelector('.input-array');
    const myArray = [];

    document.querySelector('.button-array--add').addEventListener('click', () => {

        if (fieldNumber.value !== ''){
            myArray.push(fieldNumber.value);
            document.querySelector('.info-array__output').innerHTML = myArray;
        } else {
            alert('Wypełnij pole! \nWpisz tylko liczby.')
        }

        fieldNumber.value = '';
    })

    document.querySelector('.button-array--remove').addEventListener('click', () => {

        if (myArray.length > 0){
            myArray.pop();
            document.querySelector('.info-array__output').innerHTML = myArray;
        } else {
            alert('Tablica jest pusta.')
        }
    })



    const fieldCalculate = document.querySelector('.input-coefficient');
    const myArrayCalculate = [];
    const disabledElements = document.querySelectorAll('.input-array, .button-array, .input-coefficient, .button-coefficient--calculate')

    document.querySelector('.button-coefficient--calculate').addEventListener('click', () => {

        if (myArray.length > 0){

            if (fieldCalculate.value !== '') {
                myArray.forEach(element => myArrayCalculate.push(fieldCalculate.value * element))
                document.querySelector('.info-coefficient__output').innerHTML = myArrayCalculate;

                disabledElements.forEach(element => {element.setAttribute('disabled', 'disabled')});


            } else {
                alert('Wypełnij pole! \nWpisz tylko liczby.')
            }

        } else {
            alert('Dodaj liczby do tablicy.')
        }
            
        fieldCalculate.value = '';


    })

    document.querySelector('.button-coefficient--reset').addEventListener('click', () => {
        document.querySelector('.info-coefficient__output').innerHTML = '';
        document.querySelector('.info-array__output').innerHTML = '';

        disabledElements.forEach(element => {element.removeAttribute('disabled')});
    })

    document.querySelector('main').style.display = 'block'

}) ()
