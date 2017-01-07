function shout_backwards(data){
  let a = data.toUpperCase().split("").reverse().join("");
  return a + "!!!";
}

console.log(shout_backwards("Hello World"));
