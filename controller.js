async function loadRegistry() {
    const res = await fetch('registry.json');
    if (!res.ok) throw new Error('registry.json nicht gefunden');
    return await res.json();
}

async function loadLicense() {
    const res = await fetch('LICENSE.md');
    if (!res.ok) return null;
    return await res.text();
}

function detectSubDeep(path) {
    const parts = path.split('/');
    return {
        hasSub: parts.includes('sub'),
        hasDeep: parts.includes('deep')
    };
}

function injectLicenseBadge(container, licenseId) {
    const badge = document.createElement('div');
    badge.className = 'license-badge';
    badge.textContent = `License: ${licenseId} (siehe LICENSE.md)`;
    container.appendChild(badge);
}

function renderSubDeepInfo(block, container) {
    const info = detectSubDeep(block.path);
    const div = document.createElement('div');
    div.className = 'subdeep-info';
    div.innerHTML = `
        <p><strong>sub/:</strong> ${info.hasSub ? 'Ja' : 'Nein'}</p>
        <p><strong>deep/:</strong> ${info.hasDeep ? 'Ja' : 'Nein'}</p>
    `;
    container.appendChild(div);
}

function renderSummary(registry) {
    const el = document.getElementById('summary-content');
    const blocksCount = registry.blocks ? registry.blocks.length : 0;
    const modulesCount = registry.modules ? registry.modules.length : 0;

    el.innerHTML = `
        <p><strong>Lizenz:</strong> ${registry.license || registry.licenseId || 'REL-v1.0'}</p>
        <p><strong>Blocks:</strong> ${blocksCount}</p>
        <p><strong>Module:</strong> ${modulesCount}</p>
    `;
}

function renderBlocks(registry) {
    const container = document.getElementById('blocks');
    container.innerHTML = '';

    (registry.blocks || []).forEach(block => {
        const div = document.createElement('div');
        div.className = 'block';

        div.innerHTML = `
            <h3>${block.id}</h3>
            <p><strong>Pfad:</strong> ${block.path}</p>
            <p><strong>Hash:</strong> ${block.hash}</p>
        `;

        renderSubDeepInfo(block, div);
        injectLicenseBadge(div, block.licenseId || registry.licenseId || 'REL-v1.0');

        container.appendChild(div);
    });
}

function renderModules(registry) {
    const container = document.getElementById('modules');
    container.innerHTML = '';

    (registry.modules || []).forEach(mod => {
        const div = document.createElement('div');
        div.className = 'module';

        div.innerHTML = `
            <h3>${mod.id}</h3>
            <p><strong>Pfad:</strong> ${mod.path}</p>
            <p><strong>Hash:</strong> ${mod.hash}</p>
            <p><strong>Lizenz:</strong> ${mod.license || mod.licenseId || registry.licenseId || 'REL-v1.0'}</p>
        `;

        container.appendChild(div);
    });
}

async function initWebsite() {
    try {
        const registry = await loadRegistry();
        await loadLicense(); // aktuell nur geladen, bei Bedarf im UI nutzbar

        renderSummary(registry);
        renderBlocks(registry);
        renderModules(registry);
    } catch (err) {
        console.error(err);
        const el = document.getElementById('summary-content');
        if (el) el.textContent = 'Fehler beim Laden der Registry.';
    }
}

initWebsite();
