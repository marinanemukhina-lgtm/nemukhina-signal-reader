#!/usr/bin/env python3
"""Validate and package one installable Nemukhina Signal Reader skill."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import re
import shutil

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
NAME = "nemukhina-signal-reader"
VERSION = "v1.1.0"

skill = (ROOT / "SKILL.md").read_text(encoding="utf-8")
assert skill.startswith("---\n"), "Missing YAML frontmatter"
assert re.search(r"(?m)^name: nemukhina-signal-reader$", skill), "Wrong skill ID"
assert re.search(r"(?m)^description: .+", skill), "Missing description"
assert "ADOPT / ADAPT / REFERENCE / BUILD / REJECT" in skill, "Missing canonical Prior Art Gate"
assert "EXPLORE / PROBE / COMBINE / LEVERAGE / WATCH" in skill, "Missing canonical Opportunity Route"
assert (ROOT / "LICENSE").read_text(encoding="utf-8").startswith("Creative Commons Attribution 4.0 International"), "Missing full CC BY 4.0 license"
assert (ROOT / "ATTRIBUTION.md").is_file(), "Missing attribution instructions"

refs = set(re.findall(r"references/[a-z0-9-]+\.md", skill))
for ref in refs:
    assert (ROOT / ref).is_file(), f"Broken reference: {ref}"

files = [ROOT / p for p in ("SKILL.md", "README.md", "LICENSE", "ATTRIBUTION.md")]
files += sorted(p for directory in ("agents", "references") for p in (ROOT / directory).rglob("*") if p.is_file())
assert len(files) >= 16, "Incomplete skill"
DIST.mkdir(exist_ok=True)
archive = DIST / "skill.zip"
with ZipFile(archive, "w", compression=ZIP_DEFLATED, compresslevel=9) as z:
    for path in files:
        z.write(path, arcname=f"{NAME}/{path.relative_to(ROOT).as_posix()}")

with ZipFile(archive) as z:
    assert z.testzip() is None, "Archive corruption"
    names = z.namelist()
    assert names.count(f"{NAME}/SKILL.md") == 1
    assert all(not p.startswith("/") and ".." not in Path(p).parts for p in names)
    assert len(names) == len(files)

named = DIST / f"Nemukhina-Signal-Reader-{VERSION}.zip"
shutil.copyfile(archive, named)
digest = hashlib.sha256(archive.read_bytes()).hexdigest()
print(f"PASS files={len(files)} refs={len(refs)} size={archive.stat().st_size} sha256={digest}")
print(f"ARTIFACT {archive}")
print(f"ARTIFACT {named}")
