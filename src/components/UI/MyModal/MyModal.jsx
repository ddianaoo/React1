import React from 'react';
import cl from './MyModal.module.css';


const MyModal = ({children, visible, setVisisble}) => {

    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    return (
        <div className={rootClasses.join(' ')}  onClick={() => setVisisble(false)}> 
            <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}>{children}</div>
        </div>
    );
};

export default MyModal;