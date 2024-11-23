window.onload = function(){
    let formulario = document.querySelector('.formulario');
    let titleInput = document.querySelector('#title');
    let errorList = document.querySelector('.errores')

    // Colocar el foco en el campo de título al cargar el formulario
    titleInput.focus();

    errorList.classList.add("alert-warning");

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//   

    const validateLength = (input) => {
        if(input.length > 3){
            return true;
        }
        return false;
    }

    formulario.addEventListener('input', (event) => {

        const input = event.target;
        const fieldName = input.name;
        const value = input.value;
    
        let errorMessage = "";
        if (fieldName === "title" && !validateLength(value)) {
            errorMessage = "El campo debe tener más de tres caracteres";
        } else if (fieldName === "rating" && ((value < 0) || (value > 10))) {
            errorMessage = "El campo debe tener un valor comprendido entre cero (0) y diez (10)";
        } else if (fieldName === "awards" && ((value < 0) || (value > 10))) {
            errorMessage = "El campo debe tener un valor comprendido entre cero (0) y diez (10)";
        } else if (fieldName === "release_date" && (value)) {
            errorMessage = "El campo debe tener una fecha valida";
        } else if (fieldName === "length" && ((value < 60) || (value > 360))) {
            errorMessage = "El campo debe tener un valor comprendido entre 60 y 360 minutos";
        }
    
        if (errorMessage !== "") {
            input.classList.add('is-invalid');
        } else {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        }
    });

    formulario.addEventListener("submit", (event) => {
        let errors = [];

        if(!validateLength(event.target.title.value)){
            errors.push({
                field: "Titulo",
                message: "El campo debe tener mas de tres caracteres"
            })
        }

        if(event.target.rating.value < 0 || event.target.rating.value > 10){
            errors.push({
                field: "Calificación",
                message: "El campo debe tener un valor comprendido entre cero (0) y diez (10)"
            })
        }

        if(event.target.awards.value < 0 || event.target.awards.value > 10){
            errors.push({
                field: "Premios",
                message: "El campo debe tener un valor comprendido entre cero (0) y diez (10)"
            })
        }

        if(!validateLength(event.target.release_date.value)){
            errors.push({
                field: "Fecha de creación",
                message: "El campo debe tener una fecha valida"
            })
        }

        if(event.target.length.value < 60 || event.target.length.value > 360){
            errors.push({
                field: "Duracion",
                message: "El campo debe tener un valor comprendido entre 60 y 360 minutos"
            })
        }

        if(errors.length > 0){
            event.preventDefault();
            errorList.innerHTML ="";
            errors.forEach(error => {
                return (errorList.innerHTML += `<li><small>${error.field}: ${error.message}</small></li>`)
            })
        }else{
            alert("La película se guardó satisfactoriamente");
        }
    })
}