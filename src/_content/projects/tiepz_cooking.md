---
title: Cooking of tiepz.com
date: 2019-04-02
summary: Trang món ăn ấy mà, hết ý tưởng thì cứ cái gì vơ được thì làm chứ chả kén chọn, mệt mỏi suy nghĩ lắm chơi hết.
image: /images/projects/tiepz/tiepz.jpg
tags:
- skill:frontend
- skill:ecommerce
- skill:development
- featured
style:
  color-accent: '#e6772e'
  screenshot-shadow: '#e6772e'
  screenshot-offset: '#ffa033'
aside: |
  Năm
  : 2019

  Vai trò
  : Thiết kế phát triển giao diện frontend

  Kiêm luôn
  : Chủ sở hữu, Đầu tư

  Và đồng thời là
  : Full Stack Developer
screenshots:
  homepage:
  - url: /images/projects/tiepz/iphone.jpg
    alt: Home page
  station:
  - url: /images/projects/tiepz/iphone2.jpg
    alt: Station page
  mobile:
  - url: /images/projects/tiepz/iphone3.jpg
    alt: Region page on mobile
---
{% include 'screenshots' with screenshots.homepage
  alignment: 'bleed'
%}

{% include 'aside' %}

[Bradshaw’s Guide][1] is a digital revival of George Bradshaw’s eponymous guide to Britain and Ireland’s nascent railway network as it existed in 1866.

Reproductions of his handbook are over an inch thick; pocket-sized by Victorian standards, but not when compared to our slim wireless companions. This ongoing self-directed project aims to make Bradshaw’s work accessible to a new audience, be they tourists wanting to spend more time on today’s network, or commuters wishing to learn about the places they pass by every day.

{% include 'screenshots' with screenshots.station
  caption: 'Station pages feature photochrom images sourced from the Library of Congress.'
%}

The design seeks to combine the aesthetic of the Victorian era with modern sensibilities. A notable attribute of the original handbook is the use of an eclectic range of typefaces, yet reproducing this online would produce a confusing interface and degrade performance. Seeking a compromise between the two approaches, I settled on combining four typefaces. Trocchi, a bold serif, was used for headings and display copy with Scotch Text, a delicate Scotch roman, for body copy. While not as historically accurate, League Gothic would mimic block lettering used by advertisements in the original guide, with the default system typeface available for labels and interface elements.

Producing content for the guide involved transcribing and correcting copy originating from an automated OCR process. As this copy already exists in the public domain, I released the newly digitised text on [a public GitHub repository][2], alongside the source code for the website.

{% include 'screenshots' with screenshots.mobile
  caption: 'The design is optimised for small screen devices.'
  alignment: 'bleed'
%}

[1]: https://bradshaws.guide
[2]: https://github.com/bradshawsguide

*[OCR]: Optical character recognition
