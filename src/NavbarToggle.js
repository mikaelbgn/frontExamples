import React from 'react';

function NavbarToggle(props){

    return(
        <div className={props.visible ? 'carreToggle' : 'carreToggle carreToggleOpen'} onClick={props.onClickFct}>
           X
        </div>
    );
}

export default NavbarToggle;