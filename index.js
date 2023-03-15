const myArray = [
  {
  tweet: "Did you know that cats spend an average of 2/3 of their lives sleeping? That means that a 9-year-old cat has only been awake for 3 years of its life! 😴🐾 #catfacts",
  isReal: false,
  explain: "This information is very neat arranged and looks real, but is not"
  },
  {
  tweet: "Together, I know we can build a future where half of all new cars sold in America are electric. In fact, let's do it by 2030.",
  isReal: true,
  explain: "Very official tweet by the president about the future of America."
  },
  {
    tweet: "Looks like a beautiful day ahead! ☀️ The forecast predicts clear skies and warm temperatures in the mid-70s #sunnydays",
    isReal: false,
    explain: "Too perfect for an attempt with emoticons and hashtags."
  },
  {
  tweet: "Holy shit! This episode of The Last of us was so good I got so emotional",
  isReal: true,
  explain: "Contains swearing words, A.I. would not use any profanity words"
  },
  {
  tweet: "So I'm not usually a fan of veggie burgers, but this new recipe I found is a game-changer! 😋 It's made with black beans, avocado, and a secret spice blend that gives it a ton of flavor! 🌱🍔 #veganfood #yum #newrecipe",
  isReal: false,
  explain: "Just a little too long to be authentic, plus the emoji and hashtag use is a little too much"
  },
  {
  tweet: "watching oli hug all those ppl, sign stuff and and take pics w them while still singing with a big ass smile on his face you just know he's got a big heart",
  isReal: true,
  explain: "This is a tweet made with a lot of abbreviations and internet language. It's a perfect example of someone talking in their own way and not like an A.I."
  },
  {
    tweet: "Great news on universal healthcare! Let's prioritize access for everyone, not just the wealthy. 🙌🌟 #healthcare #equality",
    isReal: false,
    explain: "The use of emojis and hashtags might be a little too much to be a real person"
  },
  {
    tweet: "And they were roommates!",
    isReal: true,
    explain: "This is a quote from a popular video a couple years ago. A.I. wouldn't be able to generate this without context"
  },
  {
    tweet: "OMG, I just saw a flying pig outside my window! 🐷🤯 #mindblowing #animalmagic #unbeliveable",
    isReal: false,
    explain: "This tweet contains an obviously not possible scenario. Can't be real"
  },
  {
    tweet: "Did u know owning a hamster is illegal in australia ? ur welcome",
    isReal: true,
    explain: "A fun little fact, but the spelling mistakes makes it obvious it's a real tweet"
  }

];
// meerdere vars / lets etc. in één keer aanmaken op deze manier
//elements
let answerelement, scoreElement, textElement, questionElement, buttonReal, buttonFake, buttonNext;
//variables with values
let score = 0, questionCount = 1, buttonRealClicked = false, buttonFakeClicked = false, thinksIsReal = false;
//empty variables
let randomIndex, randomObject; 

// Initialize in here
document.addEventListener('DOMContentLoaded', function()
{
  answerelement = document.getElementById('answer');
  scoreElement = document.getElementById('score');
  textElement = document.getElementById('text');
  questionElement = document.getElementById('question');
  questionHeader = document.getElementById('questionHeader');

  // Select the button element on the page
  buttonReal = document.getElementById('realAnswer');
  buttonFake = document.getElementById('fakeAnswer');
  buttonNext = document.getElementById('next');

  // Add a click event listener to the button
  buttonReal.addEventListener('click', onRealClick);
  buttonFake.addEventListener('click', onFakeClick);
  buttonNext.addEventListener('click', onNextClick);

  nextQuestion();
}, false);




const onRealClick = function(e){
  thinksIsReal = true;
  resolveAnswer();
}

const onFakeClick = function(e){
  thinksIsReal = false;
  resolveAnswer();
}

const onNextClick = function(e){
  nextQuestion();
  console.log('Next question');
  
}

const nextQuestion = function() {
  //questionElement.textContent = '';
  textElement.innerHTML = '';
  questionHeader.innerHTML = `Question ${questionCount}`;
  
  randomIndex = Math.floor(Math.random() * myArray.length);
  randomObject = myArray[randomIndex];
  
  console.log(randomObject.isReal)

  questionElement.textContent = randomObject.tweet;

  buttonFake.disabled = false;
  buttonReal.disabled = false;

  questionCount++;    
}

const resolveAnswer = function() {
  buttonFake.disabled = true;
  buttonReal.disabled = true;

  if (thinksIsReal == randomObject.isReal){
    score++;
    answerText = 'Correct';
    console.log("Correctttt! Score +1");
  }
  else {
    score;
    answerText = 'Incorrect';
    console.log("Wrong answer");
  }
  
  textElement.innerHTML = `${answerText}. ${randomObject.explain}`;
  scoreElement.innerHTML = `Score: ${score}`;

  myArray.splice(randomIndex, 1);

  if (myArray.length == 0) {
    textElement.innerHTML = `${randomObject.explain} <br><br>'No more questions left!';`
    buttonNext.disabled = true;
    return;
  }
}