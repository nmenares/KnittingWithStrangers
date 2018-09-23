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

user1 = User.create(username: 'Maria', email: 'maria@maria.com', password: '12345678', quote:"We are because they were." , description: "I'm often that guy having way too much fun for his own good. If you say, “Let’s go [Insert fun opportunity],” I’ll almost always say, 'yes.' In college, this led to a lot of all-nighters and in the real world well, not much has changed. Homework can always wait, so how about we get some tea while knitting?" , story: "My life story is not super interesting, so I’ll just say my story is an amalgamation of the conversations and stories I’ve had and heard from others. This includes the conversations I’ve had with myself (which might happen more often than sanity would permit). I’ve gone from the non-stop talking kid (who sat in a lawn chair talking at my neighbor for hours while he gardened) to a more quiet (read: still not fully quiet) adult. Today, I spend more of that time talking at my notebook. I am currently attending a university that takes me to a new city each semester (I’ve been to San Francisco, Seoul, and Hyderabad so far), so I have a few “travel stories” and love to find the small things that make one city, country, or culture different from others. Also, I use parentheses too often (sorry)")

file1 = File.open('app/assets/images/maria.jpg')
user1.photo.attach(io: file1, filename: 'maria.jpg')

user2 = User.create(username: 'Johana', email: 'johana@johana.com', password: '12345678', quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people. Eleanor Roosevelt", description: "I spent a year traveling around the world and I learned so much from people I would not meet under normal circumstances. I found that at the core we are all the same; we want purpose and for our lives to have an impact on those around us. I love helping others make those connections to help other people see that person for who they are.", story: "Born and raised in the midwest I recently moved to San Francisco to be closer to the outdoors. The one thing I am most proud of about myself is my love of learning. While living in San Francisco I took 22 individual classes over a year and a half. I have found that learning helps me grow in ways I never expected and I have identified what I really value. My one main goal is to work/travel around the world and I love communities like TWS because it helps you feel more connected.")

file2 = File.open('app/assets/images/johana.jpg')
user2.photo.attach(io: file2, filename: 'johana.jpg')

user3 = User.create(username: 'Andres', email: 'andres@andres.com', password: '12345678', quote: "Tag! You're it!", description: "Science aficionado. Antarctica traveler. @Columbiajourn @UCberkeley @UniofOxford Co-founder of @DiverseSources", story: "I’m a freelance science/health/environment journalist in Westchester, CA. who speaks Spanish conversationally. I love long walks in the rainforest, 9-hour bus rides and high-altitude hikes.Freelance journalist.")

file3 = File.open('app/assets/images/andres.jpg')
user3.photo.attach(io: file3, filename: 'andres.jpg')

user4 = User.create(username: 'Catalina', email: 'cata@cata.com', password: '12345678', quote: "Stop! It's knit o' clock!", description: "Are you curious about discovering the amazing people out there you haven’t met yet? In a busy city like ours, it’s easy to miss the very people around us. Stop wondering about how much we don’t know about the people we pass by. Let's meet up for knitting instead and share our stories! We won’t be strangers for long!", story: "I’m Catalina, a LA girl - born and bred! I spend a lot of time doing creative projects and exploring the city. If I’m not on a photography shoot, you can find me salsa dancing, exploring a park, or playing tennis. True to anyone with a city sensibility, homebody is a tendency I do not have! I enjoy meeting people from different walks of life and discovering their quirks that make them unique. It’s part of my philosophy that we should connect with the people around us and so I put in the effort to humanize my daily interactions with the people I pass by. I used to live in England, which you might hear me reminisce about a lot. On the other hand, I am a good listener, so tell me about you!")

file4 = File.open('app/assets/images/catalina.jpg')
user4.photo.attach(io: file4, filename: 'catalina.jpg')

user5 = User.create(username: 'Stranger', email: 'stranger@ss.com', password: '12345678', quote:"I honest to god believe in unicorns." , description: "Hey there! I’m passionate about learning as much as an can. Usually, that means learning about others and how they view the world and how all those views and their interactions create humanity. I love to ask questions that are at times a bit much for normal conversation so if you like answering questions about your own thinking, let’s knitting time! (Can I use that as a verb?)" , story: "I was in 7th grade when I figured out my hips don't lie. 70 bar mitzvahs in one year will do that to you. To keep things interesting, I learned to give no f**ks on the dance floor, get weird, and have the time of my life with friends and strangers. I got the yolo-itus and it has informed my journey wherever I go. As much as I love a good bar mitzvah, I’ve since diversified my sources of fun. You can find me kayaking in a harbor, meditating in a park, baking rosemary garlic bread, studying activism, or knitting with strangers! If I’ve learned anything, though, it's that great fun doesn't happen without great people!")

file5 = File.open('app/assets/images/stranger.jpg')
user5.photo.attach(io: file5, filename: 'stranger.jpg')

user6 = User.create(username: 'Marc', email: 'marc@marc.com', password: '12345678', quote: "Robert Brault — 'Optimist: Someone who figures that taking a step backward after taking a step forward is not a disaster, it's a cha-cha.", description: "Hey! I find humans fascinating, in groups even more so and it's just lovelier with tea while knitting :)", story: "I'm the guy dancing hard in front of subway bands and singing along to songs while walking on the street. The best habit I've ever built is my ~daily meditation routine. I've been dabbling in Wim Hof style cold therapy and cold exposure and can rant about its benefits at the drop of a hat. Wolverine was my first inspiration to get into lifting and the Joker (as portrayed in Nolan's Dark Knight) was my first inspiration to move towards a minimalist lifestyle. I make stick figure comics every now and then. I'm gonna love meeting you.")

file6 = File.open('app/assets/images/marc.jpg')
user6.photo.attach(io: file6, filename: 'marc.jpg')

user7 = User.create(username: 'Sam', email: 'sam@sam.com', password: '12345678', quote: "Strange strangers or friendly friends?", description: "Sacramento sometimes feels like a city where people walk past each other, hurrying off to one of the hundred events happening that evening. Having meaningful, genuine conversations is sparse and at best, coincidental. I want to create the space for people to intentionally connect, share, inspire, and be inspired. Let's do this together, shall we?", story: "A recent story that provides some insight into me overall: After 6 years at a US investment management firm, I wanted to do something in the social impact space. To figure out what that was, I traveled to Kenya for 2 weeks to meet with social impact firms and generally learn about the industry. The conversations lead to more questions than answers. To get a closer look at what was going on, I decided to try out the products (clean water, energy, shelter, etc) these companies offered. I spent the following 6 months literally getting my hands dirty by building myself a house and farm with these 'best of' products. Side note... learn from my mistake and don't build a house out of trash despite how cool it may look on google. :p")

file7 = File.open('app/assets/images/sam.jpg')
user7.photo.attach(io: file7, filename: 'sam.jpg')

user8 = User.create(username: 'John', email: 'john@john.com', password: '12345678', quote: "Let's live to not just survive, but thrive!", description: "Tell me, would you like to enjoy two hours of conversation while knitting, among great people? Of course you would! It's amazing! Get ready to step a little out of your comfort zone and meet people who will not stay strangers for long. We'll share and listen to others' experiences, ideas and jokes, and have a great time. See you soon!", story: "I was born in France with the gift of pathological curiosity. My favourite question has always been 'why'. When I was 4, I would randomly ask strangers on the bus why they were sulking or any other embarrassing questions. I love understanding how things work including humans...which lead me to study medicine for a couple of years before switching to psychology (amongst other things). In my free time, I do a lot of cooking, experimenting with holistic practices and natural remedies, reading, journaling, and anything involving being outdoors and/or active. I never say no to trying new things so naturally travelling is important to me. Your turn :-)")

file8 = File.open('app/assets/images/john.jpg')
user8.photo.attach(io: file8, filename: 'john.jpg')

user9 = User.create(username: 'Lily', email: 'lily@lily.com', password: '12345678')
user10 = User.create(username: 'Tom', email: 'tom@tom.com', password: '12345678')
user11 = User.create(username: 'Rosa', email: 'rosa@rosa.com', password: '12345678')
user12 = User.create(username: 'Jasmin', email: 'jasmin@jasmin.com', password: '12345678')
user13 = User.create(username: 'Bernardo', email: 'bernardo@bernardo.com', password: '12345678')
user14 = User.create(username: 'Michael', email: 'michael@michael.com', password: '12345678')
user15 = User.create(username: 'Sonia', email: 'sonia@sonia.com', password: '12345678')
user16 = User.create(username: 'Chi', email: 'chi@chi.com', password: '12345678')
user17 = User.create(username: 'Jing', email: 'jing@jing.com', password: '12345678')
user18 = User.create(username: 'Paul', email: 'paul@paul.com', password: '12345678')
user19 = User.create(username: 'Ashley', email: 'ashley@ashley.com', password: '12345678')
user20 = User.create(username: 'Alicia', email: 'alicia@alicia.com', password: '12345678')
user21 = User.create(username: 'Tina', email: 'tina@tina.com', password: '12345678')
user22 = User.create(username: 'Thomas', email: 'thomas@thomas.com', password: '12345678')
user23 = User.create(username: 'Claudia', email: 'claudia@claudia.com', password: '12345678')
user24 = User.create(username: 'Pedro', email: 'pedro@pedro.com', password: '12345678')
user25 = User.create(username: 'Lidia', email: 'lidia@lidia.com', password: '12345678')
user26 = User.create(username: 'Wendy', email: 'wendy@wendy.com', password: '12345678')
user27 = User.create(username: 'Olivia', email: 'olivia@olivia.com', password: '12345678')
user28 = User.create(username: 'Gaston', email: 'gaston@gaston.com', password: '12345678')
user29 = User.create(username: 'Billy', email: 'billy@billy.com', password: '12345678')
user30 = User.create(username: 'Kimberly', email: 'kimberly@kimberly.com', password: '12345678')
user31 = User.create(username: 'Lisa', email: 'lisa@lisa.com', password: '12345678')
user32 = User.create(username: 'Lulu', email: 'lulu@lulu.com', password: '12345678')
user33 = User.create(username: 'Kelly', email: 'kelly@kelly.com', password: '12345678')

area1 = Area.create(name: 'SF / BAY AREA')
area2 = Area.create(name: 'LOS ANGELES')
area3 = Area.create(name: 'SAN DIEGO')
area4 = Area.create(name: 'SACRAMENTO')
area5 = Area.create(name: 'RIVERSIDE')
area6 = Area.create(name: 'NAPA VALLEY')
area7 = Area.create(name: 'SAN JOAQUIN VALLEY')

knittingtime1 = KnittingTime.create(date: '2018-09-30', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id, description: "Coincidences, future, connections, lost & found, dreams interpretation, challenges, secrets, tips on how to behave-survive in a big city, events, theatre, inspiring people, family mania, friends craziness and more…")

knittingtime2 = KnittingTime.create(date: '2018-09-26', start_time: '5 PM', end_time: '7 PM', address_1: '940 Filbert St' , city: 'San Francisco', state: 'CA', zip:'94133', area_id: area1.id, host_id: user2.id, description: "Spread your knowledge! Teach me something new you learned today or something you're super passionate about. Let's have a debate about politics or about why cheesy snacks are better in the US than in the UK. Nothing's off the table, except the weather or which public transit route you took to get here.")

knittingtime3 = KnittingTime.create(date: '2018-10-01', start_time: '6 PM', end_time: '8 PM', address_1: '8645 S Sepulveda Blvd' , city: 'Westchester' , state: 'CA', zip: '90045', area_id: area2.id , host_id: user3.id, description: "We can talk about life, cats, animals, startups, technology, tea, coffee, music, art, programming, web design, the best way to cook vegetables, great events in London, famous people, interesting people, people I still have to meet, art exhibitions, happy things, sad things, learning italiano, other planets and far-away galaxies.")

knittingtime4 = KnittingTime.create(date: '2018-09-28', start_time: '1 PM', end_time: '3 PM', address_1: '2316 Camden Ave' , city: 'Los Angeles' , state: 'CA', zip: '90064', area_id: area2.id , host_id: user4.id, description: "Photography, DDR, Literally anything gaming related, COD4, Hot Sauces, Go-To Recipes, Music Playlists (exercising especially), Passions, A.I., Media Recommendations, DIY projects, Handball, Tea, Online Articles, Board Games, the Oxford Comma Debate, Personal Goals, Subreddits, YouTube Channels, UBI, “Deep” questions, Favorite Exercises (DEADLIFT FTW), Cultures, Quirks, Upcoming trips, Upcoming Challenges, Mental health, Uplifting news...AND MORE!")

knittingtime5 = KnittingTime.create(date: '2018-09-10', start_time: '3 PM', end_time: '5 PM', address_1: '5218 Javier St' , city: 'San Diego' , state: 'CA', zip: '92117', area_id: area3.id , host_id: user5.id, description: "Whatever you want! Missed connections, food inspiration, hidden talents, random observations, rogue family members, the best city spots, everyday challenges, your quirks, lifestyle, art house cinema, adventures, stories from your travels, failed attempts, events, random trivia, Toronto street style, books you've read, my love of salsa dancing, our goals and dreams, your childhood best friend, and of course your deepest secrets ;). Or none of these. There’s almost no topic or theme that’s off the table!")

knittingtime6 = KnittingTime.create(date: '2018-10-10', start_time: '6 PM', end_time: '8 PM', address_1: '816 22nd St' , city: 'Sacramento' , state: 'CA', zip: '95816', area_id: area4.id , host_id: user7.id, description: "Currently, I am super interested in how people interact with the relationships (friendships, romantic relationships, relationships with relatives etc) in their lives, so I might ask you questions like: what’s been the most influential relationship you’ve had? How do you determine what a good relationship is for yourself? (remember what I said about questions that are maybe a bit too much for normal conversation?)
Really, I’m game to talk about anything (especially things that have no answer and are difficult to understand) so please come with all the questions you’ve ever wanted to ask a stranger and all the things you ever wanted to share.
(Otherwise, I’m not the best at small talk, so if you reaaaallly wanted to talk about the weather, I’m sure I could use some practice…)
See ya!")

knittingtime7 = KnittingTime.create(date: '2018-09-29', start_time: '5 PM', end_time: '6 PM', address_1: '21st St' , city: 'Sacramento' , state: 'CA', zip: '95811', area_id: area4.id , host_id: user8.id, description: "I love talk about travel, good books and passion projects individuals might be working on. I am also an introvert and enjoy learning from others how to cut through the small talk.")

knittingtime8 = KnittingTime.create(date: '2018-09-30', start_time: '10 PM', end_time: '12 PM', address_1: '5000 Toronto Way' , city: 'Sacramento' , state: 'CA', zip: '95820', area_id: area4.id , host_id: user6.id, description: "Values. Not like 'I value honesty / integrity / justice.' More like stories that are a reflection of our values, who we truly are and who we aspire to be. Values aside, we could probably get into any of the following as well: Buddy the Elf / salsa dancing / best places to surf & climb / thought-provoking books & documentaries / animosity towards Microsoft Office / travel adventures / when things go wrong (i.e. that time I was very alone in a dark alley in a coastal Kenyan town) / when things go right (that time in that dark alley when a gang of teen-aged strangers helped me find my way home) / matzo ball soup.")

knittingtime9 = KnittingTime.create(date: '2018-09-10', start_time: '5 PM', end_time: '7 PM', address_1: '825 Battery Street' , city: 'San Francisco', state: 'CA', zip:'94111', area_id: area1.id, host_id: user1.id, description: "Coincidences, future, connections, lost & found, dreams interpretation, challenges, secrets, tips on how to behave-survive in a big city, events, theatre, inspiring people, family mania, friends craziness and more…")

knittingtime10 = KnittingTime.create(date: '2018-09-09', start_time: '3 PM', end_time: '5 PM', address_1: '5218 Javier St' , city: 'San Diego' , state: 'CA', zip: '92117', area_id: area3.id , host_id: user5.id, description: "Whatever you want! Missed connections, food inspiration, hidden talents, random observations, rogue family members, the best city spots, everyday challenges, your quirks, lifestyle, art house cinema, adventures, stories from your travels, failed attempts, events, random trivia, Toronto street style, books you've read, my love of salsa dancing, our goals and dreams, your childhood best friend, and of course your deepest secrets ;). Or none of these. There’s almost no topic or theme that’s off the table!")

enrollment1 = KnittingTimeEnrollment.create(user_id: user9.id, knittingtime_id: knittingtime1.id, going: true)
enrollment2 = KnittingTimeEnrollment.create(user_id: user10.id, knittingtime_id: knittingtime1.id, going: true)
enrollment3 = KnittingTimeEnrollment.create(user_id: user11.id, knittingtime_id: knittingtime1.id, going: true)
enrollment4 = KnittingTimeEnrollment.create(user_id: user12.id, knittingtime_id: knittingtime1.id, going: true)
enrollment5 = KnittingTimeEnrollment.create(user_id: user13.id, knittingtime_id: knittingtime1.id, going: true)

enrollment6 = KnittingTimeEnrollment.create(user_id: user14.id, knittingtime_id: knittingtime2.id, going: true)
enrollment7 = KnittingTimeEnrollment.create(user_id: user15.id, knittingtime_id: knittingtime2.id, going: true)
enrollment8 = KnittingTimeEnrollment.create(user_id: user16.id, knittingtime_id: knittingtime2.id, going: true)

enrollment9 = KnittingTimeEnrollment.create(user_id: user17.id, knittingtime_id: knittingtime3.id, going: true)
enrollment10 = KnittingTimeEnrollment.create(user_id: user18.id, knittingtime_id: knittingtime3.id, going: true)
enrollment11 = KnittingTimeEnrollment.create(user_id: user19.id, knittingtime_id: knittingtime3.id, going: true)
enrollment12 = KnittingTimeEnrollment.create(user_id: user20.id, knittingtime_id: knittingtime3.id, going: true)

enrollment13 = KnittingTimeEnrollment.create(user_id: user21.id, knittingtime_id: knittingtime4.id, going: true)
enrollment14 = KnittingTimeEnrollment.create(user_id: user22.id, knittingtime_id: knittingtime4.id, going: true)
enrollment15 = KnittingTimeEnrollment.create(user_id: user23.id, knittingtime_id: knittingtime4.id, going: true)
enrollment16 = KnittingTimeEnrollment.create(user_id: user24.id, knittingtime_id: knittingtime4.id, going: true)
enrollment17 = KnittingTimeEnrollment.create(user_id: user25.id, knittingtime_id: knittingtime4.id, going: true)
enrollment17 = KnittingTimeEnrollment.create(user_id: user5.id, knittingtime_id: knittingtime4.id, going: false)

enrollment18 = KnittingTimeEnrollment.create(user_id: user26.id, knittingtime_id: knittingtime5.id, going: true)
enrollment19 = KnittingTimeEnrollment.create(user_id: user27.id, knittingtime_id: knittingtime5.id, going: true)

enrollment20 = KnittingTimeEnrollment.create(user_id: user28.id, knittingtime_id: knittingtime6.id, going: true)
enrollment21 = KnittingTimeEnrollment.create(user_id: user29.id, knittingtime_id: knittingtime6.id, going: true)

enrollment22 = KnittingTimeEnrollment.create(user_id: user30.id, knittingtime_id: knittingtime7.id, going: true)
enrollment23 = KnittingTimeEnrollment.create(user_id: user31.id, knittingtime_id: knittingtime7.id, going: true)
enrollment24 = KnittingTimeEnrollment.create(user_id: user32.id, knittingtime_id: knittingtime7.id, going: true)

enrollment25 = KnittingTimeEnrollment.create(user_id: user33.id, knittingtime_id: knittingtime8.id, going: true)
enrollment26 = KnittingTimeEnrollment.create(user_id: user5.id, knittingtime_id: knittingtime8.id, going: true)

enrollment27 = KnittingTimeEnrollment.create(user_id: user5.id, knittingtime_id: knittingtime9.id, going: true)
enrollment28 = KnittingTimeEnrollment.create(user_id: user10.id, knittingtime_id: knittingtime9.id, going: true)
enrollment29 = KnittingTimeEnrollment.create(user_id: user11.id, knittingtime_id: knittingtime9.id, going: true)
enrollment30 = KnittingTimeEnrollment.create(user_id: user12.id, knittingtime_id: knittingtime9.id, going: true)
enrollment31 = KnittingTimeEnrollment.create(user_id: user13.id, knittingtime_id: knittingtime9.id, going: true)
