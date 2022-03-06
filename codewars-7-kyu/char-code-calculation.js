// Given a string, turn each character into its ASCII character code and join them together
// to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6

function calc(x) {
  let total1 = "";
  for (let i = 0; i < x.length; i++) {
    total1 += x.charCodeAt(i);
  }

  let total2 = total1.replace(/7/g, "1");

  function sumStr(str) {
    let strArr = str.split("");
    let sum = strArr.reduce(function (total, num) {
      return parseFloat(total) + parseFloat(num);
    });

    return sum;
  }
  let sum1 = sumStr(total1);
  let sum2 = sumStr(total2);

  return sum1 - sum2;
}
