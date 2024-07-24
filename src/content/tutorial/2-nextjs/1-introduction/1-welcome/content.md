---
type: lesson
title: Welcome to NextPatterns
focus: /counter.js
---

# Welcome to NextPatterns

NextPatterns uses webcontainer to run Next.js directly within your browser. No need to install each and every demo application used in this course, they just run in your browser.

NextPatterns is based on [TutorialKit](https://tutorialkit.dev/), an open source project from [StackBlitz](https://stackblitz.com/).

```ts add={9}
export function setupCounter(element) {
  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => setCounter(counter + 1));

  setCounter(0);
}
```