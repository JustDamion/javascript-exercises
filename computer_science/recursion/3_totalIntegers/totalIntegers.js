const isObject = (value) => typeof value === "object" && value !== null;

const totalIntegers = function (object) {
  let total = 0;

  if (!isObject(object)) return;

  const values = Object.values(object);

  values.map((value) => {
    if (Number.isInteger(value)) {
      total++;
    } else if (isObject(value)) {
      total += totalIntegers(value);
    }
  });

  return total;
};

// Do not edit below this line
module.exports = totalIntegers;
