// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('electronAPI', {
	updatePositionY: (callback:any) => {
		return ipcRenderer.on('update-position-y', callback)
	},
	updatePositionX: (callback: any) => ipcRenderer.on('update-position-x', callback),
	//updatePositionY: (callback: any) => ipcRenderer.on('update-position-Y', callback),

	// writeLEDStatus: (value: 1|0) => {
	// 	ipcRenderer.invoke('write:LEDStatus', value)
	// },
})