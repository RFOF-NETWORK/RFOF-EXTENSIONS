# # SMART EXTENSIONS ©RFOF-NETWO – Fraktale Repository‑Struktur
(sub/ & deep/ Mechanik, Fork‑Extensions, Registry, Lizenzbindung)

Dieses Repository verwendet die unendlich skalierbare, fraktale Struktur von #QuantumReady.  
Jede Datei ist ein Einstiegspunkt.  
Jeder Ordner ist ein Erweiterungspunkt.  
Erweiterungen erfolgen ausschließlich über sub/ und deep/.

---

🌐 Root‑Ebene

/
├── index.html  
├── LICENSE.md  
├── registry.json  
├── package.json  
├── pages/  
├── program/  
└── assets/

---

🖥️ Frontend – pages/

```txt
/pages/
    links.html
    math.html
    api.html
    data.html
    modules.html

    sub/
        index.html
        sub/
            index.html
            deep/
                index.html
                deep/
                    ...
        deep/
            index.html
            deep/
                ...

    deep/
        index.html
        deep/
            ...

    blocks/
        index.html
        sub/
            index.html
            deep/
                index.html
        deep/
            index.html

    agents/
        index.html
        sub/
            index.html
        deep/
            index.html
```

---

⚙️ Backend – program/

```txt
/program/
    links/
        index.py
        sub/
            index.py
        deep/
            index.py

    math/
        index.py
        sub/
            index.py
        deep/
            index.py

    api/
        index.py
        sub/
            index.py
        deep/
            index.py

    data/
        index.py
        sub/
            index.py
        deep/
            index.py

    modules/
        index.py
        sub/
            index.py
        deep/
            index.py

    agents/
        index.py
        sub/
            index.py
        deep/
            index.py
```

---

📦 Extensions – sub/ & deep/

- sub/ = Erweiterung eines bestehenden Moduls  
- deep/ = Vertiefung eines bestehenden Moduls  
- Forks dürfen nur sub/ und deep/ hinzufügen  
- Originaldateien dürfen niemals überschrieben werden  

---

🔐 Lizenzbindung

Alle Dateien, Ordner, Blocks und Hashes sind an eine einzige Lizenz gebunden:

- RFOF‑EXTENSION‑LICENSE (REL) v1.0  
- liegt im Root als LICENSE.md  
- wird in registry.json referenziert  
- wird in package.json referenziert  
- jeder Block erhält licenseId: "REL-v1.0"

---

📚 Registry – registry.json

- enthält alle Blocks  
- enthält alle Hashes  
- enthält alle Module  
- enthält die Lizenz‑ID  
- wird von der Website geladen  
- zeigt in jedem Block die Lizenz an

---

🔄 Fork‑Mechanik

Forks dürfen:

- neue Dateien hinzufügen  
- neue Ordner hinzufügen  
- sub/ und deep/ verwenden  

Forks dürfen NICHT:

- bestehende Dateien überschreiben  
- bestehende Ordner löschen  
- LICENSE.md verändern  

---

🧩 Smart‑Contract‑Charakter

Dieses Repository ist ein rechtlich bindendes, fraktales Smart‑Contract‑System:

- jede Änderung ist eine Extension  
- jede Extension ist ein Block  
- jeder Block hat einen Hash  
- jeder Hash ist lizenziert  
- nichts wird überschrieben  
- alles wird erweitert  

---

📌 Navigation

- Root‑Ordner  
- Frontend pages/  
- Backend program/  
- sub/ Mechanik  
- deep/ Mechanik  
- Registry.json  
- Lizenz REL‑v1.0  
- Fork‑Extensions  
`

---

registry.json — vollständiger Vorschlag (abgeleitet aus deiner Repo‑Struktur)

```
{
  "name": "RFOF-EXTENSIONS-registry",
  "version": "1.0.0",
  "license": "RFOF-EXTENSION-LICENSE (REL) v1.0",
  "licenseFile": "LICENSE.md",
  "generatedAt": "2026-06-06T19:09:00Z",
  "blocks": [
    { "id": "root-index", "path": "index.html", "hash": "sha256-0000000000000000000000000000000000000000000000000000000000000000", "licenseId": "REL-v1.0" },

    { "id": "pages-links", "path": "pages/links.html", "hash": "sha256-1111111111111111111111111111111111111111111111111111111111111111", "licenseId": "REL-v1.0" },
    { "id": "pages-math", "path": "pages/math.html", "hash": "sha256-1111111111111111111111111111111111111111111111111111111111111112", "licenseId": "REL-v1.0" },
    { "id": "pages-api", "path": "pages/api.html", "hash": "sha256-1111111111111111111111111111111111111111111111111111111111111113", "licenseId": "REL-v1.0" },
    { "id": "pages-data", "path": "pages/data.html", "hash": "sha256-1111111111111111111111111111111111111111111111111111111111111114", "licenseId": "REL-v1.0" },
    { "id": "pages-modules", "path": "pages/modules.html", "hash": "sha256-1111111111111111111111111111111111111111111111111111111111111115", "licenseId": "REL-v1.0" },

    { "id": "pages-sub-index", "path": "pages/sub/index.html", "hash": "sha256-2222222222222222222222222222222222222222222222222222222222222222", "licenseId": "REL-v1.0" },
    { "id": "pages-sub-sub-index", "path": "pages/sub/sub/index.html", "hash": "sha256-2222222222222222222222222222222222222222222222222222222222222223", "licenseId": "REL-v1.0" },
    { "id": "pages-sub-sub-deep-index", "path": "pages/sub/sub/deep/index.html", "hash": "sha256-2222222222222222222222222222222222222222222222222222222222222224", "licenseId": "REL-v1.0" },

    { "id": "pages-deep-index", "path": "pages/deep/index.html", "hash": "sha256-3333333333333333333333333333333333333333333333333333333333333333", "licenseId": "REL-v1.0" },

    { "id": "pages-blocks-index", "path": "pages/blocks/index.html", "hash": "sha256-4444444444444444444444444444444444444444444444444444444444444444", "licenseId": "REL-v1.0" },
    { "id": "pages-blocks-sub-index", "path": "pages/blocks/sub/index.html", "hash": "sha256-4444444444444444444444444444444444444444444444444444444444444445", "licenseId": "REL-v1.0" },
    { "id": "pages-blocks-sub-deep-index", "path": "pages/blocks/sub/deep/index.html", "hash": "sha256-4444444444444444444444444444444444444444444444444444444444444446", "licenseId": "REL-v1.0" },

    { "id": "pages-agents-index", "path": "pages/agents/index.html", "hash": "sha256-5555555555555555555555555555555555555555555555555555555555555555", "licenseId": "REL-v1.0" },

    { "id": "program-links-index", "path": "program/links/index.py", "hash": "sha256-aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "licenseId": "REL-v1.0" },
    { "id": "program-math-index", "path": "program/math/index.py", "hash": "sha256-bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "licenseId": "REL-v1.0" },
    { "id": "program-api-index", "path": "program/api/index.py", "hash": "sha256-cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc", "licenseId": "REL-v1.0" },
    { "id": "program-data-index", "path": "program/data/index.py", "hash": "sha256-dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd", "licenseId": "REL-v1.0" },
    { "id": "program-modules-index", "path": "program/modules/index.py", "hash": "sha256-eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "licenseId": "REL-v1.0" },
    { "id": "program-agents-index", "path": "program/agents/index.py", "hash": "sha256-ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", "licenseId": "REL-v1.0" }
  ],
  "modules": [
    { "id": "modules-core", "path": "program/modules/index.py", "hash": "sha256-eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", "licenseId": "REL-v1.0" }
  ]
}
```

package.json — aktualisiert mit Registry‑Referenz

```
{
  "name": "RFOF-EXTENSIONS",
  "version": "1.0.0",
  "description": "Fraktales Repo mit sub/deep-Extensions und RFOF-Extension-License.",
  "main": "index.js",
  "scripts": {
    "build": "node scripts/build.js",
    "release": "node scripts/release.js",
    "check:license": "node scripts/check-license.js",
    "generate:registry": "node scripts/generate-registry.js"
  },
  "license": "SEE LICENSE.md",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/RFOF-NETWORK/RFOF-EXTENSIONS.git"
  },
  "abilitychain": {
    "registry": "registry.json",
    "licenseFile": "LICENSE.md",
    "licenseId": "REL-v1.0"
  }
}
```



Node.js Script: scripts/generate-registry.js(scannt die Repo‑Struktur, berechnet SHA256 für jede Datei und schreibt registry.json)

```
// scripts/generate-registry.js
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = process.cwd();
const LICENSE_FILE = 'LICENSE.md';
const OUT = 'registry.json';
const LICENSE_ID = 'REL-v1.0';

function sha256File(filePath) {
  const data = fs.readFileSync(filePath);
  return 'sha256-' + crypto.createHash('sha256').update(data).digest('hex');
}

function walk(dir, base = '') {
  const entries = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    const rel = path.join(base, it.name).replace(/\\/g, '/');
    if (it.isDirectory()) {
      entries.push(...walk(full, rel));
    } else {
      entries.push(rel);
    }
  }
  return entries;
}

function buildRegistry() {
  const files = walk(ROOT);
  const blocks = [];
  const modules = [];

  // filter relevant files (html, py, index.html, index.py)
  files.forEach(f => {
    if (f === OUT || f === LICENSE_FILE) return;
    if (!f.startsWith('pages/') && !f.startsWith('program/') && f !== 'index.html') return;

    const id = f.replace(/[\/\.]/g, '-').replace(/^-+|-+$/g, '');
    const hash = sha256File(path.join(ROOT, f));
    const entry = { id, path: f, hash, licenseId: LICENSE_ID };

    if (f.startsWith('program/')) modules.push(entry);
    else blocks.push(entry);
  });

  const registry = {
    name: 'abilitychain-registry',
    version: '1.0.0',
    license: 'RFOF-EXTENSION-LICENSE (REL) v1.0',
    licenseFile: LICENSE_FILE,
    generatedAt: new Date().toISOString(),
    blocks,
    modules
  };

  fs.writeFileSync(OUT, JSON.stringify(registry, null, 2), 'utf8');
  console.log('registry.json generated with', blocks.length, 'blocks and', modules.length, 'modules');
}

buildRegistry();
```

Deployment‑Schritte (kurz, präzise)1. LICENSE.md im Root belassen.2. package.json aktualisieren (oben).3. scripts/generate-registry.js in scripts/ speichern.4. Lokale Registry erzeugen: node scripts/generate-registry.js.5. index.html + controller.js (aus vorheriger Nachricht) in Root oder /pages/ ablegen.6. Repo pushen — Forks dürfen nur sub/ und deep/ hinzufügen.7. CI/Release: npm run generate:registry && npm run check:license && npm run release.



Hinweise zur Integrität und PR‑Sicherheit

Hashes werden lokal berechnet; registry.json ist die Quelle der Wahrheit für die Website.CI sollte generate-registry ausführen und prüfen, dass alle blocks[].licenseId === REL-v1.0.PRs, die bestehende Pfade ändern oder Dateien überschreiben, müssen automatisch abgelehnt werden.Forks fügen nur sub/ und deep/ hinzu; CI prüft, dass keine Originaldatei verändert wurde.
