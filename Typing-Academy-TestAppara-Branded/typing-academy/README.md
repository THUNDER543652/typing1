# Typing Academy (standalone)

An independent Next.js typing-course prototype. It is intentionally separate from TestAppara so it can be developed and tested on its own, then integrated later.

## Included
- Three levels: Beginner, Intermediate and Advanced
- Module-based course catalogue
- Data-driven lesson pages using one reusable dynamic route
- Guided typing exercises with exact-text checking
- Basic accuracy/error feedback
- Local-device completion saving
- Responsive layout

## Run locally
1. Install Node.js 20.9 or later.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:3000`.

## Project structure
- `app/` — routes, layout and global styles
- `components/TypingPractice.js` — reusable typing exercise
- `lib/course.js` — course levels, modules and lesson content

## Important prototype notes
- Progress is stored in the browser's localStorage on the current device only.
- WPM timing, accounts, cloud sync, admin content editing, certificates and full keyboard visualizations are not implemented yet.
- Lesson content is starter content and should be expanded and reviewed before public launch.
- No TestAppara project files are included or modified.
