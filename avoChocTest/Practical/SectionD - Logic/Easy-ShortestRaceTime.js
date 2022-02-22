//Function to calculate lowest race time based on number of given laps
function raceTime(laps) {

    let totalRaceTime = 0;

    let carlLaps = 0;
    let johnLaps = 0;
    let chrisLaps = 0;

    //Assing number of laps to be run by each member
        while (laps > 0) {
            if (carlLaps - johnLaps < 2) {
                carlLaps += 1;
            } else if (johnLaps - chrisLaps < 2) {
                johnLaps += 1;
            } else {
                chrisLaps += 1;
            }
            laps -= 1;
        }

    console.log('Carl Laps: ',carlLaps);
    console.log('John Laps: ', johnLaps);
    console.log('Chris Laps: ', chrisLaps);

//Name Carls' friends and assign first lap times in minutes
    let carlLapTime = 3;
    let johnLapTime = 5;
    let chrisLapTime = 7;

    //Carl's total time
    for (let i = 0; i < carlLaps; i++) {
        totalRaceTime += carlLapTime;
        carlLapTime += 1;
    }

    //John's total time
    for (let i = 0; i < johnLaps; i++) {
        totalRaceTime += johnLapTime;
        johnLapTime += 1;
    }

    //Chris' total time
    for (let i = 0; i < chrisLaps; i++) {
        totalRaceTime += chrisLapTime;
        chrisLapTime += 1;
    }

    //Log and return total value
    console.log('totalRaceTime: ',totalRaceTime)
    return totalRaceTime;

}

//Run functions with laps as given argument
raceTime(5);
raceTime(15);
raceTime(25);