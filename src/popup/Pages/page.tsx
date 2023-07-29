import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import React from 'react';
import EditorPlaceHolder from '../Components/EditorPlaceHolder';
import Section from '../Components/Section';
import { editorNameSpace } from '../constants';
import styles from './Page.module.css';

function onError(e: Error) {
    console.warn('error in editor', e);
}

const theme = {

};

export function App() {
    const initialConfig: InitialConfigType = {
        theme,
        namespace: editorNameSpace,
        onError,
    };
    return (
        <>
            <Section customClass={styles.editorWrapper}>
                <LexicalComposer initialConfig={initialConfig}>
                    <RichTextPlugin contentEditable={<ContentEditable className={styles.editor} />} ErrorBoundary={LexicalErrorBoundary} placeholder={<EditorPlaceHolder className={styles.editorPlaceHolder}>write some personal notes</EditorPlaceHolder>} />
                    <HistoryPlugin />
                </LexicalComposer>
            </Section>
            <Section>
                List
            </Section>
        </>
    );
}