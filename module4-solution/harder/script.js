
(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  // for (let i = 0; i < names.length; i++) {
  // let firstLetter = names[i].charAt(0).toLowerCase();
  names.forEach(name => {
    let firstLetter = name.charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      byeSpeaker.speak(name)
    } else {
      helloSpeaker.speak(name)
    }
    })
  }
)();
