import "./theme.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeChanger";
function NavBar() {
    return (<>
        <div>NavBar</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </>)
}
function Options() {
    let CTheme = useContext(ThemeContext);
    return <div className={CTheme=="light"?"light":"dark"}>Option</div>
}
export default NavBar;