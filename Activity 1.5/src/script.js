// === Imports ===
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// === Scene ===
const scene = new THREE.Scene()

// === Object ===
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
const material = new THREE.MeshStandardMaterial({
  color: 0xff6600,
  metalness: 0.5,
  roughness: 0.4
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// === Light ===
const light = new THREE.PointLight(0xffffff, 2)
light.position.set(2, 3, 4)
scene.add(light)

// === Sizes ===
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}
const aspectRatio = sizes.width / sizes.height

// === Camera Setup ===

// 🔹 Option 1: Perspective Camera
// const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100)

// 🔹 Option 2: Orthographic Camera (active for this activity)
const frustumSize = 3
const camera = new THREE.OrthographicCamera(
  -frustumSize * aspectRatio,  // left
  frustumSize * aspectRatio,   // right
  frustumSize,                 // top
  -frustumSize,                // bottom
  0.1,                         // near
  100                          // far
)
camera.position.set(3, 3, 3)
camera.lookAt(mesh.position)
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

// === Handle Resize ===
window.addEventListener('resize', () => {
  // Update sizes
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  const newAspect = sizes.width / sizes.height

  // If PerspectiveCamera was used:
  // camera.aspect = newAspect
  // camera.fov = 75 * (sizes.height / sizes.width) // dynamic FOV
  // camera.updateProjectionMatrix()

  // If OrthographicCamera is used:
  camera.left = -frustumSize * newAspect
  camera.right = frustumSize * newAspect
  camera.top = frustumSize
  camera.bottom = -frustumSize
  camera.updateProjectionMatrix()

  // Update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// === Animation Loop ===
const clock = new THREE.Clock()

const tick = () => {
  const elapsedTime = clock.getElapsedTime()

  // Slowly rotate the object
  mesh.rotation.x = elapsedTime * 0.3
  mesh.rotation.y = elapsedTime * 0.5

  // Update controls (smooth movement)
  controls.update()

  // Render scene
  renderer.render(scene, camera)

  // Loop
  window.requestAnimationFrame(tick)
}

tick()
