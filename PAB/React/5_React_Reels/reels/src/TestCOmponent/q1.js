// // Here we have class component that updates the state using the input from a form.
// import React, { Component } from 'react'

// export default class Profile extends Component {
//     state = {
//         name: "Backbencher",
//         age: 23,
//     };

//     onNameChange = (e) => {
//         this.setState({
//             name: e.target.value,
//         });
//     };

//     onAgeChange = (e) => {
//         this.setState({
//             age: e.target.value,
//         });
//     };
//     render() {
//         return (
//             <div>
//                 <form>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={this.onNameChange}
//                     />
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={this.onAgeChange}
//                     />
//                     <h2>
//                         Name: {this.state.name}, Age: {this.state.age}
//                     </h2>
//                 </form>
//             </div>
//         );
//     }
// }

import React, { useState } from 'react';
function Profile() {
    let [name, setName] = useState("BackBencher");
    let [age, setAge] = useState(23);
    const onNameChange = (e) => {
        setName(e.target.value)
    };
    const onAgeChange = (e) => {
        setAge(e.target.value);
    };
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={onNameChange}
                />
                <input
                    type="text"
                    value={age}
                    onChange={onAgeChange}
                />
                <h2>
                    Name: {name}, Age: {age}
                </h2>
            </form>
        </div>
    );
}

export default Profile


