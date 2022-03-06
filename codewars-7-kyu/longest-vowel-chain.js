// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a
// lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the
// length of the longest vowel substring. Vowels are any of aeiou.

function solve(s) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if ("aeiou".includes(s[i])) {
      counter += 1;
      if (counter > max) {
        max = counter;
      }
    } else {
      counter = 0;
    }
  }
  return max;
}
