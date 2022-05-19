// Falsy Bouncer
// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  const arrayOfTruthys = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) arrayOfTruthys.push(arr[i]);
  }

  return arrayOfTruthys;
}

bouncer([7, 'ate', '', false, 9]);
