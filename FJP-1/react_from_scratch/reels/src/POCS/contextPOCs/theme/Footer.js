import "./theme.css";
import { ThemeContext } from "./ThemeChanger";
import { useContext } from "react";
function Footer() {
    return (<>
        <div>Footer</div>
        <div>⬇</div>
        <FooterText></FooterText>
        <div>-----------------------------</div>
    </>)
}
function FooterText() {
    let CTheme = useContext(ThemeContext);
    return (<div className={CTheme=="light"?"light":"dark"}>
      FooterText  
    </div>)
}
export default Footer;