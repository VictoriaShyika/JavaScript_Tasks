// You need to create a function that converts the input into this format, with the output being the same
// string expect there is a pattern of uppercase and lowercase letters.

// Examples:

// spongeMeme("stop Making spongebob Memes!") // => 'StOp mAkInG SpOnGeBoB MeMeS!'
// spongeMeme("colored teens cant Be successful in tech") // =>'CoLoReD TeEnS CaNt bE SuCcEsSfUl iN TeCh'

function spongeMeme(sentence) {
  return sentence
    .split("")
    .map((f, i) => (i % 2 !== 0 ? f.toLowerCase() : f.toUpperCase()))
    .join("");
}
