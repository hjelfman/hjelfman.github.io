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
            
            try {
                // 1. Fetch the text file (ensure 'manifesto.txt' is in the same folder)
                const response = await fetch('https://hjelfman.com/grass.txt');
                
                if (!response.ok) throw new Error("File not found in this dimension.");
                
                const text = await response.text();

                // 2. The Regex Pattern 
                // This example looks for any word inside [brackets]
                const regex = /(?<=\n{4})([\s\S]*?)(?<=\n{8})/gim; 

                // 3. Find matches
                const matches = text.match(regex);

                // 4. Inject into HTML with our 'vibrate' class for flavor
                if (matches && matches.length > 0) {
                    displayArea.innerHTML = matches
                        .map(m => `<p class="vibrate">${m}</p>`)
                        .join('');
                } else {
                    displayArea.innerHTML = "<p>walt whitman not found</p>";
                }

            } catch (err) {
                displayArea.innerHTML = `<p style="color:red">ERROR: ${err.message}</p>`;
            }
        }
</script>
