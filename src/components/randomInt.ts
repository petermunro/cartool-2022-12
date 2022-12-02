function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

function uniqueRandomInt(min: number, max: number, usedIds: number[]) {
  let random;
  do {
    random = randomInt(min, max);
  } while (usedIds.includes(random));
  return random;
}

export { randomInt, uniqueRandomInt };
