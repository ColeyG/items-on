const { app, BrowserWindow } = require('electron')

let mainWindow

app.disableHardwareAcceleration();

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'minWidth': 100,
    'minHeight': 100,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {

    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
