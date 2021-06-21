// import React, { Component } from 'react'
import React, { useEffect } from 'react';
import React, { Component } from 'react'
export default function q9() {
    function fn() {
        window.removeEventListener("mousemove", this.handleMousePosition);
    }
    useEffect(function () {
        window.addEventListener("mousemove", this.handleMousePosition);
        return fn;
    }, []);
    return (
        <div></div>

    )
}
