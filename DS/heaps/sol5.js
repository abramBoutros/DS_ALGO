var isValid = function (s) {
  let stack = [];

  if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false;
  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    let stackTop = stack[stack.length - 1];
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") stack.push(s[i]);
    else if ((s[i] === ")" && stackTop === "(") ) stack.pop(0);
    else if ((s[i] === "}" && stackTop === "{") ) stack.pop(0);
    else if ((s[i] === "]" && stackTop === "[") ) stack.pop(0);
    else return false;
  }
  return !stack[0];
}



console.log(isValid("()"));