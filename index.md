---
layout: default
title: hjelfman
---

<div class="page-container">
  <main class="main-content">

# hjelfman  
## the butterfly conservatory  

hi! my name is hazel! i currently live in new york city and work in the chemicals industry. in my free time i read, write, run, boulder, cook, and go to shows. some of my writing is below.

currently reading: demons, putafeminista  
currently cooking: smores  
currently bouldering: v4  
currently listening: call it easy by racing mount pleasant  

if you want to get coffee with me or otherwise meet me email me at hazel@hjelfman.com.

---

{% for post in site.posts %}
  <div class="post-item">
    <a href="{{ post.url }}">{{ post.title }}</a>
    <span class="post-date">{{ post.date | date: "%d %b, %Y" }}</span>
  </div>
{% endfor %}

  </main>

  <aside class="sidebar">
    <section>
      <h3>cool links</h3>
      <ul>
        <li><a href="https://www.amaranthineshards.com" target="_blank" rel="noopener">amaranthine shards</a> &mdash; hemlock</li>
        <li><a href="https://vivianrogers.me/" target="_blank" rel="noopener">vivian</a></li>
      </ul>
    </section>


  </aside>
</div>
