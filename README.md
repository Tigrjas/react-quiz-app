# Quiz App

A simple interactive quiz application built with React. No backend yet

## Features

- Multi-question quiz with multiple choice answers
- Navigate freely between questions with Previous / Next buttons
- Answers are saved as you move between questions
- Next button is disabled until an answer is selected
- Results screen displays your final score upon completion

## Project Structure

```
src/
├── App.jsx               # Root component
├── index.css             # Global styles
└── components/
    ├── quiz.jsx          # Quiz logic and question rendering
    └── results.jsx       # Results screen
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd quiz-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## How It Works

1. The quiz presents one question at a time from a question bank defined in `quiz.jsx`
2. Select an answer to enable the Next button
3. Use Previous to go back and change an answer at any time
4. On the last question, the Next button becomes **Finish Quiz**
5. After finishing, the Results screen shows your score

## Adding Questions

To add more questions, update the `questionBank` array in `quiz.jsx`:

```js
{
    question: "Your question here?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    answer: "Option A"
}
```

## Built With

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
