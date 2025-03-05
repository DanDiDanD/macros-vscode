const vscode = require("vscode");

const moveXLines = async () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage("There is no active editor.");
    return;
  }

  const input = await vscode.window.showInputBox({
    prompt: "Enter the number of lines to move (e.g., 10 or -10)",
  });

  if (!input) return;

  const linesToMove = parseInt(input, 10);

  if (isNaN(linesToMove)) {
    vscode.window.showErrorMessage("Invalid number.");
    return;
  }

  const currentPosition = editor.selection.active;
  const newPosition = currentPosition.with(
    currentPosition.line + linesToMove,
    currentPosition.character
  );
  const newSelection = new vscode.Selection(newPosition, newPosition);

  editor.selection = newSelection;
  editor.revealRange(newSelection);
};

module.exports = moveXLines;
