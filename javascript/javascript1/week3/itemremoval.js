const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const pos = names.indexOf('Ahmad');
const nameToRemove = 'Ahmad';
console.log(pos)
console.log(nameToRemove)
names.splice(pos,1)
console.log(nameToRemove)
names.forEach(function(item, index){
    console.log(item, index)
})
console.log(names)