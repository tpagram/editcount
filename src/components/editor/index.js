import React, { Component } from "react";
import { EditorContainer } from "./styles"
import { Editor as DraftJSEditor, EditorState, RichUtils } from "draft-js";

const Editor = ({ editorState }) => (
  <EditorContainer>
    <DraftJSEditor
      editorState={this.state.editorState}
      onChange={this.onChange}
      handleKeyCommand={this.handleKeyCommand}
    />
  </EditorContainer>
)

constructor(props) {
  super(props);
  this.state = { editorState: EditorState.createEmpty() };
}

onChange = editorState => {
  this.setState({ editorState });
};

handleKeyCommand = (command, editorState) => {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return "handled";
  }
  return "not-handled";
};

export default Editor;
