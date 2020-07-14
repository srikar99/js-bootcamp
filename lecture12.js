// Perform actions on all elements

// map -> iterate thru all elements, and transform.

const temperatures = [
    {degrees: 60, isRecordTemp: false},
    {degrees: 80, isRecordTemp: true},
    {degrees: 70, isRecordTemp: false},
    {degrees: 50, isRecordTemp: false}
]

const newTemps = temperatures.map((temperature) => temperature.degrees >= 70 ? {...temperature, isHigh: true} : temperature);

console.log(newTemps);

// forEach

newTemps.forEach(temperature => {

    if(temperature.isHigh) {
        console.log(`Temperature ${temperature.degrees} was a record high`);
    }
});