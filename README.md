# React Styling

## Vanilla CSS in JS

### Advantages

- CSS code is decoupled from the JSX code
- You write css code as you know and you love it
- CSS code can be written by another developer who needs only minimal access to the JSX code

### Disadvantages

- You need to know CSS
- CSS code is not scoped to the component
- CSS rules may clause across the components (eg: same css class name used in different components for different purposes)

## Vanilla CSS with CSS Module in JS

### Advantages

- CSS code is decoupled from the JSX code
- You write css code as you know and you love it
- CSS code can be written by another developer who needs only minimal access to the JSX code
- CSS classes is scoped to the component (files) which import them -> No CSS class name clashes

### Disadvantages

- You need to know CSS
- You may end up with many relatively small css files in your project

## Styled Components with JS

### Advantages

- Quick and easy to add
- You continue "thinking in React" ( -> configurable styled functions)
- Styles are scoped to components -> No CSS rules clashes

### Disadvantages

- You need to know CSS
- No clear separation of React & CSS code
- You end up with many relatively small "wrapper" components

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
