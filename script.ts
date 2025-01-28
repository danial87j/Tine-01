function searchWord(text:string, target:any) {
  let result = text.search(target);
  if (result >= 0) {
      console.log("True ,", text);
  } else {
      console.log(`False Your Word Does Not Exist In ${text}`);
  }
}

let text = "Hello World :D";
let target = "Hello";
searchWord(text, target);
