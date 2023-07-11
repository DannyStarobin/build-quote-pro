export const storageService = {
    loadFromStorage,
    saveToStorage
}

const KEY = 'playerDB'

function saveToStorage(val) {
    localStorage.setItem(KEY, JSON.stringify(val))
}

function loadFromStorage() {
    var val = localStorage.getItem(KEY)
    return JSON.parse(val)
}