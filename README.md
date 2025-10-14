# 🚀 ITE-18: Three.js Fundamentals (Activity 1.1 - 1.5)

## 📘 Introduction
This repository contains the completed project for **Activity 1.1 through 1.5** of the **ITE-18 (Applications Development and Emerging Technologies)** course, as instructed by **Prof. James Earl D. Cubillas, M.Sc., ECT**.

These activities cover the core fundamentals of the **Three.js** library — including scene setup, object manipulation, animation, and camera controls.

---


## 🛠️ Project Structure & Technologies

This project was built using the following core technologies, following the guidance in the laboratory manual:

- **HTML** – For the basic webpage structure and canvas element  
- **Vanilla JavaScript** – For implementing the Three.js logic  
- **Three.js** – The core 3D graphics library  
- **OrbitControls.js** – Used for camera navigation (introduced in Activity 1.5)

---

## ✨ Modifications & Key Takeaways

Per the instruction to *“play around or modify the given code,”* the following enhancements were implemented beyond the basic lab steps.  
These modifications demonstrate mastery of the concepts covered in each part:

### 🧩 Part 1 & 3: Basic Scene & Transform Objects
- **Complex Geometry** – The main object was changed from a simple `BoxGeometry` to a `TorusKnotGeometry` to better showcase lighting and rotation.  
- **Scene Hierarchy (Solar System Concept)** – A `THREE.Group` was used to create a parent-child relationship where a “Moon” orbits an “Earth,” and both rotate around a central point, demonstrating inherited transformations.

### 🎞️ Part 4: Animations
- **Advanced Time-Based Animation** – The object’s position and scale are controlled using `Math.sin()` and `Math.cos()` based on `elapsedTime`, creating a smooth, rhythmic “breathing” effect rather than simple rotation.  
- **Cinematic Camera** – The camera was animated to slowly orbit the scene, giving a dynamic, cinematic view of the setup.

### 🎥 Part 5: Cameras
- **Camera Damping** – `controls.enableDamping = true` was enabled to produce smooth, realistic camera movement.  
- **Rotation Limits** – `controls.maxPolarAngle` was configured to restrict the camera’s vertical rotation, preventing it from going below the scene plane.

---

## ⚙️ Local Development Setup

Follow the steps below to run this project locally:

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/jbcolima/Colima_Activity1.1-1.5_ITE18
cd ITE-18_Activity_1
```

2️⃣ Install Dependencies (if using Vite or a bundler)
```bash
npm install
```

3️⃣ Start the Local Server
```bash
npm run dev
```

4️⃣ Open in Browser
```bash
Open the provided local URL in your browser (usually http://localhost:5173/).
```
---

🧠 Summary

This project showcases a progression from a static 3D scene to a fully interactive and animated environment using Three.js — applying key concepts such as geometry, materials, transformations, camera control, and animation timing.


* 👨‍💻 Developed By: John Barry R. Colima
* 🎓 ITE-18 — Applications Development and Emerging Technologies
* 👨‍🏫 Instructor: Prof. James Earl D. Cubillas, M.Sc., ECT
