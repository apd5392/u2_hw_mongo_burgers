// create 5 burgers (at least 3 should be beef)

db.burgers.insertMany([{name: 'CheeseBurger', protein: 'Beef', cheese: 'Yes', toppings: ['lettuce','tomato','pickles','onions']}, 
{name: 'Burger', protein: 'Beef', cheese: 'Yes', toppings: ['lettuce','tomato','pickles','onions']}, 
{name: 'TurkeyBurger', protein: 'Turkey', cheese: 'Yes', toppings: ['lettuce','tomato','pickles','onions']},
{name: 'DoubleCheeseBurger', protein: 'Beef', cheese: 'Yes', toppings: ['lettuce','tomato','pickles','onions']},
{name: 'BeyondBurger', protein: 'Veggie', cheese: 'Yes', toppings: ['lettuce','tomato','pickles','onions']}])

// find all the burgers

db.burgers.find({})

// show just the meat of each burger

db.burgers.find({}, {protein: 1})

// show just the toppings of each burger

db.burgers.find({}, {toppings: 1})

// show everything but the cheese

db.burgers.find({}, {cheese: 0})

// find all the burgers with beef

db.burgers.find({protein:'Beef'})

// find all the burgers that are not beef

db.burgers.find({protein: {$ne: 'Beef'}})

// find the first burger with cheese

db.burgers.findOne({cheese:'Yes'})

// find one and update the first burger with cheese to have a property of 'double cheese'

db.burgers.updateOne( {cheese:'Yes'}, {$set: {cheese:'No', DoubleCheese:'Yes'}})

// find the burger you updated to have double cheese

db.burgers.find({DoubleCheese:'Yes'})

// find and update all the beef burgers to be 'veggie'

db.burgers.updateMany({protein:'Beef'}, {$set: {protein: 'Veggie'}})

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

db.burgers.deleteOne( {protein: 'Veggie'})

// drop the collection
//Expected Output
//true

db.burgers.drop()

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }

db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database

// Change the name of the key cheese to 'pumpkinSpice'

// find all the burgers with ketchup (or another topping you used at least once)

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 