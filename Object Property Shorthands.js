/*
 * Object Property Shorthands
 *
 */


const a = 10;
const b = 20;
const c = 30;
const d = {
  a: a,
  b: b,
  c: c,
}

const e ={
  a,
  bee: b,
  c,
}

function objectBuilder(x, y, z, numTimes) {
  const allObjects = [];
  for(let i = 0 ; i < numTimes ; i += 1) {
    const newObj = {
      x: i + 1,
      y,
      z
    }
    allObjects.push(newObj);
  }
  return allObjects;
}

const bob = objectBuilder(10, "bob", false, 10);
const { x:bobID } = bob[0];
