var score = 0
let unansweredQuestion = 25

//ATLANTA FALCONS QUESTIONS (done)

const checkWinLose = () => {
    if(unansweredQuestion < 1 && score >= 5000) {
        alert('Game Over, YOU WIN!!!')
    }
    if(unansweredQuestion < 1 && score < 5000) {
        alert('Game Over, try again :(')
    }
}
let fal100 = document.getElementById('cat11')
    fal100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: stadium } =  Swal.fire({
            timer: 8000,
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
                        resolve('Correct! 100 points! :)'),
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
            timer: 8000,
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
                        resolve('Correct! 200 points! :)'),
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
            timer: 8000,
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
                        resolve('Correct! 300 points! :)'),
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
            timer: 8000,
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
                        resolve('Correct! 400 points! :)')
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
            timer: 8000,
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
                        resolve('Correct! 500 points! :)')
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

    let brav100 = document.getElementById('cat21')
    brav100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This stadium was the home of the Braves until the opening of Turner Field in 1997',
            input: 'select',
            inputOptions: {
                suntrustField: 'What is Suntrust Field?',
                chipperLand: 'What is Chipper Jones Land?',
                afcStadium: 'What is Atlanta Fulton County Stadium?',
                georgiaDome: 'What is the Georgia Dome?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'afcStadium') {
                        score++
                        resolve('Correct! 100 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Atlanta Fulton County Stadium! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        }) 
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let brav200 = document.getElementById('cat22')
    brav200.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This is the name of the Braves\' new ugly mascot',
            input: 'select',
            inputOptions: {
                homer: 'What is Homer?',
                phillyFanatic: 'What is the Philly Fanatic?',
                blooper: 'What is Blooper?',
                steve: 'What is Steve?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'blooper') {
                        score++
                        resolve('Correct! 200 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Blooper! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let brav300 = document.getElementById('cat23')
    brav300.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training} =  Swal.fire({
            timer: 8000,
            title: 'This current Braves phenom won Rookie of the Year in 2018',
            input: 'select',
            inputOptions: {
                cJones: 'Who is Chipper Jones?',
                oAlbies: 'Who is Ozzie Albies?',
                fFreeman: 'Who is Freddie Freeman?',
                acunajr: 'Who is Ronald Acuña Jr?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'acunajr') {
                        score++
                        resolve('Correct! 300 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Ronald Acuña Jr! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let brav400 = document.getElementById('cat24')
    brav400.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This former Brave, until recently, was the owner of the record for most homeruns in a career ',
            input: 'select',
            inputOptions: {
                ruth: 'Who is Babe Ruth?',
                aaron: 'Who is Hank Aaron?',
                cox: 'Who is Bobby Cox?',
                bonds: 'Who is Barry Bonds?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'aaron') {
                        score++
                        resolve('Correct! 400 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Hank Aaron! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let brav500 = document.getElementById('cat25')
    brav500.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Former Braves manager Bobby Cox currently holds the MLB record for most times doing this',
            input: 'select',
            inputOptions: {
                flyballs: 'What is catching fly balls?',
                thrownOut: 'What is getting thrown out of a game?',
                manager: 'What is winning manager of the year?',
                strikeout: 'What is striking out?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'thrownOut') {
                        score++
                        resolve('Correct! 500 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was getting thrown out of a game! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    
    // ATLANTA UNITED QUESTIONS


    let unit100 = document.getElementById('cat31')
    unit100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This United star was deemed the MLS MVP in 2018',
            input: 'select',
            inputOptions: {
                tata: 'Who is Tata Martino?',
                josef: 'Who is Josef Martinez?',
                villalba: 'Who is Hector Villalba?',
                miggy: 'Who is Miguel Almiròn?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'josef') {
                        score++
                        resolve('Correct! 100 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Josef Martinez! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let unit200 = document.getElementById('cat32')
    unit200.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Each soccer team in a game plays this many players on the field at a time',
            input: 'select',
            inputOptions: {
                eleven: 'What is 11?',
                nine: 'What is 9?',
                twentyfive: 'What is 25?',
                seventeen: 'What is 17?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'eleven') {
                        score++
                        resolve('Correct! 200 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 11! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let unit300 = document.getElementById('cat33')
    unit300.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Atlanta United beat this team to take home the MLS Cup in 2018',
            input: 'select',
            inputOptions: {
                orlando: 'Who are the Orlando City?',
                newyork: 'Who are the New York Red Bulls?',
                losangeles: 'Who are the LA Galaxy?',
                portland: 'Who are the Portland Timbers?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'portland') {
                        score++
                        resolve('Correct! 300 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was the Portland Timbers! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let unit400 = document.getElementById('cat34')
    unit400.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Including the 2018 MLS Cup, Atlanta United have won this many trophies since their inception',
            input: 'select',
            inputOptions: {
                two: 'What is 2?',
                four: 'What is 4?',
                one: 'What is 1?',
                seven: 'What is 7?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'four') {
                        score++
                        resolve('Correct! 400 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 4! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let unit500 = document.getElementById('cat35')
    unit500.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'After a stellar career in Atlanta, Miguel Almiron was picked up in 2018 by this European team ',
            input: 'select',
            inputOptions: {
                manu: 'What is Manchester United?',
                tott: 'What is Tottenham?',
                chels: 'What is Chelsea?',
                new: 'What is Newcastle United?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'new') {
                        score++
                        resolve('Correct! 500 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Newcastle United! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })

    // ATLANTA HAWKS QUESTIONS


    let hawk100 = document.getElementById('cat41')
    hawk100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This is the name of the Hawks\' new stadium',
            input: 'select',
            inputOptions: {
                sfa: 'What is State Farm Arena?',
                alls: 'What is Allstate Arena?',
                geico: 'What is Geico Center?',
                pro: 'What is Progressive Field?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'sfa') {
                        score++
                        resolve('Correct! 100 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was State Farm Arena! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let hawk200 = document.getElementById('cat42')
    hawk200.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'The Hawks have won the NBA Championship this many times',
            input: 'select',
            inputOptions: {
                two: 'What is 2?',
                zero: 'What is 0?',
                one: 'What is 1?',
                four: 'What is 4?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'one') {
                        score++
                        resolve('Correct! 200 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 1! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let hawk300 = document.getElementById('cat43')
    hawk300.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'The Hawks last won their division in this year',
            input: 'select',
            inputOptions: {
                otoo: 'What is 2002?',
                ayteen: 'What is 2018?',
                nynate: 'What is 1998?',
                fifteen: 'What is 2015?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'fifteen') {
                        score++
                        resolve('Correct! 300 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 2015! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let hawk400 = document.getElementById('cat44')
    hawk400.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This 5\'7\" Hawks point guard won a slam dunk contest in the 80\'s',
            input: 'select',
            inputOptions: {
                webb: 'Who is Spud Webb?',
                muggsy: 'Who is Muggsy Bogues?',
                blaylock: 'Who is Mookie Blaylock?',
                hakeem: 'Who is Hakeem Olajuwon?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'webb') {
                        score++
                        resolve('Correct! 400 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Spud Webb! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let hawk500 = document.getElementById('cat45')
    hawk500.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'The Hawks played in this city before moving to Atlanta in 1968',
            input: 'select',
            inputOptions: {
                ny: 'What is New York?',
                sf: 'What is San Francisco?',
                mil: 'What is Milwaukee?',
                stl: 'What is St. Louis?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'stl') {
                        score++
                        resolve('Correct! 500 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was St. Louis! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })

    // COLLEGE SPORTS QUESTIONS

    let cos100 = document.getElementById('cat51')
    cos100.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This is the only Georgia Bulldog to win the Heisman Trophy',
            input: 'select',
            inputOptions: {
                gurley: 'Who is Todd Gurley?',
                fromm: 'Who is Jake Fromm?',
                walker: 'Who is Herschel Walker?',
                staff: 'Who is Matt Stafford?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'walker') {
                        score++
                        resolve('Correct! 100 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Herschel Walker! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let cos200 = document.getElementById('cat52')
    cos200.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This is the year in which UGA won its only National Championship',
            input: 'select',
            inputOptions: {
                forto: 'What is 1942?',
                aydayt: 'What is 1988?',
                senteen: 'What is 2017?',
                eightyone: 'What is 1981?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'eightyone') {
                        score++
                        resolve('Correct! 200 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 1981! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let cos300 = document.getElementById('cat53')
    cos300.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Georgia Tech has won this many National Championships',
            input: 'select',
            inputOptions: {
                zero: 'What is 0?',
                one: 'What is 1?',
                four: 'What is 4?',
                eight: 'What is 8?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'four') {
                        score++
                        resolve('Correct! 300 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was 4! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let cos400 = document.getElementById('cat54')
    cos400.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'Georgia State\'s football team recently won their first big game against this sec team',
            input: 'select',
            inputOptions: {
                tenn: 'What is The University of Tennessee?',
                uga: 'What is The University of Georgia?',
                fla: 'What is The University of Florida?',
                ala: 'What is The University of Alabama?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'tenn') {
                        score++
                        resolve('Correct! 400 points! :)'),
                        checkWinLose()
                    } else {
                        resolve('The correct answer was The University of Tennessee! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })
    let cos500 = document.getElementById('cat55')
    cos500.addEventListener('click', function (e) {
        e.target.style.backgroundColor = 'black'
       
        const { value: training } =  Swal.fire({
            timer: 8000,
            title: 'This Georgia school has won the most National Chamionships',
            input: 'select',
            inputOptions: {
                gt: 'Who is Georgia Tech?',
                uga: 'Who is UGA?',
                state: 'Who is Georgia State?',
                southern: 'Who is Georgia Southern?'
            },
            inputPlaceholder: 'Select a question',
            allowOutsideClick: false,
            showCancelButton: false,
            inputValidator: (value) => {
                unansweredQuestion -= 1
                return new Promise((resolve) => {
                    
                    if (value === 'southern') {
                        score++
                        resolve('Correct! 500 points! :)'), 
                        checkWinLose()
                    } else {
                        resolve('The correct answer was Georgia Southern! :(')
                        e.target.style.color = 'black',
                        checkWinLose()
                    }
                })
                
            } 
        })
        if (training) {
            Swal.fire('You selected: ' + training) 

        }
    })