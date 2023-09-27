let name = prompt("Podaj imie: ")
    if (name == "Radek")
    {
        alert("Witaj szefie!");
    }
    else
    {
        alert("Nie znam ciebie");
    }

let login = prompt("Podaj login:")
let password = prompt("Podaj haslo:")
    if (login == "admin" && password == "123")
    {
        document.write("<body bgcolor='#e4c398' <h1>UKRYTA STRONA</h1></body>")
    }
    else
    {
        alert("Zły login lub złe haslo")
    }

function szyfrowanie()
{
    let znak = prompt("Podaj jeden dowolny znak:","");
    alert(znak.charCodeAt(0));
}

function szyfr()
{
    let login = prompt("Podaj login","");
    let password = prompt("Podaj haslo","");
    let haslo = password.charCodeAt(0);
    if (login == "admin" && haslo == 56) // 56 == 8
    {
        document.write("SUKCES")
    }
    else
    {
        alert("Błędny login lub haslo")
    }
}