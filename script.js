// MASTER PERFORMANCE ARCHIVE (100 BASKETBALL SHOE DATABASE ARRAY WITH INTEGRATED COLOR MAP ENGINES)
const shoeDatabase = [
    // --- NIKE KOBE LINE (1-15) ---
    { id: 1, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "REVERSE GRINCH", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + CUSHLON FOAM + MICRO-HERRINGBONE", date: "2023-12-15", colorMap: { primary: "#E00000", secondary: "#A00000", text: "#FFFFFF" } },
    { id: 2, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "HALO", price: 180, type: "SIGNATURE", tech: "REACT DROP-IN MIDSOLE + ENGINEERED MESH UPPER", date: "2023-08-23", colorMap: { primary: "#FFFFFF", secondary: "#EAEAEA", text: "#111111" } },
    { id: 3, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "GIRL DAD", price: 190, type: "SIGNATURE", tech: "HEEL ZOOM AIR + PHYLON DECK + PREMIUM SUEDE SHELL", date: "2024-06-07", colorMap: { primary: "#2E5A44", secondary: "#1C3B2B", text: "#FFFFFF" } },
    { id: 4, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "BRUCE LEE", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + REINFORCED COUNTER", date: "2020-11-24", colorMap: { primary: "#FFCC00", secondary: "#111111", text: "#FFFFFF" } },
    { id: 5, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "GRINCH", price: 180, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + POLYURETHANE ISLAND SCALES", date: "2020-12-24", colorMap: { primary: "#A3FF00", secondary: "#7ACC00", text: "#111111" } },
    { id: 6, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "MAMBACITA", price: 190, type: "SIGNATURE", tech: "ZOOM TURBO + CUSHLON FOAM + SNAKESKIN TEXTURED UPPER", date: "2022-05-01", colorMap: { primary: "#111111", secondary: "#333333", text: "#FFFFFF" } },
    { id: 7, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "COURT PURPLE", price: 180, type: "SIGNATURE", tech: "REACT drop-in core + full engineered mesh chassis", date: "2024-02-08", colorMap: { primary: "#4B0082", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 8, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "PHILLY", price: 190, type: "SIGNATURE", tech: "FLYWIRE CABLES + HEEL ZOOM AIR + PHYLON MIDSOLE", date: "2024-04-13", colorMap: { primary: "#0063B1", secondary: "#EF3340", text: "#FFFFFF" } },
    { id: 9, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "EYBL", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO + COMPSIT MATRIX LABS + DEEP GRIP", date: "2020-08-29", colorMap: { primary: "#5D3F6A", secondary: "#A3C1AD", text: "#FFFFFF" } },
    { id: 10, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 8 PROTRO", colorway: "VENICE BEACH", price: 180, type: "SIGNATURE", tech: "DROP IN FULL REACT CORE + TRACTION GRID FLANGES", date: "2024-04-13", colorMap: { primary: "#00A896", secondary: "#F0A202", text: "#FFFFFF" } },
    { id: 11, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "MAMBACITA", price: 180, type: "SIGNATURE", tech: "HEEL ZOOM AIR + GINGHAM TRIBUTE TEXTILES + PHYLON", date: "2023-05-01", colorMap: { primary: "#222222", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 12, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "ALL-STAR", price: 180, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + MICRO-HERRINGBONE HARDWOOD SPLIT", date: "2021-03-08", colorMap: { primary: "#D2143A", secondary: "#111111", text: "#FFFFFF" } },
    { id: 13, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 5 PROTRO", colorway: "CHAOS", price: 180, type: "SIGNATURE", tech: "UPGRADED ZOOM STROBEL DECK + CHASSIS TORSION CONTROLLER", date: "2020-01-03", colorMap: { primary: "#4A0E4E", secondary: "#CCFF00", text: "#FFFFFF" } },
    { id: 14, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 4 PROTRO", colorway: "UNDEFEATED", price: 180, type: "SIGNATURE", tech: "PATENT LEATHER CAPS + HEEL COMPRESSION ZOOM ASSEMBLY", date: "2019-08-24", colorMap: { primary: "#4B5320", secondary: "#000000", text: "#FFFFFF" } },
    { id: 15, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 6 PROTRO", colorway: "DEL SOL", price: 180, type: "SIGNATURE", tech: "POLYURETHANE SCALES + SPEED MATRIX DOCKING FLAPS", date: "2021-06-03", colorMap: { primary: "#111111", secondary: "#FFCC00", text: "#FFFFFF" } },

    // --- NIKE LEBRON LINE (16-28) ---
    { id: 16, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "AKOYA", price: 200, type: "SIGNATURE", tech: "ZOOM TURBO FOREFOOT + 13MM HEEL ZOOM AIR + CUSHLON 2.0", date: "2023-09-28", colorMap: { primary: "#FDF6E2", secondary: "#E6D7B3", text: "#222222" } },
    { id: 17, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 22", colorway: "CROWN JEWEL", price: 200, type: "SIGNATURE", tech: "MIDSOLE CUSHLON CELL + SPEED COMPRESSION UNITS", date: "2025-11-20", colorMap: { primary: "#5A1827", secondary: "#DAA520", text: "#FFFFFF" } },
    { id: 18, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "QUEEN CONCH", price: 200, type: "SIGNATURE", tech: "PERFORATED ZONAL QUILTED UPPER + FULL-LENGTH CUSHLON CORE", date: "2024-02-08", colorMap: { primary: "#F4A261", secondary: "#E76F51", text: "#FFFFFF" } },
    { id: 19, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "TRINITY", price: 200, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + HEEL MAX AIR 180 CHASSIS PACK", date: "2022-10-24", colorMap: { primary: "#700202", secondary: "#FFB612", text: "#FFFFFF" } },
    { id: 20, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "CONCHIOLIN", price: 200, type: "SIGNATURE", tech: "CUSHLON 2.0 ENGINE + TOUGH MATRIX INTERNAL STRAP CABLE", date: "2023-12-19", colorMap: { primary: "#EAEAEA", secondary: "#A0A0A0", text: "#111111" } },
    { id: 21, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "ASW", price: 200, type: "SIGNATURE", tech: "SPHERE LINER APPARATUS + CARBON FIBER SHANK ELEMENT", date: "2023-02-16", colorMap: { primary: "#81D4FA", secondary: "#FFCC80", text: "#111111" } },
    { id: 22, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "DRAGON PEARL", price: 200, type: "SIGNATURE", tech: "360 DEGREES WIRE FRAME ZONAL PACKING + ZOOM STROBEL DECK", date: "2024-05-01", colorMap: { primary: "#FFB7B2", secondary: "#B5EAD7", text: "#111111" } },
    { id: 23, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN", colorway: "AMPLIFIED", price: 160, type: "SIGNATURE", tech: "FOREFOOT ZOOM TURBO + OPEN MESH ARMED EXOSKELETON", date: "2023-03-05", colorMap: { primary: "#FF3366", secondary: "#33CCFF", text: "#FFFFFF" } },
    { id: 24, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 20", colorway: "DEBUT", price: 200, type: "SIGNATURE", tech: "AIR STROBEL LINING + REINFORCED HEEL STABILITY FLAPS", date: "2022-12-12", colorMap: { primary: "#FFFFFF", secondary: "#FFB612", text: "#111111" } },
    { id: 25, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 21", colorway: "BLUE DIVER", price: 200, type: "SIGNATURE", tech: "HYDRO-TACTILE LEATHER PACKING + FOREFOOT ZOOM TURBO STRUTS", date: "2024-03-15", colorMap: { primary: "#005F73", secondary: "#0A9396", text: "#FFFFFF" } },
    { id: 26, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 18", colorway: "REFLECTIONS", price: 200, type: "SIGNATURE", tech: "FULL LENGTH MAX AIR COUPLING + INTERTWINED ZOOM POD ENGINE", date: "2020-09-21", colorMap: { primary: "#3D3D3D", secondary: "#9B9B9B", text: "#FFFFFF" } },
    { id: 27, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON NXXT GEN", colorway: "GLITCH", price: 160, type: "SIGNATURE", tech: "PHYLON SUPPORT FRAMEWAYS + CHASSIS DIRECTIONAL TREAD", date: "2023-06-18", colorMap: { primary: "#934B93", secondary: "#00FFCC", text: "#FFFFFF" } },
    { id: 28, brand: "NIKE", line: "LEBRON SERIES", name: "LEBRON 19", colorway: "SPACE JAM", price: 200, type: "SIGNATURE", tech: "360 DEGREE DUAL MAX AIR SEED CHASSIS + TPU SHIELD", date: "2021-12-18", colorMap: { primary: "#1E3F66", secondary: "#E28743", text: "#FFFFFF" } },

    // --- NIKE KD LINE (29-38) ---
    { id: 29, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "SUNRISE", price: 150, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR STROBEL + TPU SUPPORT ENVELOPE CAGE", date: "2024-05-17", colorMap: { primary: "#FF7E5F", secondary: "#FEB47B", text: "#111111" } },
    { id: 30, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "AUNT PEARL", price: 160, type: "SIGNATURE", tech: "HEEL AIR SOLE + FOREFOOT ZOOM AIR + AIR STROBEL LAYER", date: "2023-10-27", colorMap: { primary: "#FFB6C1", secondary: "#FF69B4", text: "#FFFFFF" } },
    { id: 31, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "BREGMAN PROMO", price: 160, type: "SIGNATURE", tech: "UPGRADED TPU LATERAL FLANGES + FOREFOOT AIR STROBEL WRAP", date: "2024-07-12", colorMap: { primary: "#333399", secondary: "#FF6600", text: "#FFFFFF" } },
    { id: 32, brand: "NIKE", line: "KD SERIES", name: "KD 15", colorway: "PRODUCER SERIES", price: 150, type: "SIGNATURE", tech: "FULL ZOOM STROBEL DECK + CUSHLON CORES + SIDE COUNTERS", date: "2022-07-22", colorMap: { primary: "#6A0DAD", secondary: "#00FFFF", text: "#FFFFFF" } },
    { id: 33, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "BARKA", price: 160, type: "SIGNATURE", tech: "AIR STROBEL INNER MATRIX + SIDE THERMOPLASTIC RADIAL GEAR", date: "2023-11-15", colorMap: { primary: "#000080", secondary: "#FFD700", text: "#FFFFFF" } },
    { id: 34, brand: "NIKE", line: "KD SERIES", name: "KD 14", colorway: "KYACHU", price: 150, type: "SIGNATURE", tech: "MIDFOOT GRIP COWL OVERLAY STRAP + ZOOM STROBEL INTERIOR", date: "2021-04-14", colorMap: { primary: "#FF0033", secondary: "#000000", text: "#FFFFFF" } },
    { id: 35, brand: "NIKE", line: "KD SERIES", name: "KD 17", colorway: "METALLIC GOLD", price: 150, type: "SIGNATURE", tech: "CUSHLON MATRIX COMPONENT VENTS + REINFORCED STROBEL PACK", date: "2024-08-01", colorMap: { primary: "#D4AF37", secondary: "#111111", text: "#FFFFFF" } },
    { id: 36, brand: "NIKE", line: "KD SERIES", name: "KD 15", colorway: "AUNT PEARL", price: 150, type: "SIGNATURE", tech: "FULL LENGTH ZOOM DECK STRUTS + MESH VENTILATOR ENGINES", date: "2022-11-18", colorMap: { primary: "#FFC0CB", secondary: "#FFFFFF", text: "#222222" } },
    { id: 37, brand: "NIKE", line: "KD SERIES", name: "KD 16", colorway: "EASY MONEY", price: 160, type: "SIGNATURE", tech: "ZOOM FORWARD DRIVE UNITS + MIDFOOT SHANK PLATES TORSION", date: "2023-09-08", colorMap: { primary: "#85BB65", secondary: "#111111", text: "#FFFFFF" } },
    { id: 38, brand: "NIKE", line: "KD SERIES", name: "KD 14", colorway: "SURREALISM", price: 150, type: "SIGNATURE", tech: "CROSS PANEL RETENTION STRAP SYSTEM + PHYLON DECK ASSEMBLIES", date: "2021-07-10", colorMap: { primary: "#E6A8D7", secondary: "#5B92E5", text: "#FFFFFF" } },

    // --- NIKE JA & SABRINA & BOOK LINES (39-50) ---
    { id: 39, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "HUNGER", price: 110, type: "SIGNATURE", tech: "FOREFOOT ZOOM AIR + PHYLON ENGINE + SIDEWALL STABILIZERS", date: "2023-05-25", colorMap: { primary: "#FF2400", secondary: "#0080FF", text: "#FFFFFF" } },
    { id: 40, brand: "NIKE", line: "JA SERIES", name: "JA 2", colorway: "NIGHTMARE", price: 120, type: "SIGNATURE", tech: "RE-ENGINEERED COMPRESSION ZOOM + DYNAMIC LOCK PANEL", date: "2024-10-25", colorMap: { primary: "#A30000", secondary: "#111111", text: "#FFFFFF" } },
    { id: 41, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "SCRAPBOOK", price: 110, type: "SIGNATURE", tech: "PHYLON CUSHION BED + DEEP HERRINGBONE HARDWOOD OUTSOLE", date: "2023-11-03", colorMap: { primary: "#4682B4", secondary: "#FF8C00", text: "#FFFFFF" } },
    { id: 42, brand: "NIKE", line: "JA SERIES", name: "JA 1", colorway: "CHINESE NEW YEAR", price: 120, type: "SIGNATURE", tech: "ZOOM COMPRESSION RADIAL + EMBOSSED SIDE WALL COUNTER FRAMES", date: "2024-01-22", colorMap: { primary: "#D4AF37", secondary: "#AF002A", text: "#FFFFFF" } },
    { id: 43, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1", colorway: "IONIC", price: 130, type: "SIGNATURE", tech: "TOP-LOADED FOREFOOT ZOOM AIR + FULL REACT FOAM MIDSOLE", date: "2023-09-01", colorMap: { primary: "#CBC3E3", secondary: "#311432", text: "#FFFFFF" } },
    { id: 44, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2", colorway: "COURT VISION", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 COMPOUND + HIGH-VELOCITY FOREFOOT ZOOM UNIT", date: "2024-06-28", colorMap: { primary: "#1E295D", secondary: "#000000", text: "#FFFFFF" } },
    { id: 45, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 1", colorway: "SPARK", price: 130, type: "SIGNATURE", tech: "REACT CORE FOAM + EMBEDDED FOREFOOT ZOOM TRACK PLUGS", date: "2023-11-12", colorMap: { primary: "#FF4500", secondary: "#111111", text: "#FFFFFF" } },
    { id: 46, brand: "NIKE", line: "SABRINA SERIES", name: "SABRINA 2", colorway: "CONDUIT", price: 130, type: "SIGNATURE", tech: "CUSHLON 3.0 SYSTEM + ULTRALIGHT ZONAL VENT CORES", date: "2024-09-05", colorMap: { primary: "#00A86B", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 47, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "MIRAGE", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM AIR CHASSIS + CUSHLON FLUID COMPONENT LAYER", date: "2024-02-17", colorMap: { primary: "#F5F5DC", secondary: "#C2B280", text: "#222222" } },
    { id: 48, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "HIKE", price: 150, type: "SIGNATURE", tech: "SNAKESKIN TEXTURED REINFORCEMENT + RESPONSIVE HEEL SEED", date: "2024-04-06", colorMap: { primary: "#556B2F", secondary: "#8B4513", text: "#FFFFFF" } },
    { id: 49, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "HAVEN", price: 140, type: "SIGNATURE", tech: "HEEL ZOOM UNIT + CANVAS WEAVE SHIELDS + PHYLON DECKS", date: "2024-04-06", colorMap: { primary: "#1C1C1C", secondary: "#996515", text: "#FFFFFF" } },
    { id: 50, brand: "NIKE", line: "BOOK SERIES", name: "BOOK 1", colorway: "RATTLESNAKE", price: 140, type: "SIGNATURE", tech: "CUSHLON CHASSIS SEEDS + SIDEWALL TPU ANTI TORQUE TABS", date: "2024-05-11", colorMap: { primary: "#FFFFFF", secondary: "#4A3B32", text: "#222222" } },

    // --- JORDAN BRAND SIGNATURES (51-65) ---
    { id: 51, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2", colorway: "VORTEX", price: 125, type: "SIGNATURE", tech: "FULL-LENGTH AIR STROBEL + STRUCTURAL EXOSKELETON CORE", date: "2024-04-04", colorMap: { primary: "#00A896", secondary: "#FF6B6B", text: "#FFFFFF" } },
    { id: 52, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 3", colorway: "ZERO DEGREE", price: 125, type: "SIGNATURE", tech: "FLIGHT FRAME STRUCTURAL SHELL + ENHANCED COMFORT FOAM APPARATUS", date: "2024-10-10", colorMap: { primary: "#E0F7FA", secondary: "#80DEEA", text: "#111111" } },
    { id: 53, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 1", colorway: "ZOO", price: 120, type: "SIGNATURE", tech: "LIGHTWEIGHT FOAM GROUND FRAMEWAY + EMBEDDED FOREFOOT ZOOM POD", date: "2023-04-07", colorMap: { primary: "#111111", secondary: "#E60000", text: "#FFFFFF" } },
    { id: 54, brand: "JORDAN BRAND", line: "TATUM SERIES", name: "TATUM 2", colorway: "LEGACY", price: 125, type: "SIGNATURE", tech: "POD-BASED TPU OUTSOLE CASING + DOCKING STROBEL SHIELDS", date: "2024-03-05", colorMap: { primary: "#FFFFFF", secondary: "#0033A0", text: "#111111" } },
    { id: 55, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2", colorway: "NEBULA", price: 130, type: "SIGNATURE", tech: "FORMULA 23 FOAM + CUSHIONED EVA CRADLE + ISO-PLATE WALLS", date: "2023-07-11", colorMap: { primary: "#E0B0FF", secondary: "#7DF9FF", text: "#111111" } },
    { id: 56, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 3", colorway: "MATADOR", price: 130, type: "SIGNATURE", tech: "ISO-PLATE SEGMENT COUPLING + COMPLETE FORMULA 23 CORE", date: "2025-09-15", colorMap: { primary: "#800020", secondary: "#D4AF37", text: "#FFFFFF" } },
    { id: 57, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 1", colorway: "BREED", price: 110, type: "SIGNATURE", tech: "FORMULA 23 CUSHION MATRIX + FLIGHTWIRE LATERAL ANCHORS", date: "2022-09-03", colorMap: { primary: "#111111", secondary: "#E60000", text: "#FFFFFF" } },
    { id: 58, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "LUKA 2", colorway: "LAKE BLED", price: 130, type: "SIGNATURE", tech: "ISO PLATE TPU WRAPS + REINFORCED STYLISH UPPER MATS", date: "2023-09-14", colorMap: { primary: "#4CA3DD", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 59, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3", colorway: "MUD, SWEAT, TEARS", price: 140, type: "SIGNATURE", tech: "FORMULA 23 DROP-IN + FOREFOOT ZOOM AIR CHASSIS ASSEMBLY", date: "2023-12-01", colorMap: { primary: "#9ACD32", secondary: "#FF4500", text: "#FFFFFF" } },
    { id: 60, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 2", colorway: "VODOO", price: 120, type: "SIGNATURE", tech: "HEEL STROBEL STRUT CARRIERS + FOREFOOT ZOOM AIR ENGINE UNITS", date: "2022-06-22", colorMap: { primary: "#8B5A2B", secondary: "#556B2F", text: "#FFFFFF" } },
    { id: 61, brand: "JORDAN BRAND", line: "ZION SERIES", name: "ZION 3", colorway: "SADIE", price: 140, type: "SIGNATURE", tech: "DROP IN COMPRESSION BASE FRAMEWAY + GRIP MULTI DIRECTION", date: "2024-02-20", colorMap: { primary: "#111111", secondary: "#FF007F", text: "#FFFFFF" } },
    { id: 62, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 38", colorway: "FIBA", price: 200, type: "SIGNATURE", tech: "X-PLATE TORSION FRAMEWORK + FULL PACK ZOOM AIR STROBEL", date: "2023-09-07", colorMap: { primary: "#FFFFFF", secondary: "#E60000", text: "#111111" } },
    { id: 63, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 39", colorway: "SOL", price: 200, type: "SIGNATURE", tech: "FULL LENGTH ZOOM STROBEL + CORE COMPLETE INJECTED ZOOM FOAM", date: "2024-07-23", colorMap: { primary: "#EAEAEA", secondary: "#FFFFFF", text: "#111111" } },
    { id: 64, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 37", colorway: "SATRE", price: 185, type: "SIGNATURE", tech: "FORMULA 23 HEEL FOAMS + DUAL STRATIFIED FOREFOOT ZOOM PODS", date: "2022-09-15", colorMap: { primary: "#BEB7A4", secondary: "#111111", text: "#FFFFFF" } },
    { id: 65, brand: "JORDAN BRAND", line: "AIR JORDAN SE", name: "AIR JORDAN 36", colorway: "PSYCHIC", price: 185, type: "SIGNATURE", tech: "JAQUARD WEAVE EXOSKELETONS + STRATIFIED ZOOM STROBEL PAD", date: "2021-09-16", colorMap: { primary: "#FFFFFF", secondary: "#111111", text: "#111111" } },

    // --- ADIDAS SIGNATURES (66-78) ---
    { id: 66, brand: "ADIDAS", line: "AE SERIES", name: "AE 1", colorway: "VELOCITY BLUE", price: 120, type: "SIGNATURE", tech: "JET BOOST RUNTIME CELLS + STABILIZING TPU PARABOLIC HULL", date: "2024-03-15", colorMap: { primary: "#0055A5", secondary: "#002855", text: "#FFFFFF" } },
    { id: 67, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW", colorway: "MURAL", price: 110, type: "SIGNATURE", tech: "LOW-TOP LIGHTSTRIKE + INTEGRATED TPU AIR VENTILATION FLAPS", date: "2024-08-15", colorMap: { primary: "#FBC5B2", secondary: "#FF6F59", text: "#111111" } },
    { id: 68, brand: "ADIDAS", line: "AE SERIES", name: "AE 1", colorway: "BEST OF ADI", price: 120, type: "SIGNATURE", tech: "BOOST MATRIX + HERRINGBONE TREAD FOR OVERSIZED LATERAL CUTS", date: "2024-01-25", colorMap: { primary: "#FFFFFF", secondary: "#111111", text: "#111111" } },
    { id: 69, brand: "ADIDAS", line: "AE SERIES", name: "AE 1 LOW", colorway: "ASCENT", price: 110, type: "SIGNATURE", tech: "JETBOOST INTERIOR BED + VENTILATED LATERAL CELL MESHES", date: "2024-07-20", colorMap: { primary: "#4A3B32", secondary: "#111111", text: "#FFFFFF" } },
    { id: 70, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8", colorway: "PIONEER", price: 160, type: "SIGNATURE", tech: "FULL INTERNAL BOOTIE STRUTS + HIGH-DENSITY SIDE WALLS", date: "2024-02-23", colorMap: { primary: "#111111", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 71, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 8", colorway: "FLAMINGO", price: 160, type: "SIGNATURE", tech: "JETBOOST FOAM + HIGH-WALL EVA STABILIZATION WINGS", date: "2024-04-15", colorMap: { primary: "#FF8DA1", secondary: "#111111", text: "#FFFFFF" } },
    { id: 72, brand: "ADIDAS", line: "HARDEN SERIES", name: "HARDEN VOL. 7", colorway: "CREW ORANGE", price: 160, type: "SIGNATURE", tech: "LIGHTSTRIKE FOAM + JETBOOST HEEL SYSTEM INTEGRATED UNIT", date: "2023-03-02", colorMap: { primary: "#FF5F1F", secondary: "#111111", text: "#FFFFFF" } },
    { id: 73, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 6", colorway: "CAMP FIRE", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE PRO ENERGY CONVERSION + INTERNAL HEEL ANCHOR HARNESS", date: "2024-07-05", colorMap: { primary: "#E65C00", secondary: "#F9D423", text: "#FFFFFF" } },
    { id: 74, brand: "ADIDAS", line: "DON ISSUE SERIES", name: "DON ISSUE 5", colorway: "BLUE SPHINX", price: 120, type: "SIGNATURE", tech: "LIGHTSTRIKE ENGINES + TORSION PERIMETER STABILIZATION BARS", date: "2023-10-15", colorMap: { primary: "#0073E6", secondary: "#111111", text: "#FFFFFF" } },
    { id: 75, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 8 EXTPLY", colorway: "OAC", price: 130, type: "SIGNATURE", tech: "BOUNCE PRO CHASSIS ASSEMBLIES + WRAPPED HARDWOOD TIRES", date: "2023-09-01", colorMap: { primary: "#800000", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 76, brand: "ADIDAS", line: "DAME SERIES", name: "DAME 9", colorway: "PURPLE GLOW", price: 120, type: "SIGNATURE", tech: "COMPLETE LIGHTSTRIKE PRO LINING STRUTS + COMFORT SHIELDS", date: "2024-10-01", colorMap: { primary: "#301934", secondary: "#DA70D6", text: "#FFFFFF" } },
    { id: 77, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE YOUNG 3", colorway: "ASW", price: 140, type: "SIGNATURE", tech: "COMPOSITE PARAMETRIC OUTSOLES + COMPRESSED SEED LAYERS", date: "2023-11-01", colorMap: { primary: "#E0E0E0", secondary: "#8E24AA", text: "#111111" } },
    { id: 78, brand: "ADIDAS", line: "TRAE YOUNG LINE", name: "TRAE 2", colorway: "CORE BLACK", price: 130, type: "SIGNATURE", tech: "SCAGULATED SOCK PACK SEAMLESS + HEEL BOOST ACCELERATORS", date: "2022-10-01", colorMap: { primary: "#111111", secondary: "#222222", text: "#FFFFFF" } },

    // --- PUMA SIGNATURE LINES (79-85) ---
    { id: 79, brand: "PUMA", line: "MB SERIES", name: "MB.03", colorway: "LAFRANCE", price: 125, type: "SIGNATURE", tech: "NITRO INFUSED FOAM RUNTIME + SLIME-WRAP HIGH TRACTION RADIAL", date: "2023-11-17", colorMap: { primary: "#D4AF37", secondary: "#6B5B32", text: "#FFFFFF" } },
    { id: 80, brand: "PUMA", line: "STEWIE SERIES", name: "STEWIE 3", colorway: "DAWN", price: 120, type: "SIGNATURE", tech: "DUAL-DENSITY NITRO NITROGEN FLUID LAYER + REINFORCED TPU COWL", date: "2024-05-14", colorMap: { primary: "#FFE4E1", secondary: "#FFA07A", text: "#111111" } },
    { id: 81, brand: "PUMA", line: "MB SERIES", name: "MB.01", colorway: "RED BLAST", price: 125, type: "SIGNATURE", tech: "NITRO FOAM POD PLUGS + HIGH STRATIFIED FABRIC COLLARS", date: "2021-12-16", colorMap: { primary: "#FF2400", secondary: "#FF6347", text: "#FFFFFF" } },
    { id: 82, brand: "PUMA", line: "MB SERIES", name: "MB.02", colorway: "SUPERNOVA", price: 130, type: "SIGNATURE", tech: "INJECTED NITROGEN COMPOSITIONS + COMPOSITE GRIP WHEELS", date: "2022-10-21", colorMap: { primary: "#FF4500", secondary: "#111111", text: "#FFFFFF" } },
    { id: 83, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0", colorway: "GEORGIA PEACH", price: 100, type: "SIGNATURE", tech: "PROFOAM LITE FOAM CORES + HIGH ABRASION STABILIZATION RIM", date: "2023-12-15", colorMap: { primary: "#FF7F50", secondary: "#00A86B", text: "#FFFFFF" } },
    { id: 84, brand: "PUMA", line: "SCOOT SERIES", name: "SCOOT ZER0", colorway: "OREO", price: 100, type: "SIGNATURE", tech: "PROFOAM REBOUND DRIVES + EXTENDED REAR REINFORCERS", date: "2024-04-02", colorMap: { primary: "#111111", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 85, brand: "PUMA", line: "RISE CORE", name: "ALL-PRO NITRO", colorway: "LIME", price: 130, type: "SIGNATURE", tech: "FULL LENGTH NITROGEN BED DECK + TRADITIONAL RADIAL CARVERS", date: "2023-08-01", colorMap: { primary: "#CCFF00", secondary: "#111111", text: "#111111" } },

    // --- NICHE INTERNATIONAL BOUTIQUE BRANDS (86-93) ---
    { id: 86, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 10", colorway: "MINT", price: 225, type: "NICHE INTERNATIONAL", tech: "BOOM GAS INFUSED NITROGEN INTERIOR + CARBON PLATE DECK", date: "2022-07-15", colorMap: { primary: "#98FF98", secondary: "#00A86B", text: "#111111" } },
    { id: 87, brand: "ANTA", line: "KAI SERIES", name: "KAI 1", colorway: "ARTIST ON COURT", price: 125, type: "NICHE INTERNATIONAL", tech: "NITROEDGE RESPONSIVE FOAM SEED FILL + MIDFOOT SHANK TORSION", date: "2024-03-06", colorMap: { primary: "#4B0082", secondary: "#FFD700", text: "#FFFFFF" } },
    { id: 88, brand: "LI-NING", line: "WAY OF WADE", name: "WAY OF WADE 11", colorway: "GOLD", price: 230, type: "NICHE INTERNATIONAL", tech: "UPGRADED PEBA BOOM FLUID DOCKS + WRAPPED TORSION ARCHWAYS", date: "2024-09-20", colorMap: { primary: "#D4AF37", secondary: "#FFFFFF", text: "#111111" } },
    { id: 89, brand: "LI-NING", line: "WAY OF WADE", name: "WADE ALL CITY 12", colorway: "SUNSHINE", price: 140, type: "NICHE INTERNATIONAL", tech: "FOREFOOT BOOM CORE PAD + WRAPPED SIDEWALL POLYURETHANE CAPS", date: "2024-01-15", colorMap: { primary: "#FFCC00", secondary: "#FF6600", text: "#FFFFFF" } },
    { id: 90, brand: "361 DEGREES", line: "DVD SERIES", name: "DVD 2", colorway: "SPACETIME", price: 100, type: "NICHE INTERNATIONAL", tech: "ENERGIZED SYSTEM CORES + MULTI ZONE TRADITIONAL TRACK SHIELD", date: "2023-11-05", colorMap: { primary: "#1E1E24", secondary: "#00CCFF", text: "#FFFFFF" } },
    { id: 91, brand: "RIGORER", line: "AR SERIES", name: "AR 1", colorway: "ICE CREAM", price: 110, type: "NICHE INTERNATIONAL", tech: "PEBA NITROGEN FOAM PADS + ANTI-ROLL VERTICAL TPU BOUNDARIES", date: "2023-08-11", colorMap: { primary: "#FADADD", secondary: "#AEC6CF", text: "#111111" } },
    { id: 92, brand: "ANTA", line: "KT SERIES", name: "KT 9", colorway: "GOLDEN EMPIRE", price: 150, type: "NICHE INTERNATIONAL", tech: "SMART ABSORPTION TRANSFER LAYER + FULL LENTH CARBON SPINE", date: "2023-10-12", colorMap: { primary: "#111111", secondary: "#D4AF37", text: "#FFFFFF" } },
    { id: 93, brand: "361 DEGREES", line: "BIG 3 CORE", name: "BIG 3 5.0 QUICK", colorway: "MINT", price: 110, type: "NICHE INTERNATIONAL", tech: "QU!KFOAM STABILIZED COMPRESSION SYSTEM + RADIAL EDGE CUTS", date: "2024-05-18", colorMap: { primary: "#AAF0D1", secondary: "#111111", text: "#111111" } },

    // --- BUDGET & TEAM PLAYS (94-96) ---
    { id: 94, brand: "NIKE", line: "GT SERIES", name: "GT CUT ACADEMY", colorway: "WHITE ICE", price: 95, type: "BUDGET / TEAM", tech: "FOREFOOT COMPRESSION ZOOM CELL + DUAL RENEW FOAM ELEMENTS", date: "2024-01-05", colorMap: { primary: "#FFFFFF", secondary: "#E0F7FA", text: "#111111" } },
    { id: 95, brand: "NIKE", line: "GIANNIS LINE", name: "GIANNIS IMMORTALITY 3", colorway: "NIGERIA", price: 85, type: "BUDGET / TEAM", tech: "CURVED DECK SEED BASES + MIDFOOT INTEGRATED TENSION HARNESS", date: "2023-07-20", colorMap: { primary: "#008751", secondary: "#FFFFFF", text: "#FFFFFF" } },
    { id: 96, brand: "ADIDAS", line: "TEAM PROFILE", name: "DAME EXTPLY 2.0", colorway: "GREEN", price: 90, type: "BUDGET / TEAM", tech: "BOUNCE SHOCK ABSORB MATRIX + FULL COMFORT STRATIFIED KNITS", date: "2022-06-01", colorMap: { primary: "#006633", secondary: "#111111", text: "#FFFFFF" } },

    // --- FUTURE CALENDAR TIMELINES (97-100) ---
    { id: 97, brand: "ADIDAS", line: "AE SERIES", name: "ADIDAS AE 2", colorway: "FANGED RED", price: 130, type: "SIGNATURE", tech: "METATARSAL BOUNCE INLAYS + MONO-MESH EXOSKELETAL FRAME", date: "2026-06-12", colorMap: { primary: "#D2143A", secondary: "#000000", text: "#FFFFFF" } },
    { id: 98, brand: "NIKE", line: "KOBE SERIES", name: "KOBE 9 ELITE LOW PROTRO", colorway: "WNBA GOLD", price: 210, type: "SIGNATURE", tech: "CARBON BOUND TORSIONAL FRAMEWAY + FLEXIBLE PLUSH FLYKNIT", date: "2026-07-08", colorMap: { primary: "#FFD700", secondary: "#4B0082", text: "#FFFFFF" } },
    { id: 99, brand: "NIKE", line: "A'JA SIGNATURE", name: "NIKE A'TWO", colorway: "PREMIERE INAUGURAL", price: 140, type: "SIGNATURE", tech: "FULL RUNTIME REACT PLUGS + LATERAL ANTI-ROLL FRAME GRIP", date: "2026-08-15", colorMap: { primary: "#008080", secondary: "#E6E6FA", text: "#FFFFFF" } },
    { id: 100, brand: "JORDAN BRAND", line: "LUKA SERIES", name: "JORDAN LUKA 4", colorway: "VICTORY", price: 140, type: "SIGNATURE", tech: "QUAD-DENSITY CORE ASSEMBLED CHASSIS + MULTI-STAGE ISO-PLATE", date: "2026-09-01", colorMap: { primary: "#111111", secondary: "#00FFCC", text: "#FFFFFF" } }
];

// APPLICATION MANAGEMENT STATE
let locker = JSON.parse(localStorage.getItem('ghLocker')) || [];
let compareList = [];
let currentFilter = "ALL";
let visibleItemsCount = 8; 

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
            <div class="badge-center-signature">${shoe.name}</div>
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
    visibleItemsCount = 8; 
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
            <button onclick="setArchiveFilter('BUDGET / TEAM')" class="filter-tier-btn">TEAM & BUDGET</button>
            <button onclick="setArchiveFilter('NICHE INTERNATIONAL')" class="filter-tier-btn">NICHE & INT</button>
        `;
        document.getElementById('main-header').appendChild(controls);
    }

    const releasedShoes = shoeDatabase.filter(shoe => shoe.date <= todayStr);
    const matches = releasedShoes.filter(s => {
        const matchesSearch = s.name.toLowerCase().includes(query) || s.brand.toLowerCase().includes(query) || s.colorway.toLowerCase().includes(query) || s.line.toLowerCase().includes(query);
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
    visibleItemsCount += 8; 
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

    upcomingDrops.forEach(shoe => {
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
                    <div style="font-size:0.5rem; font-weight:900; opacity:0.8;">${shoe.colorway}</div>
                </div>
            </div>
            <div style="flex-grow:1; margin-left:20px;">
                <span style="font-size:0.6rem; background:var(--black); color:white; padding:3px 6px; font-weight:900;">${shoe.type}</span>
                <div style="font-weight:900; font-size:1.1rem; margin-top:5px;">${shoe.line}</div>
                <div style="color:var(--accent); font-weight:900; font-size:0.8rem;">${shoe.brand} // ${shoe.name}</div>
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
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>LINEAGE / COLLECTION:</strong> ${s.line}</p>
            <p style="border-top:1px solid var(--border); padding-top:15px;"><strong>TECH DECK CONFIG:</strong> ${s.tech}</p>
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
