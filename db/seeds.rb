# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

game1 = Game.create(name: "Dota 2", image_url: "https://upload.wikimedia.org/wikipedia/en/3/31/Dota_2_Steam_artwork.jpg", genre: ["Multiplayer", "PVP", "Strategy"]) 
game2 = Game.create(name: "Minecraft", image_url: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png", genre: ["Multiplayer", "Adventure", "Sandbox"] )
game3 = Game.create(name: "World of Warcraft", image_url:"https://upload.wikimedia.org/wikipedia/en/6/65/World_of_Warcraft.png", genre: ["Multiplayer", "MMO", "Adventure"])
game4 = Game.create(name: "Skyrim", image_url: "https://upload.wikimedia.org/wikipedia/en/1/15/The_Elder_Scrolls_V_Skyrim_cover.png", genre: ["Singleplayer", "Adventure", "Action"])
game5 = Game.create(name: "Timberborn", image_url: "https://cdn.akamai.steamstatic.com/steam/apps/1062090/header.jpg?t=1698941902", genre: ["Singleplayer", "Strategy", "Puzzle"])
game6 = Game.create(name: "Valorant", image_url: "https://m.media-amazon.com/images/M/MV5BNmNhM2NjMTgtNmIyZC00ZmVjLTk4YWItZmZjNGY2NThiNDhkXkEyXkFqcGdeQXVyODU4MDU1NjU@._V1_FMjpg_UX1000_.jpg", genre: ["Multiplayer", "PVP", "Action"])
game7 = Game.create(name: "Stardew Valley", image_url: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png", genre: ["Singleplayer", "Indie", "Simulation"])

games = [game1, game2, game3, game4, game5, game6, game7]

user1 = User.create(username: "teapot", password: "pass121")
user2 = User.create(username: "blank", password: "pass122")
user3 = User.create(username: "vao", password: "pass123")
user4 = User.create(username: "faker", password: "pass124")
user5 = User.create(username: "fred", password: "pass125")

users = [user1, user2, user3, user4, user5]

review1 = Review.create(user_id: user1.id, game_id: game1.id, review_text: "Super enjoyable, love the graphics!", rating: 8)
review2 = Review.create(user_id: user2.id, game_id: game1.id, review_text: "I played this game over and over, never got bored", rating: 10)
review3 = Review.create(user_id: user3.id, game_id: game2.id, review_text: "Hated it, I wish I could get my time back.", rating: 1)
review4 = Review.create(user_id: user4.id, game_id: game2.id, review_text: "It was certainly a game?", rating: 4)
review5 = Review.create(user_id: user5.id, game_id: game3.id, review_text: "I recommned this game to all my friends, I loved it!", rating: 10)
review6 = Review.create(user_id: user1.id, game_id: game3.id, review_text: "Been looking for more games like this, glad I found it!", rating: 8)
review7 = Review.create(user_id: user2.id, game_id: game4.id, review_text: "I couldn't get more than 2 hours into this game.", rating: 2)
review8 = Review.create(user_id: user3.id, game_id: game4.id, review_text: "The graphics made this hard to play.", rating: 3)
review9 = Review.create(user_id: user4.id, game_id: game5.id, review_text: "I loved this game so much!", rating: 9)
review10 = Review.create(user_id: user5.id, game_id: game5.id, review_text: "My friends and I play this all the time, love it!", rating: 10)
review11 = Review.create(user_id: user1.id, game_id: game6.id, review_text: "Great game to sit back and relax to.", rating: 10)
review12 = Review.create(user_id: user2.id, game_id: game6.id, review_text: "Highly recommend!", rating: 10)
review13 = Review.create(user_id: user3.id, game_id: game7.id, review_text: "I wish the devs put more time into this before they released it.", rating: 4)
review14 = Review.create(user_id: user4.id, game_id: game7.id, review_text: "The main character annoyed me so much, I couldn't get past the first hour", rating: 1)
review15 = Review.create(user_id: user5.id, game_id: game1.id, review_text: "Needs more gameplay!", rating: 7)
review16 = Review.create(user_id: user1.id, game_id: game2.id, review_text: "I'm suprised more people don't know about this game, its so fun!", rating: 9)
review17 = Review.create(user_id: user2.id, game_id: game3.id, review_text: "This was one of the games of all time.", rating: 6)
review18 = Review.create(user_id: user3.id, game_id: game5.id, review_text: "It was.... acceptable?", rating: 5)
review19 = Review.create(user_id: user4.id, game_id: game6.id, review_text: "Good, so fun!", rating: 8)
review20 = Review.create(user_id: user5.id, game_id: game6.id, review_text: "Only giving it a 1 because there wasn't an option for a 0.", rating: 1)

puts "✍🏻🗒️ DB seeded!"



