# Syllabus - what to teach, and in what order

## 1. Levels

| Level | Cambridge exam | Folder | Status |
|---|---|---|---|
| Pre A1 | Starters | `pages/studying-en/pre-a1/` (wordlist + plans) | **Current** |
| All | Shared topic pages | `pages/studying-en/topics/` | Used by every level |
| A1 | Movers | `pages/studying-en/a1/` | Fun for Movers plans started 2026-11-02 (`a1/plans/fun-for-movers/`) |
| A2 | Flyers | `pages/studying-en/a2/` | Later |

Source of truth for Starters vocabulary: the A–Z list in `pages/studying-en/pre-a1/words-list-cambridge-starters.html` (section `#a-z`), copied from the official *Pre A1 Starters Wordlist Picture Book* (Cambridge, 2025). Check a word with:

```bash
grep -io '<li>WORD[^<]*<i>[^<]*</i>' pages/studying-en/pre-a1/words-list-cambridge-starters.html
```

For Movers and Flyers, the A–Z lists (section `#a-z`) and topic lists of the new words at each level are in `pages/studying-en/a1/words-list-cambridge-movers.html` and `pages/studying-en/a2/words-list-cambridge-flyers.html`, copied from the official *Pre A1 Starters, A1 Movers and A2 Flyers Wordlists* (Cambridge, 2025). Each level lists only its new words, so a Flyers learner also needs every Starters and Movers word. Check a word in all three with:

```bash
grep -io '<li>WORD[^<]*<i>[^<]*</i>' pages/studying-en/*/words-list-cambridge-*.html
```

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

The parent created these empty files; since 2026-11-02 they live in `pages/studying-en/topics/` together with the built pages, shared by every level. Fill each one in place. Fill them in this order unless the profile or the parent says otherwise. The first ten follow the ten picture topics of the official book; `words-list-cambridge-starters.html` already has the word lists and sentences for those ten, so a lesson page goes **deeper** (more sentences, a parent tips box, a review section) instead of copying that page.

| Order | File | Topic | Level fit |
|---|---|---|---|
| 1 | `abc-number.html` | Alphabet, spelling names, numbers 1–20 | Starters core |
| 2 | `body.html` | My body and face | Starters core |
| 3 | `animals.html` | At the zoo, pets | Starters core |
| 4 | `colors.html` | Colours | Starters core |
| 5 | `clothes-things.html` | Clothes | Starters core |
| 6 | `family.html` | Family and people (birthday picture) | Starters core |
| 7 | `food-drink.html` | Food and drinks (built: "Food and Drinks") | Starters core |
| 8 | `vegetables.html` | Fruit and vegetables | Starters core |
| 9 | `home.html` | House and rooms | Starters core |
| 10 | `kitchen.html` | Things in the kitchen | Starters + bonus |
| 11 | `school.html` | Classroom and school things | Starters core |
| 12 | `position.html` | in, on, under, next to, behind, in front of, between (built: "In, On, Under") | Starters core |
| 13 | `opposites.html` | big/small, long/short, clean/dirty, old/new/young (built; Movers/Flyers bonus words tagged) | Starters core |
| 14 | `sport.html` | Sports and beach games | Starters core |
| 15 | `doing-action.html` | Action verbs (built as "Actions" on 2026-11-02: run, jump, swim, throw, catch…; hop, skip, climb, dance, skate are tagged Movers) | Starters core |
| 16 | `hobbies.html` | Hobbies, music, drawing, likes | Starters core |
| 17 | `town-city.html` | My street, transport, shops | Starters + bonus |
| 18 | `plurals.html` | Plurals, including mice/feet/men/women/children | Starters grammar |
| 19 | `questions.html` | Question words and short answers | Starters grammar |
| 20 | `favourites.html` | My favourite… (review page across topics) | Starters review |
| 21 | `food-beverage.html` | Overlaps `food-drink.html` - ask the parent whether to merge or use it for a café role-play | Ask |
| 22 | `describing-people.html` | hair, eyes, long/short, beautiful, young/old (built as "Describing People" on 2026-11-02; curly, straight, fair, beard, moustache, tall, thin, fat, surprised tagged Movers) | Starters + Movers bonus |
| 23 | `emotions.html` | happy, sad, angry, scary, funny | Starters + Movers bonus |
| 24 | `daily-activities.html` | morning, go to bed, eat breakfast | Mostly Movers |
| 25 | `shopping.html` | shop/store, would like, colours and clothes | Starters + bonus |
| 26 | `story.html` | Short picture stories using known words | Starters review |
| 27 | `shapes.html` | Shapes (built: circle, square, star, shape are Movers bonus words; triangle is a course word) | Starters + Movers bonus |
| 28 | `days-time.html` | Days, time | Movers |
| 29 | `weather-seasons.html` | Weather, seasons (built as "Weather and Seasons" on 2026-11-02; seasons are Flyers bonus words) | Movers |
| 30 | `health.html` | Feeling ill, body problems | Movers |
| 31 | `jobs.html` | Jobs | Movers / Flyers |
| 32 | `countryside.html` | Farm, countryside (built as "Farm and Countryside" on 2026-11-02; Starters farm animals first, Movers words tagged) | Movers |
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

Plans: `plans/amanda-1/`.

**Amanda and Friends 2** (the following year; plans in `plans/amanda-2/`, weeks restart at 01):

| Week | Course unit | Our lesson page(s) |
|---|---|---|
| 1 | Welcome: Hello (review colours, numbers 1–3, apple, ball, book) | `hello.html`, `colors.html`, `vegetables.html` |
| 2 | Unit 1: School (+ chair, door, table, window, flower; brown, pink, purple) | `school.html` (add the furniture words), `colors.html` |
| 3 | Unit 2: Family (+ grandparents, aunt, cousin; numbers 4–5) | `family.html`, a numbers page (`abc-number.html`) |
| 4 | Unit 3: Body (+ arms, hands, head, legs; black, white; square) | `body.html`, `colors.html` |
| 5 | Unit 4: Clothes (+ hot and cold) | `clothes-things.html` |
| 6 | Unit 5: Animals (farm animals; number 6) | `animals.html` |
| 7 | Unit 6: Transport (+ happy, sad) | `town-city.html` (transport part) |
| by date | Festivals: Halloween, Christmas, Easter | festival pages |

**Amanda and Friends 3** (the year after book 2; plans in `plans/amanda-3/`, weeks restart at 01). This book goes further beyond Starters (Movers words such as up/down, teeth, lion, hungry; Flyers words such as fast, finger, swing), so label those as bonus words on the pages.

| Week | Course unit | Our lesson page(s) |
|---|---|---|
| 1 | Welcome: Hello (review 10 colours, circle/square/triangle, numbers 1–6) | `colors.html`, `shapes.html`, `abc-number.html`, `family.html` |
| 2 | Unit 1: Home (rooms; numbers 7–10) | `home.html`, `abc-number.html` |
| 3 | Unit 2: Toys (in the park: slide, swing…; up, down) | `toys.html` (add a park group) |
| 4 | Unit 3: Body (feet, fingers, hair, teeth; long, short) | `body.html`, `opposites.html` |
| 5 | Unit 4: Clothes (dressing up; in, on, under) | `clothes-things.html`, `position.html` |
| 6 | Unit 5: Animals (elephant, lion, monkey, snake; fast, slow) | `animals.html` |
| 7 | Unit 6: Food (food and drinks; hungry, thirsty) | `food-drink.html` |
| by date | Festivals: Halloween, Christmas, Easter | festival pages |

**Fun for Starters** (Cambridge exam-practice book, about ages 5–8; plans in `plans/fun-for-starters/`). It has 45 short units, so **one unit = one week** (three lessons) and the book fills about a school year. The public contents page `plans/fun-for-starters/toc.html` lists every unit and links each one to its home week once written; update its "Home plan" cell when a week is added. Unit notes are in `.claude/en-tutor/private/courses/fun-for-starters.md`. Because the book is exam practice, lessons here may include short spelling and writing tasks (names, short words), which the preschool courses do not.

## 5. Pace

- A Starters topic usually needs one week at 4–5 short sessions (10–20 minutes for a 5–8 year old).
- After every 3 new topics, give one review week (games, songs, "Let's talk", a mini speaking test like the Cambridge videos).
- Move on when the child can name about 80% of the topic words from pictures and answer the topic's "Let's talk" questions with short answers. Perfect grammar is not the bar at this level.
