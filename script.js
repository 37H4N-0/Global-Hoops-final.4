// MASTER PERFORMANCE ARCHIVE (PROGRAMMATICALLY EXPANDED TO 500 BASKETBALL SHOES WITH DETAILED COLOR MAPS)
const baseSignatureTemplates = [
    { brand: "NIKE", line: "KOBE SERIES", baseName: "KOBE 6 PROTRO", athlete: "KOBE BRYANT", type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + CUSHLON FOAM + MICRO-HERRINGBONE" },
    { brand: "NIKE", line: "KOBE SERIES", baseName: "KOBE 8 PROTRO", athlete: "KOBE BRYANT", type: "SIGNATURE", tech: "REACT DROP-IN MIDSOLE + ENGINEERED MESH UPPER" },
    { brand: "NIKE", line: "KOBE SERIES", baseName: "KOBE 4 PROTRO", athlete: "KOBE BRYANT", type: "SIGNATURE", tech: "HEEL ZOOM AIR + PHYLON DECK + PREMIUM SUEDE SHELL" },
    { brand: "NIKE", line: "KOBE SERIES", baseName: "KOBE 5 PROTRO", athlete: "KOBE BRYANT", type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + REINFORCED COUNTER" },
    { brand: "NIKE", line: "LEBRON SERIES", baseName: "LEBRON 21", athlete: "LEBRON JAMES", type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + 13MM HEEL ZOOM AIR + CUSHLON 2.0" },
    { brand: "NIKE", line: "LEBRON SERIES", baseName: "LEBRON 22", athlete: "LEBRON JAMES", type: "SIGNATURE", tech: "MIDSOLE CUSHLON CELL + SPEED COMPRESSION UNITS" },
    { brand: "NIKE", line: "KD SERIES", baseName: "KD 17", athlete: "KEVIN DURANT", type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR STROBEL + TPU SUPPORT ENVELOPE CAGE" },
    { brand: "NIKE", line: "KD SERIES", baseName: "KD 16", athlete: "KEVIN DURANT", type: "SIGNATURE", tech: "HEEL AIR SOLE + FOREFOOT ZOOM AIR + AIR STROBEL LAYER" },
    { brand: "NIKE", line: "JA SERIES", baseName: "JA 1", athlete: "JA MORANT", type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR + PHYLON ENGINE + SIDEWALL STABILIZERS" },
    { brand: "NIKE", line: "SABRINA SERIES", baseName: "SABRINA 2", athlete: "SABRINA IONESCU", type: "SIGNATURE", tech: "CUSHLON 3.0 COMPOUND + HIGH-VELOCITY FOREFOOT ZOOM UNIT" },
    { brand: "JORDAN BRAND", line: "TATUM SERIES", baseName: "TATUM 2", athlete: "JAYSON TATUM", type: "SIGNATURE", tech: "FULL-LENGTH AIR STROBEL + STRUCTURAL EXOSKELETON CORE" },
    { brand: "JORDAN BRAND", line: "LUKA SERIES", baseName: "LUKA 3", athlete: "LUKA DONCIC", type: "SIGNATURE", tech: "ISO-PLATE SEGMENT COUPLING + COMPLETE FORMULA 23 CORE" },
    { brand: "JORDAN BRAND", line: "ZION SERIES", baseName: "ZION 3", athlete: "ZION WILLIAMSON", type: "SIGNATURE", tech: "FORMULA 23 DROP-IN + FOREFOOT ZOOM AIR CHASSIS ASSEMBLY" },
    { brand: "JORDAN BRAND", line: "AIR JORDAN SE", baseName: "AIR JORDAN 39", athlete: "MICHAEL JORDAN", type: "SIGNATURE", tech: "FULL LENGTH ZOOM STROBEL + CORE COMPLETE INJECTED ZOOM FOAM" },
    { brand: "ADIDAS", line: "AE SERIES", baseName: "AE 1", athlete: "ANTHONY EDWARDS", type: "SIGNATURE", tech: "JET BOOST RUNTIME CELLS + STABILIZING TPU PARABOLIC HULL" },
    { brand: "ADIDAS", line: "HARDEN SERIES", baseName: "HARDEN VOL. 8", athlete: "JAMES HARDEN", type: "SIGNATURE", tech: "FULL INTERNAL BOOTIE STRUTS + HIGH-DENSITY SIDE WALLS" },
    { brand: "ADIDAS", line: "DON ISSUE SERIES", baseName: "DON ISSUE 6", athlete: "DONOVAN MITCHELL", type: "SIGNATURE", tech: "LIGHTSTRIKE PRO ENERGY CONVERSION + INTERNAL HEEL ANCHOR HARNESS" },
    { brand: "PUMA", line: "MB SERIES", baseName: "MB.03", athlete: "LAMELO BALL", type: "SIGNATURE", tech: "NITRO INFUSED FOAM RUNTIME + SLIME-WRAP HIGH TRACTION RADIAL" },
    { brand: "LI-NING", line: "WAY OF WADE", baseName: "WAY OF WADE 11", athlete: "DWYANE WADE", type: "NICHE INTERNATIONAL", tech: "UPGRADED PEBA BOOM FLUID DOCKS + WRAPPED TORSION ARCHWAYS" },
    { brand: "ANTA", line: "KAI SERIES", baseName: "KAI 1", athlete: "KYRIE IRVING", type: "NICHE INTERNATIONAL", tech: "NITROEDGE RESPONSIVE FOAM SEED FILL + MIDFOOT SHANK TORSION" }
];

const designColorways = [
    { name: "REVERSE GRINCH", primary: "#E00000", secondary: "#A00000", text: "#FFFFFF" },
    { name: "HALO WHITE", primary: "#FFFFFF", secondary: "#EAEAEA", text: "#111111" },
    { name: "GIRL DAD FOREST", primary: "#2E5A44", secondary: "#1C3B2B", text: "#FFFFFF" },
    { name: "BRUCE LEE YELLOW", primary: "#FFCC00", secondary: "#111111", text: "#FFFFFF" },
    { name: "MAMBACITA NOIR", primary: "#111111", secondary: "#333333", text: "#FFFFFF" },
    { name: "COURT PURPLE ELITE", primary: "#4B0082", secondary: "#111111", text: "#FFFFFF" },
    { name: "SUNRISE ORANGE", primary: "#FF7E5F", secondary: "#FEB47B", text: "#111111" },
    { name: "AUNT PEARL PINK", primary: "#FFB6C1", secondary: "#FF69B4", text: "#FFFFFF" },
    { name: "VELOCITY ELECTRIC BLUE", primary: "#0055A5", secondary: "#002855", text: "#FFFFFF" },
    { name: "FLAMINGO GLOW", primary: "#FF8DA1", secondary: "#222222", text: "#FFFFFF" },
    { name: "ARTIST ON COURT METALLIC", primary: "#301934", secondary: "#FFD700", text: "#FFFFFF" },
    { name: "MATADOR CRIMSON", primary: "#800020", secondary: "#D4AF37", text: "#FFFFFF" },
    { name: "NEBULA PASTEL", primary: "#E0B0FF", secondary: "#7DF9FF", text: "#111111" },
    { name: "MINT CONDITION", primary: "#98FF98", secondary: "#00A86B", text: "#111111" },
    { name: "STEALTH BLACKOUT", primary: "#0A0A0A", secondary: "#1F1F1F", text: "#FFFFFF" },
    { name: "GOLDEN EMPIRE", primary: "#D4AF37", secondary: "#111111", text: "#FFFFFF" },
    { name: "CARBON INFUSED ICE", primary: "#E0F7FA", secondary: "#80DEEA", text: "#111111" },
    { name: "CYBERPUNK NEON", primary: "#330066", secondary: "#00FFCC", text: "#FFFFFF" },
    { name: "RED BLAST FLAME", primary: "#FF2400", secondary: "#FF6347", text: "#FFFFFF" },
    { name: "VORTEX TEAL", primary: "#00A896", secondary: "#FF6B6B", text: "#FFFFFF" },
    { name: "SILVER BULLET", primary: "#B0B0B0", secondary: "#707070", text: "#111111" },
    { name: "DESERT STORM SAND", primary: "#EDC9AF", secondary: "#A0522D", text: "#111111" },
    { name: "DEEP AQUA OCEAN", primary: "#008080", secondary: "#004D4D", text: "#FFFFFF" },
    { name: "ROYAL LUXURY", primary: "#002366", secondary: "#D4AF37", text: "#FFFFFF" },
    { name: "INFRARED CORE", primary: "#FF0033", secondary: "#000000", text: "#FFFFFF" }
];

// DATA STRUCTURAL ENGINE GENERATOR LOOP
const shoeDatabase = [];
let databaseIdCounter = 1;

for (let i = 0; i < 500; i++) {
    const template = baseSignatureTemplates[i % baseSignatureTemplates.length];
    const colorway = designColorways[i % designColorways.length];
    
    // Generates structural variety parameters dynamically based on iteration depth
    const iterationTier = Math.floor(i / baseSignatureTemplates.length);
    const editionSuffix = iterationTier === 0 ? "" : ` (V${iterationTier + 1})`;
    const adjustedPrice = Math.round((100 + ((i * 7) % 135)) / 5) * 5; 
    
    // Calculates calendar distribution dates running through late 2026
    const baseYear = 2024 + Math.floor(i / 200);
    const calculatedMonth = String(1 + (Math.floor(i / 16) % 12)).padStart(2, '0');
    const calculatedDay = String(1 + (i % 28)).padStart(2, '0');
    const calculatedReleaseDate = `${baseYear}-${calculatedMonth}-${calculatedDay}`;

    shoeDatabase.push({
        id: databaseIdCounter++,
        brand: template.brand,
        line: template.line,
        name: `${template.baseName}${editionSuffix}`,
        athlete: template.athlete,
        colorway: `${colorway.name}`,
        price: adjustedPrice,
        type: template.type,
        tech: template.tech,
        date: calculatedReleaseDate,
        colorMap: {
            primary: colorway.primary,
            secondary: colorway.secondary,
            text: colorway.text
        }
    });
}

// APPLICATION MANAGEMENT STATE
let locker = JSON.parse(localStorage.getItem('ghLocker')) || [];
let compareList = [];
let currentFilter = "ALL";
let visibleItemsCount = 12; // Adjusted higher for scalability viewport optimization

// METRIC TICK SYSTEM TIME TRACKER
function runSystemClock() {
    setInterval(() => {
        const timeStr = new Date().toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const clockEl = document.getElementById('system-clock');
        if(clockEl) clockEl.innerText = timeStr;
    }, 1000);
}

function getSystemDateString() {
    return new Date().toISOString().split('T')[0];
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + pageId).classList.add('active');
    window.scrollTo(0,0);
    
    if(pageId === 'collection') { resetAndRenderArchive(); }
    if(pageId === 'calendar') renderCalendar();
    if(pageId === 'locker') renderLocker();
}

// GENERATES REDESIGNED COLOR-MAPPED BADGE EMBED FROM METADATA
function generateBrandBadgeMarkup(shoe) {
    const cm = shoe.colorMap || { primary: "#222222", secondary: "#444444", text: "#FFFFFF" };
    return `
        <div class="brand-badge-container" style="--primary-color: ${cm.primary}; --secondary-color: ${cm.secondary}; --text-color: ${cm.text};">
            <div class="badge-top-brand">${shoe.brand}</div>
            <div class="badge-center-signature" style="font-size: 1.6rem;">${shoe.name}</div>
            <div style="font-size: 0.55rem; font-weight: 900; opacity: 0.85; margin-top:-5px; margin-bottom: 10px; letter-spacing:1px;">SIGNATURE: ${shoe.athlete}</div>
            <div class="badge-bottom-colorway">${shoe.colorway}</div>
        </div>
    `;
}

function createCard(shoe) {
    const isFav = locker.includes(shoe.id);
    const isComp = compareList.includes(shoe.id);

    const card = document.createElement('div');
    card.className = 'shoe-card';
    card.onclick = () => openModal(shoe);
    card.innerHTML = `
        <div style="position: relative;">
            <button class="fav-btn ${isFav?'active':''}" onclick="toggleLocker(${shoe.id},event)">${isFav?'♥':'♡'}</button>
            <button class="comp-btn ${isComp?'active':''}" onclick="toggleCompare(${shoe.id},event)">VS</button>
            ${generateBrandBadgeMarkup(shoe)}
        </div>
        <p style="color:var(--accent); font-weight:900; font-size:0.6rem; margin-top:12px; letter-spacing:1px;">${shoe.line} // ${shoe.type}</p>
        <div class="shoe-name" style="font-weight:900; font-size:0.85rem; line-height:1.2;">${shoe.brand} ${shoe.name}</div>
    `;
    return card;
}

function resetAndRenderArchive() {
    visibleItemsCount = 12; 
    renderArchive();
}

function renderArchive() {
    const grid = document.getElementById('archive-grid');
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (!grid) return;
    
    const query = document.getElementById('search-bar').value.toLowerCase();
    const todayStr = getSystemDateString();
    
    let controls = document.querySelector('.filter-subnav');
    if (!controls) {
        controls = document.createElement('div');
        controls.className = 'filter-subnav';
        controls.style.cssText = "padding: 15px 5%; display:flex; gap:10px; flex-wrap:wrap; background:var(--grey-light);";
        controls.innerHTML = `
            <button onclick="setArchiveFilter('ALL')" class="filter-tier-btn">ALL TIERS</button>
            <button onclick="setArchiveFilter('SIGNATURE')" class="filter-tier-btn">SIGNATURE</button>
            <button onclick="setArchiveFilter('NICHE INTERNATIONAL')" class="filter-tier-btn">NICHE & INT</button>
        `;
        document.getElementById('main-header').appendChild(controls);
    }

    const releasedShoes = shoeDatabase.filter(shoe => shoe.date <= todayStr);
    const matches = releasedShoes.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(query) || s.brand.toLowerCase().includes(query) || s.colorway.toLowerCase().includes(query) || s.line.toLowerCase().includes(query) || s.athlete.toLowerCase().includes(query);
        const matchesCategory = (currentFilter === "ALL" || s.type === currentFilter);
        return matchesSearch && matchesCategory;
    });

    grid.innerHTML = '';
    const sliceToDisplay = matches.slice(0, visibleItemsCount);
    sliceToDisplay.forEach(s => grid.appendChild(createCard(s)));

    if (loadMoreBtn) {
        loadMoreBtn.style.display = (visibleItemsCount >= matches.length) ? 'none' : 'block';
    }

    if(matches.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:50px; opacity:0.5; font-weight:900;">NO RELEASES RECOVERED.</div>';
    }
}

function loadMoreShoes() {
    visibleItemsCount += 12; 
    renderArchive();
}

function setArchiveFilter(tier) {
    currentFilter = tier;
    resetAndRenderArchive();
}

function renderCalendar() {
    const list = document.getElementById('calendar-list');
    if (!list) return;
    list.innerHTML = '';
    const todayStr = getSystemDateString();

    const upcomingDrops = shoeDatabase.filter(shoe => shoe.date > todayStr)
                                      .sort((a,b) => new Date(a.date) - new Date(b.date));
    
    if(upcomingDrops.length === 0) {
        list.innerHTML = '<div style="text-align:center; padding:100px 0; opacity:0.5; font-weight:900;">NO FUTURE TRACKED ENTRIES IN PIPELINE.</div>';
        return;
    }

    upcomingDrops.slice(0, 40).forEach(shoe => {
        const dateParts = shoe.date.split('-');
        const cm = shoe.colorMap || { primary: "#222", secondary: "#444", text: "#fff" };
        const item = document.createElement('div');
        item.className = 'calendar-item';
        item.innerHTML = `
            <div class="calendar-date">${dateParts[2]}<br><span style="font-size:0.7rem; color:var(--black)">MON ${dateParts[1]}</span></div>
            <div style="width:160px;">
                <div class="brand-badge-container" style="height:110px; padding:10px 5px; font-size:0.5rem; --primary-color: ${cm.primary}; --secondary-color: ${cm.secondary}; --text-color: ${cm.text};">
                    <div style="font-size:0.6rem; font-weight:900; letter-spacing:1px;">${shoe.brand}</div>
                    <div style="font-size:0.9rem; font-weight:900; line-height:1; margin:4px 0;">${shoe.name}</div>
                    <div style="font-size:0.45rem; font-weight:900; opacity:0.8;">${shoe.colorway}</div>
                </div>
            </div>
            <div style="flex-grow:1; margin-left:20px;">
                <span style="font-size:0.6rem; background:var(--black); color:white; padding:3px 6px; font-weight:900;">${shoe.type}</span>
                <div style="font-weight:900; font-size:1.1rem; margin-top:5px;">ATHLETE: ${shoe.athlete}</div>
                <div style="color:var(--accent); font-weight:900; font-size:0.8rem;">${shoe.brand} // ${shoe.line}</div>
            </div>
            <button class="explore-btn" style="border-color:var(--black); color:var(--black); margin-left:auto; font-size:0.7rem; padding:8px 16px;" onclick="openModalById(${shoe.id})">SPECS</button>
        `;
        list.appendChild(item);
    });
}

function renderLocker() {
    const grid = document.getElementById('locker-grid');
    if (!grid) return;
    grid.innerHTML = '';
    const saved = shoeDatabase.filter(s => locker.includes(s.id));
    saved.length ? saved.forEach(s => grid.appendChild(createCard(s))) : grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; opacity:0.5; padding:100px 0; font-weight:900;">YOUR STORAGE COMPARTMENT IS VACANT.</div>';
}

function initHero() {
    if(shoeDatabase.length === 0) return;
    const releasedShoes = shoeDatabase.filter(s => s.date <= getSystemDateString());
    const shoe = releasedShoes.length ? releasedShoes[0] : shoeDatabase[0];
    
    document.getElementById('featured-hero').innerHTML = `
        <div class="hero-content">
            <div class="hero-text">
                <h3>DAILY MATRIX SPOTLIGHT</h3>
                <h4 style="color:var(--accent); margin:0; font-weight:900;">${shoe.line}</h4>
                <h2>${shoe.brand} ${shoe.name}</h2>
                <button class="explore-btn" onclick="showPage('collection')">EXPLORE REPOSITORY</button>
            </div>
            <div>
                ${generateBrandBadgeMarkup(shoe)}
            </div>
        </div>
    `;
}

function toggleLocker(id, e) {
    e.stopPropagation();
    const idx = locker.indexOf(id);
    idx > -1 ? locker.splice(idx, 1) : locker.push(id);
    localStorage.setItem('ghLocker', JSON.stringify(locker));
    document.getElementById('locker-count').innerText = locker.length;
    if (document.getElementById('page-collection').classList.contains('active')) renderArchive();
    if (document.getElementById('page-locker').classList.contains('active')) renderLocker();
}

// MANAGEMENT ENGINE HOOKS FOR FILTER SELECTION MAPS
function toggleCompare(id, e) {
    e.stopPropagation();
    const idx = compareList.indexOf(id);
    if (idx > -1) compareList.splice(idx, 1);
    else if (compareList.length < 2) compareList.push(id);
    updateCompareTray();
    if (document.getElementById('page-collection').classList.contains('active')) renderArchive();
}

function updateCompareTray() {
    const tray = document.getElementById('compare-tray');
    const slots = document.getElementById('compare-slots');
    tray.classList.toggle('active', compareList.length > 0);
    slots.innerHTML = compareList.map(id => {
        const s = shoeDatabase.find(x => x.id === id);
        const cm = s.colorMap || { primary: "#222", secondary: "#444", text: "#fff" };
        return `
            <div class="slot-badge" style="--primary-color: ${cm.primary}; --secondary-color: ${cm.secondary}; --text-color: ${cm.text};">
                <strong>${s?.name}</strong>
                <span>${s?.colorway}</span>
            </div>
        `;
    }).join('');
}

function openCompareModal() {
    if(compareList.length < 2) return;
    const [s1, s2] = compareList.map(id => shoeDatabase.find(x => x.id === id));
    
    document.getElementById('compare-results').innerHTML = [s1, s2].map(s => `
        <div class="compare-col">
            ${generateBrandBadgeMarkup(s)}
            <h2 style="font-size:1.5rem; font-weight:900; margin:20px 0 10px;">${s.brand} ${s.name}</h2>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>SIGNATURE LINE:</strong> ${s.athlete}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>LINEAGE / SERIES:</strong> ${s.line}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>TECH COMPLIANCE:</strong> ${s.tech}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px; font-size:1.3rem; font-weight:900; color:var(--accent);">MSRP: $${s.price}</p>
        </div>
    `).join('');
    document.getElementById('compare-modal').style.display = 'block';
}

function openModal(shoe) {
    document.getElementById('modal-body').innerHTML = `
        <div>${generateBrandBadgeMarkup(shoe)}</div>
        <div>
            <p style="color:var(--accent); font-weight:900; margin:0;">${shoe.brand} // ${shoe.line}</p>
            <h2 style="font-size:2.2rem; margin:10px 0; font-weight:900; line-height:1.1;">${shoe.name}</h2>
            <p style="text-transform:none; font-weight:900; margin-bottom:5px;">SIGNATURE LINE: ${shoe.athlete}</p>
            <p style="text-transform:none; opacity:0.8; line-height:1.5;">${shoe.tech}</p>
            <div style="display:flex; gap:30px; margin:20px 0;">
                <div><small style="opacity:0.5; font-size:0.65rem;">LOG DATE</small><div style="font-weight:900;">${shoe.date}</div></div>
                <div><small style="opacity:0.5; font-size:0.65rem;">EST VALUE</small><div style="font-weight:900; color:var(--accent);">$${shoe.price}</div></div>
            </div>
            <button class="explore-btn" style="background:var(--black); color:var(--white); width:100%; border:none; padding:15px;" onclick="closeModal()">RETURN</button>
        </div>
    `;
    document.getElementById('modal').style.display = 'block';
}

function openModalById(id) { openModal(shoeDatabase.find(x => x.id === id)); }
function closeModal() { document.getElementById('modal').style.display = 'none'; }
function closeCompareModal() { document.getElementById('compare-modal').style.display = 'none'; }
function clearCompare() { compareList = []; updateCompareTray(); renderArchive(); }

document.getElementById('theme-toggle').onclick = () => {
    document.body.classList.toggle('dark-theme');
    document.getElementById('theme-toggle').innerText = document.body.classList.contains('dark-theme') ? 'LIGHT' : 'DARK';
};

// COLD START RUN ENGINE
initHero();
runSystemClock();
document.getElementById('locker-count').innerText = locker.length;
