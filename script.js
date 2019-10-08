var score = 0
let unansweredQuestion = 25

//ATLANTA FALCONS QUESTIONS (done)
const checkWinLose = () => {
    if(unasweredQuestion < 1 && score >= 5000) {
        alert('Game Over, YOU WIN!!!')
    }
    if(unasweredQuestion < 1 && score < 5000) {
        alert('Game Over, try again :(')
    }
}
let fal100 = document.getElementById('cat11')
    fal100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
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
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'mercedesBenzStadium') {
                        score++
                        resolve('You are correct! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Mercedes-Benz Stadium! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })

        if (stadium) {
            Swal.fire('You selected: ' + stadium)

        }
    })
    let fal200 = document.getElementById('cat12')
    fal200.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'

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
                        resolve('You are correct! :)'),
                        score++
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Michael Vick! :(')
                        e.target.style.color = 'black'
                        checkWinLose()
                    }
                })
            } 
        })

        if (disgrace) {
            Swal.fire('You selected: ' + disgrace)

        }
    })
    let fal300 = document.getElementById('cat13')
    fal300.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'

        const { value: superbowl } =  Swal.fire({
            timer: 10000,
            title: 'Superbowl LI, in which the Falcons devastatingly lost in overtime to the New England Patriots, was played in which city?',
            input: 'select',
            inputOptions: {
                minneapolis: 'What is Minneapolis?',
                houston: 'What is Houston?',
                santaClara: 'What is Santa Clara?',
                arizona: 'What is Arizona?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'houston') {
                        resolve('You are correct! :)'),
                        score++
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Houston! :(')
                        e.target.style.color = 'black'
                        checkWinLose()
                    }
                })
            } 
        })

        if (superbowl) {
            Swal.fire('You selected: ' + superbowl)

        }
    })
    let fal400 = document.getElementById('cat14')
    fal400.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'

        const { value: points } =  Swal.fire({
            timer: 10000,
            title: 'This ex-Falcon has the second most points scored by an NFL player in history',
            input: 'select',
            inputOptions: {
                mAnderson: 'Who is Morten Anderson?',
                mBryant: 'Who is Matt Bryant?',
                jJones: 'Who is Julio Jones?',
                mRyan: 'Who is Matt Ryan?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'mAnderson') {
                        resolve('You are correct! :)')
                        score++
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Morten Anderson! :(')
                        e.target.style.color = 'black'
                        checkWinLose()
                    }
                })
            } 
        })

        if (points) {
            Swal.fire('You selected: ' + points)

        }
    })
    let fal500 = document.getElementById('cat15')
    fal500.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'

        const { value: training } =  Swal.fire({
            timer: 10000,
            title: 'This city is home to the Falcons\' off-season training and practice facility',
            input: 'select',
            inputOptions: {
                rome: 'What is Rome, GA?',
                macon: 'What is Macon, GA?',
                floweryBranch: 'What is Flowery Branch, GA?',
                athens: 'What is Athens, GA?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                return new Promise((resolve) => {
                    if (value === 'floweryBranch') {
                        resolve('You are correct! :)')
                        score++
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Flowery Branch! :(')
                        e.target.style.color = 'black'
                        checkWinLose()
                    }
                })
            } 
        })

        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })

    // ATLANTA BRAVES QUESTIONS