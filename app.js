/* ==========================================================================
   PLANT 3D - THREE.JS ENGINE & INTERACTIVE APPLICATION LOGIC
   ========================================================================== */

// Plant Parts Data Dictionary (Indonesian Educational Content)
const PLANT_DATA = {
    all: {
        category: "Anatomi Utama",
        title: "Tumbuhan Utuh (Complete Plant)",
        summary: "Tumbuhan adalah organisme multiseluler kompleks yang terdiri dari organ utama: Akar, Batang, Daun, Bunga, dan Buah. Setiap organ bekerja secara harmonis untuk fotosintesis dan keberlangsungan spesies.",
        functions: [
            "<strong>Penyerapan & Transpor:</strong> Mengambil air & hara tanah ke seluruh jaringan.",
            "<strong>Fotosintesis:</strong> Mengubah energi matahari menjadi makanan (glukosa) dan oksigen.",
            "<strong>Reproduksi:</strong> Menghasilkan bunga, buah, dan biji untuk perkembangbiakan."
        ],
        micro: "<strong>Xilem & Floem:</strong> Pembuluh pengangkut air dari akar (Xilem) dan hasil fotosintesis dari daun ke seluruh tubuh (Floem).",
        fact: "Lebih dari 80% nutrisi yang diserap tumbuhan berasal dari interaksi akar dengan mikoriza tanah!",
        camPos: { x: 0, y: 1.0, z: 7.5 },
        targetPos: { x: 0, y: 0.5, z: 0 }
    },
    flower: {
        category: "Organ Reproduksi",
        title: "Bunga (Flower)",
        summary: "Bunga merupakan organ reproduksi generatif pada tumbuhan berbunga (Angiospermae). Bunga bertugas menghasilkan biji melalui proses penyerbukan dan pembuahan.",
        functions: [
            "<strong>Penyerbukan (Pollination):</strong> Menarik serangga/polinator dengan warna mahkota yang mencolok dan nektar.",
            "<strong>Pembuahan:</strong> Pertemuan benang sari (jantan) dan putik (betina) untuk membentuk calon biji.",
            "<strong>Perlindungan Organ:</strong> Kelopak melindungi kuncup bunga sebelum mekar sempurna."
        ],
        micro: "<strong>Mahkota (Petal), Benang Sari (Stamen), & Putik (Pistil):</strong> Benang sari menghasilkan serbuk sari (polen), sedangkan putik memiliki bakal buah (ovarium).",
        fact: "Bunga terkecil di dunia adalah Wolffia (hanya 0.3 mm), sedangkan bunga terbesar adalah Rafflesia arnoldii!",
        camPos: { x: 0, y: 3.6, z: 3.2 },
        targetPos: { x: 0, y: 3.1, z: 0 }
    },
    fruit: {
        category: "Penyebar Keturunan",
        title: "Buah & Biji (Fruit & Seed)",
        summary: "Buah berkembang dari bakal buah (ovarium) setelah pembuahan terjadi. Buah berfungsi membungkus dan melindungi biji serta membantu penyebaran keturunan.",
        functions: [
            "<strong>Pelindung Biji:</strong> Melindungi biji dari kekeringan, suhu ekstrem, dan pemangsa.",
            "<strong>Agen Penyebaran (Dispersal):</strong> Daging buah yang manis menarik hewan untuk memakan dan menyebarkan bijinya.",
            "<strong>Cadangan Makanan:</strong> Menyediakan nutrisi awal bagi embrio tanaman saat berkecambah."
        ],
        micro: "<strong>Perikarp (Dinding Buah):</strong> Terdiri dari eksokarp (kulit luar), mesokarp (daging buah), dan endokarp (lapisan dalam pelindung biji).",
        fact: "Secara botani, tomat, terong, dan cabai sebenarnya tergolong sebagai buah-buahan (bukan sayuran)!",
        camPos: { x: 1.5, y: 2.2, z: 2.5 },
        targetPos: { x: 0.7, y: 1.8, z: 0 }
    },
    leaf: {
        category: "Pabrik Makanan",
        title: "Daun (Leaves)",
        summary: "Daun adalah organ fotosintesis utama tumbuhan. Warna hijau daun berasal dari klorofil yang menyerap cahaya matahari untuk mengubah CO₂ dan air menjadi energi.",
        functions: [
            "<strong>Fotosintesis:</strong> Sintesis glukosa dari CO₂ + H₂O + Cahaya Matahari → C₆H₁₂O₆ + O₂.",
            "<strong>Transpirasi:</strong> Penguapan air melalui stomata untuk mendinginkan tumbuhan dan menarik air dari akar.",
            "<strong>Respirasi:</strong> Pertukaran gas oksigen dan karbon dioksida melalui pori-pori stomata."
        ],
        micro: "<strong>Stomata & Kloroplas:</strong> Stomata mengatur keluar-masuk gas, sedangkan kloroplas mengandung klorofil tempat reaksi terang/gelap fotosintesis.",
        fact: "Satu pohon dewasa berdaun lebat dapat menghasilkan oksigen cukup untuk kebutuhan 4 manusia setiap harinya!",
        camPos: { x: -2.2, y: 2.0, z: 2.8 },
        targetPos: { x: -0.7, y: 1.5, z: 0 }
    },
    stem: {
        category: "Sistem Penyokong & Transportasi",
        title: "Batang (Stem)",
        summary: "Batang menghubungkan akar dengan daun dan bunga. Batang menopang struktur tegak tumbuhan dan berfungsi sebagai jalan transportasi air, hara, serta hasil fotosintesis.",
        functions: [
            "<strong>Penyokong Mekanis:</strong> Menopang daun, bunga, dan buah agar mendapat sinar matahari optimal.",
            "<strong>Transportasi Vaskuler:</strong> Mengalirkan air dari akar ke atas (Xilem) dan membagikan glukosa ke seluruh organ (Floem).",
            "<strong>Penyimpanan Cadangan:</strong> Beberapa batang menyimpan cadangan air dan tepung (seperti tebu atau kentang)."
        ],
        micro: "<strong>Kambium Vaskuler:</strong> Lapisan sel aktif pembagi yang menyebabkan pertumbuhan sekunder (memperbesar diameter batang pada dikotil).",
        fact: "Pohon Sequoia di California memiliki batang raksasa berdiameter lebih dari 9 meter dan tinggi melebihi 80 meter!",
        camPos: { x: 0.5, y: 1.2, z: 3.8 },
        targetPos: { x: 0, y: 1.0, z: 0 }
    },
    root: {
        category: "Sistem Jangkar & Nutrisi",
        title: "Akar (Root System)",
        summary: "Akar tumbuh di dalam tanah sebagai sistem penyerapan air dan hara mineral. Akar menancapkan tumbuhan dengan kuat agar tidak roboh oleh angin atau erosi.",
        functions: [
            "<strong>Penyerapan (Absorption):</strong> Menyerap air dan garam mineral terlarut dari dalam tanah.",
            "<strong>Penjangkaran (Anchoring):</strong> Mencengkeram tanah secara kokoh menopang beban seluruh bagian di atas tanah.",
            "<strong>Penyimpanan Makanan:</strong> Akar tunggang seperti wortel dan singkong berfungsi menyimpan cadangan karbohidrat."
        ],
        micro: "<strong>Rambut Akar & Tudung Akar (Kaliptra):</strong> Rambut akar memperluas bidang penyerapan air, sedangkan tudung akar melindungi ujung akar saat menembus tanah.",
        fact: "Jika seluruh panjang jaringan akar satu rumpun gandum disambungkan, panjangnya bisa mencapai lebih dari 600 kilometer!",
        camPos: { x: 0, y: -1.6, z: 3.8 },
        targetPos: { x: 0, y: -1.3, z: 0 }
    }
};

// Global App State
let scene, camera, renderer, controls;
let plantGroup, soilGroup;
let plantPartsMeshes = {};
let raycaster, mouse;
let currentActivePart = 'all';
let activeHighlightMesh = null;
let windAnimEnabled = true;
let isXrayMode = false;
let isWireframeMode = false;

// Tween Camera Interpolation State
let targetCamPos = { ...PLANT_DATA.all.camPos };
let targetLookAt = { ...PLANT_DATA.all.targetPos };
let currentLookAt = { ...PLANT_DATA.all.targetPos };

// Initialize Application on Window Load
window.addEventListener('DOMContentLoaded', () => {
    initThreeJS();
    buildProceduralPlant();
    setupEventListeners();
    setupAnnotations();
    updateUIInfo('all');
    animate();
});

/* ==========================================================================
   1. THREE.JS SCENE SETUP
   ========================================================================== */
function initThreeJS() {
    const container = document.getElementById('canvas-container');

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0f0d);
    scene.fog = new THREE.FogExp2(0x0a0f0d, 0.04);

    // Camera
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(PLANT_DATA.all.camPos.x, PLANT_DATA.all.camPos.y, PLANT_DATA.all.camPos.z);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // Controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.25; // Prevent camera going too far below soil
    controls.minDistance = 2;
    controls.maxDistance = 15;
    controls.target.set(PLANT_DATA.all.targetPos.x, PLANT_DATA.all.targetPos.y, PLANT_DATA.all.targetPos.z);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const mainSunLight = new THREE.DirectionalLight(0xfff5ea, 1.4);
    mainSunLight.position.set(5, 10, 6);
    mainSunLight.castShadow = true;
    mainSunLight.shadow.mapSize.width = 2048;
    mainSunLight.shadow.mapSize.height = 2048;
    mainSunLight.shadow.bias = -0.0001;
    scene.add(mainSunLight);

    const fillGreenLight = new THREE.DirectionalLight(0x34d399, 0.6);
    fillGreenLight.position.set(-5, 4, -4);
    scene.add(fillGreenLight);

    const rootGoldLight = new THREE.PointLight(0xf59e0b, 1.2, 6);
    rootGoldLight.position.set(0, -1.8, 1.5);
    scene.add(rootGoldLight);

    // Raycaster & Mouse
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // Window Resize Handler
    window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ==========================================================================
   2. PROCEDURAL 3D PLANT MODEL GENERATOR
   ========================================================================== */
function buildProceduralPlant() {
    plantGroup = new THREE.Group();
    plantGroup.name = "plant_main_group";
    scene.add(plantGroup);

    soilGroup = new THREE.Group();
    scene.add(soilGroup);

    // ----------------------------------------------------
    // A. SOIL CUTAWAY & GRASS BED (Tumpuan Tanah & Rumput)
    // ----------------------------------------------------
    // Earth cylinder base
    const soilGeo = new THREE.CylinderGeometry(2.2, 1.8, 2.0, 32, 1, false);
    const soilMat = new THREE.MeshStandardMaterial({
        color: 0x2e1c14,
        roughness: 0.9,
        metalness: 0.1,
        transparent: true,
        opacity: 0.88
    });
    const soilMesh = new THREE.Mesh(soilGeo, soilMat);
    soilMesh.position.y = -1.5;
    soilMesh.receiveShadow = true;
    soilGroup.add(soilMesh);

    // Grass Top Layer Disc
    const grassGeo = new THREE.CylinderGeometry(2.22, 2.22, 0.1, 32);
    const grassMat = new THREE.MeshStandardMaterial({
        color: 0x15803d,
        roughness: 0.6,
        metalness: 0.1
    });
    const grassMesh = new THREE.Mesh(grassGeo, grassMat);
    grassMesh.position.y = -0.45;
    grassMesh.receiveShadow = true;
    soilGroup.add(grassMesh);

    // ----------------------------------------------------
    // B. ROOTS SYSTEM (Akar Branching Tubing Network)
    // ----------------------------------------------------
    const rootGroup = new THREE.Group();
    rootGroup.name = "root";
    plantGroup.add(rootGroup);
    plantPartsMeshes['root'] = rootGroup;

    const rootMaterial = new THREE.MeshStandardMaterial({
        color: 0xd97706,
        roughness: 0.7,
        metalness: 0.1,
        bumpScale: 0.05
    });

    // Taproot (Akar Utama)
    const taprootCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.45, 0),
        new THREE.Vector3(0.08, -1.0, 0.05),
        new THREE.Vector3(-0.05, -1.6, -0.05),
        new THREE.Vector3(0.02, -2.2, 0)
    ]);
    const taprootGeo = new THREE.TubeGeometry(taprootCurve, 20, 0.14, 8, false);
    const taprootMesh = new THREE.Mesh(taprootGeo, rootMaterial);
    taprootMesh.castShadow = true;
    rootGroup.add(taprootMesh);

    // Lateral Branching Roots (Akar Cabang)
    const rootBranches = [
        [new THREE.Vector3(0, -0.6, 0), new THREE.Vector3(0.6, -0.9, 0.4), new THREE.Vector3(1.2, -1.4, 0.7)],
        [new THREE.Vector3(0, -0.7, 0), new THREE.Vector3(-0.7, -1.1, 0.3), new THREE.Vector3(-1.3, -1.6, 0.5)],
        [new THREE.Vector3(0, -0.8, 0), new THREE.Vector3(0.4, -1.2, -0.6), new THREE.Vector3(0.9, -1.7, -1.1)],
        [new THREE.Vector3(0, -0.9, 0), new THREE.Vector3(-0.5, -1.3, -0.5), new THREE.Vector3(-1.0, -1.8, -0.9)],
        [new THREE.Vector3(0, -1.2, 0), new THREE.Vector3(0.3, -1.6, 0.5), new THREE.Vector3(0.6, -2.1, 0.8)]
    ];

    rootBranches.forEach((pts, idx) => {
        const curve = new THREE.CatmullRomCurve3(pts);
        const geo = new THREE.TubeGeometry(curve, 16, 0.07 - (idx * 0.008), 8, false);
        const mesh = new THREE.Mesh(geo, rootMaterial);
        mesh.castShadow = true;
        rootGroup.add(mesh);
    });

    // ----------------------------------------------------
    // C. STEM SYSTEM (Batang Curve)
    // ----------------------------------------------------
    const stemGroup = new THREE.Group();
    stemGroup.name = "stem";
    plantGroup.add(stemGroup);
    plantPartsMeshes['stem'] = stemGroup;

    const stemMaterial = new THREE.MeshStandardMaterial({
        color: 0x059669,
        roughness: 0.5,
        metalness: 0.1
    });

    const stemCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, -0.45, 0),
        new THREE.Vector3(0.05, 0.5, 0.02),
        new THREE.Vector3(-0.08, 1.4, -0.04),
        new THREE.Vector3(0.04, 2.3, 0.02),
        new THREE.Vector3(0, 3.1, 0)
    ]);
    const stemGeo = new THREE.TubeGeometry(stemCurve, 32, 0.12, 12, false);
    const stemMesh = new THREE.Mesh(stemGeo, stemMaterial);
    stemMesh.castShadow = true;
    stemGroup.add(stemMesh);

    // Stem Node rings
    [0.6, 1.5, 2.4].forEach(yPos => {
        const nodeGeo = new THREE.TorusGeometry(0.12, 0.025, 8, 16);
        const nodeMesh = new THREE.Mesh(nodeGeo, stemMaterial);
        nodeMesh.position.set(0, yPos, 0);
        nodeMesh.rotation.x = Math.PI / 2;
        stemGroup.add(nodeMesh);
    });

    // ----------------------------------------------------
    // D. LEAF SYSTEM (Daun Symmetrical Extruded Geometry)
    // ----------------------------------------------------
    const leafGroup = new THREE.Group();
    leafGroup.name = "leaf";
    plantGroup.add(leafGroup);
    plantPartsMeshes['leaf'] = leafGroup;

    // Create Leaf Custom 2D Shape
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.bezierCurveTo(0.3, 0.4, 0.5, 0.9, 0.5, 1.4);
    leafShape.bezierCurveTo(0.4, 1.8, 0.1, 2.2, 0, 2.4);
    leafShape.bezierCurveTo(-0.1, 2.2, -0.4, 1.8, -0.5, 1.4);
    leafShape.bezierCurveTo(-0.5, 0.9, -0.3, 0.4, 0, 0);

    const extrudeSettings = {
        steps: 1,
        depth: 0.03,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.02,
        bevelSegments: 3
    };

    const leafGeo = new THREE.ExtrudeGeometry(leafShape, extrudeSettings);
    // Center geometry origin to base
    leafGeo.translate(0, 0, -0.015);

    const leafMaterial = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        roughness: 0.35,
        metalness: 0.15,
        side: THREE.DoubleSide
    });

    // Leaf Attachments Positions & Orientations
    const leafConfigs = [
        { pos: [0.05, 0.8, 0.02], rot: [0.4, 0.2, -1.1], scale: 0.55 },
        { pos: [-0.08, 1.3, -0.04], rot: [0.3, -0.4, 1.2], scale: 0.62 },
        { pos: [0.04, 1.9, 0.02], rot: [-0.3, 0.6, -1.0], scale: 0.65 },
        { pos: [-0.02, 2.4, -0.02], rot: [-0.4, -0.5, 1.0], scale: 0.58 }
    ];

    leafConfigs.forEach(cfg => {
        const lMesh = new THREE.Mesh(leafGeo, leafMaterial);
        lMesh.position.set(...cfg.pos);
        lMesh.rotation.set(...cfg.rot);
        lMesh.scale.set(cfg.scale, cfg.scale, cfg.scale);
        lMesh.castShadow = true;
        leafGroup.add(lMesh);

        // Leaf Petiole (Tangkai Daun)
        const petioleCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0, 0.3, 0)
        ]);
        const petioleGeo = new THREE.TubeGeometry(petioleCurve, 8, 0.025, 6);
        const petioleMesh = new THREE.Mesh(petioleGeo, stemMaterial);
        petioleMesh.position.set(...cfg.pos);
        petioleMesh.rotation.set(...cfg.rot);
        leafGroup.add(petioleMesh);
    });

    // ----------------------------------------------------
    // E. FLOWER SYSTEM (Bunga Multi-Petal Head)
    // ----------------------------------------------------
    const flowerGroup = new THREE.Group();
    flowerGroup.name = "flower";
    flowerGroup.position.set(0, 3.1, 0);
    plantGroup.add(flowerGroup);
    plantPartsMeshes['flower'] = flowerGroup;

    // Petal Shape
    const petalShape = new THREE.Shape();
    petalShape.moveTo(0, 0);
    petalShape.bezierCurveTo(0.2, 0.2, 0.3, 0.5, 0.3, 0.8);
    petalShape.bezierCurveTo(0.2, 1.1, 0, 1.3, 0, 1.35);
    petalShape.bezierCurveTo(-0, 1.3, -0.2, 1.1, -0.3, 0.8);
    petalShape.bezierCurveTo(-0.3, 0.5, -0.2, 0.2, 0, 0);

    const petalGeo = new THREE.ExtrudeGeometry(petalShape, { depth: 0.02, bevelEnabled: true, bevelThickness: 0.01, bevelSize: 0.01, bevelSegments: 2 });
    const petalMaterial = new THREE.MeshStandardMaterial({
        color: 0xf43f5e, // Vibrant Rose Magenta
        roughness: 0.4,
        metalness: 0.1,
        side: THREE.DoubleSide
    });

    // Ring of 6 Petals
    const numPetals = 6;
    for (let i = 0; i < numPetals; i++) {
        const angle = (i / numPetals) * Math.PI * 2;
        const petalMesh = new THREE.Mesh(petalGeo, petalMaterial);
        petalMesh.rotation.z = angle;
        petalMesh.rotation.x = 0.35; // Tilt outward
        petalMesh.scale.set(0.65, 0.65, 0.65);
        petalMesh.castShadow = true;
        flowerGroup.add(petalMesh);
    }

    // Inner Petals Layer
    for (let i = 0; i < numPetals; i++) {
        const angle = (i / numPetals) * Math.PI * 2 + (Math.PI / numPetals);
        const petalMesh = new THREE.Mesh(petalGeo, petalMaterial);
        petalMesh.rotation.z = angle;
        petalMesh.rotation.x = 0.15;
        petalMesh.scale.set(0.48, 0.48, 0.48);
        petalMesh.castShadow = true;
        flowerGroup.add(petalMesh);
    }

    // Central Receptacle & Anthers (Pusat Bunga & Benang Sari)
    const coreGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const coreMat = new THREE.MeshStandardMaterial({ color: 0xfbbf24, roughness: 0.3 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.scale.set(1, 0.6, 1);
    flowerGroup.add(coreMesh);

    // Stamen Pin Anthers
    const stamenMat = new THREE.MeshStandardMaterial({ color: 0xf59e0b });
    for (let i = 0; i < 12; i++) {
        const ang = (i / 12) * Math.PI * 2;
        const radius = 0.14;
        const x = Math.cos(ang) * radius;
        const y = Math.sin(ang) * radius;

        const pinGeo = new THREE.CylinderGeometry(0.008, 0.008, 0.12);
        const pinMesh = new THREE.Mesh(pinGeo, stamenMat);
        pinMesh.position.set(x, y, 0.08);
        pinMesh.rotation.x = Math.PI / 2;

        const tipGeo = new THREE.SphereGeometry(0.025, 8, 8);
        const tipMesh = new THREE.Mesh(tipGeo, stamenMat);
        tipMesh.position.set(0, 0.06, 0);
        pinMesh.add(tipMesh);

        flowerGroup.add(pinMesh);
    }

    // ----------------------------------------------------
    // F. FRUIT SYSTEM (Buah Glossy Mesh)
    // ----------------------------------------------------
    const fruitGroup = new THREE.Group();
    fruitGroup.name = "fruit";
    fruitGroup.position.set(0.7, 1.8, 0.1);
    plantGroup.add(fruitGroup);
    plantPartsMeshes['fruit'] = fruitGroup;

    // Fruit Body
    const fruitGeo = new THREE.SphereGeometry(0.32, 24, 24);
    // Indent fruit top slightly
    const fruitMat = new THREE.MeshStandardMaterial({
        color: 0xef4444, // Bright Red Apple/Cherry
        roughness: 0.15,
        metalness: 0.1
    });
    const fruitMesh = new THREE.Mesh(fruitGeo, fruitMat);
    fruitMesh.castShadow = true;
    fruitGroup.add(fruitMesh);

    // Fruit Stem Pedicel (Tangkai Buah)
    const pedicelCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 0.3, 0),
        new THREE.Vector3(-0.3, 0.5, -0.1)
    ]);
    const pedicelGeo = new THREE.TubeGeometry(pedicelCurve, 10, 0.02, 6);
    const pedicelMesh = new THREE.Mesh(pedicelGeo, stemMaterial);
    fruitGroup.add(pedicelMesh);
}

/* ==========================================================================
   3. RAYCASTING & INTERACTION LOGIC
   ========================================================================== */
function setupEventListeners() {
    // Canvas Click & Hover
    const container = document.getElementById('canvas-container');
    container.addEventListener('pointerdown', onPointerDown);
    container.addEventListener('pointermove', onPointerMove);

    // UI Left Navigation Buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const part = btn.getAttribute('data-part');
            selectPlantPart(part);
        });
    });

    // Reset Camera Header Button
    document.getElementById('resetCamHeaderBtn').addEventListener('click', () => {
        selectPlantPart('all');
    });

    // View Toggles
    document.getElementById('windToggle').addEventListener('change', (e) => {
        windAnimEnabled = e.target.checked;
    });

    document.getElementById('xrayToggle').addEventListener('change', (e) => {
        isXrayMode = e.target.checked;
        toggleXrayMode(isXrayMode);
    });

    document.getElementById('wireframeToggle').addEventListener('change', (e) => {
        isWireframeMode = e.target.checked;
        toggleWireframeMode(isWireframeMode);
    });

    // Copy Code Modal Listeners
    setupCopyModal();
}

function onPointerMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(plantGroup.children, true);

    if (intersects.length > 0) {
        document.getElementById('canvas-container').style.cursor = 'pointer';
    } else {
        document.getElementById('canvas-container').style.cursor = 'grab';
    }
}

function onPointerDown(event) {
    // Only trigger on primary mouse click
    if (event.button !== 0) return;

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(plantGroup.children, true);

    if (intersects.length > 0) {
        let obj = intersects[0].object;
        // Traverse up to find parent group with name matching plant part
        while (obj.parent && obj.parent !== plantGroup && !PLANT_DATA[obj.name]) {
            obj = obj.parent;
        }

        const partName = obj.name;
        if (partName && PLANT_DATA[partName]) {
            selectPlantPart(partName);
        }
    }
}

function selectPlantPart(partKey) {
    if (!PLANT_DATA[partKey]) return;

    currentActivePart = partKey;

    // Update Left Nav Active State
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('data-part') === partKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update Target Camera Settings
    targetCamPos = { ...PLANT_DATA[partKey].camPos };
    targetLookAt = { ...PLANT_DATA[partKey].targetPos };

    // Update UI Right Panel Info
    updateUIInfo(partKey);

    // Highlight active 3D Mesh
    highlightMeshPart(partKey);
}

function highlightMeshPart(partKey) {
    // Reset previous highlights
    Object.keys(plantPartsMeshes).forEach(key => {
        const group = plantPartsMeshes[key];
        group.traverse(child => {
            if (child.isMesh && child.material) {
                if (child.material.emissive) {
                    child.material.emissive.setHex(0x000000);
                }
            }
        });
    });

    if (partKey !== 'all' && plantPartsMeshes[partKey]) {
        plantPartsMeshes[partKey].traverse(child => {
            if (child.isMesh && child.material && child.material.emissive) {
                child.material.emissive.setHex(0x10b981);
                child.material.emissiveIntensity = 0.35;
            }
        });
    }
}

function toggleXrayMode(enable) {
    scene.traverse(child => {
        if (child.isMesh && child.material && child.name !== "soil_mesh") {
            child.material.transparent = enable;
            child.material.opacity = enable ? 0.45 : 1.0;
        }
    });
}

function toggleWireframeMode(enable) {
    scene.traverse(child => {
        if (child.isMesh && child.material) {
            child.material.wireframe = enable;
        }
    });
}

function updateUIInfo(partKey) {
    const data = PLANT_DATA[partKey];
    if (!data) return;

    document.getElementById('infoCategory').textContent = data.category;
    document.getElementById('infoTitle').textContent = data.title;
    document.getElementById('infoSummary').textContent = data.summary;

    const funcList = document.getElementById('infoFunctions');
    funcList.innerHTML = data.functions.map(f => `<li>${f}</li>`).join('');

    document.getElementById('infoMicro').innerHTML = `<p>${data.micro}</p>`;
    document.getElementById('infoFact').textContent = data.fact;
}

/* ==========================================================================
   4. 3D HTML ANNOTATIONS OVERLAY (TAG POSITIONS)
   ========================================================================== */
const annotationCoords = {
    flower: new THREE.Vector3(0, 3.2, 0),
    fruit: new THREE.Vector3(0.7, 1.8, 0.1),
    leaf: new THREE.Vector3(-0.6, 1.5, 0),
    stem: new THREE.Vector3(0, 0.8, 0),
    root: new THREE.Vector3(0, -1.3, 0)
};

function setupAnnotations() {
    const tags = document.querySelectorAll('.annotation-tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const part = tag.getAttribute('data-part');
            selectPlantPart(part);
        });
    });
}

function updateAnnotations() {
    const tempV = new THREE.Vector3();

    Object.keys(annotationCoords).forEach(part => {
        const tagEl = document.getElementById(`tag-${part}`);
        if (!tagEl) return;

        tempV.copy(annotationCoords[part]);
        tempV.project(camera);

        // Check if behind camera
        if (tempV.z > 1) {
            tagEl.classList.remove('visible');
            return;
        }

        const x = (tempV.x * 0.5 + 0.5) * window.innerWidth;
        const y = (tempV.y * -0.5 + 0.5) * window.innerHeight;

        tagEl.style.left = `${x}px`;
        tagEl.style.top = `${y}px`;

        if (currentActivePart === 'all' || currentActivePart === part) {
            tagEl.classList.add('visible');
        } else {
            tagEl.classList.remove('visible');
        }
    });
}

/* ==========================================================================
   5. COPY CODE MODAL & STANDALONE GENERATOR
   ========================================================================== */
let activeTab = 'single';

function setupCopyModal() {
    const modal = document.getElementById('copyModal');
    const openBtn = document.getElementById('openCopyModalBtn');
    const closeBtn = document.getElementById('closeCopyModalBtn');
    const copyBtn = document.getElementById('copySnippetBtn');
    const tabs = document.querySelectorAll('.modal-tab');

    openBtn.addEventListener('click', () => {
        modal.classList.add('active');
        renderCodeSnippet();
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeTab = tab.getAttribute('data-tab');
            renderCodeSnippet();
        });
    });

    copyBtn.addEventListener('click', () => {
        const codeText = document.getElementById('codeSnippetText').innerText;
        navigator.clipboard.writeText(codeText).then(() => {
            const toast = document.getElementById('copiedToast');
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 2500);
        });
    });
}

function renderCodeSnippet() {
    const codeEl = document.getElementById('codeSnippetText');
    if (activeTab === 'single') {
        codeEl.innerText = getSingleFileHTMLSnippet();
    } else {
        codeEl.innerText = `<!-- HTML Header & Three.js CDN -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>

<div id="canvas-container" style="width: 100vw; height: 100vh;"></div>

<!-- Salin kode app.js & style.css dari repositori ini -->`;
    }
}

function getSingleFileHTMLSnippet() {
    return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>3D Plant Standalone Model</title>
    <style>
        body { margin: 0; overflow: hidden; background: #0a0f0d; font-family: sans-serif; }
        #canvas-container { width: 100vw; height: 100vh; }
        .title-badge { position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.6); color: #34d399; padding: 8px 16px; border-radius: 8px; border: 1px solid #10b981; }
    </style>
</head>
<body>
    <div class="title-badge">🌱 3D Plant Model (Three.js Procedural)</div>
    <div id="canvas-container"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"></script>
    <script>
        // Init Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0f0d);
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 1.0, 7.5);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);
        const controls = new THREE.OrbitControls(camera, renderer.domElement);

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.7));
        const sun = new THREE.DirectionalLight(0xfff5ea, 1.4);
        sun.position.set(5, 10, 6);
        scene.add(sun);

        // Procedural Stem
        const stemCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -0.45, 0), new THREE.Vector3(0.05, 0.5, 0.02),
            new THREE.Vector3(-0.08, 1.4, -0.04), new THREE.Vector3(0, 3.1, 0)
        ]);
        const stem = new THREE.Mesh(
            new THREE.TubeGeometry(stemCurve, 32, 0.12, 12),
            new THREE.MeshStandardMaterial({ color: 0x059669, roughness: 0.5 })
        );
        scene.add(stem);

        // Render Loop
        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        }
        animate();
    </script>
</body>
</html>`;
}

/* ==========================================================================
   6. ANIMATION LOOP (SWAYING WIND & CAMERA INTERPOLATION)
   ========================================================================== */
let clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();

    // Smooth Camera Tweening
    camera.position.x += (targetCamPos.x - camera.position.x) * 0.05;
    camera.position.y += (targetCamPos.y - camera.position.y) * 0.05;
    camera.position.z += (targetCamPos.z - camera.position.z) * 0.05;

    currentLookAt.x += (targetLookAt.x - currentLookAt.x) * 0.05;
    currentLookAt.y += (targetLookAt.y - currentLookAt.y) * 0.05;
    currentLookAt.z += (targetLookAt.z - currentLookAt.z) * 0.05;

    controls.target.set(currentLookAt.x, currentLookAt.y, currentLookAt.z);
    controls.update();

    // Wind Swaying Animation Effect
    if (windAnimEnabled && plantGroup) {
        const windSway = Math.sin(elapsedTime * 1.5) * 0.04;
        plantGroup.rotation.z = windSway * 0.5;
        plantGroup.rotation.x = Math.cos(elapsedTime * 1.2) * 0.02;

        if (plantPartsMeshes['flower']) {
            plantPartsMeshes['flower'].rotation.z = Math.sin(elapsedTime * 2.0) * 0.08;
        }
        if (plantPartsMeshes['fruit']) {
            plantPartsMeshes['fruit'].rotation.z = Math.cos(elapsedTime * 1.8) * 0.06;
        }
    }

    // Update 3D Annotations Tag Positions
    updateAnnotations();

    renderer.render(scene, camera);
}
