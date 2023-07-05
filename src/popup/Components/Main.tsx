import React from 'react';

export default function Main(props: { children: React.ReactNode }) {
    return <main>
        {props.children}
    </main>
}