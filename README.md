# DENK Tarot

## Install

Refer to https://github.com/fac-17/DENK/wiki/Installation

## User Journey

User visits a page and chooses his ~~fate~~ card, clicking on it. User is then  transferred to a tarot reading side and can see the card and the description.

## Tech Stack used

- Express.js - server
- Handlebars - template engine
- Postgres - database
- Tape, Supertest - testing
- GitHub Project, Wiki
 

## Cool things we've discovered

* We wanted to get random data from our database - we knew we could call our whole database and then use math.random to get a random one, but the challenge was to just query the database for a random entry. We managed to do this by using ORDER BY RANDOM() LIMIT 1

* To output raw HTML use {{{}}}, which is how {{{body}}} works. Eg. {{{tarot.image}}} will render content of tarot.image as html (in our case SVG)

* TEXT in Postgres is like VARCHAR but without limiting length

* Before you play with SVG, read on them

* How to use Whimsical

  * to create flows
  
 ![](https://i.imgur.com/RLlpLjr.png)

* to wireframe

![](https://i.imgur.com/4L3Zokd.png)

* Github Project

![](https://i.imgur.com/ZscYF5l.png)

* GitHub Wiki

https://github.com/fac-17/DENK/wiki

