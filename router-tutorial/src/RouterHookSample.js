import React from 'react'
import useReactRouter from 'use-react-router'

const RouterHookSample = () => {
    const { history, location, match } = useReactRouter();
    console.log({ history, location, match });

    return (
        <></>
    );
}

export default RouterHookSample;