import { storage } from "../config";
import {
  ref,
  uploadString,
} from "firebase/storage";


export function objectToCSV(headList, ObjectLists, fileName , userEmail) {
  //tranfer array to a string maintain header
  let head = [...headList].reduce((prev,curr)=>prev+=","+curr);
  console.log(head)

  let data = [];
  ObjectLists.forEach(element => {
    // Add \t to prevent the table from displaying scientific notation or other formats
    const dataLine = [...headList].reduce((prev, curr) => prev += element[curr] + "\t,", "");
    console.log(dataLine)
       data.push(dataLine.substring(0, dataLine.length - 1));

  });
  let str = data.reduce((prev,curr)=>prev+="\n"+curr,head);

  const storageRef = ref(storage, userEmail + "/" + fileName);

  uploadString(storageRef, str).then((snapshot) => {
  });
}
export default objectToCSV
