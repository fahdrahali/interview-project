function popup() {
    let x = window.confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus please');

    if (x) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

}

setTimeout(function() { popup() }, 10000);