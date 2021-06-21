// Q6) Which component will be rendered by the following code when navigating to '/login' route ?
//     Give explanation for your answer.


        ReactDOM.render((
            <Router>
                <div>
                    <Route path="/" render={Home} />
                    <Route path="/login" render={Login} />
                </div>
            </Router>),
            document.getElementById('root')
        );