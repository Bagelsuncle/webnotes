import React, { useState } from "react";

const ExperimentingContainer = () => {
  // Arrays for each category
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "Did you hear about the cheese factory that exploded? There was nothing left but de-brie.",
    "What do you call a bear with no teeth? A gummy bear!",
    "I'm on a whiskey diet. I've lost three days already.",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why do seagulls fly over the ocean? Because if they flew over the bay, they'd be bagels!",
    "What do you call a fish with no eyes? Fsh!",
    "Why don't programmers like nature? It has too many bugs.",
    "How do you organize a space party? You planet!",
    "What did the grape do when it got stepped on? Nothing but let out a little wine.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What's orange and sounds like a parrot? A carrot!",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "Why was the math book sad? Because it had too many problems.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why are ghosts bad liars? Because you can see right through them!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "What do you call a dinosaur with a great vocabulary? A thesaurus.",
    "Why was the computer cold? It left its Windows open.",
    "How do you make a tissue dance? Put a little boogie in it!",
    "Why don't eggs tell jokes? They might crack up!",
    "What did the buffalo say to his son when he left for college? Bison!",
    "Why did the coffee file a police report? It got mugged!",
    "How does a scientist freshen her breath? With experi-mints!",
    "Why don't skeletons ever go trick or treating? Because they have no body to go with.",
    "Why did the stadium get hot after the game? All of the fans left.",
    "How does the moon cut its hair? Eclipse it.",
    "Why are pirates called pirates? Because they arrrrr!",
    "What do you call an alligator in a vest? An investigator.",
    "Why was the broom late? It swept in.",
    "Why do ducks have feathers? To cover their butt quacks.",
    "What's a skeleton's least favorite room in the house? The living room.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
    "What do you call a fake noodle? An impasta!",
    "Why did the gym close down? It just didn't work out.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "Why was the math book sad? It had too many problems.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What did the janitor say when he jumped out of the closet? Supplies!",
    "Why are fish so smart? Because they live in schools.",
    "What do you call cheese that isn't yours? Nacho cheese!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "How do you organize a space party? You planet!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why was the math book sad? Because it had too many problems.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the cookie go to the doctor? Because it was feeling crummy.",
    "Why can't you trust an atom? Because they make up everything!",
    "Why did the tomato blush? Because it saw the salad dressing!",
    "What do you call a group of musical whales? An orca-stra.",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call an alligator in a vest? An investigator.",
    "What do you call a fake noodle? An impasta!",
    "How does a penguin build its house? Igloos it together!",
    "Why don't some couples go to the gym? Because some relationships don't work out.",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "How do you organize a space party? You planet!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Why did the coffee file a police report? It got mugged!",
    "Why are ghosts bad liars? Because you can see right through them!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why was the math book sad? Because it had too many problems.",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why can't you give Elsa a balloon? Because she will let it go.",
    "Why are ghosts bad liars? Because you can see right through them!",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "What do you call fake spaghetti? An impasta!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the physics teacher break up with the biology teacher? There was no chemistry.",
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the cookie go to the doctor? Because it was feeling crummy.",
    "Why don't eggs tell jokes? They might crack up!",
    "What did the buffalo say to his son when he left for college? Bison!",
    "Why did the coffee file a police report? It got mugged!",
    "How does a scientist freshen her breath? With experi-mints!",
    "Why don't skeletons ever go trick or treating? Because they have no body to go with.",
    "Why did the stadium get hot after the game? All of the fans left.",
    "How does the moon cut its hair? Eclipse it.",
    "Why are pirates called pirates? Because they arrrrr!",
    "What do you call an alligator in a vest? An investigator.",
    "Why was the broom late? It swept in.",
    "Why do ducks have feathers? To cover their butt quacks.",
    "What's a skeleton's least favorite room in the house? The living room.",
    "What do you call cheese that isn't yours? Nacho cheese!",
  ];

  const randomFacts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still edible.",
    "Bananas are berries, but strawberries are not.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "A jiffy is an actual unit of time: 1/100th of a second.",
    "Kangaroos can't walk backward.",
    "Humans share 50% of their DNA with bananas.",
    "The world's smallest mammal is the bumblebee bat, weighing less than a penny.",
    "The shortest war in history lasted 38 to 45 minutes between Britain and Zanzibar on August 27, 1896.",
    "A group of flamingos is called a 'flamboyance.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "The fingerprints of a koala are so indistinguishable from humans that they have on occasion been confused at a crime scene.",
    "The longest recorded flight of a chicken is 13 seconds.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "An eagle can kill a young deer and fly away with it.",
    "The oldest known living land animal is a tortoise named Jonathan, who was born in 1832.",
    "Blue whales are the largest animals ever to have lived on Earth.",
    "The lyrebird can mimic almost any sound it hears, including chainsaws.",
    "Cows have best friends and become stressed when separated.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896.",
    "The longest time between two twins being born is 87 days.",
    "The world’s deepest postbox is in Susami Bay, Japan. It’s 10 meters underwater.",
    "The largest snowflake ever recorded reportedly measured 15 inches across.",
    "The first computer was invented in the 1940s.",
    "Spiders are arachnids, not insects.",
    "The unicorn is the national animal of Scotland.",
    "The first airplane flew on December 17, 1903.",
    "Venus is the hottest planet in our solar system.",
    "The Great Wall of China is longer than the distance between London and Beijing.",
    "A baby octopus is about the size of a flea when it is born.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "The Eiffel Tower can be 15 cm taller during the summer.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
    "The heart of a shrimp is located in its head.",
    "Slugs have four noses.",
    "A snail can sleep for three years.",
    "Some cats are allergic to humans.",
    "The inventor of the microwave appliance received only $2 for his discovery.",
    "Bananas are curved because they grow towards the sun.",
    "Bees can fly higher than Mount Everest.",
    "The longest wedding veil was the same length as 63.5 football fields.",
    "The unicorn is the national animal of Scotland.",
    "The first computer was invented in the 1940s.",
    "Cows kill more people than sharks do.",
    "The inventor of the frisbee was turned into a frisbee after he died.",
    "A group of crows is called a 'murder.'",
  ];

  const fartFacts = [
    "Farts are mostly composed of nitrogen.",
    "The average person farts 14 times a day.",
    "The word 'fart' was first coined in 1632.",
    "A single fart can travel up to 10 feet.",
    "Farting helps reduce bloating.",
    "Termites are the biggest farters on the planet.",
    "Farts can reach speeds of 10 feet per second.",
    "Women fart just as much as men.",
    "The smell of farts is due to hydrogen sulfide.",
    "Farts can be ignited due to methane and hydrogen.",
    "The sound of a fart is produced by the vibration of the anal opening.",
    "Average humans produce enough flatulence in one day to fill a balloon.",
    "Herring fish communicate by farting.",
    "The oldest recorded joke in history is a fart joke from ancient Sumer.",
    "A fart is made up of 59% nitrogen, 21% hydrogen, 9% carbon dioxide, 7% methane, and 4% oxygen.",
    "The loudest fart ever recorded lasted for 2 minutes and 42 seconds.",
    "Some animals use farts as a defense mechanism.",
    "Certain foods like beans, broccoli, and carbonated drinks increase farting.",
    "There's a scientific study dedicated to the study of farts, called flatology.",
    "Farts are a normal part of digestion.",
    "The average speed of a fart leaving the body is 3 meters per second.",
    "People pass gas up to 20 times a day, depending on diet.",
    "Farts can be used to diagnose digestive issues.",
    "Some people have the ability to fart on command.",
    "Farting while sleeping is common and often goes unnoticed.",
    "In some cultures, farting is considered a compliment to the chef.",
    "Farts can vary in smell depending on diet and digestion.",
    "It is impossible to hold in a fart indefinitely.",
    "The temperature of a fart at the time of creation is 98.6 degrees Fahrenheit.",
    "Termites produce more methane through farts than cows do.",
    "A fart can travel as far as 10 feet.",
    "Farting is more common in the morning, a phenomenon known as 'morning thunder.'",
    "Flatulence is the medical term for farting.",
    "A fart can contain up to 25 different gases.",
    "The gas that makes farts smell bad is hydrogen sulfide.",
    "Farts are lighter than air, allowing them to rise.",
    "Certain medications can increase flatulence.",
    "The speed of sound in a fart is slower than in air.",
    "Farting can relieve abdominal pressure.",
    "In ancient Japan, fart battles were considered entertainment.",
    "Guinness World Records once listed a farting contest.",
    "The study of farts is called 'flatulology.'",
    "Some insects use farts to deter predators.",
    "Humans have been farting for millions of years.",
    "Farting is a sign of a healthy digestive system.",
    "The composition of a fart can vary from person to person.",
    "Holding in farts can cause discomfort and bloating.",
    "The average fart is composed of 59% nitrogen, 21% hydrogen, and other gases.",
    "Termites are the animals that fart the most.",
    "Humans have been making fart jokes for centuries.",
    "Farting can indicate proper digestion and metabolism.",
    "The world's oldest joke is a fart joke dating back to 1900 BC.",
    "The word 'fart' is considered vulgar in some cultures.",
    "Farting is a way for the body to release excess gas.",
    "Certain foods can increase the odor of farts.",
    "The sound of a fart is influenced by the shape of the rectum.",
    "Farting is a normal bodily function for humans and animals.",
    "Termites produce the most methane through farts.",
    "The smell of a fart is due to trace gases like hydrogen sulfide.",
    "Farting is more common after eating carbonated drinks.",
    "The average person produces enough gas to fill a balloon each day.",
    "Holding in farts can lead to stomach discomfort.",
    "Farting helps regulate the digestive system.",
    "Farts can vary in sound depending on the tightness of the anal sphincter.",
    "The first fart joke was recorded on a Sumerian tablet.",
    "Farts are primarily composed of nitrogen and hydrogen.",
    "The volume of a fart is determined by the speed of gas expulsion.",
    "The sound of a fart is caused by vibrations of the anal opening.",
    "Some animals use farts as a means of communication.",
    "Farting is a natural part of the digestive process.",
    "The average person farts enough each day to fill a small balloon.",
    "Farting can be a sign of a healthy diet and digestion.",
    "Certain foods, like beans and broccoli, increase flatulence.",
    "Farts can be silent or loud depending on gas pressure.",
    "The word 'fart' is derived from Old English.",
    "Farting can provide relief from bloating and discomfort.",
    "A fart is created when gas builds up in the digestive system.",
    "The temperature of a fart is roughly the same as body temperature.",
    "Farting is more common after eating certain foods.",
    "The speed of a fart can vary depending on gas pressure.",
    "The sound of a fart is caused by vibrations of the anal opening.",
    "Certain foods can increase the frequency of farting.",
    "Farting is a sign of a healthy gut microbiome.",
    "The composition of a fart can vary based on diet and digestion.",
    "Farts can be ignited due to the presence of methane.",
    "The sound of a fart is influenced by the shape of the rectum.",
    "Farting can indicate proper digestion and metabolism.",
    "The world's oldest joke is a fart joke dating back to 1900 BC.",
    "The word 'fart' is considered vulgar in some cultures.",
    "Farting is a way for the body to release excess gas.",
    "Certain foods can increase the odor of farts.",
    "The sound of a fart is influenced by the shape of the rectum.",
    "Farting is a normal bodily function for humans and animals.",
    "Termites produce the most methane through farts.",
    "The smell of a fart is due to trace gases like hydrogen sulfide.",
    "Farting is more common after eating carbonated drinks.",
    "The average person produces enough gas to fill a balloon each day.",
    "Holding in farts can lead to stomach discomfort.",
  ];

  const bibleQuotes = [
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "I can do all things through him who strengthens me. - Philippians 4:13",
    "Trust in the Lord with all your heart, and do not lean on your own understanding. - Proverbs 3:5",
    "In all your ways acknowledge him, and he will make straight your paths. - Proverbs 3:6",
    "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:31",
    "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
    "The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul. - Psalm 23:1-3",
    "The Lord bless you and keep you; the Lord make his face to shine upon you and be gracious to you; the Lord lift up his countenance upon you and give you peace. - Numbers 6:24-26",
    "And we know that for those who love God all things work together for good, for those who are called according to his purpose. - Romans 8:28",
    "For by grace you have been saved through faith. And this is not your own doing; it is the gift of God. - Ephesians 2:8",
    "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go. - Joshua 1:9",
    "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law. - Galatians 5:22-23",
    "Cast all your anxiety on him because he cares for you. - 1 Peter 5:7",
    "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
    "In the beginning, God created the heavens and the earth. - Genesis 1:1",
    "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7",
    "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. - Philippians 4:6",
    "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go. - Joshua 1:9",
    "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing. - Zephaniah 3:17",
    "For nothing will be impossible with God. - Luke 1:37",
    "But seek first the kingdom of God and his righteousness, and all these things will be added to you. - Matthew 6:33",
    "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness. - Lamentations 3:22-23",
    "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world. - John 16:33",
    "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord. - Romans 8:38-39",
    "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth! - Psalm 46:10",
    "The fear of the Lord is the beginning of wisdom, and the knowledge of the Holy One is insight. - Proverbs 9:10",
    "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint. - Isaiah 40:31",
    "In the beginning was the Word, and the Word was with God, and the Word was God. - John 1:1",
    "Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",
    "Finally, be strong in the Lord and in the strength of his might. - Ephesians 6:10",
    "Blessed are those who hunger and thirst for righteousness, for they shall be satisfied. - Matthew 5:6",
    "The Lord is my strength and my shield; in him my heart trusts, and I am helped; my heart exults, and with my song I give thanks to him. - Psalm 28:7",
    "Do not fear, for I have redeemed you; I have called you by name; you are mine. - Isaiah 43:1",
    "The earth is the Lord's and the fullness thereof, the world and those who dwell therein. - Psalm 24:1",
    "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord. - Romans 6:23",
    "As a father has compassion on his children, so the Lord has compassion on those who fear him. - Psalm 103:13",
    "Trust in the Lord forever, for the Lord God is an everlasting rock. - Isaiah 26:4",
    "The name of the Lord is a strong tower; the righteous man runs into it and is safe. - Proverbs 18:10",
    "The heavens declare the glory of God, and the sky above proclaims his handiwork. - Psalm 19:1",
    "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. - Revelation 21:4",
    "For the Spirit God gave us does not make us timid, but gives us power, love, and self-discipline. - 2 Timothy 1:7",
    "The thief comes only to steal and kill and destroy. I came that they may have life and have it abundantly. - John 10:10",
    "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God. - Ephesians 2:8",
    "Therefore encourage one another and build one another up, just as you are doing. - 1 Thessalonians 5:11",
    "The Lord is near to the brokenhearted and saves the crushed in spirit. - Psalm 34:18",
    "The Lord is my rock, my fortress, and my deliverer; my God, my rock, in whom I take refuge, my shield, and the horn of my salvation, my stronghold. - Psalm 18:2",
    "He gives strength to the weary and increases the power of the weak. - Isaiah 40:29",
    "I sought the Lord, and he answered me and delivered me from all my fears. - Psalm 34:4",
    "In him we have redemption through his blood, the forgiveness of sins, in accordance with the riches of God’s grace. - Ephesians 1:7",
    "The Lord will fight for you; you need only to be still. - Exodus 14:14",
    "The Lord is good, a refuge in times of trouble. He cares for those who trust in him. - Nahum 1:7",
    "Let the peace of Christ rule in your hearts, since as members of one body you were called to peace. And be thankful. - Colossians 3:15",
    "Your word is a lamp to my feet and a light to my path. - Psalm 119:105",
    "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God. - Micah 6:8",
    "God is our refuge and strength, an ever-present help in trouble. - Psalm 46:1",
    "But as for me, I will watch expectantly for the Lord; I will wait for the God of my salvation. My God will hear me. - Micah 7:7",
    "Let love be genuine. Abhor what is evil; hold fast to what is good. - Romans 12:9",
    "As for me and my house, we will serve the Lord. - Joshua 24:15",
    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand. - Isaiah 41:10",
    "Let all that you do be done in love. - 1 Corinthians 16:14",
    "For I am not ashamed of the gospel, for it is the power of God for salvation to everyone who believes. - Romans 1:16",
    "Your love for one another will prove to the world that you are my disciples. - John 13:35",
    "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope. - Jeremiah 29:11",
    "The Lord is gracious and compassionate, slow to anger and rich in love. - Psalm 145:8",
    "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own. - Matthew 6:34",
    "My flesh and my heart may fail, but God is the strength of my heart and my portion forever. - Psalm 73:26",
    "The heart is deceitful above all things, and desperately sick; who can understand it? - Jeremiah 17:9",
    "Create in me a clean heart, O God, and renew a right spirit within me. - Psalm 51:10",
    "For we walk by faith, not by sight. - 2 Corinthians 5:7",
    "The righteous cry out, and the Lord hears them; he delivers them from all their troubles. - Psalm 34:17",
    "The Lord is close to the brokenhearted and saves those who are crushed in spirit. - Psalm 34:18",
    "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you. - Psalm 32:8",
    "For where two or three gather in my name, there am I with them. - Matthew 18:20",
    "The Lord is my shepherd; I shall not want. - Psalm 23:1",
    "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord, who made heaven and earth. - Psalm 121:1-2",
    "And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. - Philippians 4:7",
    "Be completely humble and gentle; be patient, bearing with one another in love. - Ephesians 4:2",
    "For God gave us a spirit not of fear but of power and love and self-control. - 2 Timothy 1:7",
    "If God is for us, who can be against us? - Romans 8:31",
    "He who dwells in the shelter of the Most High will abide in the shadow of the Almighty. - Psalm 91:1",
    "Give thanks to the Lord, for he is good; his love endures forever. - 1 Chronicles 16:34",
    "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. - Philippians 4:6",
    "I can do all this through him who gives me strength. - Philippians 4:13",
    "He who calls you is faithful; he will surely do it. - 1 Thessalonians 5:24",
    "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid? - Psalm 27:1",
    "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint. - Isaiah 40:31",
    "The name of the Lord is a strong tower; the righteous run into it and are safe. - Proverbs 18:10",
    "The heavens declare the glory of God; the skies proclaim the work of his hands. - Psalm 19:1",
    "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding. - Proverbs 9:10",
    "Do not fear, for I have redeemed you; I have summoned you by name; you are mine. - Isaiah 43:1",
  ];

  // State variables for currently displayed item
  const [currentDisplay, setCurrentDisplay] = useState({
    type: "", // 'joke', 'fact', 'fartFact', 'bibleQuote'
    content: "",
  });

  // Helper function to get random item from array
  const getRandomItem = (array) =>
    array[Math.floor(Math.random() * array.length)];

  // Handlers for each button click
  const handleJokeClick = () => {
    setCurrentDisplay({
      type: "Joke",
      content: getRandomItem(jokes),
    });
  };

  const handleRandomFactClick = () => {
    setCurrentDisplay({
      type: "Random Fact",
      content: getRandomItem(randomFacts),
    });
  };

  const handleFartFactClick = () => {
    setCurrentDisplay({
      type: "Fart Fact",
      content: getRandomItem(fartFacts),
    });
  };

  const handleBibleQuoteClick = () => {
    setCurrentDisplay({
      type: "Bible Quote",
      content: getRandomItem(bibleQuotes),
    });
  };

  return (
    <div>
      <div className="h-96 w-screen bg-slate-200 items-center flex justify-center gap-4 text-white">
        <button onClick={handleJokeClick}>
          <div className="bg-blue-500 flex justify-center h-40 w-40 rounded-lg shadow-lg text-lg">
            <p className="flex items-center">Random Joke</p>
          </div>
        </button>
        <button onClick={handleRandomFactClick}>
          <div className="bg-green-500 flex justify-center h-40 w-40 rounded-lg shadow-lg">
            <p className="flex items-center">Random Fact</p>
          </div>
        </button>
        <button onClick={handleFartFactClick}>
          <div className="bg-yellow-500 flex justify-center h-40 w-40 rounded-lg shadow-lg">
            <p className="flex items-center">Fart Fact</p>
          </div>
        </button>
        <button onClick={handleBibleQuoteClick}>
          <div className="bg-red-500 flex justify-center h-40 w-40 rounded-lg shadow-lg">
            <p className="flex items-center">Bible Quote</p>
          </div>
        </button>
      </div>
      {/* Display the currently selected item */}
      {currentDisplay.content && (
        <div className="mt-4 flex justify-center bg-black">
          <div className="text-center text-lg font-bold  text-yellow-500">
            {/* <h2>{currentDisplay.type}:</h2> */}
            <p>{currentDisplay.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperimentingContainer;
