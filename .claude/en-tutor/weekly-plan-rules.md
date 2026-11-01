# Weekly plan rules

A plan is a set of public pages the parent opens on a phone, **one page per lesson (session)**. Each page says exactly what to do in that session and links into the lesson page, so nothing has to be searched for. The parent shares these pages with other families, so they must work for any child.

## 1. Files and names

- One file per lesson: `pages/studying-en/<level>/plans/<course>/week-<NN>-<topic>-lesson-<NN>.html`
  - `<course>`: one folder per course book, and week numbers **restart at 01 in each folder**, so a family whose child starts at book 2 begins at "Week 1": `amanda-1`, `amanda-2`, `amanda-3`, `fun-for-starters` (one unit per week), … For plans that follow no course, use `general`. A course folder may have a `toc.html` contents page; when you add a week, link it there too.
  - `<NN>`: two digits (`week-01`, `lesson-03`).
  - `<topic>`: one lowercase English word or a hyphenated pair, from the course unit when the profile follows a course (`hello`, `school`, `family`, `toys`, `body`, `pets`, `food`, `christmas`), otherwise from the syllabus topic.
  - If a week has only one lesson, drop the suffix: `week-07-christmas.html`.
- Built from `pages/studying-en/template-plan-lesson.html`.
- Styles and scripts are two folders deeper than lesson pages: `../../../../pages-styles.css`, `../../../studying-en-styles.css`, the same depth for the scripts, and lesson (topic) pages are `../../../topics/<page>.html` (the wordlist stays `../../words-list-cambridge-starters.html`).
- `page-meta` starts with the course and week: `Amanda and Friends 2 · Week 1: Hello | Lesson 1 of 3 | …`.
- Public and shared: no child name, age, school, photos or progress. Write "your child". The audience line is generic: "30 minutes for very young beginners (3–5)", adjusted to the profile's session length and age band.
- When the profile follows a school course, the subtitle names the matching unit ("Goes with Amanda and Friends 1 – Unit 5: Pets"). Name the unit only; never copy the course's own pages, stories, characters or activities.

## 2. Order of weeks

- If the profile has a **School course**, weeks follow that course's unit order from the private course map (`private/courses/<course>.md`): one home week per unit by default. The parent can repeat a week while the class is still on that unit; the next plan then gets the next free week number with new games for the same topic.
- Festival units (Christmas, Easter, Halloween…) become their own week in the calendar week before the festival; number weeks in the order they are actually taught, so later weeks shift by one.
- Plans for future weeks may be written early (as for week 6). If a festival week is inserted before them, rename the files and menu entries in the same change.
- Without a course, follow `starters-syllabus.md` §3.

## 3. Shape of a lesson

Sessions per week and minutes per session come from the profile (default 3 × 30 min). For very young children (3–5) every lesson is **6–8 micro-activities of 2–6 minutes**, alternating sitting and moving:

1. **Hello**: the same hello song every lesson (from `hello.html`).
2. **New / review**: words with real toys or pictures; listen → point → say.
3. **Watch**: one video from the lesson page, with a job (point, wave, count).
4. **Move**: an action game.
5. **Game**: one game from `teaching-coach.md` with today's words.
6. **Quiet**: draw, colour, sort.
7. **Talk**: one or two easy questions.
8. **Goodbye**: the same goodbye song every lesson.

Total video per lesson: at most 10 minutes, including the hello and goodbye songs.

Across a 3-lesson week: lesson 1 = first words, lesson 2 = more words + one sentence pattern, lesson 3 = review, counting or the "can" pattern, and a mini speaking check using the lesson page's Review questions. For 4–5 lessons a week, split the words across more lessons; never add more words.

## 4. Spacing and recycling

- Every lesson starts with words from earlier lessons, not only today's.
- Every week includes 2–4 words from previous weeks, picked from the profile's "hard words" first.
- For very young children, repeating the same songs and games across the week is good, not boring.

## 5. Each lesson page

Follow the template:

- header with `Week N · Lesson N: Title`, the audience line, the lesson page link, and the course unit if any;
- `lesson-nav` with all lessons of the week (current one `aria-current="page"`);
- **You Need** (lesson 1 also carries the "short activities, stop early, video minutes" note);
- **Today's Lesson**: the micro-activities as `ol.numbered-outline`, minutes in brackets, each with the exact action and a link to the lesson page anchor (`#words`, `#watch-words`, `#sentences`, `#watch-sentences`, `#parents`, `#review`);
- one **Say this** blockquote with the exact English lines (Starters words only);
- `☐ Done`;
- lesson 3 only: a `summary-box` "By the end of this week your child can…" with three concrete can-do lines;
- `lesson-next` links (previous / next lesson, or the lesson page at either end).

The `topic t-<colour>` classes go on the `<article>`, so the lesson nav uses the topic colour.

## 6. After writing

1. Update the private profile's "Current plan" line.
2. Reply with one line per lesson and the file paths.
3. Ask before adding to the menu. When the parent agrees, add in both menus inside the level folder → the course's plans folder (`Amanda and Friends 1 · Weekly Plans`, VN `Amanda and Friends 1 · Kế Hoạch Tuần`; one folder per course, in course order) → a week folder `Week N: Topic` (VN: `Tuần N: <Chủ đề>`) → one entry per lesson `Lesson N: Title` (VN: `Buổi N: …`). Hash: `#/<level>-<course>-week-NN-<topic>-lesson-NN` (e.g. `#/starters-amanda-2-week-01-hello-lesson-01`). Weeks in number order. Lesson pages (`hello.html`, `animals.html`…) stay in the level folder itself, before the plans folders.
