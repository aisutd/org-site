# Artificial Intelligence Society
The official website of the AIS. We are a student organization at UT Dallas with a mission to increase knowledge of, 
and greater interest in, artificial intelligence within the UT Dallas and local communities.

# Warning to contributors:
Any file you put in this repository (unless its name starts with a dot) will be accessible publicly from aisutd.org UNLESS you explicitly add it to the list of excluded files/directories in `_config.yml`.

Furthermore, this repository is **PUBLIC!!!** Even if you take care to prevent files being accessible from aisutd.org, anyone who finds this repo can download any files stored here, so don't put anything in this repo that needs to be kept private.

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
