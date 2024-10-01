import * as THREE from 'three';
import gsap from 'gsap';

const canvas = document.querySelector('canvas.webgl');

//Scene
const scene = new THREE.Scene();

//Objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

const cursor = {
  mouseX: 0,
  mouseY: 0,
};

mesh.position.set(0, 0, -2);
scene.add(mesh);

// mesh.position.x = 2;
// mesh.rotation.x = 4;
// mesh.rotation.z = 3;
// mesh.rotation.y = 2;

// mesh.rotation.reorder('YXZ');

const sizes = {
  width: 800,
  height: 600,
};

window.addEventListener('mousemove', (event) => {
  cursor.mouseX = event.clientX / sizes.width - 0.5;
  cursor.mouseY = -(event.clientY / sizes.height - 0.5);
});

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

// const aspectRatio = sizes.width / sizes.height;

// const camera = new THREE.OrthographicCamera(1 * aspectRatio, -1 * aspectRatio, 1, -1, 0.1, 5);

// console.log(mesh.position.length());
// console.log(mesh.position.normalize());
// console.log(mesh.position.distanceTo(camera));

// const axisHelper = new THREE.AxesHelper(2);
// scene.add(axisHelper);

// const group = new THREE.Group();

// const box1 = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.5, 0.5),
//   new THREE.MeshBasicMaterial({ color: 0xff0000 })
// );
// box1.position.x = 1;
// group.add(box1);

// const box2 = new THREE.Mesh(
//   new THREE.BoxGeometry(0.5, 0.5, 0.5),
//   new THREE.MeshBasicMaterial({ color: 0x00ff00 })
// );
// box2.position.x = -1;
// group.add(box2);

// group.position.y = 1;

// scene.add(group);
// mesh.scale.x = 2;
// mesh.scale.y = 2;
// mesh.scale.z = 3;

scene.add(camera);
// camera.lookAt(mesh.position);

// camera.position.x = 2;
// camera.position.y = 2;
// camera.position.z = 2;
// console.log(camera.position.length());

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);

// gsap.to(mesh.position, { delay: 1, duration: 2, x: 2 });
// gsap.to(mesh.position, { delay: 3, duration: 2, x: 0 });

let time = Date.now();
const clock = new THREE.Clock();
const tick = () => {
  const delta = Date.now() - time;
  time = Date.now();
  // mesh.rotation.y += 0.001 * delta;

  const elapsedTime = clock.getElapsedTime();
  // mesh.position.x = Math.sin(elapsedTime);
  // mesh.position.y = Math.cos(elapsedTime);

  // mesh.position.x = Math.sin(elapsedTime * 2);
  // mesh.position.y = Math.cos(elapsedTime * 2);

  // mesh.rotation.y = elapsedTime;

  camera.lookAt(mesh.position);

  mesh.position.x = Math.sin(Math.PI * cursor.mouseX) * 2;
  mesh.position.z = Math.cos(Math.PI * cursor.mouseX) * 2;
  mesh.position.y = cursor.mouseY * 4;

  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
