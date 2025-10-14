// === Imports ===
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'

// === Scene ===
const scene = new THREE.Scene()

// === Object ===
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
const material = new THREE.MeshStandardMaterial({
  color: 0xff8000,
  metalness: 0.7,
  roughness: 0.2
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// === Light ===
const pointLight = new THREE.PointLight(0xffffff, 1.5)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

// === Sizes ===
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

// === Camera ===
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 4
scene.add(camera)

// === Renderer ===
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x111111)

// === Controls ===
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

// === Clock ===
const clock = new THREE.Clock()

// === GSAP Animation Example ===
// Move the object smoothly along the X-axis after 1s
gsap.to(mesh.position, {
  duration: 2,
  delay: 1,
  x: 2,
  yoyo: true,
  repeat: 1,
  ease: "power1.inOut"
})

// === Handle Resize ===
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
})

// === Animation Loop ===
const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // === Animate Object (Cyclical Motion) ===
  mesh.position.y = Math.sin(elapsedTime) * 0.5
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01

  // === Animate Camera (Cinematic Circular Motion) ===
  camera.position.x = Math.sin(elapsedTime * 0.2) * 5
  camera.position.z = Math.cos(elapsedTime * 0.2) * 5
  camera.lookAt(mesh.position)

  // Update controls (for damping)
  controls.update()

  // Render Scene
  renderer.render(scene, camera)

  // Loop
  window.requestAnimationFrame(tick)
}

tick()
