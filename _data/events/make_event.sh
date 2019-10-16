#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

eventTypes=("talk" "workshop" "competition")

read -p 'Event name (no double quotes): ' name
read -p 'Date: ' date
read -p 'Time: ' time
read -p 'Location: ' location
read -p 'Location link: ' link

PS3='What type of event is this? '
select opt in "${eventTypes[@]}"; do
    for f in "${eventTypes[@]}"; do
        if [[ "$opt" == "$f" ]]; then
            eventType="$opt"
            break
        elif [[ "$REPLY" == "$f" ]]; then
            eventType="$REPLY"
            break
        fi
    done

    if [[ "$eventType" != "" ]]; then
        break
    fi
done
read -p 'Filename (avoid spaces) (without extension): ' filename

index=$(( 1 + $({ grep -R 'index: ' "$DIR/${eventType}s/"* || echo 'index: -1'; } | cut -d: -f3 | sort -rn | head -n 1) ))

(
    echo 'name: "'"$name"'"'
    echo 'date: '"$date"
    echo 'time: '"$time"
    echo 'location: '"$location"
    echo 'location_link: '"$link"
    echo 'category: '"$eventType"
    echo 'index: '"$index"
    echo 'description: '
) >"$DIR/${eventType}s/$filename.yml"

nano +8,14 "$DIR/${eventType}s/$filename.yml"
