# Lesson page rules - one topic, one page

The canonical example is `pages/studying-en/pre-a1/words-list-cambridge-starters.html` (ten topics on one page). A lesson page is **one** topic from that pattern, built from `pages/studying-en/template-lesson.html`. Read the template before writing; do not invent a new structure.

## 1. Files and paths

- Page: `pages/studying-en/topics/<topic>.html`. Topic pages are **shared by every level** (Starters, Movers, Flyers): Starters words first, higher-level words tagged on the chip (`<i>Movers</i>`, `<i>Flyers</i>`). Moved here from `pre-a1/` on 2026-11-02, together with the parent's empty placeholder pages: fill the existing placeholder in `topics/` when there is one (see `starters-syllabus.md` §3); do not create a duplicate.
- Styles: `../../pages-styles.css` then `../studying-en-styles.css`. Scripts at the end of `<body>`: `../../pages-scripts.js` then `../studying-en-scripts.js`. Same depth for every level folder.
- `<html lang="en">`. Title: `<Topic> - English Topics - My Personal Planet`. Page meta: `Level: Starters and up (higher-level words are tagged)`.
- No inline `<style>` and no hard-coded colours in the page. Everything comes from the two stylesheets.

## 2. Page structure (in this order)

1. **Header** (`article-header`): title = topic name, subtitle = one sentence on what the child will be able to say, `page-meta` with today's date and the source (link to the Cambridge wordlist PDF).
2. **How to use** (`study-steps`, four steps). Copy the wording from the template; change it only if the topic needs it.
3. **Topic section** (`section.content-section.topic.t-<colour>`), containing the four blocks the parent asked for, each an `h3.sub-point-1` with a `.kind` label:
   1. **Wordlist** `Words`: grouped `word-grid`s with an `h4.sub-point-2` per group.
   2. **Videos for the words** `Watch`: a `video-grid` of 2 to 4 `video-card`s.
   3. **Basic sentences** `Sentences`: a `pattern-grid` of 4 `pattern`s (always an even number), then the `talk-box`.
   4. **Videos for the sentences** `Watch`: a `video-grid` of 2 to 4 `video-card`s.
4. **Parent's corner** (`summary-box`): one game for this topic (from `teaching-coach.md`), the two mistakes children most often make with this topic, and how to correct them kindly.
5. **Review** (`content-section`): five quick questions the parent asks at the start of the next session, using only this topic's words. Plain `ol.numbered-outline`.

## 3. Words

- Every word must be in the level's A–Z list. Write it exactly as the list does, including British/American pairs as `chips / fries`, `eraser / rubber`.
- 10–30 words per page, in 2–4 groups (things, actions, describing words…). Fewer, well-chosen words beat a long list.
- Words from a higher level go only in a final group titled `Bonus words (Movers)` or `Bonus words (Flyers)`, at most 8, and never in the sentences unless the page is about that topic.
- Markup: `<button class="word">apple</button>` with a space between buttons. Use `data-say` only when speech would misread the text (`Mr` → `data-say="Mister"`). For numbers use `<button class="word"><i>7</i> seven</button>` so speech reads only the word.

## 4. Sentences

- Four patterns per page, chosen from `starters-syllabus.md` §2 to fit the topic. Each `pattern` has a `pattern-formula` (`I've got ___.`) and four `li`s.
- At least one pattern is a question with answers: question `li`, answer `li class="a"`.
- Only Starters words, plus the page's own topic words. Before writing, grep any word you are unsure of (see the syllabus file). Watch especially: *touch, tall, fast, hungry, party, buy, cook, help, near, by* are **not** Starters words.
- Short: 3–9 words per sentence. Present tense. One new idea per sentence.
- Wrap the topic's words in `<b>` (they get the highlight). Do not bold grammar words.
- Each `li` is `<button class="say" aria-label="Listen">🔊</button><span>…</span>`; the script reads the `span`.
- The `talk-box` has three "Let's talk" questions. Write your own; do not copy the questions printed in the Cambridge book.

## 5. Videos

Follow `video-rules.md`. In the markup:

```html
<article class="video-card">
    <button class="yt-lite" data-id="VIDEO_ID" data-title="Short title"><span class="duration">3:21</span></button>
    <div class="video-meta"><span class="channel">Channel name</span><a class="title" href="https://www.youtube.com/watch?v=VIDEO_ID" target="_blank" rel="noopener">Video title</a><span class="why">One line: what the child should do while watching.</span></div>
</article>
```

Escape `&` as `&amp;` in titles. The duration comes from the search tool output.

## 6. Topic colour

Reuse an existing class from `studying-en-styles.css` when the topic is close (`t-body`, `t-zoo`, `t-clothes`, `t-birthday`, `t-food`, `t-home`, `t-school`, `t-beach`, `t-street`, `t-games`). For a new one, add a line in the "Bảng màu chủ đề" block: a dark colour on which white text reaches at least 4.5:1 contrast. Lighter tints are mixed automatically.

## 7. Check before reporting

Open the page with the `mpp-static` preview, then:

- no console errors, no horizontal scroll at 375 px wide;
- tap one word and one 🔊 (the button highlights), click one video (it turns into the player);
- light and dark theme both readable (toggle `dark-theme` on `body`).

## 8. Menu (only after the parent agrees)

Register in **both** `main-menu.js` and `main-menu-vn.js`, under Reading and Studying → Studying English → the level folder (`Pre A1 Starters` / `Pre A1 Starters` in the VN menu too, it is a proper name). Entry shape:

```js
{
    title: "Animals",                                   // VN menu: Vietnamese title, e.g. "Động Vật"
    route: "pages/studying-en/topics/animals.html",   // same English page in both menus
    hash: "#/starters-animals",                         // keep the old #/starters-<file name> hashes (shared links); new topics: #/topics-<file name>
    icon: "fas fa-file-alt",
    subItems: [],
},
```

Keep the entries in the syllabus order. Before adding, grep both menus for the hash to make sure it is not taken. After editing, load `http://localhost:8765/#/<hash>` in the preview and check that the page opens.
