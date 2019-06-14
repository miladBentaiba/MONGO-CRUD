
//Create a database called "contact"
//use contact;
conn = new Mongo();
db = conn.getDB("contact");

/*
  Create a collection called "contactlist"
  Insert 3 persons in "contactlist" :
    Last name: Ben Lahmer, First name: Fares, Email: fares@gmail.com,   age:26
    Last name: Kefi,       First name: Seif,  Email: kefi@gmail.com,    age:15
    Last name: Fatnassi,   First name: Sarra, Email: sarra.f@gmail.com, age:40
    Last name: Ben Yahia,  First name: Rym,                             age:4
    Last name: Cherif,     First name: Sami,                            age:3
*/
db.contactlist.insertMany([
  {lastname: 'Ben Lahmer', firstname: 'Fares', email: 'fares@gmail.com', age: 26},
  {lastname: 'Kefi', firstname: 'Seif', email: 'kefi@gmail.com', age: 15},
  {lastname: 'Fatnassi', firstname: 'Sarra', email: 'sarra.f@gmail.com', age: 40},
  {lastname: 'Ben Yahia', firstname: 'Rym', age: 4},
  {lastname: 'Cherif', firstname: 'Sami', age: 3},
]);

// Display all the contact list
db.contactlist.find().pretty();

// Display all the information about only one person using his id
db.contactlist.find({"_id": ObjectId("5d039026e126c07752f55cc3")}).pretty();

// Display all the contact list having age>18
db.contactlist.find({age:{$gt: 18}}).pretty();

// Display all the contact list having age>18 and name containing "ah"
db.contactlist.find({$and: [{age:{$gt: 18}}, {lastname: {$regex: /ah/}}]}).pretty();

// Change the contact first name of "kefi Seif" by "Kefi Anis"
db.contactlist.updateOne({$and:[{lastname: 'Kefi'}, {firstname: 'Seif'}]}, {$set:{firstname: 'Anis'}});

// Delete the the contact list having age < 5
db.contactlist.remove({age:{$lt: 5}});

// Display all the contact list
db.contactlist.find().pretty();
