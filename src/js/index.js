const url = 'http://127.0.0.1:5501/'
const btn = document.querySelector ('#btn')

function openInNewTab(url) {
    const win = window.open(url, 'blank')
    win.focus()
}

btn.addEventListener('click', () => { 
    openInNewTab(url)
})
