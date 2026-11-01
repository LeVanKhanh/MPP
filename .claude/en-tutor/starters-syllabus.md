# Syllabus - what to teach, and in what order

## 1. Levels

| Level | Cambridge exam | Folder | Status |
|---|---|---|---|
| Pre A1 | Starters | `pages/studying-en/starter/` | **Current** |
| A1 | Movers | `pages/studying-en/movers/` (create when needed) | Later |
| A2 | Flyers | `pages/studying-en/flyers/` (create when needed) | Later |

Source of truth for Starters vocabulary: the A–Z list in `pages/studying-en/starter/words-list-cambridge.html` (section `#a-z`), copied from the official *Pre A1 Starters Wordlist Picture Book* (Cambridge, 2025). Check a word with:

```bash
grep -io '<li>WORD[^<]*<i>[^<]*</i>' pages/studying-en/starter/words-list-cambridge.html
```

For Movers and Flyers, find the official wordlist picture book PDF on cambridgeenglish.org and verify each word there; do not rely on memory for which level a word belongs to. When a level is added, copy its A–Z list into a `words-list-cambridge.html` page in that level's folder, the same way as Starters.

## 2. Starters grammar and sentence patterns

A working summary for planning sentences. When exact exam detail matters, check the official Pre A1 Starters handbook on cambridgeenglish.org.

| Pattern | Example | First taught in |
|---|---|---|
| be: I'm / it's / they're | It's a cat. They're dogs. | body, animals |
| this / that / these / those | This is my nose. These are my eyes. | body |
| have got / has got | I've got two arms. Have you got a pen? | body, school |
| a / an / the, plurals (+ mice, feet, men, women, children, people, fish, sheep) | an apple, two mice | animals, food |
| Adjective + noun, colours | a big elephant, a red T-shirt | animals, clothes |
| Possessives: my, your, his, her… 's | my friend's dad | family |
| can / can't (ability and requests) | I can swim. Can I have some juice? | sport, food |
| like / don't like + noun, like + -ing | I like bananas. I like fishing. | food, sport |
| would like | I would like a blue jacket, please. | food, shopping |
| Present continuous | She's flying a kite. | sport, actions |
| Imperatives, Let's | Open your book. Let's play! | school, games |
| There is / there are, How many…? | There are two cats. | home, numbers |
| Prepositions of place: in, on, under, next to, behind, in front of, between | It's under the bed. | home, position |
| Questions: what, where, who, whose, which, how, how many, how old | Whose bag is this? | every topic |
| and, but, or | I like cats but I don't like spiders. | late Starters |

## 3. Placeholder pages and the suggested order

The parent created these empty files in `pages/studying-en/starter/`. Fill them in this order unless the profile or the parent says otherwise. The first ten follow the ten picture topics of the official book; `words-list-cambridge.html` already has the word lists and sentences for those ten, so a lesson page goes **deeper** (more sentences, a parent tips box, a review section) instead of copying that page.

| Order | File | Topic | Level fit |
|---|---|---|---|
| 1 | `abc-number.html` | Alphabet, spelling names, numbers 1–20 | Starters core |
| 2 | `body.html` | My body and face | Starters core |
| 3 | `animals.html` | At the zoo, pets | Starters core |
| 4 | `colors.html` | Colours | Starters core |
| 5 | `clothes-things.html` | Clothes | Starters core |
| 6 | `family.html` | Family and people (birthday picture) | Starters core |
| 7 | `food-drink.html` | Food and drinks | Starters core |
| 8 | `vegetables.html` | Fruit and vegetables | Starters core |
| 9 | `home.html` | House and rooms | Starters core |
| 10 | `kitchen.html` | Things in the kitchen | Starters + bonus |
| 11 | `school.html` | Classroom and school things | Starters core |
| 12 | `position.html` | in, on, under, next to, behind, in front of, between | Starters core |
| 13 | `opposites.html` | big/small, long/short, clean/dirty, old/new/young | Starters core |
| 14 | `sport.html` | Sports and beach games | Starters core |
| 15 | `doing-action.html` | Action verbs (run, jump, swim, throw, catch…) | Starters core |
| 16 | `hobbies.html` | Hobbies, music, drawing, likes | Starters core |
| 17 | `town-city.html` | My street, transport, shops | Starters + bonus |
| 18 | `plurals.html` | Plurals, including mice/feet/men/women/children | Starters grammar |
| 19 | `questions.html` | Question words and short answers | Starters grammar |
| 20 | `favourites.html` | My favourite… (review page across topics) | Starters review |
| 21 | `food-beverage.html` | Overlaps `food-drink.html` - ask the parent whether to merge or use it for a café role-play | Ask |
| 22 | `describing-people.html` | hair, eyes, long/short, beautiful, young/old | Starters + Movers bonus |
| 23 | `emotions.html` | happy, sad, angry, scary, funny | Starters + Movers bonus |
| 24 | `daily-activities.html` | morning, go to bed, eat breakfast | Mostly Movers |
| 25 | `shopping.html` | shop/store, would like, colours and clothes | Starters + bonus |
| 26 | `story.html` | Short picture stories using known words | Starters review |
| 27 | `shapes.html` | Shapes | Check: shape words are not in the Starters list |
| 28 | `days-time.html` | Days, time | Movers |
| 29 | `weather-seasons.html` | Weather, seasons | Movers |
| 30 | `health.html` | Feeling ill, body problems | Movers |
| 31 | `jobs.html` | Jobs | Movers / Flyers |
| 32 | `countryside.html` | Farm, countryside | Movers |
| 33 | `restaurant.html` | Ordering food | Movers |
| 34 | `hangout.html` | Going out with friends, places | Movers / Flyers |
| 35 | `travel.html` | Travel | Flyers |
| 36 | `materials.html` | What things are made of | Flyers |
| 37 | `around-the-word.html` | Around the world (the file name has a typo: "word" for "world"; ask before renaming) | Flyers |

"Level fit" is a planning guess from the topic; confirm every word against the wordlist when building the page. A Movers or Flyers topic can still get a page while the child is at Starters, but keep it for later in the plan unless the parent asks.

## 4. Following a school course

When the profile names a **School course**, plans follow that course's unit order (see `weekly-plan-rules.md` §2) and each unit is matched to our Starters lesson pages. The detailed course map (key words, patterns, words outside Starters) lives in `.claude/en-tutor/private/courses/`, because publishers' contents pages are copyrighted; only the unit order and the page mapping are kept here.

**Amanda and Friends 1** (Richmond, preschool):

| Week | Course unit | Our lesson page(s) |
|---|---|---|
| 1 | Welcome: Hello | `hello.html` |
| 2 | Unit 1: School (+ red, yellow) | `school.html`, `colors.html` |
| 3 | Unit 2: Family (+ number 1) | `family.html` |
| 4 | Unit 3: Toys (+ blue, green) | `toys.html` (added; not in the original placeholder list), `colors.html` |
| 5 | Unit 4: Body (+ number 2) | `body.html` |
| 6 | Unit 5: Pets (+ big/little) | `animals.html` |
| 7 | Unit 6: Food (+ number 3, orange) | `vegetables.html` (Fruit and Vegetables), `colors.html` |
| by date | Festivals: Halloween, Christmas, Easter | one festival page each (create when needed) |

## 5. Pace

- A Starters topic usually needs one week at 4–5 short sessions (10–20 minutes for a 5–8 year old).
- After every 3 new topics, give one review week (games, songs, "Let's talk", a mini speaking test like the Cambridge videos).
- Move on when the child can name about 80% of the topic words from pictures and answer the topic's "Let's talk" questions with short answers. Perfect grammar is not the bar at this level.
