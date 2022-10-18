function showNotification({top=0,right=0,html,className}) {
    let div = document.createElement('div')
    div.style.top = top + 'px'
    div.style.right = right + 'px'
    div.innerHTML = html
    div.className = 'notification'
    if (className) {
        div.classList.add(className)
    }
    document.body.append(div)
    setTimeout(() => div.remove(), 1500);
}


setInterval(() => {
    showNotification({
        top: 10,
        right: 10,
        html: 'Hello ',
        className: "welcome"
    });
}, 2000);