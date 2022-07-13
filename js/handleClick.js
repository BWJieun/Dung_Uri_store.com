function handleClick() {
    const hasClass = btn.classList.contains(CLICKED_CLASS);
    if (!hasClass) {
        btn.classList.add(CLICKED_CLASS);
    } else {
        btn.classList.remove(CLICKED_CLASS);
    }
}
