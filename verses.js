const BIBLE_VERSES = {
    "verses": [
        {
            "ref": "Romans 8:28",
            "book": "Romans",
            "chapter": 8,
            "verse": 28,
            "text": "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
            "ver": "NIV"
        },
        {
            "ref": "2 Chronicles 32:7",
            "book": "2 Chronicles",
            "chapter": 32,
            "verse": 7,
            "text": "Be strong and courageous. Do not be afraid or discouraged because of the king of Assyria and the vast army with him, for there is a greater power with us than with him.",
            "ver": "NIV"
        },
        {
            "ref": "Philippians 4:6",
            "book": "Philippians",
            "chapter": 4,
            "verse": 6,
            "text": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 23:4",
            "book": "Psalm",
            "chapter": 23,
            "verse": 4,
            "text": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 41:13",
            "book": "Isaiah",
            "chapter": 41,
            "verse": 13,
            "text": "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 18:2",
            "book": "Psalm",
            "chapter": 18,
            "verse": 2,
            "text": "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
            "ver": "NIV"
        },
        {
            "ref": "Philippians 4:4",
            "book": "Philippians",
            "chapter": 4,
            "verse": 4,
            "text": "Rejoice in the Lord always. I will say it again: Rejoice!",
            "ver": "NIV"
        },
        {
            "ref": "Romans 12:12",
            "book": "Romans",
            "chapter": 12,
            "verse": 12,
            "text": "Be joyful in hope, patient in affliction, faithful in prayer.",
            "ver": "NIV"
        },
        {
            "ref": "1 Corinthians 15:58",
            "book": "1 Corinthians",
            "chapter": 15,
            "verse": 58,
            "text": "Therefore, my dear brothers and sisters, stand firm. Let nothing move you. Always give yourselves fully to the work of the Lord, because you know that your labor in the Lord is not in vain.",
            "ver": "NIV"
        },

        {
            "ref": "Psalm 30:5",
            "book": "Psalm",
            "chapter": 30,
            "verse": 5,
            "text": "For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.",
            "ver": "NIV"
        },
        {
            "ref": "John 14:27",
            "book": "John",
            "chapter": 14,
            "verse": 27,
            "text": "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 139:14",
            "book": "Psalm",
            "chapter": 139,
            "verse": 14,
            "text": "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
            "ver": "NIV"
        },
        {
            "ref": "Jeremiah 29:11",
            "book": "Jeremiah",
            "chapter": 29,
            "verse": 11,
            "text": "For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 46:1",
            "book": "Psalm",
            "chapter": 46,
            "verse": 1,
            "text": "God is our refuge and strength, an ever-present help in trouble.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 26:3",
            "book": "Isaiah",
            "chapter": 26,
            "verse": 3,
            "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 43:2",
            "book": "Isaiah",
            "chapter": 43,
            "verse": 2,
            "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 91:4",
            "book": "Psalm",
            "chapter": 91,
            "verse": 4,
            "text": "He will cover you with his feathers, and under his wings you will find refuge; his faithfulness will be your shield and rampart.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 126:5",
            "book": "Psalm",
            "chapter": 126,
            "verse": 5,
            "text": "Those who sow with tears will reap with songs of joy.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 40:29",
            "book": "Isaiah",
            "chapter": 40,
            "verse": 29,
            "text": "He gives strength to the weary and increases the power of the weak.",
            "ver": "NIV"
        },
        {
            "ref": "Romans 5:8",
            "book": "Romans",
            "chapter": 5,
            "verse": 8,
            "text": "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 118:14",
            "book": "Psalm",
            "chapter": 118,
            "verse": 14,
            "text": "The Lord is my strength and my defense; he has become my salvation.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 41:18",
            "book": "Isaiah",
            "chapter": 41,
            "verse": 18,
            "text": "I will make rivers flow on barren heights, and springs within the valleys. I will turn the desert into pools of water, and the parched ground into springs.",
            "ver": "NIV"
        },
        {
            "ref": "1 Thessalonians 5:16-18",
            "book": "1 Thessalonians",
            "chapter": 5,
            "verse": "16-18",
            "text": "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 54:10",
            "book": "Isaiah",
            "chapter": 54,
            "verse": 10,
            "text": "Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed,” says the Lord, who has compassion on you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 37:4",
            "book": "Psalm",
            "chapter": 37,
            "verse": 4,
            "text": "Take delight in the Lord, and he will give you the desires of your heart.",
            "ver": "NIV"
        },
        {
            "ref": "Hebrews 10:23",
            "book": "Hebrews",
            "chapter": 10,
            "verse": 23,
            "text": "Let us hold unswervingly to the hope we profess, for he who promised is faithful.",
            "ver": "NIV"
        },
        {
            "ref": "Revelation 21:4",
            "book": "Revelation",
            "chapter": 21,
            "verse": 4,
            "text": "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 62:1-2",
            "book": "Psalm",
            "chapter": 62,
            "verse": "1-2",
            "text": "Truly my soul finds rest in God; my salvation comes from him. Truly he is my rock and my salvation; he is my fortress, I will never be shaken.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 30:2",
            "book": "Psalm",
            "chapter": 30,
            "verse": 2,
            "text": "Lord my God, I called to you for help, and you healed me.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:17",
            "book": "Psalm",
            "chapter": 34,
            "verse": 17,
            "text": "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:19",
            "book": "Psalm",
            "chapter": 34,
            "verse": 19,
            "text": "The righteous person may have many troubles, but the Lord delivers him from them all;",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 37:23-24",
            "book": "Psalm",
            "chapter": 37,
            "verse": "23-24",
            "text": "The Lord makes firm the steps of the one who delights in him; though he may stumble, he will not fall, for the Lord upholds him with his hand.",
            "ver": "NIV"
        },
        {
            "ref": "1 Peter 5:7",
            "book": "1 Peter",
            "chapter": 5,
            "verse": 7,
            "text": "Cast all your anxiety on him because he cares for you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 91:1-2",
            "book": "Psalm",
            "chapter": 91,
            "verse": "1-2",
            "text": "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty. I will say of the Lord, “He is my refuge and my fortress, my God, in whom I trust.”",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 91:14-15",
            "book": "Psalm",
            "chapter": 91,
            "verse": "14-15",
            "text": "“Because he loves me,” says the Lord, “I will rescue him; I will protect him, for he acknowledges my name. He will call on me, and I will answer him; I will be with him in trouble, I will deliver him and honor him.",
            "ver": "NIV"
        },
        {
            "ref": "Romans 15:13",
            "book": "Romans",
            "chapter": 15,
            "verse": 13,
            "text": "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 61:1-2",
            "book": "Isaiah",
            "chapter": 61,
            "verse": "1-2",
            "text": "The Spirit of the Sovereign Lord is on me, because the Lord has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners, to proclaim the year of the Lord’s favor and the day of vengeance of our God, to comfort all who mourn,",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 91:16",
            "book": "Psalm",
            "chapter": 91,
            "verse": 16,
            "text": "With long life I will satisfy him and show him my salvation.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 40:31",
            "book": "Isaiah",
            "chapter": 40,
            "verse": 31,
            "text": "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:8",
            "book": "Psalm",
            "chapter": 34,
            "verse": 8,
            "text": "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 43:18-19",
            "book": "Isaiah",
            "chapter": 43,
            "verse": "18-19",
            "text": "Forget the former things; do not dwell on the past. See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 27:1",
            "book": "Psalm",
            "chapter": 27,
            "verse": 1,
            "text": "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life—of whom shall I be afraid?",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 43:4",
            "book": "Isaiah",
            "chapter": 43,
            "verse": 4,
            "text": "Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 118:6",
            "book": "Psalm",
            "chapter": 118,
            "verse": 6,
            "text": "The Lord is with me; I will not be afraid. What can mere mortals do to me?",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 26:4",
            "book": "Isaiah",
            "chapter": 26,
            "verse": 4,
            "text": "Trust in the Lord forever, for the Lord, the Lord himself, is the Rock eternal.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:10",
            "book": "Psalm",
            "chapter": 34,
            "verse": 10,
            "text": "The lions may grow weak and hungry, but those who seek the Lord lack no good thing.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 23:1-3",
            "book": "Psalm",
            "chapter": 23,
            "verse": "1-3",
            "text": "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul. He guides me along the right paths for his name’s sake.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 27:14",
            "book": "Psalm",
            "chapter": 27,
            "verse": 14,
            "text": "Wait for the Lord; be strong and take heart and wait for the Lord.",
            "ver": "NIV"
        },
        {
            "ref": "2 Corinthians 4:16-18",
            "book": "2 Corinthians",
            "chapter": 4,
            "verse": "16-18",
            "text": "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day. For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all. So we fix our eyes not on what is seen, but on what is unseen, since what is seen is temporary, but what is unseen is eternal.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 54:17",
            "book": "Isaiah",
            "chapter": 54,
            "verse": 17,
            "text": "no weapon forged against you will prevail, and you will refute every tongue that accuses you. This is the heritage of the servants of the Lord, and this is their vindication from me,” declares the Lord.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 23:4",
            "book": "Psalm",
            "chapter": 23,
            "verse": 4,
            "text": "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 41:10",
            "book": "Isaiah",
            "chapter": 41,
            "verse": 10,
            "text": "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 46:1",
            "book": "Psalm",
            "chapter": 46,
            "verse": 1,
            "text": "God is our refuge and strength, an ever-present help in trouble.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:15",
            "book": "Psalm",
            "chapter": 34,
            "verse": 15,
            "text": "The eyes of the Lord are on the righteous, and his ears are attentive to their cry;",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 32:8",
            "book": "Psalm",
            "chapter": 32,
            "verse": 8,
            "text": "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 18:2",
            "book": "Psalm",
            "chapter": 18,
            "verse": 2,
            "text": "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge, my shield and the horn of my salvation, my stronghold.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 34:4",
            "book": "Psalm",
            "chapter": 34,
            "verse": 4,
            "text": "I sought the Lord, and he answered me; he delivered me from all my fears.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 43:2",
            "book": "Isaiah",
            "chapter": 43,
            "verse": 2,
            "text": "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 46:10",
            "book": "Psalm",
            "chapter": 46,
            "verse": 10,
            "text": "He says, “Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.”",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 119:114",
            "book": "Psalm",
            "chapter": 119,
            "verse": 114,
            "text": "You are my refuge and my shield; I have put my hope in your word.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 121:1-2",
            "book": "Psalm",
            "chapter": 121,
            "verse": "1-2",
            "text": "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 37:4-5",
            "book": "Psalm",
            "chapter": 37,
            "verse": "4-5",
            "text": "Take delight in the Lord, and he will give you the desires of your heart. Commit your way to the Lord; trust in him and he will do this:",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 28:7",
            "book": "Psalm",
            "chapter": 28,
            "verse": 7,
            "text": "The Lord is my strength and my shield; my heart trusts in him, and he helps me. My heart leaps for joy, and with my song I praise him.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 16:8",
            "book": "Psalm",
            "chapter": 16,
            "verse": 8,
            "text": "I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 31:24",
            "book": "Psalm",
            "chapter": 31,
            "verse": 24,
            "text": "Be strong and take heart, all you who hope in the Lord.",
            "ver": "NIV"
        },
        {
            "ref": "Matthew 11:28",
            "book": "Matthew",
            "chapter": 11,
            "verse": 28,
            "text": "Come to me, all you who are weary and burdened, and I will give you rest.",
            "ver": "NIV"
        },
        {
            "ref": "John 16:33",
            "book": "John",
            "chapter": 16,
            "verse": 33,
            "text": "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 37:7",
            "book": "Psalm",
            "chapter": 37,
            "verse": 7,
            "text": "Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 55:22",
            "book": "Psalm",
            "chapter": 55,
            "verse": 22,
            "text": "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
            "ver": "NIV"
        },
        {
            "ref": "Proverbs 3:5-6",
            "book": "Proverbs",
            "chapter": 3,
            "verse": "5-6",
            "text": "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 121:7-8",
            "book": "Psalm",
            "chapter": 121,
            "verse": "7-8",
            "text": "The Lord will keep you from all harm—he will watch over your life; the Lord will watch over your coming and going both now and forevermore.",
            "ver": "NIV"
        },
        {
            "ref": "Romans 8:38-39",
            "book": "Romans",
            "chapter": 8,
            "verse": "38-39",
            "text": "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 103:2-4",
            "book": "Psalm",
            "chapter": 103,
            "verse": "2-4",
            "text": "Praise the Lord, my soul, and forget not all his benefits—who forgives all your sins and heals all your diseases, who redeems your life from the pit and crowns you with love and compassion,",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 41:13",
            "book": "Isaiah",
            "chapter": 41,
            "verse": 13,
            "text": "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
            "ver": "NIV"
        },
        {
            "ref": "Jeremiah 31:3",
            "book": "Jeremiah",
            "chapter": 31,
            "verse": 3,
            "text": "The Lord appeared to us in the past, saying: 'I have loved you with an everlasting love; I have drawn you with unfailing kindness.'",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 41:13",
            "book": "Isaiah",
            "chapter": 41,
            "verse": 13,
            "text": "For I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 103:2-5",
            "book": "Psalm",
            "chapter": 103,
            "verse": "2-5",
            "text": "Praise the Lord, my soul, and forget not all his benefits— who forgives all your sins and heals all your diseases, who redeems your life from the pit and crowns you with love and compassion, who satisfies your desires with good things so that your youth is renewed like the eagle’s.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 138:3",
            "book": "Psalm",
            "chapter": 138,
            "verse": 3,
            "text": "When I called, you answered me; you greatly emboldened me.",
            "ver": "NIV"
        },
        {
            "ref": "Isaiah 26:3",
            "book": "Isaiah",
            "chapter": 26,
            "verse": 3,
            "text": "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
            "ver": "NIV"
        },
        {
            "ref": "Psalm 103:8",
            "book": "Psalm",
            "chapter": 103,
            "verse": 8,
            "text": "The Lord is compassionate and gracious, slow to anger, abounding in love.",
            "ver": "NIV"
        }
    ]
}

function getNewVerse(){
    const randomIndex = Math.floor(Math.random() * BIBLE_VERSES.verses.length);
    const randomVerse = BIBLE_VERSES.verses[randomIndex];
    document.getElementById('random-verse').innerHTML = `<span class="text-md">${randomVerse.text}</span><br/> - <span class="text-sm">${randomVerse.ref} ${randomVerse.ver}</span>`;
}

getNewVerse()

document.getElementById('randomize-button').addEventListener('click', () => { getNewVerse() });
