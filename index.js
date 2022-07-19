function scuberGreetingForFeet(feet){
  let result = feet
  if(result <= 400) {
    return 'This one is on me!';
  } else if(result > 400 && result < 2000) {
    return 'That will be twenty bucks.';
  } else if(result < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else(result > 2500)
    return 'No can do.';
  }
scuberGreetingForFeet(199);

function ternaryCheckCity(city) {
  return city === 'NYC' ? "Ok, sounds good." : "No go."
};
ternaryCheckCity();

function switchOnCharmFromTip(tip) {

  switch (tip){
    case 'generous':return 'Thank you so much.';
    case 'not as generous':return 'Thank you.';
    default:return 'Bye.'
  }
}