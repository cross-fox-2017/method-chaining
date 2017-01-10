function shout_backwards(data){
  var all_caps = data.toUpperCase().split('').reverse().join('');
  return all_caps + "!!!";
}

console.log(shout_backwards("Hello World"));
