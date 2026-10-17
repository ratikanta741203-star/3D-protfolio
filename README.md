# Ratikanta Sahoo : Interactive 3D Portfolio (Edition 2026)

> **RATIKANTA SAHOO**  
> *Full-Stack Developer | Web Developer | Java & Python Developer*  
> **BUILD. LEARN. SOLVE. CREATE.**

A personal portfolio website engineered with **React**, **Three.js**, **React Three Fiber (R3F)**, **Drei**, **GSAP**, and a tactile **Claymorphism** aesthetic. The entire visual experience is strictly constrained to a curated **6-color editorial palette**.

---

## 🎨 Color Palette & Aesthetic

The website strictly uses only these six visual color families:
1. **White (`#FFFFFF`)**: Card surfaces, crisp highlights, sneaker accents.
2. **Black (`#171311`)**: High-contrast typography, dark mode background, developer hair & trousers.
3. **Burgundy (`#641E32`)**: Section titles, editorial headings, hoodie/bomber jacket, timeline nodes, studio rim lighting.
4. **Skin Tone (`#D9A17E`)**: 3D developer character skin tones, warm studio fill light.
5. **Cream (`#F4EBDD`)**: Primary light background, undershirt, subtitle typography, subtle ambient light.
6. **Burnt Sienna Orange (`#C15A32`)**: Call-to-action buttons, interactive active tabs, progress indicator, keyboard accent, studio rim lighting.

---

## 📦 Required Software & Prerequisites

- **Node.js**: `v18.0.0` or higher (recommended: LTS Node `v20.x` or `v22.x`)
- **npm**: `v9.0.0` or higher
- **Modern Web Browser**: Chrome, Edge, Firefox, or Safari with WebGL enabled.

---

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory**:
   ```bash
   cd "e:/3D protfolio"
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your web browser.

---

## 🚀 Build & Production Commands

- **Run Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production Bundle**:
  ```bash
  npm run build
  ```
- **Preview Production Build Locally**:
  ```bash
  npm run preview
  ```

---

## 🌐 Deployment Instructions

### Deploy to Vercel
1. Install the Vercel CLI: `npm i -g vercel` or import your GitHub repository into the [Vercel Dashboard](https://vercel.com).
2. Framework Preset: **Vite**.
3. Root Directory: `./`
4. Build Command: `npm run build`
5. Output Directory: `dist`

### Deploy to Netlify
1. Connect repository or run `npx netlify deploy --prod`.
2. Build Command: `npm run build`
3. Publish Directory: `dist`

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "/<repo-name>/"` to your `vite.config.js`.
3. Add deploy script to `package.json`: `"deploy": "vite build && gh-pages -d dist"`

---

## 🧑‍💻 Customization Guides

### 1. How to Replace the 3D Avatar Portrait
The 3D portrait uses `public/images/avatar-developer-3d.webp`, rendered by `src/components/Avatar3D/PhotoAvatar.jsx`. Replace that image to update the portrait.

To replace the portrait with a true 3D **GLB / GLTF character**:
1. Place your `.glb` or `.gltf` model into the `public/models/` folder (e.g., `public/models/developer.glb`).
2. Replace `PhotoAvatar` in `Avatar3D.jsx` with a component that loads it using Drei's `useGLTF`:
   ```javascript
   import { useGLTF } from '@react-three/drei';
   
   function CustomModel({ pointerPos }) {
     const { scene } = useGLTF('/models/developer.glb');
     // Animate root position and rotation using pointerPos in useFrame
     return <primitive object={scene} />;
   }
   ```
3. Preload your model: `useGLTF.preload('/models/developer.glb');`

### 2. How to Add New Projects
All projects are centralized in `src/data/projectsData.js`. The genuine assets are located in `public/images/projects/`:
- **Odisha Disaster Guardian**: `/images/projects/odisha-disaster-guardian.webp`
- **Defend AI**: `/images/projects/defend-ai.webp`
- **AI Girl Assistant**: `/images/projects/ai-girl-assistant.webp`
- **A9 Shop**: `/images/projects/a9-shop.webp`
- **EATM Smart School**: `/images/projects/eatm-smart-school.webp`
- **A9 Restaurant**: `/images/projects/a9-restaurant.webp`
- **Gesture 3D Particles**: `/images/projects/gesture-3d-particles.webp`
- **Kinetic Visual Art**: `/images/projects/creative-editorial.webp`
- **Ratikanta Sahoo Portrait**: `/images/ratikanta-sahoo.webp`
```javascript
{
  id: 'my-new-project',
  title: 'PROJECT TITLE',
  subtitle: 'Brief architectural subtitle',
  status: 'IN DEVELOPMENT', // or 'COMPLETED', 'CONCEPT PROTOTYPE'
  statusType: 'in-dev',
  categoryTags: ['WEB', 'DATABASE'], // Available filters: ALL, WEB, PYTHON, JAVA, AI, DATABASE
  description: 'Project summary...',
  features: [
    'Key feature 1',
    'Key feature 2',
  ],
  technologies: ['React', 'Java', 'MySQL'],
  githubUrl: 'https://github.com/ratikanta741203-star/your-repo', // or null if in progress
  demoUrl: 'https://your-demo-url.com', // or null if no demo
  placeholderIcon: 'cyclone', // or 'shield-ai', 'bot', 'store', 'academic', 'utensils'
}
```

### 3. How to Add Your Real Resume File
1. Export your finalized PDF resume with the exact filename:
   ```
   Ratikanta_Sahoo_Resume.pdf
   ```
2. Place this file directly into the `public/` directory:
   ```
   e:/3D protfolio/public/Ratikanta_Sahoo_Resume.pdf
   ```
3. When users click **DOWNLOAD RESUME** or **RESUME**, the application will automatically detect the file and trigger a direct download. If the file is missing, it will display the custom Claymorphic resume status modal with contact options.

### 4. How to Configure the Contact Form Endpoint
The contact form in `src/components/Contact.jsx` supports genuine message delivery:
1. Create a `.env.local` file in the project root:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   # Or a Web3Forms endpoint: https://api.web3forms.com/submit
   # Or your custom API backend URL: https://api.yourdomain.com/contact
   ```
2. Configure the selected email service to deliver submissions to `ratikantas512@gmail.com`. When this variable is set, form submissions dispatch a JSON POST request with `name`, `email`, `subject`, and `message`.
3. If this variable is **not set**, the form provides prefilled email and WhatsApp drafts. Visitors must press **Send** in each app; the website does not report that either message was sent.
4. WhatsApp drafts open a chat to `+91 9078835620`. WhatsApp requires the visitor to confirm and send the message in WhatsApp.

---

## 🤖 Interactive AI Portfolio Guide (A9 Assistant)

The website features an interactive conversational AI Agent located at the bottom-right corner:
- **Trained on Ratikanta's Profile**: Knows his B.Tech studies and completed C, C++, SQL, and MERN Stack coursework at EATM; projects (Rudram 2.0, Defend AI, AI Girl Assistant, etc.); hackathon leadership; the typing exercise; and verified contact channels.
- **Interactive Actions**: When asked about projects or the resume, the agent renders direct action buttons to smoothly scroll to that section or trigger the resume download!
- **Zero Latency / Offline-Capable**: Powered by a client-side semantic engine in `src/data/agentKnowledge.js`, requiring no external API keys or server costs to function instantly.
- **Strict Palette & Claymorphism**: Styled in White, Burgundy, and Burnt Sienna with smooth message typing indicators and suggestion chips.

---

## ⚡ Key Interactions & Architectural Features

- **Cinematic Loading Screen**: Full-screen 0% → 100% synchronized loader with audio/shader progress milestones and smooth fade/scale transition.
- **Physics-Interpolated 3D Avatar**: Translates toward cursor movement with smooth damping (`THREE.MathUtils.damp`), body tilt, head tracking, and gentle idle bobbing.
- **Dynamic Role Carousel**: Cycles through `FULL-STACK DEVELOPER` → `EDITOR` → `JAVA DEVELOPER` → `TYPING & PRODUCTIVITY` without text jumping.
- **Sticky Claymorphic Header**: Real-time active section tracking via `IntersectionObserver` with mobile drawer and keyboard accessibility.
- **Interactive Typing Benchmark**: Live typing test pad calculating real-time WPM and accuracy telemetry.
- **Editorial Timelines**: Smart India Hackathon leadership milestones and academic credentials.
- **Accessibility & Reduced Motion**: Automatically honors system `prefers-reduced-motion` settings and provides full WebGL fallbacks.

---

## ⚠️ Known Limitations & Considerations

- **WebGL Requirement**: The interactive 3D hero avatar requires a WebGL-capable browser. On legacy devices without WebGL, a responsive illustrated fallback card is automatically displayed.
- **Mobile Power Optimization**: On touch-enabled devices and mobile screens, particle density and pixel ratio are throttled to ensure 60 FPS battery-conscious performance.

---

## 📬 Contact Channels

- **Primary Email**: [ratikantas512@gmail.com](mailto:ratikantas512@gmail.com)
- **Alternative Email**: [ratikanta741203@gmail.com](mailto:ratikanta741203@gmail.com)
- **Phone**: +91 9078835620
- **Location**: Jagatsinghpur, Odisha, India
- **GitHub**: [github.com/ratikanta741203-star](https://github.com/ratikanta741203-star)
- **LinkedIn**: [linkedin.com/in/ratikanta-sahoo-452763358](https://in.linkedin.com/in/ratikanta-sahoo-452763358)
- **Instagram**: [instagram.com/ratikanta_sahoo_149_a9](https://www.instagram.com/ratikanta_sahoo_149_a9?stkn=bjRxazc4dGd1dGs4)
- **X (Twitter)**: [@A9_Sahoo](https://x.com/A9_Sahoo)
- **WhatsApp**: [+91 9078835620](https://wa.me/919078835620)
