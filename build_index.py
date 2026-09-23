"""Generate articles.js for the homepage."""
import datetime
import html as htmlmod
import json
import pathlib
import re
import subprocess

ROOT = pathlib.Path(__file__).resolve().parent
ART = ROOT / "articles"
OUT = ROOT / "articles.js"


def rel(p):
    return p.relative_to(ROOT).as_posix()


def read_html_meta(p):
    s = p.read_text(encoding="utf-8", errors="replace")

    def meta(name):
        m = re.search(r'<meta\s+name="%s"\s+content="([^"]*)"' % re.escape(name), s, re.I)
        return htmlmod.unescape(m.group(1)).strip() if m else None

    t = re.search(r"<title>(.*?)</title>", s, re.S | re.I)
    keywords = meta("keywords") or ""
    return {
        "title": htmlmod.unescape(t.group(1)).strip() if t else p.stem,
        "summary": meta("description"),
        "tags": [x.strip() for x in keywords.split(",") if x.strip()],
        "source_url": meta("source"),
        "date": meta("date"),
    }


def git_added_date(p):
    try:
        r = subprocess.run(
            ["git", "log", "--diff-filter=A", "--follow", "--format=%as", "--", rel(p)],
            cwd=ROOT, capture_output=True, text=True, timeout=30,
        )
        lines = [x for x in r.stdout.strip().splitlines() if x]
        return lines[-1] if lines else None
    except Exception:
        return None


def build_entry(index_file, folder):
    meta = {}
    if folder is not None and (folder / "meta.json").exists():
        meta = json.loads((folder / "meta.json").read_text(encoding="utf-8"))
    fb = read_html_meta(index_file)
    date = (meta.get("date") or fb.get("date") or git_added_date(index_file)
            or datetime.date.fromtimestamp(index_file.stat().st_mtime).isoformat())
    source = meta.get("source")
    if source is None and fb.get("source_url"):
        source = {"url": fb["source_url"]}
    extras = []
    for e in meta.get("extras", []):
        f = e.get("file")
        if not f:
            continue
        target = (folder if folder is not None else index_file.parent) / f
        if target.exists():
            extras.append({"label": e.get("label", f), "path": rel(target)})
    return {
        "slug": folder.name if folder is not None else index_file.stem,
        "path": rel(index_file),
        "title": meta.get("title") or fb["title"],
        "summary": meta.get("summary") or fb.get("summary") or "",
        "source": source,
        "date": date,
        "tags": meta.get("tags") or fb.get("tags") or [],
        "formats": meta.get("formats") or [],
        "course": meta.get("course"),
        "extras": extras,
    }


def main():
    entries = []
    if ART.exists():
        for child in sorted(ART.iterdir()):
            if child.is_dir() and (child / "index.html").exists():
                entries.append(build_entry(child / "index.html", child))
            elif child.is_file() and child.suffix.lower() == ".html":
                entries.append(build_entry(child, None))
    entries.sort(key=lambda e: (e["date"], e["slug"]), reverse=True)
    payload = {"articles": entries}
    OUT.write_text("window.ARTICLES = " + json.dumps(payload, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print("articles indexed:", len(entries))


if __name__ == "__main__":
    main()
