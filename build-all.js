const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs-extra')

// Root of the repo
const ROOT = __dirname
const ACTIVITIES = [
  'Activity 1.1-1.2',
  'Activity 1.3',
  'Activity 1.4',
  'Activity 1.5'
]

const outPublic = path.join(ROOT, 'public')

async function buildAll() {
  await fs.remove(outPublic)
  await fs.mkdirp(outPublic)

  for (const act of ACTIVITIES) {
    const actPath = path.join(ROOT, act)
    console.log('\nBuilding', act)

    try {
      // Install & build: rely on each activity having its own package.json.
      // Use npm ci if node_modules missing to be deterministic.
      execSync('npm install', { cwd: actPath, stdio: 'inherit' })
      execSync('npm run build', { cwd: actPath, stdio: 'inherit' })

      // copy dist to public/<slug>
      const slug = act.replace(/\s+/g, '-').toLowerCase()
      const dest = path.join(outPublic, slug)
      await fs.copy(path.join(actPath, 'dist'), dest)
      console.log('Copied build to', dest)
    } catch (err) {
      console.error('Failed building', act, err)
      process.exit(1)
    }
  }

  // copy README or assets if any
  console.log('\nAll builds complete. Public folder ready.')
}

buildAll()
