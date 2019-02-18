# Artificial Intelligence Society
The official website of the AIS. We are a student organization at UT Dallas with a mission to increase knowledge of, 
and greater interest in, artificial intelligence within the UT Dallas and local communities.

# Warning to contributors:
Any file you put in this repository (unless its name starts with a dot) will be accessible publicly from aisutd.org UNLESS you explicitly add it to the list of excluded files/directories in `_config.yml`.

Furthermore, this repository is **PUBLIC!!!** Even if you take care to prevent files being accessible from aisutd.org, anyone who finds this repo can download any files stored here, so don't put anything in this repo that needs to be kept private.

# Branches
This repository has 2 primary branches: master and development. The tip of the master branch is what GitHub publishes to aisutd.org. Therefore, all development work should be done on the development branch. After some number of commits, once the development branch is considered stable, publish it like so:

 - _(Make sure your local copy of the repo is up to date with origin)_
 - `git checkout master`
 - `git merge --no-ff development`
 - `git push`

Feel free to create additional branches off of development for specific tasks or specific contributors. For each sub-branch, incorporate new commits into the parent branch with `git merge --no-ff <sub-branch>` from the parent branch.

# Jekyll options (in \_config.yml)
Some Jekyll options get overwritten by GitHub Pages when publishing the site. Therefore, it is dangerous to define these settings locally because doing so will cause Jekyll to compile differently locally than it compiles on the server.

Avoid defining these Jekyll settings (ESPECIALLY SOURCE!)
```yml
 lsi: false
 safe: true
 source: [your repo's top level directory]
 incremental: false
 highlighter: rouge
 gist:
   noscript: false
 kramdown:
   math_engine: mathjax
   syntax_highlighter: rouge
```

For more information, visit <https://help.github.com/articles/configuring-jekyll/>.

# HTTPS certificate
We have a free certificate from Let's Encrypt, who've partnered with GitHub to support HTTPS for GitHub Pages with custom domains.
GitHub automatically requested the certificate on our behalf, and GitHub automatically renews the certificate every 3 months or so.

## License
This website uses the [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/) theme and [Bootstrap](http://getbootstrap.com/), which are released under
the MIT license.
