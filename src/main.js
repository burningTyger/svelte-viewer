import { join } from 'path'
import url from 'url'
import { app, BrowserWindow } from 'electron'
import { is } from 'electron-util'

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    useContentSize: true,
    defaultEncoding: 'utf-8',
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      nodeIntegrationInWorker: true
    }
  })
  mainWindow.removeMenu()
  mainWindow.loadURL(
    url.format({
      pathname: join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    }))
  if (is.development || process.argv.some(a => a === '--devtools')) mainWindow.openDevTools()
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', async () => {
    mainWindow.show()
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
