var myPet = {
species: "Pitbull",
name: "Dona",
legs: 4,
friends: ["Rex", "Rino"]
};

function myFunction(myObj){
    return myObj;
};

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };