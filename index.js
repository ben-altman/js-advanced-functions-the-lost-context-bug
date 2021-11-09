let configuration = {
  frontContent: "Happy Birthday, Odin One-Eye!",
  insideContent: "From Asgard to Nifelheim, you're the best all-father ever.\n\nLove,",
  closing: {
      "Thor": "Admiration, respect, and love",
      "Loki": "Your son"
  },
  signatories: [
      "Thor",
      "Loki"
  ]
}

//Solution 3: Use an Arrow Function Expression to create a function without its own context.
let printCard = function() {
  console.log(this.frontContent)
  console.log(this.insideContent)
  // Wow! Elegant! And notice the arrow function's `this` is the same
  // this that printCard has by virtue of configuration being passed
  // in as a thisArg
  this.signatories.forEach(s => console.log(`${this.closing[s]}, ${s}`)
  )
}

//Solution 1: using thisArg with forEach: 
/*
let printCard = function() {
  console.log(this.frontContent)
  console.log(this.insideContent)

  this.signatories.forEach(function(signatory){
      let message = `${this.closing[signatory]}, ${signatory}`
      console.log(message)
  }, this) //In the call to forEach, we tell it to use (for its own context) the context that printCard has as printCard's this.
}
*/

//Solution 2. use a Closure to regain access to lost context
/*
let printCard = function() {
  console.log(this.frontContent)
  console.log(this.insideContent)

  let outerContext = this

  this.signatories.forEach(function(signatory){
      let message = `${outerContext.closing[signatory]}, ${signatory}`
      console.log(message)
  })
}
*/

printCard.call(configuration)