---
layout: default
---

hi! my name is hazel! i currently live in new york city and work in the chemicals industry. in my free time i read, write, run, boulder, cook, and go to shows. some of my writing is below.

- currently reading: demons, putafeminista
- currently cooking: smores
- currently bouldering: v4
- currently listening: call it easy by racing mount pleasant 

if you want to get coffee with me or otherwise meet me email me at hazel@hjelfman.com.

<div id="ui-container">
    <button onclick="displayRegexMatch()">load a leaf of grass</button>
</div>

<div id="output">
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

        // 1. Fix Windows line endings (\r\n -> \n)
        text = text.replace(/\r\n/g, '\n');

        // strip Project Gutenberg header/footer boilerplate
        const startIdx = text.indexOf('*** START OF');
        if (startIdx !== -1) text = text.slice(text.indexOf('\n', startIdx) + 1);
        const endIdx = text.indexOf('*** END OF');
        if (endIdx !== -1) text = text.slice(0, endIdx);

        // 2. Split by two or more newlines now that \r is removed
        const blocks = text.split(/\n{2,}/).map(b => b.trim());
        let currentTitle = 'Leaves of Grass'; // Fallback title
        const leaves = [];

        for (const block of blocks) {
            if (!block) continue;

            const lines = block.split('\n').map(l => l.trim());
            
            // A block with 1 line is likely a title or a section divider
            if (lines.length === 1) {
                const line = lines[0];
                // Skip generic Gutenberg headers or long line dividers, otherwise treat as title
                if (!line.startsWith('BOOK') && line.length < 60) {
                    currentTitle = line;
                }
                continue;
            }

            // A block with multiple lines is a stanza
            // Clean up individual line padding within the stanza
            const stanza = lines.join('\n');
            if (stanza.length > 5) {
                leaves.push({ title: currentTitle, text: stanza });
            }
        }

        if (leaves.length === 0) {
            displayArea.innerHTML = '<p>walt whitman not found</p>';
            return;
        }

        // Select a random stanza
        const leaf = leaves[Math.floor(Math.random() * leaves.length)];
        
        // Escape HTML to prevent XSS injection
        const escape = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const formattedLines = escape(leaf.text).split('\n').join('<br>');

        displayArea.innerHTML = `
            <p class="leaf-title" style="font-weight: bold; margin-bottom: 0.5em;">${escape(leaf.title)}</p>
            <p class="leaf-body poem-reveal" style="line-height: 1.5;">${formattedLines}</p>
        `;
    } catch (err) {
        displayArea.innerHTML = `<p style="color:red">ERROR: ${err.message}</p>`;
    }
}
</script>
