/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Bind:
* 2. Call:   
* 3. Apply:
* 4. New:
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const assassin = {
	name: 'Black Shadow',
	class: 'Ninja',
	target: 'Emperor',
	kill: function() {
		console.log(`${name} assassinated the ${target}`);
	}
};

// Principle 2

// code example for Implicit Binding

// const assassin = {
//     name: 'Black Shadow',
//     class: 'Ninja',
//     target:'Emperor',
//     kill: function() {
//      console.log(`${this.name} assassinated the ${this.target}`)
//     }
//   }

// Principle 3

// code example for New Binding
function Assassin(name, type, target) {
	this.name = name;
	this.type = type;
	this.target = target;
	this.kill = function() {
		return `${this.name} assassinated the ${this.target}`;
	};
}

const assassin1 = new Assassin('snipey', "'Sniper", 'P.O.T.U.S');
console.log(assassin1.kill());
// Principle 4

// code example for Explicit BindingA
const assassin2 = new Assassin('Black Shadow', 'Ninja', 'The Emperor');

const skills = [ 'Hand to hand combat', 'Edged Weapons', 'Not Knowing what else to type', 'stuff', 'things' ];

function jobsearch(skills) {
	console.log(`I am known as ${this.name}, I am an assassin skilled in the arts of ${skills.join(', ')}`);
}
jobsearch.call(assassin1, skills);
