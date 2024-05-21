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

## References

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
