const url = 'https://theythemlu.github.io/linksummer/'
const btn = document.querySelector ('#btn')

function openInNewTab(url) {
    const win = window.open(url, 'blank')
    win.focus()
}

btn.addEventListener('click', () => { 
    openInNewTab(url)
})
