const vscode = require("vscode");

const toggleLineNumbers = async () => {
  const config = vscode.workspace.getConfiguration("editor");
  const currentSetting = config.get("lineNumbers");

  const newSetting = currentSetting === "on" ? "relative" : "on";

  await config.update(
    "lineNumbers",
    newSetting,
    vscode.ConfigurationTarget.Global
  );
  vscode.window.showInformationMessage(`Line Numbers set to: ${newSetting}`);
};

module.exports = toggleLineNumbers;
