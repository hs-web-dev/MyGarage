document.getElementById("qcmContainer").innerHTML = `
<div class="qcm-box">
    <p>1️) Le slider utilise bien deux boutons ◀ et ▶ pour changer d’image.</p>
    <button class="qcm-btn" onclick="repondreVF(1,true)">Vrai</button>
    <button class="qcm-btn" onclick="repondreVF(1,false)">Faux</button>
</div>

<div class="qcm-box">
    <p>2) Quelle voiture est la plus rapide dans le classement ?</p>
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
    <input type="text" id="q4" placeholder="ex : Dodge, Peugeot">
</div>

<div class="qcm-box">
    <p>5️) Quel critère exact permet de trier les voitures par vitesse ? (indice : trier par prix et par ...)</p>
    <input type="text" id="q5" placeholder="mot exact attendu">
</div>

<button class="qcm-btn" onclick="corriger()">Valider</button>
<button class="qcm-btn" onclick="recommencer()">Recommencer</button>

<p id="scoreFinal"></p>
`;

let reponsesVF = {};

function repondreVF(num, valeur) {
    reponsesVF[num] = valeur;
}

function corriger() {
    let score = 0;


    if (reponsesVF[1] === true) score++;

 
    if (document.getElementById("q2").value === "Bugatti Chiron") score++;


    const cochées = [...document.querySelectorAll(".q3:checked")].map(x => x.value);
    if (
        cochées.includes("Voiture") &&
        cochées.includes("Marque") &&
        cochées.includes("Prix") &&
        cochées.length === 3
    ) {
        score++;
    }


    if (document.getElementById("q4").value.trim().toLowerCase() === "chevrolet") score++;


    if (document.getElementById("q5").value.trim().toLowerCase() === "vitesse") score++;

   
    const scoreDiv = document.getElementById("scoreFinal");
    scoreDiv.textContent = "Score final : " + score + "/5";

   
    if (score < 3) {
        scoreDiv.classList.add("shake");
        setTimeout(() => scoreDiv.classList.remove("shake"), 600);
    }
}

function recommencer() {
    document.querySelectorAll("input[type=text]").forEach(i => i.value = "");
    document.querySelectorAll("input[type=checkbox]").forEach(i => i.checked = false);
    document.getElementById("q2").value = "";
    reponsesVF = {};
    document.getElementById("scoreFinal").textContent = "";
}
