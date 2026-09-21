const permutations = function (arr) {
  if (arr.length === 0) return [[]];

  const perms = permutations(arr.slice(1));
  const result = [];

  for (const p of perms) {
    for (let i = 0; i <= p.length; i++) {
      const copy = p.slice();
      copy.splice(i, 0, arr[0]);
      result.push(copy);
    }
  }

  return result;
};

// Do not edit below this line
module.exports = permutations;
