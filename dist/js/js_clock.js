let timer = setInterval(() => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();

    hh = hh.toString().padStart(2, '0');
    mm = mm.toString().padStart(2, '0');
    ss = ss.toString().padStart(2, '0');

    console.log(hh, mm, ss);
}, 1000)