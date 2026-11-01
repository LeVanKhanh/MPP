"""Search YouTube and print the top results for each query.

Usage: python -I yt_search.py "query one" "query two" [--n 8]
Output per result: id | duration | views | channel | title
Standard library only. Reads the ytInitialData JSON embedded in the results page.
"""
import json
import re
import sys
import urllib.parse
import urllib.request

sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def search(query, limit):
    url = ("https://www.youtube.com/results?search_query="
           + urllib.parse.quote(query) + "&hl=en&gl=GB")
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0", "Accept-Language": "en"})
    html = urllib.request.urlopen(req, timeout=30).read().decode("utf-8", "ignore")
    match = re.search(r"var ytInitialData = (\{.*?\});</script>", html)
    if not match:
        return []

    results = []

    def walk(node):
        if isinstance(node, dict):
            if "videoRenderer" in node:
                v = node["videoRenderer"]
                title = "".join(r.get("text", "") for r in v.get("title", {}).get("runs", []))
                channel = "".join(r.get("text", "") for r in v.get("ownerText", {}).get("runs", []))
                duration = v.get("lengthText", {}).get("simpleText", "")
                views = v.get("viewCountText", {}).get("simpleText", "")
                results.append((v["videoId"], duration, views, channel, title))
            for child in node.values():
                walk(child)
        elif isinstance(node, list):
            for child in node:
                walk(child)

    walk(json.loads(match.group(1)))
    return results[:limit]


def main(argv):
    limit = 8
    if "--n" in argv:
        i = argv.index("--n")
        limit = int(argv[i + 1])
        argv = argv[:i] + argv[i + 2:]
    if not argv:
        print(__doc__)
        return 1
    for query in argv:
        print("##", query)
        try:
            for row in search(query, limit):
                print("  ", " | ".join(row))
        except Exception as exc:  # network errors should not stop the other queries
            print("   ERROR", exc)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
