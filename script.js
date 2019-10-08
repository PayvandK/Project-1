let questions = document.querySelectorAll('.board div')
// console.log(questions)
questions.forEach((elem) => {
    elem.addEventListener('click', function () {
        const { value: stadium } =  Swal.fire({
            title: 'This is the name of the Falcons\' new state-of-the-art stadium',
            input: 'select',
            inputOptions: {
                mercedesBenzSuperdome: 'What is Mercedes-Benz Superdome?',
                turnerField: 'What is Turner Field?',
                cocaColaStadium: 'What is Coca-Cola Stadium?',
                mercedesBenzStadium: 'What is Mercedes-Benz Stadium?'
            },
            inputPlaceholder: 'Select a question',
            showCancelButton: true,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'mercedesBenzStadium') {
                        resolve()
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