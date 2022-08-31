import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

// Spinning Donut

const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0x0d175e });
const spinningDonut = new THREE.Mesh(geometry, material);

//scene.add(spinningDonut);


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);


// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(500));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

// Background

const spaceTexture = new THREE.TextureLoader().load('MidJ.png');
scene.background = spaceTexture;

// Avatar

const myProfilePicFile = new THREE.TextureLoader().load("me.png");

const myPic = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: myProfilePicFile }));

scene.add(myPic);

// Martian Attack Box Image--------------------------------------------

const martianAttackFile = new THREE.TextureLoader().load("../Pic/Martian Attack/Ma2.png");

const martianAttack1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: martianAttackFile }));

scene.add(martianAttack1);
martianAttack1.position.z = 15;
martianAttack1.position.x = 2;


// Game of Life Box Image--------------------------------------------

const gameOfLifeFile = new THREE.TextureLoader().load("../Pic/GameOfLife/GOL2.png");

const gameOfLife1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: gameOfLifeFile }));

scene.add(gameOfLife1);
 gameOfLife1.position.z = 20;
 gameOfLife1.position.x = -2;

 //Rim Sky Box

const rimSkyFile = new THREE.TextureLoader().load("../Pic/rimsky/rimsky2.png");

const rimSky1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: rimSkyFile }));

scene.add(rimSky1);
rimSky1.position.z = 27;
rimSky1.position.x = -1;

//Pong Box

const pongFile = new THREE.TextureLoader().load("../Pic/pong/pong1.png");

const pong1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: pongFile }));

scene.add(pong1);
pong1.position.z = 45;
pong1.position.x = -2;
//Necro Box

const necroFile = new THREE.TextureLoader().load("../Pic/The NEcromancer/Necro1.png");

const necro1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: necroFile }));

scene.add(necro1);
necro1.position.z = 65;
necro1.position.x = -2;



//Zombie Game Box

const zombieFile = new THREE.TextureLoader().load("../Pic/Zombie/zombie5.png");

const zombie1 = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), new THREE.MeshBasicMaterial({ map: zombieFile }));

scene.add(zombie1);
zombie1.position.z = 55;
zombie1.position.x = -2;





// Moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

scene.add(moon);

moon.position.z = 30;
moon.position.setX(-10);

myPic.position.z = -5;
myPic.position.x = 2;

// Scroll Animation

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

 martianAttack1.rotation.x += 0.05;
 martianAttack1.rotation.y += 0.075;
 martianAttack1.rotation.z += 0.05;

  myPic.rotation.y += 0.01;
  myPic.rotation.z += 0.01;

    //ZombieRotation
   zombie1.rotation.x += 0.05;
    zombie1.rotation.y += 0.075;
    zombie1.rotation.z += 0.05;

    //RimSky Rotation
    rimSky1.rotation.x += 0.05;
     rimSky1.rotation.y += 0.075;
    rimSky1.rotation.z += 0.05;

  //Game of Life Rotation
    gameOfLife1.rotation.x += 0.05;
    gameOfLife1.rotation.y += 0.075;
    gameOfLife1.rotation.z += 0.05;

//Necro Rotation
    necro1.rotation.x += 0.05;
    necro1.rotation.y += 0.075;
    necro1.rotation.z += 0.05;

    pong1.rotation.x += 0.05;
    pong1.rotation.y += 0.075;
    pong1.rotation.z += 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// Animation Loop

function animate() {
  requestAnimationFrame(animate);

  spinningDonut.rotation.x += 0.01;
  spinningDonut.rotation.y += 0.005;
  spinningDonut.rotation.z += 0.01;

  myPic.rotation.y += 0.01;
  myPic.rotation.x += 0.01;

  moon.rotation.x += 0.005;

  // controls.update();

  renderer.render(scene, camera);
}

animate();
