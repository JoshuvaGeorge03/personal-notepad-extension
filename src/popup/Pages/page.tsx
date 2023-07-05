import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import React from 'react';
import Section from '../Components/Section';
import { editorNameSpace } from '../constants';

export function App() {
    return (
        <>
            <Section>
                <LexicalComposer initialConfig={{ namespace: editorNameSpace, onError: (e) => console.log('e', e) }}>
                    <RichTextPlugin contentEditable={<ContentEditable />} ErrorBoundary={LexicalErrorBoundary} placeholder={<div>edit me</div>} />
                </LexicalComposer>
            </Section>
            <Section>
                List
            </Section>
        </>
    );
}