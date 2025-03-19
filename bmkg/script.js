fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah);
    // console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById('gempabumi').innerHTML = `
    <div class="col-lg-8">
        <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p>Waktu : ${data.Infogempa.gempa.Tanggal}</P>
        <p>Jam : ${data.Infogempa.gempa.Jam}</P>
        <p>Magnitude : ${data.Infogempa.gempa.Magnitude}</P>
        <p>Kedalaman : ${data.Infogempa.gempa.Kedalaman}</P>
        <p>Potensi : ${data.Infogempa.gempa.Potensi}</P>
    </div>
    <div class="col-lg-4">
        <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" />
    </div>
    `
})
fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    data.Infogempa.gempa.forEach( (list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML +=`
            <div class="card p-5 col-lg-4">
                <p>Wilayah: ${list.Wilayah}</p>
                <p>Waktu : ${list.Tanggal} ${list.Waktu}</p>
                <p>Magnitude : ${list.Magnitude}</p>
                <p>Kedalaman : ${list.Kedalaman}</p>
                <p>Potensi : ${list.Potensi}</p>
            </div>
        `;
    })
})
