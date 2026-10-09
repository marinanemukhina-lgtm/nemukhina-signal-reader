#!/usr/bin/env python3
"""Validate and package one installable Nemukhina Signal Reader skill."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib
import re
import shutil
import json

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
NAME = "nemukhina-signal-reader"
VERSION = "v1.3.0"

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

# Package the same canonical skill; never maintain a second copy of its text.
manifest = json.loads((ROOT / 'plugin/plugin.json').read_text())
mcp = json.loads((ROOT / 'plugin/mcp.json').read_text())
assert manifest['name'] == NAME
assert manifest['version'] == VERSION.removeprefix('v')
interface = manifest['extensions']['com.openai']['interface']
assert len(interface['displayName']) <= 30
assert len(interface['shortDescription']) <= 30
assert len(interface['defaultPrompt']) <= 128
assert 'apps' not in manifest and 'apps' not in manifest['extensions']['com.openai']
assert interface['privacyPolicyURL'] == 'https://nemukhina-signal-reader-mcp.vercel.app/privacy'
assert interface['termsOfServiceURL'] == 'https://nemukhina-signal-reader-mcp.vercel.app/terms'
for entry in ('logo', 'composerIcon'):
    asset = ROOT / 'plugin' / interface[entry].removeprefix('./')
    assert asset.is_file(), f'Missing visual asset: {entry}'
    assert asset.stat().st_size < 5 * 1024 * 1024

server = mcp['mcpServers'][NAME]
assert server['type'] == 'streamable-http'
assert server['url'] == 'https://nemukhina-signal-reader-mcp.vercel.app/mcp'
cases = manifest['extensions']['com.openai']['review']['test_cases']
assert len(cases['positive']) == 5 and len(cases['negative']) == 3
plugin = DIST / f'Nemukhina-Signal-Reader-Plugin-{VERSION}.zip'
with ZipFile(plugin, 'w', compression=ZIP_DEFLATED, compresslevel=9) as z:
    for filename in ('plugin.json', 'mcp.json', 'SUBMISSION.md'):
        z.write(ROOT / 'plugin' / filename, f'{NAME}/{filename}')
    for filename in ('LICENSE', 'ATTRIBUTION.md', 'INSTALL.md', 'PRIVACY.md', 'TERMS.md'):
        z.write(ROOT / filename, f'{NAME}/{filename}')
    for filename in ('REVIEW_PLAN.md', 'DEMO_SCRIPT.md', 'SECURITY_REVIEW.md', 'RELEASE_NOTES.md'):
        z.write(ROOT / 'plugin' / filename, f'{NAME}/{filename}')
    for asset in sorted((ROOT / 'plugin/assets').glob('*.svg')):
        z.write(asset, f'{NAME}/assets/{asset.name}')
    for path in files:
        z.write(path, f'{NAME}/skills/{NAME}/{path.relative_to(ROOT).as_posix()}')
with ZipFile(plugin) as z:
    assert z.testzip() is None
    assert len(z.namelist()) == len(set(z.namelist()))
    assert z.read(f'{NAME}/skills/{NAME}/SKILL.md') == (ROOT / 'SKILL.md').read_bytes()
    for image in ('logo.svg', 'icon.svg'):
        assert f'{NAME}/assets/{image}' in z.namelist()
    for page in ('PRIVACY.md', 'TERMS.md'):
        assert f'{NAME}/{page}' in z.namelist()
    for ref in refs:
        assert z.read(f'{NAME}/skills/{NAME}/{ref}') == (ROOT / ref).read_bytes()
    assert not any('.app.json' in p or '..' in Path(p).parts for p in z.namelist())
checksums = DIST / 'SHA256SUMS.txt'
checksums.write_text(''.join(f'{hashlib.sha256(p.read_bytes()).hexdigest()}  {p.name}\n' for p in (archive, named, plugin)))
print(f'PASS portable plugin {plugin.name}; source skill preserved; 5 positive / 3 negative cases')
