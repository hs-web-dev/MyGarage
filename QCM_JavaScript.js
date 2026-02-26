document.getElementById("qcmContainer").innerHTML = `
<div class="qcm-box">
    <p>1️) Le slider utilise bien deux boutons ◀ et ▶ pour changer d’image.</p>
    <button class="qcm-btn" onclick="repondreVF(1,true)">Vrai</button>
    <button class="qcm-btn" onclick="repondreVF(1,false)">Faux</button>
</div>

<div class="qcm-box">
    <p>2️) Quelle voiture est la plus rapide dans le classement ?</p>
    <select id="q2">
        <option value="">-- Choisir --</option>
        <option value="Bugatti Chiron">Bugatti Chiron</option>
        <option value="Ferrari F40 LM">Ferrari F40 LM</option>
        <option value="McLaren 720S">McLaren 720S</option>
    </select>
</div>

<div class="qcm-box">
    <p>3️) Quels éléments apparaissent dans le tableau du site ?</p>
    <label><input type="checkbox" class="q3" value="Voiture"> Nom de la voiture</label><br>
    <label><input type="checkbox" class="q3" value="Marque"> Marque</label><br>
    <label><input type="checkbox" class="q3" value="Prix"> Prix</label><br>
    <label><input type="checkbox" class="q3" value="Couleur"> Couleur</label>
</div>

<div class="qcm-box">
    <p>4️) Quelle marque fabrique la Corvette C8 ?</p>
    <input type="text" id="q4">
</div>

<div class="qcm-box">
    <p>5️) Quel critère exact permet de trier les voitures par vitesse ?</p>
    <input type="text" id="q5">
</div>

<button class="qcm-btn" onclick="corriger()">Valider</button>
<button class="qcm-btn" onclick="recommencer()">Recommencer</button>

<p id="scoreFinal"></p>
<div id="reponses"></div>
`;


let reponsesVF = {};

function repondreVF(num, valeur){
    reponsesVF[num] = valeur;
}

function corriger(){
    let score = 0;

    
    const solutions = {
        q1: true,
        q2: "Bugatti Chiron",
        q3: ["Voiture","Marque","Prix"],
        q4: "chevrolet",
        q5: "vitesse"
    };

 
    if(reponsesVF[1] === solutions.q1) score++;

  
    if(document.getElementById("q2").value === solutions.q2) score++;

 
    const cochées = [...document.querySelectorAll(".q3:checked")].map(x=>x.value);
    if(JSON.stringify(cochées.sort()) === JSON.stringify(solutions.q3.sort())) score++;

    
    if(document.getElementById("q4").value.trim().toLowerCase() === solutions.q4) score++;

    
    if(document.getElementById("q5").value.trim().toLowerCase() === solutions.q5) score++;

    
    document.getElementById("scoreFinal").textContent = "Score : " + score + "/5";

    document.getElementById("reponses").innerHTML = `
    <h3>✔ Bonnes réponses :</h3>
    1️) Vrai<br>
    2️) Bugatti Chiron<br>
    3️) Voiture, Marque, Prix<br>
    4️) Chevrolet<br>
    5️) vitesse
    `;
}

function recommencer(){
    document.querySelectorAll("input").forEach(i=>{
        if(i.type==="checkbox") i.checked=false;
        else i.value="";
    });
    document.getElementById("q2").value="";
    document.getElementById("scoreFinal").textContent="";
    document.getElementById("reponses").innerHTML="";
    reponsesVF={};
}
