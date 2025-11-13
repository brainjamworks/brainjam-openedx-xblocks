# BrainJam OpenEdX XBlocks

A collection of modern React-based XBlocks for OpenEdX, built with TypeScript, Vite, and Paragon components. These XBlocks provide enhanced interactive content and assessment capabilities for dental CPD and professional education.

## 📦 What's Included

This repository contains **6 production XBlocks** and **2 development templates**:

### Problem XBlocks (Interactive Assessments)

#### **drag-drop-matching-xblock**
Interactive drag-and-drop matching problems where students connect items from two columns. Features real-time feedback, scoring, and visual connection indicators.

**Use case**: Match dental procedures to symptoms, connect anatomical terms to diagrams, pair medications with conditions.

#### **image-hotspot-xblock**
Click-to-identify interactive image quizzes. Students click on specific regions of an image to answer questions with immediate visual feedback.

**Use case**: Identify anatomical structures, locate pathologies on X-rays, mark treatment areas on dental charts.

### Standard XBlocks (Content Organization)

#### **accordion**
Collapsible content sections that expand/collapse on click. Helps organize long-form content into scannable sections.

**Use case**: FAQs, step-by-step procedures, module summaries, supplementary information.

#### **flashcards**
Interactive study cards with flip animation. Students click to reveal answers and track their progress through the deck.

**Use case**: Terminology review, quick concept checks, pre-assessment warm-ups, exam preparation.

#### **tabs**
Organize related content into tabbed panels. Students navigate between sections without scrolling.

**Use case**: Compare treatment options, organize content by topic, present alternative perspectives.

#### **image-commentary-xblock**
Display images with accompanying commentary or annotations. Combines visual learning with detailed explanations.

**Use case**: Case studies, clinical photos with analysis, procedure demonstrations, radiographic interpretation.

### Development Templates

#### **react-xblock-template**
Production-ready template for creating new standard XBlocks. Includes all architectural patterns and best practices.

#### **react-problem-xblock-template**
Template specifically for graded problem XBlocks with scoring, attempts, and submission handling.

## 🏗️ Architecture

All XBlocks follow a consistent modern architecture:

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: OpenEdX Paragon design system
- **Styling**: SCSS with Liverpool Dental School design tokens
- **Build System**: Vite for fast builds and HMR
- **Backend**: Python XBlock framework
- **Deployment**: Independent Docker container deployment

### Shared Design System

The `shared-styles/` directory contains Liverpool-specific design tokens and component styles used across all XBlocks:

- **liverpool-shared-tokens.scss** - Color palette, typography, spacing
- **liverpool-shared-components.scss** - Reusable component patterns
- **liverpool-shared-utilities.scss** - Helper classes and mixins

## 🚀 Quick Start

### Prerequisites

- Docker with Tutor OpenEdX environment running
- Node.js 18+ and npm
- Python 3.8+

### Build an XBlock

```bash
# Navigate to any XBlock
cd xblocks/accordion

# Install dependencies
cd frontend
npm install

# Build the frontend
npm run build

# Deploy to Tutor
cd ..
./deploy-dev.sh
```

### Enable in OpenEdX Studio

1. Open Studio: `http://apps.local.openedx.io:2001`
2. Go to **Settings → Advanced Settings**
3. Add the XBlock to **Advanced Module List**:
   ```json
   ["accordion", "flashcards", "tabs", "drag_drop_matching", "image_hotspot", "image_commentary"]
   ```
4. In a course unit, click **Advanced** → Select your XBlock

## 📁 Repository Structure

```
brainjam-openedx-xblocks/
├── xblocks/
│   ├── accordion/                      # Collapsible content sections
│   ├── drag-drop-matching-xblock/      # Interactive matching problems
│   ├── flashcards/                     # Study card flip interface
│   ├── image-commentary-xblock/        # Images with commentary
│   ├── image-hotspot-xblock/           # Click-to-identify quizzes
│   ├── tabs/                           # Tabbed content panels
│   └── templates/
│       ├── react-xblock-template/      # Standard XBlock template
│       └── react-problem-xblock-template/  # Problem XBlock template
├── shared-styles/                      # Liverpool design tokens
│   ├── styles/
│   │   ├── liverpool-shared-tokens.scss
│   │   ├── liverpool-shared-components.scss
│   │   └── liverpool-shared-utilities.scss
│   └── student-ui/                     # Legacy styles (deprecated)
└── README.md                           # This file
```

### Individual XBlock Structure

Each XBlock follows this consistent pattern:

```
xblock-name/
├── README.md                    # XBlock-specific documentation
├── setup.py                     # Python package configuration
├── deploy-dev.sh               # Deployment script
├── {xblock_name}/              # Python package
│   ├── __init__.py
│   ├── {xblock_name}.py        # Main XBlock class
│   ├── static/                 # Bootstrap loaders
│   │   ├── student.js
│   │   └── studio.js
│   └── public/                 # Build output (generated)
│       ├── student-ui.js
│       ├── student-ui.css
│       ├── studio-ui.js
│       └── studio-ui.css
└── frontend/                   # React application
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    └── src/
        ├── common/             # Shared utilities
        │   ├── api.ts          # CSRF-protected fetch
        │   └── types.ts
        ├── student-ui/         # Student-facing view
        │   ├── index.tsx
        │   ├── StudentView.tsx
        │   └── styles/
        └── studio-ui/          # Instructor editor
            ├── index.tsx
            ├── StudioView.tsx
            └── styles/
```

## 🛠️ Development Workflow

### Making Changes

1. **Edit React components** in `frontend/src/`
2. **Edit Python logic** in the XBlock Python file
3. **Rebuild**: `cd frontend && npm run build`
4. **Deploy**: `./deploy-dev.sh`
5. **Test**: Refresh browser to see changes

### Faster Development

Build only what you need:

```bash
npm run build:student   # Only student view
npm run build:studio    # Only studio view
npm run build           # Both views
```

### Watch Mode (Optional)

Some XBlocks include a watch script for automatic rebuilds:

```bash
./watch-sync.sh   # Auto-rebuild and deploy on file changes
```

## 🎨 Creating New XBlocks

### Using the Templates

```bash
# For a standard content XBlock
cp -r xblocks/templates/react-xblock-template xblocks/my-new-xblock
cd xblocks/my-new-xblock

# For a graded problem XBlock
cp -r xblocks/templates/react-problem-xblock-template xblocks/my-problem-xblock
cd xblocks/my-problem-xblock

# Follow the template's README for find-replace instructions
```

Templates include:
- ✅ All architectural best practices
- ✅ jQuery unwrapping pattern
- ✅ CSRF-protected API helpers
- ✅ TypeScript strict mode
- ✅ Proper React 18 + Paragon 23 setup
- ✅ Deployment scripts
- ✅ Build configuration

## 🎯 Key Features

### Modern React Architecture
- React 18 with TypeScript for type safety
- Vite for lightning-fast builds (< 1 second)
- Tree-shakeable Paragon component imports
- Minimal bundle sizes with code splitting

### Liverpool Dental School Branding
- Consistent color palette and typography
- Shared component patterns across all XBlocks
- Accessible design following WCAG 2.1 AA
- Professional medical education aesthetic

### Developer Experience
- Hot Module Replacement in development
- TypeScript autocomplete and type checking
- Comprehensive error messages
- One-command deployment scripts

### Security
- CSRF protection on all API calls
- XSS prevention with DOMPurify
- Input validation on backend
- Secure content rendering

## 📊 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend Framework | React | 18.2.0 |
| Language | TypeScript | 5.x |
| Build Tool | Vite | 5.x |
| UI Components | OpenEdX Paragon | 23.x |
| Backend | Python XBlock | 1.x |
| Styling | SCSS | - |
| Package Manager | npm | 8+ |

## 🧪 Testing

### Frontend Testing

```bash
cd xblocks/your-xblock/frontend
npm install
npm test
```

### Python Testing

```bash
cd xblocks/your-xblock
python -m pytest tests/
```

## 📝 XBlock-Specific Documentation

Each XBlock has its own detailed README:

- [accordion/README.md](xblocks/accordion/README.md)
- [drag-drop-matching-xblock/README.md](xblocks/drag-drop-matching-xblock/README.md)
- [flashcards/README.md](xblocks/flashcards/README.md)
- [image-commentary-xblock/README.md](xblocks/image-commentary-xblock/README.md)
- [image-hotspot-xblock/README.md](xblocks/image-hotspot-xblock/README.md)
- [tabs/README.md](xblocks/tabs/README.md)
- [templates/react-xblock-template/README.md](xblocks/templates/react-xblock-template/README.md)
- [templates/react-problem-xblock-template/README.md](xblocks/templates/react-problem-xblock-template/README.md)

## 🔧 Deployment

### Development Environment (Tutor)

Each XBlock includes a `deploy-dev.sh` script:

```bash
cd xblocks/your-xblock
./deploy-dev.sh
```

This script:
1. Checks for built bundles
2. Creates a clean deployment package
3. Copies to Docker containers (LMS and CMS)
4. Installs via pip
5. Restarts containers

### Production Deployment

For production deployment:

```bash
# Build the XBlock
cd frontend && npm run build && cd ..

# Create distribution package
python setup.py sdist

# Install in production environment
pip install dist/xblock-name-1.0.0.tar.gz
```

## 🤝 Contributing

### Adding a New XBlock

1. Copy the appropriate template
2. Find-replace placeholder names
3. Implement your logic
4. Test thoroughly
5. Update documentation
6. Submit for review

### Code Style

- **Python**: Follow PEP 8
- **TypeScript**: Use TypeScript strict mode
- **React**: Functional components with hooks
- **Styling**: Use Liverpool design tokens

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-xblock-name

# Make changes and commit
git add .
git commit -m "Add new XBlock: description"

# Push and create PR
git push origin feature/new-xblock-name
```

## 📄 License

All XBlocks are licensed under **AGPL v3** - see individual XBlock directories for details.

## 🏥 About

These XBlocks are developed by **BrainJam** for the **University of Liverpool Dental School** continuing professional development (CPD) platform.

**Purpose**: Enable high-quality online dental education with interactive content, assessments, and professional learning experiences.

## 🆘 Support

For issues or questions:

1. Check the XBlock-specific README
2. Review the template documentation
3. Check OpenEdX XBlock documentation: https://edx.readthedocs.io/projects/xblock/
4. Review Paragon components: https://paragon-openedx.netlify.app/

## 🗺️ Roadmap

**Current**: 6 XBlocks for dental CPD content

**Planned**:
- Video annotation XBlock
- Interactive 3D model viewer
- Clinical case presentation XBlock
- CPD hour tracking integration

---

**Repository**: https://github.com/brainjamworks/brainjam-openedx-xblocks
**Last Updated**: November 2025
**OpenEdX Compatibility**: Redwood (2024)
**React Version**: 18.2.0
**Paragon Version**: 23.x
