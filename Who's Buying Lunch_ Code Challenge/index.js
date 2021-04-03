var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
   var nameList = Math.floor(Math.random() * names.length);

   var randomName = names[nameList];

   return randomName + " is going to buy lunch today! ";
}
