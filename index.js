exports.activate = function() {
  var workspace = atom.workspaceView

  workspace.command('cmd-9:switch-to-last-tab', function() {
    var pane  = workspace.getActivePane()
    var items = pane.getItems()
    pane.activateItemAtIndex(items.length - 1)
  })
}
