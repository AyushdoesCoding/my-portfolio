import React from 'react';

function Footer(){

    const currentYear = new Date().getFullYear();
    return(
        <footer className = "footer-card">
            <p>&copy; {currentYear} Ayush Negi. ALL RIGHTS RESERVED.  </p>
        </footer>

    );
}
export default Footer;