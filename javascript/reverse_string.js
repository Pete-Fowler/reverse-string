function reverseString(str) {
  const newStr = [];
  for(ltr of str) {
    newStr.unshift(ltr);
  }
  return newStr.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

