let questions = document.querySelectorAll('.board div')
// console.log(questions)
questions.forEach((elem) => {
    elem.addEventListener('click', function () {
        const { value: stadium } =  Swal.fire({
            timer: 10000,
            title: 'This is the name of the Falcons\' new state-of-the-art stadium',
            input: 'select',
            inputOptions: {
                mercedesBenzSuperdome: 'What is Mercedes-Benz Superdome?',
                turnerField: 'What is Turner Field?',
                cocaColaStadium: 'What is Coca-Cola Stadium?',
                mercedesBenzStadium: 'What is Mercedes-Benz Stadium?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'mercedesBenzStadium') {
                        resolve('You are correct! :)')
                    } else {
                        resolve('The correct answer was Mercedes-Benz Stadium :(')
                    }
                })
            }
        })

        if (stadium) {
            Swal.fire('You selected: ' + stadium)

        }
    })
})