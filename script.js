var startPoints = 0

//ATLANTA FALCONS QUESTIONS

let fal100 = document.getElementById('cat11')
    fal100.addEventListener('click', function () {
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
    let fal200 = document.getElementById('cat12')
    fal200.addEventListener('click', function () {
        const { value: disgrace } =  Swal.fire({
            timer: 10000,
            title: 'This ex Falcons player was disgraced from the NFL after allegations of dog fighting on his property',
            input: 'select',
            inputOptions: {
                mattRyan: 'Who is Matt Ryan?',
                jessieTuggle: 'Who is Jessie Tuggle?',
                jamalAnderson: 'Who is Jamal Anderson?',
                michaelVick: 'Who is Michael Vick?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'michaelVick') {
                        resolve('You are correct! :)')
                    } else {
                        resolve('The correct answer was Michael Vick :(')
                    }
                })
            } 
        })

        if (disgrace) {
            Swal.fire('You selected: ' + disgrace)

        }
    })