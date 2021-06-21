export const NameContext = React.createContext();
export const AgeContext = React.createContext();
import React, { useContext } from "react";
export class ProviderComponent extends Component {
    render() {
        return (
            <NameContext.Provider value="Backbencher">
                <AgeContext.Provider value="23">
                    <Test2 />
                </AgeContext.Provider>
            </NameContext.Provider>
        );
    }
}
// We have Test2 with following code.
import React from 'react'
function Test2() {
    let age = useContext(AgeContext);
    let name = useContext(NameContext);
    return (
        <div>
            {name} {age}
        </div>
    )
}
export default Test2
// Complete Test2 component to consume the context values and display the name and age.