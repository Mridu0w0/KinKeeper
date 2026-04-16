# KeenKeeper 🌿

KeenKeeper is a modern personal relationship management dashboard built with React. In today's busy world, it's easy to lose touch with the people who matter. KeenKeeper acts as a personal CRM for your social life, helping you track interactions with friends, family, and colleagues, set contact goals, and ensure no meaningful connection slips through the cracks.

---

## ✨ Features

- **Interactive Dashboard:** View summary statistics (Total Friends, On Track, Need Attention, Interactions) and browse your network through dynamic, status-colored friend cards.
- **Detailed Profiles:** Dive deep into individual connections to view their bio, communication tags, contact streak (days since last contact vs. goal), and the exact date you should reach out next.
- **Quick Check-Ins:** Instantly log a Call, Text, or Video interaction with a friend directly from their profile.
- **Dynamic Timeline:** A vertically scrolling history of all your logged interactions. Includes a dropdown filter to easily sort between your calls, texts, video chats, or meetups.
- **Friendship Analytics:** A beautiful, responsive Donut Chart that provides a visual breakdown of your communication habits by interaction type.
- **Instant Feedback:** Sleek toast notifications alert you when an interaction has been successfully logged.
- **Local Persistence:** Timeline data is saved securely to your browser's LocalStorage, ensuring your logged interactions remain between page reloads.

---

## 🛠️ Technologies Used

**Core Frameworks & Libraries:**

- **React 18** - UI Library (Utilizing modern hooks like `useEffect`, `useState`, `use`, and `Suspense`)
- **React Router DOM** - For handling client-side routing between the Dashboard, Details, Timeline, and Analytics pages.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI styling and layout.
- **daisyUI** - Tailwind component library used for buttons, cards, badges, and the vertical timeline structure.

**Data Visualization & Icons:**

- **Recharts** - Used to render the custom, responsive donut chart on the Analytics page.
- **React Icons** - Providing scalable vector icons (`FaPhoneAlt`, `FaCommentDots`, `FaVideo`, etc.) across the application.

**Utilities:**

- **React Hot Toast** - For lightweight, customizable success notifications.
- **Fetch API & JSON** - For asynchronously loading the mock database (`FriendsData.json`).
- **LocalStorage** - For client-side data persistence of the interaction timeline.

---

## 🚀 Getting Started

Follow these steps to run KeenKeeper locally on your machine.

### Prerequisites

Make sure you have Node.js and npm installed on your computer.

### 1. Clone the repository

```bash
git clone [https://github.com/yourusername/keenkeeper.git](https://github.com/yourusername/keenkeeper.git)
cd keenkeeper
```
