"""Check that YouTube video IDs exist and can be embedded.

Usage: python -I yt_verify.py ID1 ID2 ...
Prints "OK  id | channel | title" or "BAD id <reason>" per ID; exits 1 if any ID is bad.
Uses the public oEmbed endpoint, which refuses deleted, private and non-embeddable videos.
"""
import json
import sys
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

OEMBED = "https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v="


def main(ids):
    if not ids:
        print(__doc__)
        return 1
    bad = 0
    for vid in ids:
        try:
            with urllib.request.urlopen(OEMBED + vid, timeout=20) as resp:
                data = json.load(resp)
            print("OK ", vid, "|", data["author_name"], "|", data["title"])
        except Exception as exc:
            bad += 1
            print("BAD", vid, exc)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
