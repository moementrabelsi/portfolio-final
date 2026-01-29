# Deploy to Vercel

Your portfolio is ready to deploy. Follow these steps:

## 1. Open Vercel

Go to **[vercel.com](https://vercel.com)** and sign in (or create an account).

## 2. Import your GitHub repo

- Click **“Add New…”** → **“Project”**
- Under **Import Git Repository**, find **moementrabelsi/portfolio-final** (or connect GitHub if it’s not listed)
- Click **Import** next to your repo

## 3. Configure the project (optional)

Vercel will detect Next.js automatically. You can leave defaults:

- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

No environment variables are required for this portfolio.

## 4. Deploy

- Click **Deploy**
- Wait for the build to finish (usually 1–2 minutes)
- You’ll get a live URL like `portfolio-final-xxx.vercel.app`

## 5. Custom domain (optional)

In the Vercel dashboard → your project → **Settings** → **Domains**, add your own domain and follow the DNS instructions.

---

**Note:** After you push new commits to `main`, Vercel will automatically redeploy.
