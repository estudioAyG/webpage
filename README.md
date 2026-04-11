# 🌐 Website Project

## 🛠 Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the repository
```
git clone <YOUR_GIT_URL>
```

### 2️⃣ Enter the project directory
```
cd <YOUR_PROJECT_NAME>
```

### 3️⃣ Install dependencies
```
npm install
```

### 4️⃣ Start the development server
```
npm run dev
```


Open your browser at http://localhost:8080/ to see the project live.


## ⚡ Technologies Used

This project uses:

* Vite – Fast build tool
* TypeScript – Type-safe JavaScript
* React – UI library
* shadcn-ui – Component library
* Tailwind CSS – Utility-first CSS framework

## 🚀 Deploying the Project

Deployment is automated via GitHub Actions. When a PR is merged into `master`, the site is built and deployed to GitHub Pages automatically.

### Workflow

1. Create a new branch from `master`:
```
git checkout -b feat/<feature-name>
# or
git checkout -b fix/<fix-name>
```

2. Make your changes and test locally with `npm run dev`.

3. Push your branch and open a Pull Request against `master`.

4. Once the PR is reviewed and merged, GitHub Actions will automatically:
   - Install dependencies
   - Build the project (`npm run build`)
   - Deploy the contents of `dist/` to GitHub Pages
