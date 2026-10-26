document.addEventListener("DOMContentLoaded", () => {

    const div2 = document.querySelector(".div2");
    div2.innerHTML = `
        <ul id="menu">
            <li data-section="accueil">Accueil</li>
            <li data-section="inscription">S'inscrire</li>
            <li data-section="carte">Localiser une activité</li>
        </ul>
    `;

    const styleMenu = document.createElement("style");
    styleMenu.textContent = `
        #menu {
            list-style:none;
            padding:0;
            margin:0;
        }
        #menu li {
            cursor:pointer;
            padding:10px;
            border:1px solid #ccc;
            width:150px;
        }
        #menu li:hover {
            background:#ddd;
            font-weight:bold;
        }
        .hidden { display:none !important; }
    `;
    document.head.appendChild(styleMenu);


    const main = document.querySelector(".main");

    const accueil = document.querySelector(".div3");
    accueil.id = "accueil";

    const insc = document.createElement("div");
    insc.id = "inscription";

    const carte = document.createElement("div");
    carte.id = "carte";

    main.appendChild(insc);
    main.appendChild(carte);

    insc.innerHTML = `
        <h2>Inscrivez vous</h2>

        <form id="formInscription">

            <div class="line">
                <label>Nom</label>
                <input type="text" id="nom">
            </div>

            <div class="line">
                <label>Prénom</label>
                <input type="text" id="prenom">
            </div>

            <div class="line">
                <label>Date de naissance</label>
                <input type="date" id="naissance">
            </div>

            <div class="line">
                <label>Sexe</label>
                <div style="display:flex; gap:20px;">
                    <label><input type="radio" name="sexe" value="Homme"> Homme</label>
                    <label><input type="radio" name="sexe" value="Femme"> Femme</label>
                </div>
            </div>

            <div class="line">
                <label>Activité</label>
                <select id="activite">
                    <option value="">-- Sélectionnez --</option>
                </select>
            </div>

            <div class="line">
                <label>Motivations</label>
                <textarea id="motivation"></textarea>
            </div>

            <div class="btns">
                <button type="reset">Réinitialiser</button>
                <button type="submit">Valider</button>
            </div>
        </form>
    `;

    const formStyle = document.createElement("style");
    formStyle.textContent = `
        #formInscription {
            margin-left:20px;
            width:600px;
        }
        #formInscription .line {
            display:grid;
            grid-template-columns:150px 1fr;
            align-items:center;
            margin-bottom:15px;
        }
        #formInscription input,
        #formInscription select {
            width:250px;
            height:28px;
        }
        #formInscription textarea {
            width:350px;
            height:150px;
        }
        #formInscription .btns {
            margin-left:150px;
            margin-top:10px;
            display:flex;
            gap:10px;
        }
    `;
    document.head.appendChild(formStyle);


    carte.innerHTML = `
        <h2>Localiser une activité</h2>
        <iframe width="600" height="400" src="https://www.google.com/maps?q=UQTR&output=embed"></iframe>
    `;


    const selectAct = insc.querySelector("#activite");
    document.querySelectorAll(".div3 table tr").forEach((row, index) => {
        if (index === 0) return;
        const activity = row.children[1].textContent.trim();
        selectAct.innerHTML += `<option value="${activity}">${activity}</option>`;
    });


    function showPage(name) {
        accueil.classList.add("hidden");
        insc.classList.add("hidden");
        carte.classList.add("hidden");

        document.getElementById(name).classList.remove("hidden");
    }


    showPage("accueil"); 

    document.querySelectorAll("#menu li").forEach(li => {
        li.addEventListener("click", () => {
            const section = li.getAttribute("data-section");
            showPage(section);
        });
    });

});
const formBoxStyle = document.createElement("style");
formBoxStyle.textContent = `
    #inscription {
        border: 2px solid rgba(0, 0, 0, 0.514);
        border-radius: 10px;
        padding: 20px;
        width: 1500px;
        margin-top: 1px;
        margin-left: 10px;
        background-color: #fff;
    }

    #inscription h2 {
       
        margin-bottom: 15px;
    }
`;
document.head.appendChild(formBoxStyle);
const carteBoxStyle = document.createElement("style");
carteBoxStyle.textContent = `
    #carte {
        border: 2px solid rgba(0, 0, 0, 0.514);
        border-radius: 10px;
        padding: 20px;
        width: 1500px;
        margin-left: 10px;
        margin-top: 1px;
        background: #ffffff;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
    }

   

    
`;
document.head.appendChild(carteBoxStyle);