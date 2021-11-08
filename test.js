const a = [...Array(5).keys()].map((x) =>
  x + 1 === 5
    ? `<option selected value="${x + 1}">${x + 1}</option>`
    : `<option  value="${x + 1}">${x + 1}</option>`
).join('\n');
console.log(a)

// const b = Array.from(5);
// console.log(b);

let item = {
  id: 1234,
  name: 'Dress',
  qty: 1,
}

item = {...item, qty:2};
console.log(item)