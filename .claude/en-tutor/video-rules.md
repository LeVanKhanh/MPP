# Video rules - finding YouTube videos you can trust

A wrong or dead video ID is the easiest way to break a lesson page, and an ID typed from memory is almost always wrong. So: **every video ID comes from the search tool and passes the verify tool in the same session.** No exceptions.

## 1. Tools

Both are in `.claude/en-tutor/tools/`, use only the Python standard library, and need network access.

```bash
python -I .claude/en-tutor/tools/yt_search.py "zoo animals vocabulary for kids" "what is it song animals kids"
```

prints up to 8 results per query: `id | duration | views | channel | title`.

```bash
python -I .claude/en-tutor/tools/yt_verify.py ID1 ID2 ID3
```

calls YouTube's oEmbed endpoint for each ID. `OK` means the video exists **and** may be embedded; `BAD` means drop it. Run it on every ID that goes into a page, in one call.

## 2. Searching

- Run 2–4 queries per block in one call: one with the topic + "vocabulary for kids", one with a trusted channel name + topic, one with the sentence pattern itself ("have you got song kids", "can you swim song").
- For sentence videos, search for the **pattern**, not just the topic. A video that only shows pictures and words is a word video.

## 3. Choosing

Pick 2 videos per block (4 at most). Prefer, in this order:

1. **Trusted channels** (professional ESL or early-years producers):
   English Singsing · Super Simple Songs · Fun Kids English · Maple Leaf Learning · Dream English Kids · Little Fox · Wow English TV (Steve and Maggie) · The Singing Walrus · English Tree · Wormhole Learning · Smile and Learn - English · ELF Kids Videos · British Council LearnEnglish Kids · English with Cambridge (official Cambridge English; use it for exam practice).
2. Clear British or neutral pronunciation, real voices, slow and repeated language.
3. Length 1–8 minutes. Skip Shorts (under 45 seconds) and compilations over 15 minutes.
4. Popular enough to be safe: over 100,000 views, unless the channel is in the trusted list.

Avoid: AI-voice slideshows, channels with no clear producer, videos that teach American-only forms without the British one, anything with ads built into the video, and mixed-language videos unless the parent asks for Vietnamese support.

## 4. Fit

- Word videos must show most of the page's words. Sentence videos must use at least one of the page's patterns.
- Prefer variety on one page: two different channels per block.
- Grep the other lesson pages for the ID before reusing it. Reuse is fine when it fits best, but say so in the report.
- If no good video exists for a pattern, use one fewer video and say so. Never fill a slot with a weak video.

## 5. In the report to the parent

List each video as `channel - title (duration)` and the one-line "why". Mention any video that was close but rejected, and why, only if it is useful.
