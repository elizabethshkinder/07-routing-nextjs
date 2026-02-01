# NoteHub — Advanced Routing (HW-07)

This project is a continuation of the **NoteHub** application built with **Next.js (App Router)**.  
The main focus of this homework is advanced routing: parallel routes, intercepting routes, filtering, and modal navigation.

## 🚀 Live Demo
🔗 Deployed on Vercel:  
[https://your-vercel-link.vercel.app](https://your-vercel-link.vercel.app)

## 📂 Source Code
🔗 GitHub repository:  
[https://github.com/your-username/07-routing-nextjs](https://github.com/your-username/07-routing-nextjs)

---

## 🛠️ Tech Stack
- **Next.js** (App Router)
- **TypeScript**
- **React**
- **TanStack Query (React Query)**
- **Axios**
- **CSS Modules**
- **Vercel** (deployment)

---

## ✨ Features

### 🔀 Advanced Routing
- Catch-all routes for filtering notes by tag (`/notes/filter/[...slug]`)
- Parallel routes for sidebar navigation
- Custom **404 Not Found** page

### 🗂️ Notes Filtering
- Filter notes by tag (Meeting, Personal, Shopping, Todo, Work)
- Route-based filtering without full page reload
- "All notes" view without tag parameter

### 🔍 Search
- Debounced search for notes
- Optimized UX: instant input response with delayed API requests

### 🪟 Modal Preview
- Note details are opened in a **modal window**
- Implemented using **intercepting routes**
- Background page remains visible while modal is open

### 🌐 Data Fetching
- API requests handled with **Axios**
- Server-side data prefetching with **React Query**
- CSR + SSR support via `HydrationBoundary`

---

