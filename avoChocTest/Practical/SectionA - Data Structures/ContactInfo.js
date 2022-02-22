//Imports and required packages
const CSVtoJSON = require('csvtojson');
const JSONtoCSV = require('json2csv').parse;
const FileSystem = require('fs');

//Function to add name to end of array
function addName(firstName, lastName) {
    CSVtoJSON().fromFile('./datastructures2.csv').then(data => {
        data.push({
            first_name: firstName,
            last_name: lastName,
        });
        const csv = JSONtoCSV(data, { fields: ["first_name", "last_name"]});
        FileSystem.writeFileSync('./datastructures2.csv',csv)
    })
};

//Function to edit name at given index of array
function editName(firstName, lastName, index) {
    CSVtoJSON().fromFile('./datastructures2.csv').then(data => {
        data[index].first_name = firstName;
        data[index].last_name = lastName;
        const csv = JSONtoCSV(data, { fields: ["first_name", "last_name"]});
        FileSystem.writeFileSync('./datastructures2.csv',csv)
    })
};

//Function to remove entry according to name given
function deleteName(index) {
    CSVtoJSON().fromFile('./datastructures2.csv').then(data => {
        data.splice(index, 1);
        const csv = JSONtoCSV(data, { fields: ["first_name", "last_name"]});
        FileSystem.writeFileSync('./datastructures2.csv',csv)
    })
};
