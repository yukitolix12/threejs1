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

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

/* ボックスのサイズ決定、メッシュ、追加 */
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

/* アニメーション制御 */
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
}

/* ウィンドウ変更時にサイズを維持する処理 */
function onWindowResize() {
    camera.aspect = window.InnerWidth / window.innerHeight;
}

animate();
