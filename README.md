🚀 ITE-18: Three.js Fundamentals (Activity 1.1 - 1.5)
Introduction
This repository contains the completed project for Activity 1.1 through 1.5 of the ITE-18 (Applications Development and Emerging Technologies) course, as instructed by Prof. James Earl D. Cubillas, M.Sc., ECT.

The activities cover the core fundamentals of the Three.js library, including scene setup, object manipulation, animation, and camera controls.

🔗 Live Demo & Submission Links
Item	Status	Link
Live Project (Vercel)	Deployed	[PASTE YOUR VERCELL DEPLOYMENT LINK HERE]
Source Code (GitHub)	Public	[THIS IS THE REPOSITORY YOU ARE VIEWING]
ZIP File	Submitted	(Uploaded via LMS/Email)

Export to Sheets
🛠️ Project Structure & Technologies
This project was built using the following core technologies, following the guidance in the lab manual:

HTML: For the basic webpage structure and canvas element.

Vanilla JavaScript: For implementing the Three.js logic.

Three.js: The core 3D graphics library.

OrbitControls.js: Used for camera navigation (introduced in Activity 1.5).

File Structure
The key files in this repository are:

ITE-18_Activity_1/
├── index.html          # Main entry point for the scene.
├── main.js             # Contains all Three.js code (1.1 - 1.5 modifications).
├── /node_modules/      # Dependencies for running the local server.
├── package.json        # Project manifest for local setup.
├── README.md           # This file.
✨ Modifications & Key Takeaways
Per the instruction to "play around or modify the given code," the following enhancements were implemented beyond the basic lab steps. These modifications demonstrate mastery of the concepts covered in each part:

Part 1 & 3: Basic Scene & Transform Objects
Complex Geometry: The primary object was changed from a simple Box to a TorusKnotGeometry to better showcase lighting and rotation.

Scene Hierarchy (Solar System Concept): A THREE.Group was used to create a parent-child relationship where a "Moon" orbits an "Earth," and both rotate around a central point, demonstrating inherited transformations.

Part 4: Animations
Advanced Time-Based Animation: The object's position and scale are controlled using Math.sin() and Math.cos() functions based on elapsed time, creating a smooth, rhythmic "breathing" effect instead of simple continuous rotation.

Cinematic Camera: The camera has been animated to slowly orbit the scene, providing a dynamic, cinematic view of the entire setup.

Part 5: Cameras
Camera Damping: controls.enableDamping = true was implemented to provide a smoother, more realistic "friction" when the user rotates the view.

Rotation Limits: controls.maxPolarAngle was set to restrict the camera's vertical view, preventing the user from viewing the scene from below the floor plane.

⚙️ Local Development Setup
To run this project locally:

Clone the Repository:

Bash

git clone [PASTE YOUR GITHUB CLONE URL HERE]
cd ITE-18_Activity_1
Install Dependencies (If using a bundler like Vite):

Bash

npm install
Start the Local Server:

Bash

npm run dev
# OR: Use a simple local server extension for your IDE (like Live Server).
Open the provided local URL in your browser (usually http://localhost:5173/).
