import React, { useEffect, useState } from 'react';

const SetupMenu = () => {


    return (
        <>

            <div className="container-fluid" id="top">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active"><a href="/target">Target</a></li>
                    <li className="breadcrumb-item active"><a href="/person">User</a></li>
                    <li className="breadcrumb-item active"><a href="/category">Category</a></li>
                </ol>
            </div>
        </>
    )
}

export default SetupMenu
