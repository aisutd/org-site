# Artificial Intelligence Society
The official website of the AIS. We are a student organization at UT Dallas with a mission to increase knowledge of, 
and greater interest in, artificial intelligence within the UT Dallas and local communities.

# Warning to contributors:
Any file you put in this repository (unless its name starts with a dot) will be accessible publicly from aisutd.org UNLESS you explicitly add it to the list of excluded files/directories in _config.yml.

Furthermore, this repository is **PUBLIC!!!** Even if you take care to prevent files being accessible from aisutd.org, anyone who finds this repo can download any files stored here, so don't put anything in this repo that needs to be kept private.

# HTTPS certificate
We have a free certificate from Let's Encrypt, who've partnered with GitHub to support HTTPS for GitHub Pages with custom domains.
Renewals are also free, and the certificate must be renewed every 90 days.

## How to renew the certificate
 _These instructions are intended for a UNIX-like OS where the user has root access._

  Resources:
  - https://certbot.eff.org/docs/install.html
  - https://certbot.eff.org/docs/using.html#manual

  1. Install certbot.
  2. Download `ais-lets-encrypt.tar.gz` from this repository and unpack its contents with `sudo tar -xzf ais-lets-encrypt.tar.gz /etc`.
  3. Execute `sudo certbot renew` (`--manual` might be needed here, not sure!!! I will update this in December when the certificate expires for the first time)
  4. If `--manual` is needed, then execute `sudo certbot renew --manual` and follow the instructions.
      - You can put the `.well-known` folder in the root of this repo -- files inside that directory will be accessible from aisutd.org.
  5. You should be good to go! Let's Encrypt has our certificate and private key, and GitHub will get those resources from them directly.

## License
This website uses the [Minimal Mistakes](http://mmistakes.github.io/minimal-mistakes/) theme and [Bootstrap](http://getbootstrap.com/), which are released under
the MIT license.
