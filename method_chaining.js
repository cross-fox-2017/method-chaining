function shout_backwards(data){
  var all_caps = data.toUpperCase().split("").reverse().join("");
  //var splitting = all_caps.split("");
  //var reversing = splitting.reverse()
  //var backwards = reversing.join("");
  return all_caps + "!!!";
}

console.log(shout_backwards("Hello World"));
