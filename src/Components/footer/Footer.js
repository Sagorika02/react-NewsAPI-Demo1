import React from "react";
import './Footer.css';
class Footer extends React.Component{
    render(){
        return(
            <div data-testid="footdiv"className="footer">
                <p>All Rights Reserved</p>
            </div>
        )
    }
}

export default Footer;