document.querySelectorAll('[news-nav]').forEach(link => {
    const news = document.getElementById('news')
    link.onclick = function(e) {
        e.preventDefault()
        fetch(link.getAttribute('news-nav'))
            .then(resp => resp.text())
            .then(html => news.innerHTML = html)
    }
})
