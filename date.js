//jshint esversion:6

  exports.getDate = function (){
  const today = new Date(); //get today's date.
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return today.toLocaleDateString("en-US", options);
}

  exports.getDay = function (){
  const today = new Date(); //get today's date.
  const options = {
    weekday: "long",
  };
  return  today.toLocaleDateString("en-US", options);
}

console.log(module.exports);
