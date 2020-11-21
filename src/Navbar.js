import React from 'react';

function Navbar(props){

    return(
        <div className={props.visible ? 'navbar navbarVisible' : 'navbar'}>
           <h3 className="titreMenuToggle">Mes réalisations</h3>
           <ul className="listeLiens">
               <li>Media Dashboard</li>
               <li>Second example</li>
               <li>Thirth example</li>
           </ul>
        </div>
    );
}

export default Navbar;