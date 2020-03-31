const { app, BrowserWindow } = require('electron');
function createWindow() {
	let win = new BrowserWindow({
		width: 800,
		height: 600,
		backgroundColor: '#000000',
		webPreferences: {
			nodeIntegration: true
		}

	})
	win.setMenuBarVisibility(false)
	win.loadFile('index.html')
    win.on('closed', () => {
    	win = null
    })
}
app.on('ready', createWindow)
app.on('window-all-closed', () => {
	if(process.platform !== 'darwin') {
		app.quit()
	}
})
