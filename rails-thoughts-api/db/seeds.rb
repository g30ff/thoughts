# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
Category.delete_all
Thought.delete_all
user1 = User.create(
  {
    username: "g_off",
    email:    'g@h.com',
    password_digest: 'password'
  })
  user2 = User.create(
  {
    username: "Bill",
    email:    'bill@bill.com',
    password_digest: 'password'
  }
)


category1 = Category.create({
    "title": "General",
    "user": user1
})
category2 = Category.create({
    "title": "Geoff\'s Category",
    "user": user1
})

thought1 = Thought.create({
    "title": "Did I do this right?",
    "thought": "Test migrations",
    "active": true,
    "category": category1
})
thought2 = Thought.create({
    "title": "",
    "thought": "Did I related the models correctly?",
    "active": true,
    "category": category2
})
thought3 = Thought.create({
    "title": "seeding",
    "thought": "Did I seed the db correctly?",
    "active": true,
    "category": category2
})
thought4 = Thought.create({
    "title": "Excellent Thought!!",
    "thought": "I think create works!",
    "active": true,
    "category": category2
})
