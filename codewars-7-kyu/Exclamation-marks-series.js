// Remove or add a exclamation mark at the end of words of the sentence. Words are separated by spaces
// in the sentence. That is: If a word has one ! at the end, remove it; If a word has no ! at the end,
// add a ! to the end; If there are more than one ! at the end of word, keep it.

// Examples
// removeOrAdd("Hi!") === "Hi"
// removeOrAdd("Hi! Hi!") === "Hi Hi"
// removeOrAdd("Hi! Hi") === "Hi Hi!"
// removeOrAdd("Hi! Hi Hi!!") === "Hi Hi! Hi!!"
// removeOrAdd("!Hi! !Hi !Hi!!") === "!Hi !Hi! !Hi!!"

function removeOrAdd(string) {
  let arr = string.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][arr[i].length - 1] == "!" && arr[i][arr[i].length - 2] == "!") {
      newArr.push(arr[i]);
    } else if (arr[i][arr[i].length - 1] == "!") {
      newArr.push(arr[i].replace(/!$/, ""));
    } else {
      newArr.push(arr[i] + "!");
    }
  }
  return newArr.join(" ");
}
