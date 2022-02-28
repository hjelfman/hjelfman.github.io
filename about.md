---
layout: page
title:  About
permalink: /about/
date:   2022-01-13
categories: misc
---

Hello! I'm <button id="name" onclick="change()">name</button>, an amateur coder and aspiring chemical engineering student in Austin. My research area is currently in the [analysis](https://www.biorxiv.org/content/10.1101/2021.10.14.464427v1) of protein images using machine learning and other methods. Aside from that, I have a few sparse projects scattered across my GitHub from high school and robotics. Outside of coding, I enjoy writing, both technical and other, and have previously written on inequities in IRS audit rates among poorer and more diverse areas. Historically, I have done some GIS work for mapping election results, working for a congressional campaign. My past work experience includes technical writing for the Texas government, data management, and tech support. This site, eventually, will serve as a repository for my various projects that I wish to share.

<script>
  function change() {
    var b = document.getElementById("name");
    var names = ["ethan", "hazel", "hazelwood", "hjelfman", "wouldn't you like to know?"];
    const newname = names[Math.floor(Math.random() * names.length)];
    b.innerHTML = newname;
  }
</script>
