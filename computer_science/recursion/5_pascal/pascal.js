const pascal = function (row) {
  const arr = [1];
  if (row === 1) return arr;

  const previous = pascal(row - 1);
  previous.forEach((number, i) => {
    const next = previous[i + 1] ?? 0;
    arr.push(number + next);
  });

  return arr;
};

// Do not edit below this line
module.exports = pascal;
