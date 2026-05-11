# Andrew Jiang Photography

A modern, interactive photography portfolio website built to showcase my personal/professional photography work across multiple categories. Features a responsive image gallery system powered by AWS S3 and a custom editorial aesthetic.

---

## Purpose

This portfolio serves as both a professional showcase and a booking platform for photography services, including portrait, travel, and graduation photography. Images are managed entirely through AWS S3, allowing the site to stay updated without code changes.

---

## Project Preview

**Deployment Link**: [https://andrewjiangphotos.com/](https://andrewjiangphotos.com/)

![Watch the video](/content/Animation.gif)

## Tech Stack

| Layer         | Technology                 |
| ------------- | -------------------------- |
| Framework     | React 19                   |
| Build Tool    | Vite 7                     |
| Routing       | React Router 7             |
| Styling       | Tailwind CSS 4             |
| Animations    | Framer Motion 12           |
| Image Storage | AWS S3                     |
| AWS SDK       | @aws-sdk/client-s3         |
| Icons         | FontAwesome 7, React Icons |
| Linting       | ESLint 9                   |

---

## Key Features

### Dynamic AWS S3 Image System

Images are fetched from an S3 bucket via a `manifest.json` file at the bucket root. This single-request manifest pattern avoids repeated S3 API calls, reducing latency and cost. Images are organized into named folders (`people`, `travel`, `graduation/solos`, `graduation/groups`, `latest-works`, etc.) and sorted by upload date for the "Latest Works" feed.

### Responsive Masonry Grid

A custom masonry layout component adjusts column count based on viewport width — 1 column on mobile up to 5 columns on large desktop — using real-time resize listeners rather than CSS Grid breakpoints, giving full control over column distribution.

### Lightbox Image Preview

Clicking any gallery image opens a full-screen lightbox modal with keyboard navigation (arrow keys to browse, Escape to close), responsive sizing, and smooth entrance/exit transitions.

### Scroll-Aware Sticky Header

The navigation header hides when scrolling down and reappears when scrolling up, keeping the viewport uncluttered during image browsing — a pattern common in editorial and portfolio sites.

### Framer Motion Animations

- Staggered fade + blur entrance animations on the hero page
- Per-character letter animations on hover (Y-axis movement)
- Auto-rotating hero carousel with 5-second intervals and 1.5s easing transitions
- Scale and opacity transforms on interactive elements

### Portfolio Categories

- **Latest Works** — all images sorted by most recent upload
- **People** — portrait photography
- **Travel** — travel photography
- **Graduation** — split into solo and group shoots, with a dedicated pricing page

---

## Project Structure

```
ajiang-photography/
├── src/
│   ├── animations/        # Reusable Framer Motion animation components
│   ├── components/        # Shared UI: Header, Navbar, Footer, ImagePreview, ImageCarousel
│   │   └── Masonary Grid/ # Masonry layout and individual grid image components
│   ├── lib/
│   │   └── s3.js          # AWS S3 fetch utilities (folder, subfolder, all-images)
│   ├── pages/             # Route-level page components
│   │   ├── Home.jsx
│   │   ├── LatestWorks.jsx
│   │   ├── People.jsx
│   │   ├── Travel.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Graduation/
│   │   └── Pricing/
│   ├── App.jsx            # React Router configuration
│   └── main.jsx           # Entry point
├── public/                # Static assets (favicon, custom font)
├── .env                   # Environment variables (S3 base URL)
├── vite.config.js
└── package.json
```

---

## Installation

**Prerequisites:** Node.js 18+, npm

```bash
# Clone the repository
git clone https://github.com/Yousor0/ajiang-photography.git
cd ajiang-photography

# Install dependencies
npm install

# Create the environment file
cp .env.example .env
# Then fill in your S3 base URL (see Environment Variables below)

# Start the development server
npm run dev
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_S3_BASE_URL=https://your-bucket-name.s3.your-region.amazonaws.com
```

The S3 bucket must contain a `manifest.json` at its root with the following shape:

```json
{
  "folder-name": [
    {
      "key": "folder-name/image.jpg",
      "lastModified": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

Supported folder keys: `home-carousel`, `people`, `travel`, `graduation/solos`, `graduation/groups`, `latest-works`, `misc`.

---

## Available Scripts

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## AWS S3 Setup

1. Create an S3 bucket in your preferred region.
2. Enable public read access (or configure a CloudFront distribution).
3. Upload images organized into the folder structure above.
4. Generate and upload `manifest.json` to the bucket root.
5. Set `VITE_S3_BASE_URL` to your bucket (or CloudFront) base URL.

> The manifest pattern was chosen deliberately: it replaces per-folder `ListObjectsV2` API calls with a single HTTP GET, cutting S3 request costs and improving initial load time.

---

## Design Notes

- **Typography:** Custom editorial font (`dr-exclusive-editorial.ttf`) paired with Bebas Neue (headings) and Nunito (body) from Google Fonts.
- **Theme:** Dark home page, light portfolio pages — intentional contrast between the landing experience and the gallery.
- **Animations:** All transitions use Framer Motion for consistent easing and hardware acceleration.

---

## Contact

- **Instagram:** [@ajiang.photography](https://instagram.com/ajiang.photography)
- **LinkedIn:** [linkedin.com/in/jkeshao](https://linkedin.com/in/jkeshao/)
- **Email:** andrewjiang.photos@gmail.com
