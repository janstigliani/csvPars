const fs = require('fs');

function readCsvFromFile(filePath){
   
}

function splitCsvInRows(csv){
   
}

function splitRows(arrayOfString){
  
}

function getKeysFromFirsLine(arrayOfSplittedLines){
    
}

function getValues(arrayOfSplittedLines){
    
}

function createEntry(keys, valueArray){
  
}

function createArrayOfEntries(keys, values){

   
}

function convertArrayToJson(array){
   
}

function fromCsvToJson(csv){

    const arrayOfStringRows = splitCsvInRows(csv);
    console.log(arrayOfStringRows);
    
    // ["name,surname,yob,gender",
    //  "lorenzo,puppo,1995,m",
    //  "hugo,martinez,1994,m",
    //  "sara,de prà,1989,f"]
    // const arrayOfSplittedRows = splitRows(arrayOfStringRows);
    // console.log(arrayOfSplittedRows);
    // // [["name","surname","yob","gender"],
    // // ["lorenzo","puppo","1995","m"],
    // // ["hugo","martinez","1994","m"],
    // // ["sara","de prà","1989","f"]]
    // const keys = getKeysFromFirsLine(arrayOfSplittedRows);
    // console.log(keys);
    // //["name","surname","yob","gender"]
    // const values = getValues(arrayOfSplittedRows);
    // console.log(values);
    // // [["lorenzo","puppo","1995","m"],
    // // ["hugo","martinez","1994","m"],
    // // ["sara","de prà","1989","f"]]
    // const arrayFromEntries = createArrayOfEntries(keys, values);
    // console.log(arrayFromEntries);
    // // [
    // //     {
    // //         name: "lorenzo",
    // //         surname: "puppo",
    // //         yob: 1995,
    // //         gender: 'm'
    // //     },
    // //     {
    // //         name: "hugo",
    // //         surname: "martinez",
    // //         yob: 1994,
    // //         gender: 'm'
    // //     },
    // //     {
    // //         name: "sara",
    // //         surname: "de pra",
    // //         yob: 1989,
    // //         gender: 'f'
    // //     }
    // // ]
    // const json = convertArrayToJson(arrayFromEntries)
    // console.log(json);
    // // '[
    // //     {
    // //         "name": "lorenzo",
    // //         "surname": "puppo",
    // //         "yob": 1995,
    // //         "gender": 'm'
    // //     },
    // //     {
    // //         "name": "hugo",
    // //         "surname": "martinez",
    // //         "yob": 1994,
    // //         "gender": 'm'
    // //     },
    // //     {
    // //         "name": "sara",
    // //         "surname": "de pra",
    // //         "yob": 1989,
    // //         "gender": 'f'
    // //     }
    // // ]'
    
    return json
}

function writeJsonToFile(filePath, content){
    fs.writeFileSync(filePath, content)
}


function main(){

    const csvData = readCsvFromFile('./data/test1.csv');

    const json = fromCsvToJson(csvData);

    console.log(json);

    writeJsonToFile('./output/test1.json', json);
}

main()