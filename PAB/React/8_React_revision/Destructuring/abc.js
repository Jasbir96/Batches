// function currrying
function abc(fn) {
    return (props) => {
        console.log(props);
        props += 5;
        fn(props);
    }
}
function fn(props) {
    console.log(props);
}
abc(fn)(5);
