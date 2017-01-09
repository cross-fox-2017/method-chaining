function shout_backwards(data){
  var all_caps = data.toUpperCase();
  var splitting = all_caps.split("");
  var reversing = splitting.reverse()
  var backwards = reversing.join("");
  return backwards + "!!!";
}

function back(data){
  return data.toUpperCase().split("").reverse().join("")+"!!!"
}
console.log(shout_backwards("Hello World"));
console.log(back("Hello World"));
