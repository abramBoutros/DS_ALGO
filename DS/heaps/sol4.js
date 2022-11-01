/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // an array for the different parentheses elements
  // (), {}, []
  let comps = [0, 0, 0];
  let res = true;
  for (let i = 0; i < s.length; i++) {
    console.log(s[i], comps);
    if (s[i] === "(") {
      comps[0]++;
      if (comps[0] > 0) res = false;
    } else if (s[i] === "{") {
      comps[1]++;
      if (comps[1] > 0) res = false;
    } else if (s[i] === "[") {
      comps[2]++;
      if (comps[2] > 0) res = false;
    } else if (s[i] === ")") {
      comps[0]--;
      comps[1] = 0;
      comps[2] = 0;
      if (comps[0] < 0) return false;
      else if (comps[0] === 0) res = true;
    } else if (s[i] === "}") {
      comps[1]--;
      comps[0] = 0;
      comps[2] = 0;
      if (comps[1] < 0) return false;
      else if (comps[1] === 0) res = true;
    } else if (s[i] === "]") {
      comps[2]--;
      comps[1] = 0;
      comps[0] = 0;
      if (comps[2] < 0) return false;
      else if (comps[2] === 0) res = true;
    }

  }
  return res;
};

console.log(isValid("([)]"));