# Weekly plan rules

A plan is a public page the parent opens on a phone or prints for the fridge. It tells the parent exactly what to do in each session, and links into the lesson page so nothing has to be searched for.

## 1. File

- `pages/studying-en/<level>/plans/week-NN.html` (two-digit week number), built from `pages/studying-en/template-weekly-plan.html`.
- Styles and scripts are one folder deeper than lesson pages: `../../../pages-styles.css`, `../../studying-en-styles.css`, and the same depth for the scripts.
- Public page: no child name, age, school, photos or progress. Write "your child".

## 2. Shape of a week

Sessions = the profile's days per week (default 5). Minutes = the profile's session length (default 15). Each session uses the same four-part rhythm, so the child knows what comes next:

| Part | Share of the session | What happens |
|---|---|---|
| Warm-up | ~15% | A song or chant from the lesson page, or last session's words with flashcards |
| New / practise | ~40% | New words (session 1–2) or new sentence patterns (session 3–4) |
| Play | ~30% | One game from `teaching-coach.md`, using today's words |
| Talk & close | ~15% | One or two "Let's talk" questions, then praise and a sticker or tick |

Across a 5-session week:

1. **Words 1**: first half of the word groups. Word video 1.
2. **Words 2**: second half, plus a quick review of session 1. Word video 2.
3. **Sentences 1**: two patterns. Sentence video 1.
4. **Sentences 2**: the other two patterns and the Q&A pattern as a role-play. Sentence video 2.
5. **Review & play**: the page's Review questions, a game with every word, and a mini speaking test (the parent asks, the child answers, like the Cambridge speaking test videos).

For 3–4 sessions, merge 1+2 and 3+4. For 6–7, add a "free play" day (sing the week's songs, draw and label a picture) and keep it light.

## 3. Spacing and recycling

- Every session starts with words from **earlier** sessions, not only today's.
- Every week includes 3–5 words from previous weeks, picked from the profile's "hard words" first.
- After every 3 topic weeks, the next week is a **review week**: no new words, one game per session across the three topics, and an exam-style speaking practice on session 5.

## 4. Each session in the page

For each day, a `sub-section` with:

- a heading `Day N - <focus>` and the minutes,
- the four parts as a short `ol.numbered-outline`, each line saying exactly what to do and linking to the anchor on the lesson page (`../animals.html#words`, `#watch-words`, `#sentences`, `#watch-sentences`, `#parents`, `#review`),
- one "Say this" line: the exact English sentence(s) the parent uses to start the activity, in Starters English,
- a tick box line for the parent (plain text "☐ Done"); the page does not store progress.

At the top: a `content-table` overview (Day / Focus / Video / Game). At the bottom: a `summary-box` with the week's target ("By Friday your child can…" in 2–3 concrete can-do statements).

## 5. After writing

Update the private profile's "Current plan" line. Reply with the one-line-per-day summary. Ask before adding the plan to the menu; when the parent agrees, add it under the level folder in both menus with the hash `#/<level>-plan-week-NN`.
