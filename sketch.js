
function setup() {
  noCanvas();
  var speech = new p5.Speech();
  var bot = new RiveScript();
  bot.loadFile("http://127.0.0.1:8887/brain.rive", brainReady, brainError);

  function brainReady() {
    console.log('Chatbot ready!');
    bot.sortReplies();
  }

  function brainError() {
    console.log('Chatbot error!')
  }


   var button = select('#chatbot-form-btn');
   var user_input = select('#messageText');
   

  button.mousePressed(chat);

  

  function chat() {

  var input = user_input.value();
  var reply = bot.reply("local-user", input);
      speech.speak(reply);
      
      $(".media-list").append('<li class="media"><div class="media-body">' +'<strong>Me : </strong>'+input + '<hr/></div></li>');
      $(".media-list").append('<li class="media"><div class="media-body">' + '<strong>Sherlock : </strong>'+reply + '<hr/></div></li>');
     

  }

}