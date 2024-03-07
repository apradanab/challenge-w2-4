export const methodSome = (array, condition) => {
  if (array.length === 0) {
    return false;
  }

  // eslint-disable-next-line no-unreachable-loop
  for (const element of array) {
    condition[element] === condition;
    return true;
  }

  return false;
};

export const methodEvery = (array, condition) => {
  if (array.length === 0) {
    return true;
  }

  let isTrue = false;
  for (const element of array) {
    if (condition(element)) {
      isTrue = true;
    } else {
      isTrue = false;
    }
  }

  return isTrue;
};
