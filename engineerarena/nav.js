function populateNav(page) {
    let arr = [
        ["Home", "../index.html"],
        ["Games", "../index.html"],
        ["Music", "https://waveparadigm.bandcamp.com/"],
        ["Contact", "../info.html"]
    ]

    let nav = document.getElementById("navbar");

    let navText = "";
    for (let i = 0; i < arr.length; i++) {
        navText += "<a href=\"" + arr[i][1] + "\">" + (page == i ? selectedText(arr[i][0]) : arr[i][0]) + "</a>\n";
    }

    nav.innerHTML = `
    <img id="mobile-logo" src="../img/logo-banner.png"/>
    <table>
        <tr>
            <td id="nav-logo"><img src="../img/logo-banner.png"/></td>
            <td id="nav-text">
                ${navText}
            </td>
        </tr>
    </table>`;
}

function selectedText(s) {
    return "[" + s + "]";
}