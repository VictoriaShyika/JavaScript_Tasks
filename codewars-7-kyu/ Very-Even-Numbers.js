function isVeryEvenNumber(n) {
  if (n < 10 && n % 2 === 0) {
    return true;
  }
  if (n > 9) {
    return isVeryEvenNumber(
      String(n)
        .split("")
        .reduce((a, b) => +a + +b)
    );
  }
  return false;
}
