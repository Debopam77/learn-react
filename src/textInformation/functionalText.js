
const whatIsFunctional = `Functional REACT is the modern approach for dealing with components in REACT JS.\n
In this approach, every component is a function and has to return some JSX or another component`;
const whyUseFunctional = `Considering every component as a function helps in not only eliminating hierarchical complexity but also better visualize each component as a separate entity. It also helps in making every component feel the same whether it is a stateful or a stateless component`;
const functionalExample = `function ComponentA(){
    return (
        <>
            <h1>Hello World!</h1>
        </>
    )
}`;

const explainFunctionalExample = 'Here, ComponentA is the functional component which is returning a single JSX element containing a h1 tag'

export {whatIsFunctional, whyUseFunctional, functionalExample, explainFunctionalExample};