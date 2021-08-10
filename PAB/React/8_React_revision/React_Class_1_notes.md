*  Why we pass props to super ->https://overreacted.io/why-do-we-write-super-props 
*  https://reactjs.org/docs/state-and-lifecycle.html
*  https://reactjs.org/docs/lifting-state-up.html
*  https://reactjs.org/docs/composition-vs-inheritance.html
*  https://reactjs.org/docs/react-component.html

*********************************************************************************************************************
Q.  The official React docs state that "React.PureComponent's shouldComponentUpdate() only shallowly compares the objects", and advises against this if state is "deep".
Given this, is there any reason why one should prefer React.PureComponent when creating React components?
Questions:
is there any performance impact in using React.Component that we may consider going for React.PureComponent?
I am guessing shouldComponentUpdate() of PureComponent performs only shallow comparisons. If this is the case, can't said method be used for deeper comparisons?
"Furthermore, React.PureComponent's shouldComponentUpdate() skips prop updates for the whole component subtree" - Does this mean that prop changes are ignored?
Ans The major difference between React.PureComponent and React.Component is PureComponent does a shallow comparison on state change. It means that when comparing scalar values it compares their values, but when comparing objects it compares only references. It helps to improve the performance of the app.

You should go for React.PureComponent when you can satisfy any of the below conditions.

State/Props should be an immutable object
State/Props should not have a hierarchy
You should call forceUpdate when data changes
If you are using React.PureComponent you should make sure all child components are also pure.

is there any performance impact in using React.component that we may consider going for React.PureComponent?

Yes, it will increase your app performance (because of shallow comparison)

I am guessing shouldComponentUpdate() of Purecomponent performs only shallow comparisons . If this is the case can' t the said method used for deeper comparisons?

You guessed it correctly. You could use it if you satisfy any of the conditions I mentioned above.

"Furthermore, React.PureComponent's shouldComponentUpdate() skips prop updates for the whole component subtree" - Does this mean that prop changes are ignored?

Yes, prop changes will be ignored If it couldn't find difference in shallow comparison.


********************************************************************************************************