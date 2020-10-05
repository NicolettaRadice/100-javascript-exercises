function animate_string(id) {
    const element = document.getElementById(id);
    const textNode = element.childNodes[0];
    let text = textNode.data;

    setInterval(() => {
    text = text[text.length - 1] + text.substring(text.length - 1, 0);
    textNode.data = text;
    }, 100);
}
