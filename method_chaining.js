function shout_backwards(data){
  return data.toUpperCase().split("").reverse().join("");
  // var all_caps = data.toUpperCase();
  // var splitting = all_caps.split("");
  // var reversing = splitting.reverse()
  // var backwards = reversing.join("");
  // return backwards + "!!!";
}

console.log(shout_backwards("Hello World"));

// function shout_backwards(data){
//   var all_caps = data.toUpperCase();
//   //console.log(all_caps);
//   split(all_caps);
//
// //return backward();
// }
//
// function split(all_caps){
//   var splitting = all_caps.split("");
//   //console.log(splitting);
//   reverse(splitting);
// }
//
// function reverse(splitting){
//   var reversing = splitting.reverse();
//   //console.log(reversing);
//   backwards(reversing);
// }
// function backwards(reversing){
//   var backward = reversing.join("");
//   console.log(backward);
// // return backward ;
// }
//
// console.log(shout_backwards("Hello World"));
