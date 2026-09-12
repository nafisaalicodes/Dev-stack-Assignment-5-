#  Dev Stack Builder

Dev Stack Builder is a React-based website that helps users explore different development technologies and build their ideal technology stack. Users can browse technologies by category and add or remove technologies from their personal stack.

##  Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React Toastify
* JSON
* Vite

##  Features

### 1. Explore Technologies

Users can explore different technologies with their name, category, description, rating, difficulty level, and badge.

### 2. Build Your Own Stack

Users can add technologies to their own stack and remove them whenever they want.

### 3. Interactive User Experience

The website provides loading states and toast notifications when technologies are added, removed, or already exist in the stack.

---

#  React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript.

It makes React code easier to read and helps us describe what the UI should look like.

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component. They are read-only.

**State** is data managed inside a component. When state changes, the component can re-render.

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data in a React component.

In this project, I used it in `App.tsx` to manage:

* Technologies
* My selected technology stack
* Loading state

For example:

```tsx
const [stack, setStack] = useState<Technology[]>([])
```

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component.

I used it in `App.tsx` to fetch the technology data from the JSON file when the component loads.

```tsx
useEffect(() => {
  fetch("/data/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data)
      setLoading(false)
    })
}, [])
```

## 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

It helps React understand which item has changed, been added, or removed, so it can update the UI correctly.

Example:

```tsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, in the `YourStack` component, I show an empty message when there are no technologies in the stack.

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  // selected technologies
)}
```

Here, the empty message is shown only when `stack.length === 0`.

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child using **props**.

A child can send information back to the parent by calling a function that the parent passed through props.

For example, `App.tsx` passes `technology` and `onAdd` to `TechnologyCard`:

```tsx
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>
```

The child can then call:

```tsx
onAdd(technology)
```

This sends the selected technology back to the parent, where `handleAdd` manages it.
