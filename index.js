// Write your solution here!
const cats =["Milo","Otis","Garfield"];
console.log(cats.length)
console.log(cats)
const copies=cats.slice();
const same=cats.slice();
const copy=cats.slice();
const copyofcats=[...cats];
cats.push("Ralph");
console.log(cats)

copyofcats.unshift("Bob");
console.log(copyofcats);

copy.pop();
console.log(copy);

same.shift()
console.log(same)


const newcats=[...cats.slice(3,0),
 
]