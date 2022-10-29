// finding names of all people who have replicant emails

let people = [
  { id: 123, name: "Rick Deckard", email: "rick@laderunner.org" },
  { id: 456, name: "Roy Batty", email: "roy@replicant.io" },
  { id: 789, name: "J.F Sebastian", email: "j.f@tyler.com" },
  { id: 258, name: "Pris", email: "pris@replicant.io" },
];
// two step version
let replicants = people.filter(function (person) {
  return person.email.indexOf("@replicant.io");
});

//two st
let names;
console.log("list of replicant names:", names);

// chain the two steps
let replicantNames;
console.log("List of replicant names:", replicantNames);

// arrow fucntion verson
let rn;
console.log("list of replicant names", rn);
