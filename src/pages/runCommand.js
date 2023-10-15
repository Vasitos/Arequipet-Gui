import React, { useEffect } from 'react';
import RunRcon from "../components/admin/terminal";
import { storeSkin } from "../states/skinStore.js";

function RunCommand() {
    const setAnimation = storeSkin((state) => state.setAnimation);

    useEffect(() => {
        setAnimation(0)
    }, []);

    return (
        <div>
            <RunRcon />
        </div>
    );
}

export default RunCommand;
