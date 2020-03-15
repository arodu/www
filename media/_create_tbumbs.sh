#!/usr/bin/env bash

ffmpeg -i $1.png $1.jpg
ffmpeg -i $1.jpg -vf scale=iw*300/ih:300 $1.min.jpg
