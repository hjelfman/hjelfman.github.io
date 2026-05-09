---
layout: default
---

hi! my name is hazel! i currently live in new york city and work in the chemicals industry. in my free time i read, write, run, boulder, cook, and go to shows. some of my writing is below.

- currently reading: blonde, how progress ends, the bible
- currently cooking: congee
- currently bouldering: v4
- currently listening: allah allah allah

if you want to get coffee with me or otherwise meet me email me at hazel@hjelfman.com.

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
    try {
        // 1. Fetch the file
        const response = await fetch('https://hjelfman.com/grass.txt');
        const text = await response.text();

        // 2. Define your Regex
        // Example: Finds all words starting with "TRUTH" (case insensitive)
        const regex = (?<=\n{2})([\s\S]*?)(?<=\n{5}); 

        // 3. Find matches
        const matches = text.match(regex);

        // 4. Display in the DOM
        const displayArea = document.getElementById('output');
        if (matches) {
            displayArea.innerHTML = matches.join('<br>');
        } else {
            displayArea.innerText = "No matches found in the cubic void.";
        }
    } catch (err) {
        console.error("Error fetching the truth:", err);
    }
}

displayRegexMatch();
</script>
