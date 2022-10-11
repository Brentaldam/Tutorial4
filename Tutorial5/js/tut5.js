const musketeers =["Anthos", "Porthos", "Arimis"];

for(let i = 0; i < musketeers.length; i++){
    console.log(`The musketeer at index ${i} is ${musketeers[i]}`);
}

musketeers.push("D'Artagnan");
musketeers.forEach(musketeer => {console.log(musketeer);})



 musketeers.splice(2,1);
 for(const musketeer of musketeers) {
    console.log(`for of loop, musketeer: `, musketeer);
 }
