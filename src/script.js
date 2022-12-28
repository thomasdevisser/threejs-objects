import "./style.css";
import * as THREE from "three";

// Set the scene
const canvas = document.querySelector("canvas.webgl");
const scene = new THREE.Scene();

// Create a group for the cubes
const group = new THREE.Group();
scene.add(group);
group.position.y = 0;
group.scale.y = 3;
group.rotation.y = -2;

// Create the cubes and add them to the group
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xe4a2ff })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xe48a4c })
);
group.add(cube2);

cube2.position.set(-2, 0, 0);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x3f8a4c })
);
group.add(cube3);

cube3.position.set(2, 0, 0);

// Add an axes helper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

const sizes = {
  width: 800,
  height: 600,
};

// Add the camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
scene.add(camera);
camera.position.z = 4;
camera.lookAt(cube1.position);

// Render the scene
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
