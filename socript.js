let ism = prompt("ismni kirtin ");
let harf = prompt("harfni kirtin ");

if (ism.includes(harf)) {
    alert( ism +" ismda bu harf bor " + harf);
} else{
    alert( ism +" ismda bu harf yoq "  + harf);
}