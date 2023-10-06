import React, {useEffect} from 'react';

let notes = {};

const CritereComponent = ({id, Titre}) => {


    useEffect(() => {
        const crit = document.getElementById(`${id}`);
        const containers = crit.querySelectorAll('.container')
        const etoiles = crit.querySelectorAll('.etoiles');
        const tests = crit.querySelectorAll('.test');
        const criteres = document.querySelectorAll('.critere');
        const nb_crit = criteres.length - 1;
        let derniers_tests = criteres[nb_crit].querySelectorAll('.test')
        console.log(derniers_tests)
        for (let i = 0; i <= nb_crit - 1; i++) {
            notes[`note${i}`] = 0;
        }


        etoiles.forEach((etoile, index) => {
            etoile.addEventListener('click', () => {
                const critereClique = etoile.closest('.critere');
                const tousLesCriteres = document.querySelectorAll('.critere');
                const indexDuCritereClique = Array.from(tousLesCriteres).indexOf(critereClique);
                if (indexDuCritereClique != nb_crit) {
                    tests.forEach((test, autreIndex) => {
                        if (autreIndex < index) {
                            test.style.transform = 'scaleX(1)';
                        }
                        if (autreIndex > index) {
                            test.style.transform = 'scaleX(0)';
                        }
                    });
                    let note = index + 1;
                    let moyenne = 0
                    let nb_entier = 0
                    let nb_deci = 0
                    notes[`note${indexDuCritereClique}`] = note
                    console.log(notes)
                    tests[index].style.transform = 'scaleX(1)';
                    // Vérifier si toutes les valeurs sont différentes de 0
                    const toutesNonZero = Object.values(notes).every(value => value !== 0);
                    if (toutesNonZero) {
                        // Additionner toutes les valeurs
                        const nb_de_notes = Object.values(notes).length;
                        let somme = Object.values(notes).reduce((acc, value) => acc + value, 0);
                        moyenne = somme / nb_de_notes;
                        nb_entier = Math.floor(moyenne)
                        nb_deci = moyenne - nb_entier
                        console.log("La moyenne des valeurs est : " + moyenne);
                        for(let i= 0; i<=nb_entier - 1; i++){
                            console.log(i)
                            derniers_tests[i].style.transform = 'scaleX(1)'
                        }
                        derniers_tests[nb_entier].style.transform = `scaleX(${nb_deci})`

                    } else {
                        console.log("Au moins une des valeurs est égale à 0.");
                    }


                }
            });

            const critereSurvole = etoile.closest('.critere');
            const indexDuCritereSurvole = Array.from(criteres).indexOf(critereSurvole);
            etoile.addEventListener('mouseenter', () => {
                if (indexDuCritereSurvole != nb_crit) {
                    etoiles.forEach((etoileu, indexu) => {
                        if (indexu <= index) {
                            etoileu.style.transform = 'translateY(-5%)'
                        }
                    })

                }

            })
            etoile.addEventListener('mouseleave', () => {
                if (indexDuCritereSurvole != 2) {
                    etoiles.forEach((etoileu, indexu) => {
                        if (indexu >= index) {
                            etoileu.style.transform = 'translateY(0)'
                        }
                    })


                }
            })

            containers.forEach((container, i) => {
                container.addEventListener('mouseleave', (e) => {
                    etoiles.forEach((etoileueue, i) => {
                        etoileueue.style.transform = 'translateY(0)'
                    })
                })
            })
        });
    }, [id, Titre]);

    return (<div className="critere" id={id} style={{border: 'black solid 0.3vw'}}>
        <h1>{Titre}</h1>
        <div id={"container"} className={"container"}>
            {[...Array(5)].map((_, index) => (<div className="etoiles" key={index}>
                <img className="svg" src="assets/etoile.svg" alt="etoile"/>
                <div className="test1">
                    <div className="test"></div>
                </div>
            </div>))}
        </div>
    </div>);
};

export default CritereComponent;
