var scene, camera, renderer;
var geometry, material, mesh;

init();
animate();

function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;



    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var loader = new THREE.GLTFLoader();
    loader.load('/room/scene.gltf', function (gltf) {
        scene.add(gltf.scene);
      }, undefined, function (error) {
        console.error(error);
      });
    


}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;

    renderer.render(scene, camera);
}
