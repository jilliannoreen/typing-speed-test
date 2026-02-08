# Frontend Mentor - Typing Speed Test solution

> **⚠️ Work In Progress** - This project is currently under development. Core features like the typing test logic, timer, WPM calculation, and results page are still being implemented.

This is a solution to the [Typing Speed Test challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/typing-speed-test). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Select difficulty levels (Easy, Medium, Hard) via dropdown controls
- Switch between "Timed (60s)" mode and "Passage" mode via dropdown
- See dynamically loaded passages based on selected difficulty
- Navigate using keyboard (Tab, Arrow keys, Space, Enter)
- Experience accessible focus states for keyboard navigation

### Links

- Solution URL: [GitHub Repository](https://github.com/jilliannoreen/typing-speed-test)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript (ES6+)
- Async/Await for JSON data loading
- CSS Grid for responsive layouts
- Custom dropdown components
- Modular CSS architecture

### What I learned

This project helped me solidify several key concepts:



**1. Accessible keyboard navigation:**

```css
.control input[type="radio"]:focus-visible + label {
    outline: 2px solid var(--blue-400);
    outline-offset: 2px;
}
```

**2. Modular CSS architecture:**

I organized CSS into separate files for better maintainability:
- `variables.css` - Design tokens and CSS custom properties
- `reset.css` - Modern CSS reset
- `fonts.css` - Font-face declarations
- `controls.css` - Dropdown and control styles
- `stats.css` - Statistics display styles
- `base.css` - Main layout and component imports



### Continued development

Areas I want to focus on in future projects:

- **Typing test logic**: Implement the actual typing functionality with character-by-character validation
- **Timer implementation**: Build a production-ready timer with start, pause, and reset functionality
- **WPM calculation**: Calculate words per minute and accuracy in real-time
- **Results page**: Create a comprehensive results display with statistics
- **LocalStorage**: Persist personal best scores across sessions
- **Animations**: Add smooth transitions and confetti effects for achievements
- **Testing**: Implement unit tests for core functionality

### AI Collaboration

I worked with **Claude (Anthropic)** throughout this project as a learning partner and debugging assistant.

**What worked well:**
- **Debugging assistance**: Claude helped identify the duplicate ID issue that was preventing the passage from displaying
- **Best practices**: Learned about modern JavaScript patterns (async/await, destructuring, arrow functions)
- **Accessibility**: Guidance on implementing proper keyboard navigation and focus states
- **Code organization**: Suggestions for modular CSS architecture and component-based JavaScript

**How I used AI:**
- Explaining CORS issues and how to work with local JSON files
- Understanding the difference between `position: fixed` and `position: absolute` for hidden radio buttons
- Learning about `:focus-visible` for keyboard-only focus states
- Debugging why `textContent` wasn't displaying (duplicate ID issue)
- Understanding radio button keyboard navigation behavior (Tab vs Arrow keys)

**What I learned:**
- The importance of asking specific questions when debugging
- How to use browser DevTools effectively alongside AI assistance
- That AI is most helpful when I understand the fundamentals first
- The value of incremental testing and console logging

## Author

- GitHub - [@jilliannoreen](https://github.com/jilliannoreen)
- Frontend Mentor - [@jilliannoreen](https://www.frontendmentor.io/profile/jilliannoreen)
