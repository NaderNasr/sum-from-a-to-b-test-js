
const sum = (fromN, toN) => {
  const sameNumber = fromN - toN;
  let sumOf = 0;
  if (sameNumber === 0) {
    return fromN;
  }
  if (fromN <= toN) {

    sumOf = fromN + sum(fromN + 1, toN);
    return sumOf;
  }

};

module.exports = sum;
