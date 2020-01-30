function popup() {
    let x = window.confirm('Hey le site xxxvidsxxx est trop bien. Viens dessus please');

    if (x) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

}


document.querySelector('button')
    .addEventListener('click', function() {
        document.body.style.backgroundColor = "magenta"
        document.getElementsByTagName('h1')[0].style.color = 'green';
        document.getElementsByTagName('h1')[0].style.fontFamily = 'Comic Sans';

        document.getElementsByTagName('h4')[0].style.color = 'green';
        document.getElementsByTagName('h4')[0].style.fontFamily = 'Comic Sans';


        let ps = document.getElementsByTagName('p');
        let titlesH2 = document.getElementsByTagName('h2');
        let titlesH3 = document.getElementsByTagName('h3');



        let i;
        for (i = 0; i < ps.length; i++) {

            ps[i].style.color = 'blue';
            ps[i].style.fontFamily = 'courier';

        }

        for (i = 0; i < titlesH2.length; i++) {

            titlesH2[i].style.color = 'green';
            titlesH2[i].style.fontFamily = 'Comic Sans';
        }

        for (i = 0; i < titlesH3.length; i++) {

            titlesH3[i].style.color = 'green';
            titlesH3[i].style.fontFamily = 'Comic Sans';

        }
    })

setTimeout(function() { popup() }, 10000);