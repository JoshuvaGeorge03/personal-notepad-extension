import { EditorState } from "lexical";
import { useEffect } from "react";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

interface OnChangePluginProps {
    onChange: (editorState: EditorState) => void
}

export default function OnChangePlugin(props: OnChangePluginProps) {
    const { onChange } = props;
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.registerUpdateListener(({ editorState }) => {
            onChange(editorState);
        });
    }, [editor, onChange])
    return null;
}