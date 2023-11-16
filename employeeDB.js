import fs from "fs";
import { error } from "console";
import path from "path";
//import inquirer from "inquirer";

//file path of json file and error file
const employeeDataFilePath=path.join(__filename,'employeeData.json');
console.log(employeeDataFilePath);
//const errorFilePath='error.txt';

//function to read  from json file
/* function loadEmployeeDB(){
try{
  const employeeInfo=fs.readFileSync(employeeDataFilePath);
  
}catch(error){

}
}
loadEmployeeDB();
 */