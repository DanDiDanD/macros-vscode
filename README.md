# macros-vscode

Define path to macros in settings => vscodemacros: Macro File Path

"vscodemacros.macroFilePath": "~\\macros-vscode\\index.js",

Also, if you want to add a keybinding to a macro you need to define a macro in settings.json

Example:

// settings.json

"vscodemacros.userMacroCommands": [
  {
    "path": "~\\macros-vscode\\index.js",
    "name": "MyMacro"
  }
]

// keybinding.json

  {
    "key": "alt + kay",
    "command": "vscode-macros.user1",
    "when": "editorTextFocus"
  }