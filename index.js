var katzDeliLine = [];

function takeANumber (katzDeliLine, name) {
katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`)
}

function nowServing (katzDeliLine) {
     while (katzDeliLine.length > 0) {
    return (`Currently serving ${katzDeliLine[0]}.`)
  }
  while(katzDeliLine.length > 0) {
    katzDeliLine.shift();
  }
  return ("There is nobody waiting to be served!");
  }
