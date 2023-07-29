import React, { ReactElement } from 'react';

export default function EditorPlaceHolder({ className, children }: { className: string, children: string }): ReactElement {
    return <div className={className}>
        {children}
    </div>
}