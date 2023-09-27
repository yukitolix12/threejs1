/* シーン */
const scene = new THREE.Scene();

/* カメラ */
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

/* レンダラー */
const renderer = new THREE.WebGLRenderer();