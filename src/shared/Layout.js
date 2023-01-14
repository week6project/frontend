import React from 'react';

function Layout({ children }) {
    return (
        <div>
            {/* <div>헤더부분</div> */}
            <div>
                {children}
            </div>
            {/* <div>푸터부분</div> */}
        </div>
    );
}

export default Layout;