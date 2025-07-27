# clarifi MVP

> 🧠 Stay connected. Stay focused.

clarifi is a focus and time-management app designed to support college students with ADHD. This MVP centers around a clean, customizable Pomodoro timer — the first step in a broader system for managing academic and wellness tasks.

## 🚀 Current Features (MVP)

- ⏱️ **Pomodoro Timer**
  - Focus / Short Break / Long Break modes
  - Customizable durations per mode
  - Light and dark mode support
  - Theming based on current mode (e.g. focus = red, break = blue)
  - Modal interface for settings and preferences

- 🖥️ **Modern UI**
  - Responsive and accessible layout
  - Animated transitions and intuitive interactions
  - Designed with ADHD-friendly UX principles

## 🛠️ Tech Stack

- **Frontend:** React + TypeScript
- **Styling:** CSS Modules / Variables with dynamic theming
- **State Management:** React Context
- **Build Tool:** Vite

## 🧪 In Progress

- ⏯️ Timer logic (intervals, auto transitions, resets)
- 📊 Session statistics
- ⚙️ User settings persistence
- 🌓 System-aware dark/light mode toggle

## 🗺️ Planned Features

- ✅ Top 3 Tasks tracking
- 📅 Smart reminders and nudges
- 💬 Self-reflection prompts
- 🧩 Integration with academic tools
- 🔐 Guest + Auth login options

## 📁 Folder Structure

```bash
src/
├── components/         # Reusable UI components
├── context/            # Pomodoro state management
├── styles/             # Global and component-level styles
├── utils/              # Helper functions
├── types/              # TypeScript types and interfaces
├── screens/            # Screen components (Pomodoro, Settings, etc.)
└── App.tsx             # Root component
```

## 📸 Preview

Coming soon…

## 🧠 About clarifi

clarifi is being developed by Malia Wakesho-Ajwang, a student-founder focused on building compassionate, neurodivergent-first technology. This MVP is part of a larger vision to support executive function, wellness, and academic confidence in students who think differently.

## 📬 Contact

Have feedback or ideas? Email us at clarifi.focus@gmail.com or follow along at asoma.app


© 2025 Asoma Digital Ltd. All rights reserved.

## Development Notes: 
The current template our mvp is using provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
