## Personal Site

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

### Adjust the CSS

In the switchover from Gulp based compiler to Jekyll, I was lazy. The css and scss files located in `/css` don't do anything. Ignore them.

Instead, the CSS is inconveniently housed in `/js/main.js` on **line 83**. In more heavy duty production, this would be a nightmare. However, for a 4-5 page, mostly static site... idgaf. Do with this what you will (but if you have working knowledge of JS... which I don't... and happen to fix this so that it references a standalone CSS/SCSS file please do let me know).
