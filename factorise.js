const primes = [2, 3, 5, 7, 11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71, 73,79,83,89,97,101]



function primeFactorise(num) {
    let wNum = num
    const factors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let counter = 0   
    while (wNum > 1){
        if (wNum%primes[counter] == 0){
            factors[counter]++
            wNum /= primes[counter]
            counter = 0
        } else {
            counter++
        }
    }
    // console.log("Factors: ", factors)
    // let testy = 1
    // for (let i = 0; i<factors.length; i++){
    //     testy *= (primes[i]**factors[i])
    // }
    // console.log("Testy: ", testy)
    // console.log("Working?", testy == num)

    return factors
}

//primeFactorise(Number(process.argv[2]))

function getLowestCommonMultiple(arr) {
    const highestFactors = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    /*const allFactors = */arr.map( item => {
        const currentFactors = primeFactorise(item)
        currentFactors.map( (factor, i) => {
            if (factor > highestFactors[i]) highestFactors[i] = factor
        })
    })
    //console.log(allFactors)
    console.log(highestFactors)
    let lcm = 1
    for (let i = 0; i<highestFactors.length; i++){
        lcm *= (primes[i]**highestFactors[i])
    }
    //console.log("LCM: ", lcm)
    return lcm
}

getLowestCommonMultiple([7,10])