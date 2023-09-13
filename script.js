document.querySelectorAll('[news-nav]').forEach(link => {
    const content = document.getElementById('content')
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('news-nav'))
            .then(resp => resp.text())
            .then(html => content.innerHTML = html)
    }
})