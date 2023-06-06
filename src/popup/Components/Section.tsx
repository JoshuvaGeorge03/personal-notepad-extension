import React from 'react';

export default function Section({ customClass, children }: {customClass?: string, children: React.ReactNode}) {
    return <section className={customClass}>
        {children}
    </section>
}