const age = 17
const isFemale = false
const driverStatus = "bob"


// checkt leeftijd
if (age >= 18) {
    console.log("U mag binnen komen!")
} else {
    console.log("Hellaas bent u te jong u mag nog niet naar binnen!")
}
// checkt voor vrouwen
if (isFemale == true) {
    console.log("U mag binnen komen!")
} else {
    console.log("Het is vandaag lady's night u mag niet binnen komen")
}

// checkt voor vrouwen die oud genoeg zijn
if (age >= 18 && isFemale == true) {
    console.log("U mag binnen komen!")
} else if (age >= 18 && isFemale == false){
    console.log("Het is vandaag lady's night u mag niet binnen komen")
} else {
    console.log("U mag niet binnen komen u bent niet oud genoeg")
}

if (driverStatus == "bob") {
    console.log("U mag rijden, een fijne rit terug")
} else {
    console.log("U mag hellaas niet meer rijden, zou ik een taxi voor u bellen")
}


