// Import Three.js and OrbitControls (using ES Modules)
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// === Scene ===
const scene = new THREE.Scene()

// === Object ===
// Use a torus geometry for a more complex look
const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)
const material = new THREE.MeshStandardMaterial({
  color: 0xff8000,
  metalness: 0.7,
  roughness: 0.2,
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
  height: window.innerHeight,
}

// === Camera ===
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// === Renderer ===
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0x111111)

// === Orbit Controls ===
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true // smooth camera motion

// === Handle Resize ===
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// === Animation Loop ===
const tick = () => {
  // Slowly rotate the torus
  mesh.rotation.x += 0.01
  mesh.rotation.y += 0.01

  // Update controls for smooth motion
  controls.update()

  // Render
  renderer.render(scene, camera)

  // Loop
  window.requestAnimationFrame(tick)
}

tick()
