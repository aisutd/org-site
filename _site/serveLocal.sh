#!/bin/bash

cd "$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

help() {
    echo 'You may need to install dependencies.'
    echo 'Try executing the following commands:'
    echo -e '\tcd "'"$(pwd)"'"'
    echo -e '\tsudo apt install ruby ruby-bundler ruby-dev zlib1g zlib1g-dev make gcc g++ && bundle install'
    echo
    echo 'If you run into an error about permission denied, try `sudo chmod -R a+w /var/lib/gems/*` and then try `bundle install` again.'
}

if [[ "$1" == "--help" ]]; then
    echo 'Usage: ./serveLocal.sh [--public]]'
    echo
    echo 'The --public option makes the site accessible from other devices on your LAN.'
    echo
    exit 0
fi

if command -v bundle >/dev/null 2>&1; then
    if [[ "$1" == "--public" ]]; then
        bundle exec jekyll serve --host 0.0.0.0
    else
        bundle exec jekyll serve
    fi

    case $? in
        0|130)
            echo
            exit 0
            ;;
        *)
            help
            exit 1
            ;;
    esac
else
    help
    exit 1
fi
