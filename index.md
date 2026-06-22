---
layout: default
---

hi! my name is hazel! i currently live in new york city and work in the chemicals industry. in my free time i read, write, run, boulder, cook, and go to shows. some of my writing is below.

- currently reading: how nations fail, putafeminista
- currently cooking: brookies
- currently bouldering: v4
- currently listening: girlfriend by hemlocke springs 

if you want to get coffee with me or otherwise meet me email me at hazel@hjelfman.com.

<div id="ui-container">
    <button onclick="displayRegexMatch()">load a leaf of grass</button>
</div>

<div id="output">
        whitman loading
</div>

<ul class="list-reset">
    {% for post in site.posts %}
    <li>
        <div class="clearfix">
            <div class="col col-6 right-align pr1 fancydate">
                <span>{{ post.date | date: '%d %b, %Y' }}</span>
            </div>
            <div class="col col-6 left-align pl1 fancy">
                <a href="{{ post.url | relative_url }}">
                    {{ post.title }}
                </a>
            </div>
        </div>
    </li>
    {% endfor %}
</ul>

<script>
async function displayRegexMatch() {
    const displayArea = document.getElementById('output');
    displayArea.innerHTML = '<p>finding a leaf...</p>';

    try {
        const response = await fetch('https://hjelfman.com/grass.txt');
        if (!response.ok) throw new Error('grass.txt not found.');

        let text = await response.text();

        // strip Project Gutenberg header/footer boilerplate
        const startIdx = text.indexOf('*** START OF');
        if (startIdx !== -1) text = text.slice(text.indexOf('\n', startIdx) + 1);
        const endIdx = text.indexOf('*** END OF');
        if (endIdx !== -1) text = text.slice(0, endIdx);

        // walk paragraph by paragraph (blocks separated by blank lines).
        // an un-indented one-line block is a title; an indented block
        // is a stanza belonging to the most recent title.
        const blocks = text.split(/\n{2,}/).map(b => b.replace(/\s+$/, ''));
        let currentTitle = '';
        const leaves = [];

        for (const block of blocks) {
            if (!block.trim()) continue;
            const isIndented = /^[ \t]/.test(block);

            if (!isIndented) {
                const line = block.split('\n')[0].trim();
                // skip ALL-CAPS section dividers like "BOOK I.  INSCRIPTIONS"
                if (line && line !== line.toUpperCase()) currentTitle = line;
                continue;
            }

            const stanza = block.split('\n').map(l => l.replace(/^\s+/, '')).join('\n').trim();
            if (stanza.length > 5) leaves.push({ title: currentTitle, text: stanza });
        }

        if (leaves.length === 0) {
            displayArea.innerHTML = '<p>walt whitman not found</p>';
            return;
        }

        const leaf = leaves[Math.floor(Math.random() * leaves.length)];
        const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const lines = escape(leaf.text).split('\n').join('<br>');

        displayArea.innerHTML = `
            <p class="leaf-title">${escape(leaf.title)}</p>
            <p class="leaf-body poem-reveal">${lines}</p>
        `;
    } catch (err) {
        displayArea.innerHTML = `<p style="color:red">ERROR: ${err.message}</p>`;
    }
}
</script>
