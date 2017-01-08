function shout_backwards(data){
  var all_caps = data.toUpperCase();
  var splitting = all_caps.split("");
  var reversing = splitting.reverse()
  var backwards = reversing.join("");
  return backwards + "!!!";
  //tes aja
}

console.log(shout_backwards("Hello World"));
