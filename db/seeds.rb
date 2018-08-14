# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Area.destroy_all
KnittingTime.destroy_all
KnittingTimeEnrollment.destroy_all

user1 = User.create(username: 'Maria', email: 'maria@maria.com', password: '12345678')
user2 = User.create(username: 'Johana', email: 'johana@johana.com', password: '12345678')
user3 = User.create(username: 'Andres', email: 'andres@andres.com', password: '12345678')
user4 = User.create(username: 'Catalina', email: 'cata@cata.com', password: '12345678')
user5 = User.create(username: 'Stranger', email: 'stranger@ss.com', password: '12345678')
user6 = User.create(username: 'Marc', email: 'marc@marc.com', password: '12345678')
user7 = User.create(username: 'Sam', email: 'sam@sam.com', password: '12345678')
user8 = User.create(username: 'john', email: 'john@john.com', password: '12345678')
user9 = User.create(username: 'Lily', email: 'lily@lily.com', password: '12345678')
user10 = User.create(username: 'Tom', email: 'tom@tom.com', password: '12345678')

area1 = Area.create(name: 'SF / BAY AREA')
area2 = Area.create(name: 'NAIROBI')
area3 = Area.create(name: 'PARIS')
area4 = Area.create(name: 'BERLIN')
area5 = Area.create(name: 'TORONTO')

knittingtime1 = KnittingTime.create(date: '2018-08-31', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

knittingtime1 = KnittingTime.create(date: '2018-09-08', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

knittingtime2 = KnittingTime.create(date: '2018-08-21', start_time: '6 PM', end_time: '8 PM', address_1: '38 Frontenac Ave' , city: 'North York' , state: 'ON', zip: 'M5N 1Z7', area_id: area5.id , host_id: user4.id, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

knittingtime3 = KnittingTime.create(date: '2018-08-20', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

enrollment1 = KnittingTimeEnrollment.create(user_id: user1.id, knittingtime_id: knittingtime1.id)
enrollment2 = KnittingTimeEnrollment.create(user_id: user2.id, knittingtime_id: knittingtime1.id)
enrollment3 = KnittingTimeEnrollment.create(user_id: user3.id, knittingtime_id: knittingtime1.id)
enrollment4 = KnittingTimeEnrollment.create(user_id: user5.id, knittingtime_id: knittingtime1.id)
enrollment5 = KnittingTimeEnrollment.create(user_id: user6.id, knittingtime_id: knittingtime1.id)
enrollment6 = KnittingTimeEnrollment.create(user_id: user4.id, knittingtime_id: knittingtime2.id)
enrollment7 = KnittingTimeEnrollment.create(user_id: user7.id, knittingtime_id: knittingtime2.id)
enrollment8 = KnittingTimeEnrollment.create(user_id: user8.id, knittingtime_id: knittingtime2.id)
enrollment9 = KnittingTimeEnrollment.create(user_id: user9.id, knittingtime_id: knittingtime3.id)
enrollment10 = KnittingTimeEnrollment.create(user_id: user10.id, knittingtime_id: knittingtime3.id)
enrollment11 = KnittingTimeEnrollment.create(user_id: user2.id, knittingtime_id: knittingtime3.id)
