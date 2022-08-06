
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
// Using the forEach Method
  //  names.forEach(name => {
  //   let firstLetter = name.charAt(0).toLowerCase();
  //   if (firstLetter === 'j') {
  //     byeSpeaker.speak(name)
  //   } else {
  //     helloSpeaker.speak(name)
  //   }
  //   })
  
// Using the for of Loop
  for(let name of names) {
    let firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(name)
    }
    else {
      helloSpeaker.speak(name)
    }
  }
  }
)();
