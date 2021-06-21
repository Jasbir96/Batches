// useEffect -> 4 methods

// / There are 4 possible ways to call the useEffect method.

//   a) once, when component mounts

// Usually, you would like to use it for fetching data or adding event listeners.To run the function once, add an
// empty dependency list.If there are no dependencies in it, that means it will stay the same all the time, and
// will not call the function again.

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     callMeOnlyOnce()
//   }, [])
//   // ...
// }

// b) On Every Component Render

// To call the function on each component render, skip adding the dependency list.No list, nothing to compare
// against, that means run the effect every time.

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     runThisFunctionOnEveryRender();
//   })
//   // ...
// }
// c) On Every Component Render with a Condition.

// To call a function conditionally, specify the list of dependencies.And the rule of thumb is to always add
// those dependencies that you are using inside the useEffect().

// function MyComponent() {
//   // ...
//   React.useEffect(() => {
//     runIfOneOfTheDepsWillChange(dep1, dep2);
//   }, [dep1, dep2])
//   // ...
// }

// d) When Component Unmounts
// To clean up(remove event listeners or stop data fetching with a side effect) after the component unmounts,
//   a return statement with a function should be added inside the useEffect() hook.
