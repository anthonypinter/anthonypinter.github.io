# Personal Site

My personal website. [Accessible here.](https://anthonypinter.com)

As my about page says, the original design of this site is lovingly cloned from [Mor Naaman's site](http://mornaaman.com). The structure and coding was wonderful. The original repo for that project can be found [here](https://github.com/sTechLab/mornaaman.com). Mor's site uses Gulp, which I am less familiar with. I also enjoy the functionality that the [IDlab website](https://cmci.colorado.edu/idlab/) (my advisor's lab!) has through Jekyll.

So I pulled Mor's formatting into Jekyll. I'll assume you've already set Ruby and Jekyll up (if you haven't refer to [here](https://jekyllrb.com/docs/installation/) or [here](https://jekyllrb.com/docs/)).

Here's how to do it:

### Clone the project

    git clone https://github.com/anthonypinter/anthonypinter.github.io

### Set-up Jekyll

Wherever you set up that clone, navigate to it and run the following to set up Jekyll....

````
bundle install
````

...and run it on your virtual machine at `http://localhost:4000`.
````
bundle exec jekyll serve
````

Navigating to `http://localhost:4000` should result in a lovely recreation of my site.

## What matters in this repo?

The following files are important. They'll be the ones you want to change to make your site look more like you and less like me.

* `_data/news.yml` and `_data/publications.yml` are data files that house my news and publications, respectively. Both have templates of the structure at the top that you can replicate.
* `_includes/head.html` has the meta information for the site. You'll want to change my name.
* `/assets` is where you'll want to house pictures, my CV, and publication PDFs (the last category lives in `/assets/papers`).
* `/js/main.js` is where the CSS for the site is (see below for an explanation of my blasphemous web design choice here).
* `_config.yml` has some information about the site in it that you'll want to adjust.
* `404.html` is a bit weird -- it has a standalone version of `head.html` in it (again, too lazy to figure out why that is). Anything you do to `head.html`, you'll want to do here as well. It also has a standalone version of the left side bar (the one with the picture). So adjust that if you adjust it in `index.html`.
* `index.html` is where the magic happens. All three of my "pages" are housed in this file. The first `div class="card"` is the home page, the second is the "about me", and the third is the publications. Adjust with your own content.

## A note about my CSS choices

In the switchover from Gulp based compiler to Jekyll, I was lazy. The css and scss files located in `/css` don't do anything. Ignore them.

Instead, the CSS is inconveniently housed in `/js/main.js` on **line 83**. In a more heavy duty production, this would be a nightmare. However, for a 4-5 page, mostly static site... idgaf. Do with this what you will (but if you have working knowledge of JS... which I don't... and happen to fix this so that it references a standalone CSS/SCSS file please do let me know).
