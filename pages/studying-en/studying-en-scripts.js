// Shared behaviour for the studying-en pages. Load after pages-scripts.js.
window.addEventListener('DOMContentLoaded', () => {
    setupVideos();
    setupSpeech();
    setupWordSearch();
});

// Show a thumbnail first and swap in the YouTube iframe only when clicked,
// so a page with dozens of videos still opens quickly.
function setupVideos() {
    document.querySelectorAll('.yt-lite[data-id]').forEach(btn => {
        const id = btn.dataset.id;
        const title = btn.dataset.title || 'YouTube video';
        btn.setAttribute('aria-label', `Play video: ${title}`);

        if (!btn.querySelector('img')) {
            const img = document.createElement('img');
            img.src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
            img.alt = '';
            img.loading = 'lazy';
            btn.prepend(img);
        }

        btn.addEventListener('click', () => {
            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
            iframe.title = title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.referrerPolicy = 'strict-origin-when-cross-origin';
            iframe.allowFullscreen = true;
            btn.replaceWith(iframe);
        });
    });
}

// Tap a word chip or a 🔊 button to hear it (British English voice when available).
function setupSpeech() {
    const canSpeak = 'speechSynthesis' in window;
    const speakables = document.querySelectorAll('.word, .say');

    if (!canSpeak) {
        document.querySelectorAll('.say').forEach(btn => { btn.hidden = true; });
        return;
    }

    let voice = null;
    const pickVoice = () => {
        const voices = speechSynthesis.getVoices();
        voice = voices.find(v => v.lang === 'en-GB')
            || voices.find(v => v.lang.startsWith('en'))
            || null;
    };
    pickVoice();
    speechSynthesis.addEventListener('voiceschanged', pickVoice);

    speakables.forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.say || textToSay(btn);
            if (!text) return;

            speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-GB';
            utterance.rate = 0.85;
            if (voice) utterance.voice = voice;

            btn.classList.add('is-speaking');
            utterance.onend = utterance.onerror = () => btn.classList.remove('is-speaking');
            speechSynthesis.speak(utterance);
        });
    });
}

// A word chip reads its own text minus the grammar tag; a 🔊 button reads the sentence next to it.
function textToSay(btn) {
    let source = btn;
    if (btn.classList.contains('say')) {
        source = btn.nextElementSibling;
    }
    if (!source) return '';

    const clone = source.cloneNode(true);
    clone.querySelectorAll('i').forEach(el => el.remove());
    return clone.textContent.replace(/\s*\/\s*/g, ', ').replace(/\s+/g, ' ').trim();
}

// Filter the A–Z wordlist as you type; empty letter groups are hidden.
function setupWordSearch() {
    const input = document.querySelector('.az-search');
    if (!input) return;

    const groups = document.querySelectorAll('.az-letter');
    const counter = document.querySelector('.az-count');
    const total = document.querySelectorAll('.az-letter li').length;

    const update = () => {
        const query = input.value.trim().toLowerCase();
        let shown = 0;

        groups.forEach(group => {
            let groupShown = 0;
            group.querySelectorAll('li').forEach(li => {
                const match = !query || li.textContent.toLowerCase().includes(query);
                li.hidden = !match;
                if (match) groupShown++;
            });
            group.hidden = groupShown === 0;
            shown += groupShown;
        });

        if (counter) {
            counter.textContent = query ? `${shown} of ${total} words` : `${total} words`;
        }
    };

    input.addEventListener('input', update);
    update();
}
