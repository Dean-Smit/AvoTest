//FileSystem import
const fs = require('fs');

// Country name generator
function generateCountryNames() {
  fs.readFile('./countries.csv', 'utf8', function (_err, data) {
    //Read in CSV file for countries as array
      const countryArray = data.split(/\r?\n/);
  
    //Initialize empty arrays for word parts and final words
      const countryStart = [];
      const countryMiddle1 = [];
      const countryMiddle2 = [];
      const countryEnd = [];
      let generatedNames = [];
      
    //Read in values for start array (Starting letters)
      for (let i = 0; i < countryArray.length; i++) {
        countryStart.push(countryArray[i].slice(0, 3))
      }
    //Read in values for middle1 array (First middle letters)
      for (let i = 0; i < countryArray.length; i++) {
        countryMiddle1.push(countryArray[i].slice(3, 6))
      }
    //Read in values for middle2 array (Second middle letters)
    for (let i = 0; i < countryArray.length; i++) {
      countryMiddle2.push(countryArray[i].slice(6, 9))
    }
    //Read in values for end array (End letters)
    for (let i = 0; i < countryArray.length; i++) {
      countryEnd.push(countryArray[i].slice(9, 12))
    }
  
    //Create for loop to generate 50 new country names based on trailing data
    for (let i = 0; i < 50; i++) {
      //Generate random number between 2 and 4 to determine length of new name
      let countryLength = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  
      //Initialize variables for country name parts
      let firstPart = countryStart[Math.floor(Math.random()*countryStart.length)];
      let secondPart = countryMiddle1[Math.floor(Math.random()*countryMiddle1.length)];
      let thirdPart = countryMiddle2[Math.floor(Math.random()*countryMiddle2.length)];
      let fourthPart = countryEnd[Math.floor(Math.random()*countryEnd.length)];
      let countryName;
  
      //Create switch statement to generate names based on word length variable
        switch(countryLength) {
        case 2:
          countryName = firstPart + secondPart;
          break;
        case 3:
          countryName = firstPart + secondPart + thirdPart;
          break;
        case 4: countryName = firstPart + secondPart + thirdPart + fourthPart;
          break;
      }
  
      //Push names to generatedNames array
      generatedNames.push(countryName)
    }
  
    //Log generated names to console
    console.log(generatedNames)
  
    });
}

// Mythical creature name generator
function generateMythicalCreatures() {
  fs.readFile('./mythical.csv', 'utf8', function (_err, data) {
    //Read in CSV file for mythical creatures as array
      const mythicalArray = data.split(/\r?\n/);
  
    //Initialize empty arrays for word parts and final words
      const mythicalStart = [];
      const mythicalMiddle1 = [];
      const mythicalMiddle2 = [];
      const mythicalEnd = [];
      let generatedNames = [];
      
    //Read in values for start array (Starting letters)
      for (let i = 0; i < mythicalArray.length; i++) {
        mythicalStart.push(mythicalArray[i].slice(0, 3))
      }
    //Read in values for middle1 array (First middle letters)
      for (let i = 0; i < mythicalArray.length; i++) {
        mythicalMiddle1.push(mythicalArray[i].slice(3, 6))
      }
    //Read in values for middle2 array (Second middle letters)
    for (let i = 0; i < mythicalArray.length; i++) {
      mythicalMiddle2.push(mythicalArray[i].slice(6, 9))
    }
    //Read in values for end array (End letters)
    for (let i = 0; i < mythicalArray.length; i++) {
      mythicalEnd.push(mythicalArray[i].slice(9, 12))
    }
  
    //Create for loop to generate 10 000 new mythical creatures based on trailing data
    for (let i = 0; i < 10000; i++) {
      //Generate random number between 2 and 4 to determine length of new name
      let mythicalLength = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  
      //Initialize variables for mythical creature name parts
      let firstPart = mythicalStart[Math.floor(Math.random()*mythicalStart.length)];
      let secondPart = mythicalMiddle1[Math.floor(Math.random()*mythicalMiddle1.length)];
      let thirdPart = mythicalMiddle2[Math.floor(Math.random()*mythicalMiddle2.length)];
      let fourthPart = mythicalEnd[Math.floor(Math.random()*mythicalEnd.length)];
      let mythicalName;
  
      //Create switch statement to generate names based on word length variable
        switch(mythicalLength) {
        case 2:
          mythicalName = firstPart + secondPart;
          break;
        case 3:
          mythicalName = firstPart + secondPart + thirdPart;
          break;
        case 4: mythicalName = firstPart + secondPart + thirdPart + fourthPart;
          break;
      }
  
      //Push names to generatedNames array
      generatedNames.push(mythicalName)
    }
  
    //Log generated names to console
    console.log(generatedNames)
  
    });
}

// NPC name generator
function generateNames() {
  fs.readFile('./names.csv', 'utf8', function (_err, data) {
    //Read in CSV file for names as array
      const namesArray = data.split(/\r?\n/);
  
    //Initialize empty arrays for word parts and final words
      const namesStart = [];
      const namesMiddle1 = [];
      const namesMiddle2 = [];
      const namesEnd = [];
      let generatedNames = [];
      
    //Read in values for start array (Starting letters)
      for (let i = 0; i < namesArray.length; i++) {
        namesStart.push(namesArray[i].slice(0, 3))
      }
    //Read in values for middle1 array (First middle letters)
      for (let i = 0; i < namesArray.length; i++) {
        namesMiddle1.push(namesArray[i].slice(3, 6))
      }
    //Read in values for middle2 array (Second middle letters)
    for (let i = 0; i < namesArray.length; i++) {
      namesMiddle2.push(namesArray[i].slice(6, 9))
    }
    //Read in values for end array (End letters)
    for (let i = 0; i < namesArray.length; i++) {
      namesEnd.push(namesArray[i].slice(9, 12))
    }
  
    //Create for loop to generate 100 000 new NPC names based on trailing data
    for (let i = 0; i < 100000; i++) {
      //Generate random number between 2 and 4 to determine length of new name
      let nameLength = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  
      //Initialize variables for name parts
      let firstPart = namesStart[Math.floor(Math.random()*namesStart.length)];
      let secondPart = namesMiddle1[Math.floor(Math.random()*namesMiddle1.length)];
      let thirdPart = namesMiddle2[Math.floor(Math.random()*namesMiddle2.length)];
      let fourthPart = namesEnd[Math.floor(Math.random()*namesEnd.length)];
      let name;
  
      //Create switch statement to generate names based on word length variable
        switch(nameLength) {
        case 2:
          name = firstPart + secondPart;
          break;
        case 3:
          name = firstPart + secondPart + thirdPart;
          break;
        case 4: name = firstPart + secondPart + thirdPart + fourthPart;
          break;
      }
  
      //Push names to generatedNames array
      generatedNames.push(name)
    }
  
    //Log generated names to console
    console.log(generatedNames)
  
    });
}

// Profession generator
function generateProfessions() {
  fs.readFile('./professions.csv', 'utf8', function (_err, data) {
    //Read in CSV file for names as array
      const professionsArray = data.split(/\r?\n/);
  
    //Initialize empty arrays for word parts and final words
      const professionsStart = [];
      const professionsMiddle1 = [];
      const professionsMiddle2 = [];
      const professionsEnd = [];
      let generatedNames = [];
      
    //Read in values for start array (Starting letters)
      for (let i = 0; i < professionsArray.length; i++) {
        professionsStart.push(professionsArray[i].slice(0, 4))
      }
    //Read in values for middle1 array (First middle letters)
      for (let i = 0; i < professionsArray.length; i++) {
        professionsMiddle1.push(professionsArray[i].slice(4, 8))
      }
    //Read in values for middle2 array (Second middle letters)
    for (let i = 0; i < professionsArray.length; i++) {
      professionsMiddle2.push(professionsArray[i].slice(8, 12))
    }
    //Read in values for end array (End letters)
    for (let i = 0; i < professionsArray.length; i++) {
      professionsEnd.push(professionsArray[i].slice(12, 16))
    }
  
    //Create for loop to generate 5000 new professions based on trailing data
    for (let i = 0; i < 5000; i++) {
      //Generate random number between 2 and 4 to determine length of new name
      let professionsLength = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  
      //Initialize variables for name parts
      let firstPart = professionsStart[Math.floor(Math.random()*professionsStart.length)];
      let secondPart = professionsMiddle1[Math.floor(Math.random()*professionsMiddle1.length)];
      let thirdPart = professionsMiddle2[Math.floor(Math.random()*professionsMiddle2.length)];
      let fourthPart = professionsEnd[Math.floor(Math.random()*professionsEnd.length)];
      let profession;
  
      //Create switch statement to generate professions based on word length variable
        switch(professionsLength) {
        case 2:
          profession = firstPart + secondPart;
          break;
        case 3:
          profession = firstPart + secondPart + thirdPart;
          break;
        case 4: 
        profession = firstPart + secondPart + thirdPart + fourthPart;
          break;
      }
  
      //Push names to generatedNames array
      generatedNames.push(profession)
    }
  
    //Log generated names to console
    console.log(generatedNames)
    });
}

//Sport generator
function generateSports() {
  fs.readFile('./sports.csv', 'utf8', function (_err, data) {
    //Read in CSV file for sports as array
      const sportsArray = data.split(/\r?\n/);
  
    //Initialize empty arrays for word parts and final words
      const sportsStart = [];
      const sportsMiddle1 = [];
      const sportsMiddle2 = [];
      const sportsEnd = [];
      let generatedNames = [];
      
    //Read in values for start array (Starting letters)
      for (let i = 0; i < sportsArray.length; i++) {
        sportsStart.push(sportsArray[i].slice(0, 3))
      }
    //Read in values for middle1 array (First middle letters)
      for (let i = 0; i < sportsArray.length; i++) {
        sportsMiddle1.push(sportsArray[i].slice(3, 6))
      }
    //Read in values for middle2 array (Second middle letters)
    for (let i = 0; i < sportsArray.length; i++) {
      sportsMiddle2.push(sportsArray[i].slice(6,9))
    }
    //Read in values for end array (End letters)
    for (let i = 0; i < sportsArray.length; i++) {
      sportsEnd.push(sportsArray[i].slice(9, 12))
    }
  
    //Create for loop to generate 10 new sports based on trailing data
    for (let i = 0; i < 10; i++) {
      //Generate random number between 2 and 4 to determine length of new name
      let sportsLength = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  
      //Initialize variables for name parts
      let firstPart = sportsStart[Math.floor(Math.random()*sportsStart.length)];
      let secondPart = sportsMiddle1[Math.floor(Math.random()*sportsMiddle1.length)];
      let thirdPart = sportsMiddle2[Math.floor(Math.random()*sportsMiddle2.length)];
      let fourthPart = sportsEnd[Math.floor(Math.random()*sportsEnd.length)];
      let sport;
  
      //Create switch statement to generate professions based on word length variable
        switch(sportsLength) {
        case 2:
        sport = firstPart + secondPart;
          break;
        case 3:
        sport = firstPart + secondPart + thirdPart;
          break;
        case 4: 
        sport = firstPart + secondPart + thirdPart + fourthPart;
          break;
      }
  
      //Push names to generatedNames array
      generatedNames.push(sport)
    }
  
    //Log generated names to console
    console.log(generatedNames)
    });
}

generateSports();