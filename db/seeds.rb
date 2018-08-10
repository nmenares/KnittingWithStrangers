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

user1 = User.create(username: 'Maria', email: 'maria@maria.com', password: '12345678')
user2 =User.create(username: 'Johana', email: 'johana@johana.com', password: '12345678')
user3 =User.create(username: 'Andres', email: 'andres@andres.com', password: '12345678')
user4 =User.create(username: 'Catalina', email: 'cata@cata.com', password: '12345678')
user5 =User.create(username: 'StrangerSpider', email: 'stranger.spider@ss.com', password: '12345678')

area1 = Area.create(name: 'SF / BAY AREA')
area2 = Area.create(name: 'NAIROBI')
area3 = Area.create(name: 'PARIS')
area4 = Area.create(name: 'BERLIN')
area5 = Area.create(name: 'TORONTO')

KnittingTime.create(date: '2018-08-08' , start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id )

KnittingTime.create(date: '2018-08-12', start_time: '6 PM', end_time: '8 PM', address_1: '38 Frontenac Ave' , city: 'North York' , state: 'ON', zip: 'M5N 1Z7', area_id: area5.id , host_id: user4.id )
KnittingTime.create(date: '2018-08-20', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id )
