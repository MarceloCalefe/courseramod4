var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", 
             "Larry", "Paula", "Laura", "Jim", "Marcelo"];

for (var idx = 0; idx < names.length; idx++) {
  var result = names[idx].charAt(0).toLowerCase();
  

  if (result === 'j') {
    speakGoodBye(names[idx]);
  } else {
    helloSpeaker(names[idx]);
  }
}

