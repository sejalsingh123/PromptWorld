📘 PromptWorld — AI Prompt Sharing Platform

Built with Next.js, MongoDB & NextAuth (Google Authentication)

PromptWorld is an open-source AI prompting platform where users can discover, create, edit, delete, and share AI prompts.
It is designed to be a modern creative space where developers and AI enthusiasts explore and share high-quality prompts to improve productivity and creativity.

🚀 Features
🔐 Authentication

Google Sign-In using NextAuth.js

Secure session handling

Protected routes & API security

🧠 AI Prompt Management

Create AI prompts

Edit your own prompts

Delete your own prompts

Copy prompt text directly using copy icon

Add tags (#sql, #webdev, #idea, etc.)

👥 User-Based Experience

View all prompts on the homepage

Search prompts by tag, username, or keyword

Visit any user’s profile by clicking their username

Logged-in users cannot edit or delete other users’ prompts

🗂 Database Features

MongoDB for highly scalable document storage

Mongoose models for users & prompts

API routes follow REST principles

🎨 UI / UX

Modern, responsive UI

Gradient backgrounds & clean layout

Smooth interactions

Profile dashboard

“Create Prompt” page with form validation

🛠 Tech Stack
Frontend

Next.js 13+ App Router

React

Tailwind CSS

Backend

Next.js server actions

NextAuth.js (Google Login)

MongoDB + Mongoose

API Routes (/api/prompt, /api/users/[id]/posts, etc.)


📂 Project Structure
PromptWorld/
│── app/
│   ├── create-prompt/
│   ├── myProfile/[id]/
│   ├── api/
│   │   ├── prompt/
│   │   ├── users/[id]/posts
│── components/
│── models/
│── utils/
│── public/
│── README.md

⚙️ Environment Variables

Create a .env file and add:

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_key
MONGODB_URI=your_mongodb_connection_string

🏗 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/sejalsingh123/PromptWorld.git
cd PromptWorld

2️⃣ Install Dependencies
npm install

3️⃣ Add Environment Variables

Create a .env file and paste the vars from above.

4️⃣ Run the Development Server
npm run dev


Visit:

http://localhost:3000

🧪 Core Functionalities
🔹 Create Prompt

POST → /api/prompt

🔹 View All Prompts

GET → /api/prompt

🔹 Edit a Prompt

PATCH → /api/prompt/[id]

🔹 Delete Prompt

DELETE → /api/prompt/[id]

🔹 User Posts

GET → /api/users/[id]/posts

🤝 Contributing

Contributions are welcome!
If you'd like to improve PromptWorld, feel free to fork the repo and open a pull request.

⭐ Show Your Support

If you like this project, consider giving it a star on GitHub ⭐.
It helps others discover the project!

📬 Contact

Developer: Sejal Singh
GitHub: https://github.com/sejalsingh123
