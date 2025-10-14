// Import the Three.js library
import * as THREE from 'three'

// === Scene ===
const scene = new THREE.Scene()

// === Object ===
// Replace BoxGeometry with TorusGeometry (donut shape)
const geometry = new THREE.TorusGeometry(1, 0.3, 16, 100)

// Use a shiny, reflective material
const material = new THREE.MeshStandardMaterial({
    color: 0xff8000,   // orange color
    metalness: 0.7,    // Reflective metal effect
    roughness: 0.2     // Smooth surface
})

// Combine geometry and material into a mesh
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// === Light ===
// Add a point light to make the material visible
const pointLight = new THREE.PointLight(0xffffff, 1.5)
pointLight.position.set(2, 3, 4)
scene.add(pointLight)

// === Sizes ===
const sizes = {
    width: 800,
    height: 600
}

// === Camera ===
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// === Renderer ===
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGLRenderer({ canvas: canvas })
renderer.setSize(sizes.width, sizes.height)

// === Animation ===
const tick = () => {
    // Rotate the object slowly
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    // Render the scene from the camera's view
    renderer.render(scene, camera)

    // Call this function again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
