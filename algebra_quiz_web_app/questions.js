window.questions = [
  {
    "id": 1,
    "topic": "Spazi vettoriali",
    "question": "Siano v1,...,v6 vettori di R^5. Quale affermazione è sempre vera?",
    "options": [
      "Sono sempre linearmente indipendenti",
      "Sono sempre linearmente dipendenti",
      "Generano sempre R^5",
      "Formano sempre una base"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "Sono sempre linearmente dipendenti"
    ],
    "explanation": "In uno spazio di dimensione 5, più di 5 vettori sono automaticamente linearmente dipendenti.",
    "multiple": false
  },
  {
    "id": 2,
    "topic": "Sottospazi",
    "question": "Quale dei seguenti insiemi è un sottospazio vettoriale di R^3?",
    "options": [
      "{(x,y,z): x+y+z=1}",
      "{(x,y,z): x-y+2z=0}",
      "{(x,y,z): x^2+y=0}",
      "{(x,y,z): x+y+z≠0}"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "{(x,y,z): x-y+2z=0}"
    ],
    "explanation": "Un'equazione lineare omogenea definisce un sottospazio vettoriale; deve contenere lo zero ed essere chiuso per combinazioni lineari.",
    "multiple": false
  },
  {
    "id": 3,
    "topic": "Basi",
    "question": "In R^4, quattro vettori linearmente indipendenti:",
    "options": [
      "possono non generare R^4",
      "formano necessariamente una base di R^4",
      "sono necessariamente ortogonali",
      "sono necessariamente autovettori di qualche matrice"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "formano necessariamente una base di R^4"
    ],
    "explanation": "In uno spazio di dimensione 4, quattro vettori linearmente indipendenti formano automaticamente una base.",
    "multiple": false
  },
  {
    "id": 4,
    "topic": "Somma diretta",
    "question": "Siano U,W sottospazi di V. Quale condizione garantisce che U+W sia somma diretta?",
    "options": [
      "U∪W=V",
      "U∩W={0}",
      "U e W hanno basi senza vettori uguali",
      "dim U=dim W"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "U∩W={0}"
    ],
    "explanation": "La somma è diretta esattamente quando l'intersezione è banale.",
    "multiple": false
  },
  {
    "id": 5,
    "topic": "Grassmann",
    "question": "Se dim U=3, dim W=4, dim(U∩W)=2, allora:",
    "options": [
      "dim(U+W)=5",
      "dim(U+W)=7",
      "dim(U+W)=9",
      "U+W è sempre diretto"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "dim(U+W)=5"
    ],
    "explanation": "Per Grassmann: dim(U+W)=dim U+dim W-dim(U∩W)=3+4-2=5.",
    "multiple": false
  },
  {
    "id": 6,
    "topic": "Sistemi lineari",
    "question": "Sia A una matrice 5x4 e b∈R^5. Se rk(A)=4 e rk(A|b)=5, allora il sistema Ax=b:",
    "options": [
      "ha soluzione unica",
      "ha infinite soluzioni",
      "non ha soluzioni",
      "è omogeneo"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "non ha soluzioni"
    ],
    "explanation": "Per Rouché-Capelli il sistema è compatibile solo se rk(A)=rk(A|b). Qui i ranghi sono diversi.",
    "multiple": false
  },
  {
    "id": 7,
    "topic": "Sistemi omogenei",
    "question": "Il sistema Ax=0:",
    "options": [
      "può non avere soluzioni",
      "ha sempre almeno una soluzione",
      "ha sempre infinite soluzioni",
      "ha soluzione solo se A è quadrata"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "ha sempre almeno una soluzione"
    ],
    "explanation": "Il sistema omogeneo ha sempre almeno la soluzione nulla x=0.",
    "multiple": false
  },
  {
    "id": 8,
    "topic": "Rango-nullità",
    "question": "Sia f:R^5→R^3 lineare con dim Ker(f)=2. Allora rk(f) vale:",
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "Per rango-nullità: dim dominio = dim Ker + rk, quindi 5=2+rk e rk=3.",
    "multiple": false
  },
  {
    "id": 9,
    "topic": "Applicazioni lineari",
    "question": "Quale funzione è lineare?",
    "options": [
      "f(x,y)=(x+y,2x-y)",
      "f(x,y)=(x+y+1,2x)",
      "f(x,y)=(x^2,y)",
      "f(x,y)=(xy,x-y)"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "f(x,y)=(x+y,2x-y)"
    ],
    "explanation": "Una funzione lineare contiene solo combinazioni lineari delle variabili, senza termini costanti o prodotti/potenze.",
    "multiple": false
  },
  {
    "id": 10,
    "topic": "Endomorfismi",
    "question": "Un endomorfismo è:",
    "options": [
      "una funzione lineare f:V→W qualsiasi",
      "una funzione lineare f:V→V",
      "una funzione sempre invertibile",
      "una funzione sempre diagonalizzabile"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "una funzione lineare f:V→V"
    ],
    "explanation": "Un endomorfismo è un'applicazione lineare da uno spazio vettoriale in sé stesso.",
    "multiple": false
  },
  {
    "id": 11,
    "topic": "Applicazioni lineari",
    "question": "Siano v1,v2,v3 una base di R^3, e siano w1,w2,w3∈R^2. Allora esiste una funzione lineare f:R^3→R^2 tale che f(vi)=wi?",
    "options": [
      "Sì, ed è unica",
      "Sì, ma non è unica",
      "No, perché il codominio ha dimensione minore",
      "No, perché servono tre vettori in R^2 indipendenti"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "Sì, ed è unica"
    ],
    "explanation": "Assegnare le immagini dei vettori di una base determina una e una sola applicazione lineare.",
    "multiple": false
  },
  {
    "id": 12,
    "topic": "Applicazioni lineari",
    "question": "Siano v1,v2∈R^3 con v2=2v1. Vogliamo una funzione lineare f tale che f(v1)=w1 e f(v2)=w2. Quale condizione è necessaria?",
    "options": [
      "w2=2w1",
      "w1=2w2",
      "w1,w2 devono essere indipendenti",
      "Nessuna condizione: esiste sempre"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "w2=2w1"
    ],
    "explanation": "Le immagini devono rispettare le relazioni di dipendenza: f(v2)=f(2v1)=2f(v1).",
    "multiple": false
  },
  {
    "id": 13,
    "topic": "Iniettività",
    "question": "Una funzione lineare f:V→W è iniettiva se e solo se:",
    "options": [
      "Ker(f)=V",
      "Ker(f)={0}",
      "Im(f)=W",
      "rk(f)=0"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "Ker(f)={0}"
    ],
    "explanation": "Una funzione lineare è iniettiva esattamente quando il nucleo è banale.",
    "multiple": false
  },
  {
    "id": 14,
    "topic": "Endomorfismi",
    "question": "Sia f:V→V un endomorfismo di uno spazio vettoriale finito-dimensionale. Quale affermazione è vera?",
    "options": [
      "Se f è iniettiva, allora è suriettiva",
      "Se f è suriettiva, non è mai iniettiva",
      "Se f è diagonalizzabile, allora è invertibile",
      "Se f ha nucleo non nullo, allora è biettiva"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "Se f è iniettiva, allora è suriettiva"
    ],
    "explanation": "Per un endomorfismo in dimensione finita, iniettività, suriettività e invertibilità sono equivalenti.",
    "multiple": false
  },
  {
    "id": 15,
    "topic": "Matrici associate",
    "question": "Una matrice 3x5 rappresenta una funzione lineare:",
    "options": [
      "R^3→R^5",
      "R^5→R^3",
      "R^3→R^3",
      "R^5→R^5"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "R^5→R^3"
    ],
    "explanation": "Una matrice m x n rappresenta una funzione da R^n a R^m.",
    "multiple": false
  },
  {
    "id": 16,
    "topic": "Determinante",
    "question": "Sia A quadrata di ordine 4. Allora:",
    "options": [
      "det(2A)=2det(A)",
      "det(2A)=8det(A)",
      "det(2A)=16det(A)",
      "det(2A)=4det(A)"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "det(2A)=16det(A)"
    ],
    "explanation": "Per una matrice n x n, det(kA)=k^n det(A). Qui n=4, quindi 2^4=16.",
    "multiple": false
  },
  {
    "id": 17,
    "topic": "Determinante",
    "question": "Sia A una matrice quadrata. Quali operazioni non cambiano il determinante?",
    "options": [
      "Sostituire R2 con R2+3R1",
      "Scambiare due righe",
      "Trasporre la matrice",
      "Moltiplicare una riga per 5"
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "correctAnswers": [
      "Sostituire R2 con R2+3R1",
      "Trasporre la matrice"
    ],
    "explanation": "La mossa Ri→Ri+kRj non cambia il determinante; anche det(A^T)=det(A).",
    "multiple": true
  },
  {
    "id": 18,
    "topic": "Invertibilità",
    "question": "Per una matrice quadrata A, quale affermazione è equivalente ad A invertibile?",
    "options": [
      "det(A)=0",
      "rk(A) è massimo",
      "A è diagonale",
      "A è simmetrica"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "rk(A) è massimo"
    ],
    "explanation": "Una matrice quadrata è invertibile se e solo se ha rango massimo, cioè rango uguale all'ordine.",
    "multiple": false
  },
  {
    "id": 19,
    "topic": "Matrici diagonali",
    "question": "Sia D diagonale reale di ordine 5. Quale affermazione è sempre vera?",
    "options": [
      "D è invertibile",
      "D è diagonalizzabile",
      "D è ortogonale",
      "D ha determinante diverso da zero"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "D è diagonalizzabile"
    ],
    "explanation": "Una matrice diagonale è già in forma diagonale, quindi è diagonalizzabile anche se qualche elemento diagonale è zero.",
    "multiple": false
  },
  {
    "id": 20,
    "topic": "Matrici scalari",
    "question": "Una matrice scalare è del tipo:",
    "options": [
      "λI",
      "A^T=A",
      "A^TA=I",
      "matrice con tutti gli elementi uguali"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "λI"
    ],
    "explanation": "Una matrice scalare è un multiplo della matrice identità.",
    "multiple": false
  },
  {
    "id": 21,
    "topic": "Matrici ortogonali",
    "question": "Sia A ortogonale. Quale affermazione è falsa?",
    "options": [
      "A^{-1}=A^T",
      "det(A)=±1",
      "A conserva le lunghezze",
      "2A è ortogonale"
    ],
    "correctLetters": [
      "D"
    ],
    "correctIndexes": [
      3
    ],
    "correctAnswers": [
      "2A è ortogonale"
    ],
    "explanation": "Moltiplicare una matrice ortogonale per 2 cambia le lunghezze, quindi 2A non è ortogonale.",
    "multiple": false
  },
  {
    "id": 22,
    "topic": "Prodotto scalare",
    "question": "Quale proprietà è vera in R^n?",
    "options": [
      "(u·v)·w=u·(v·w)",
      "u·v=v·u",
      "||u+v||=||u||+||v|| sempre",
      "u·u<0 se u≠0"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "u·v=v·u"
    ],
    "explanation": "Il prodotto scalare usuale è simmetrico: u·v=v·u.",
    "multiple": false
  },
  {
    "id": 23,
    "topic": "Prodotto scalare",
    "question": "Siano u=(2,-1,3) e v=(1,2,0). Il coseno dell'angolo tra u e v è:",
    "options": [
      "positivo",
      "negativo",
      "nullo",
      "impossibile da determinare"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "nullo"
    ],
    "explanation": "u·v=2·1+(-1)·2+3·0=0, quindi il coseno è nullo e i vettori sono ortogonali.",
    "multiple": false
  },
  {
    "id": 24,
    "topic": "Prodotto vettoriale",
    "question": "Nella base canonica di R^3, quanto vale e2×e3?",
    "options": [
      "e1",
      "-e1",
      "e2",
      "0"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "e1"
    ],
    "explanation": "Nell'ordine ciclico e1,e2,e3 si ha e2×e3=e1.",
    "multiple": false
  },
  {
    "id": 25,
    "topic": "Prodotto misto",
    "question": "Se u,v,w∈R^3 sono linearmente dipendenti, allora:",
    "options": [
      "u·(v×w)=0",
      "u·(v×w)=1",
      "v×w=0 sempre",
      "u,v,w formano sempre una base"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "u·(v×w)=0"
    ],
    "explanation": "Il prodotto misto è il determinante dei tre vettori; è zero se i vettori sono linearmente dipendenti.",
    "multiple": false
  },
  {
    "id": 26,
    "topic": "Autovalori",
    "question": "Sia v≠0 e Av=3v. Allora:",
    "options": [
      "v è autovettore relativo all'autovalore 3",
      "3 è autovettore relativo ad A",
      "v appartiene necessariamente al nucleo di A",
      "A è necessariamente diagonale"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "v è autovettore relativo all'autovalore 3"
    ],
    "explanation": "Per definizione, v non nullo con Av=λv è un autovettore relativo all'autovalore λ.",
    "multiple": false
  },
  {
    "id": 27,
    "topic": "Autovettori",
    "question": "Il vettore nullo può essere autovettore?",
    "options": [
      "Sì, sempre",
      "Sì, solo per autovalore 0",
      "No, per definizione",
      "Sì, solo se A è nulla"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "No, per definizione"
    ],
    "explanation": "Un autovettore deve essere non nullo.",
    "multiple": false
  },
  {
    "id": 28,
    "topic": "Diagonalizzazione",
    "question": "Una matrice A∈M3(R) è diagonalizzabile se:",
    "options": [
      "esiste una base di R^3 formata da autovettori di A",
      "ha determinante diverso da zero",
      "è invertibile",
      "ha almeno un autovalore reale"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "esiste una base di R^3 formata da autovettori di A"
    ],
    "explanation": "Diagonalizzabile significa che esiste una base di autovettori.",
    "multiple": false
  },
  {
    "id": 29,
    "topic": "Diagonalizzazione",
    "question": "Quale affermazione è vera?",
    "options": [
      "Ogni matrice diagonalizzabile è invertibile",
      "Una matrice diagonalizzabile può avere autovalore 0",
      "Una matrice invertibile non è mai diagonalizzabile",
      "Se 0 è autovalore, la matrice è sempre ortogonale"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "Una matrice diagonalizzabile può avere autovalore 0"
    ],
    "explanation": "Una matrice diagonalizzabile può avere 0 tra gli autovalori; in quel caso non è invertibile.",
    "multiple": false
  },
  {
    "id": 30,
    "topic": "Autovalori distinti",
    "question": "Sia A∈M4(R) con quattro autovalori reali distinti. Allora:",
    "options": [
      "A è diagonalizzabile",
      "A è ortogonale",
      "A è simmetrica",
      "A ha determinante uguale a 1"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "A è diagonalizzabile"
    ],
    "explanation": "Autovalori distinti danno autovettori linearmente indipendenti; in dimensione 4 bastano quattro autovettori.",
    "multiple": false
  },
  {
    "id": 31,
    "topic": "Teorema spettrale",
    "question": "Sia A reale. Quale affermazione è vera?",
    "options": [
      "Se A è simmetrica, allora è ortogonalmente diagonalizzabile",
      "Se A è diagonalizzabile, allora è simmetrica",
      "Se A è invertibile, allora è ortogonalmente diagonalizzabile",
      "Se A ha autovalori reali, allora è ortogonale"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "Se A è simmetrica, allora è ortogonalmente diagonalizzabile"
    ],
    "explanation": "Per il teorema spettrale, una matrice reale simmetrica è ortogonalmente diagonalizzabile.",
    "multiple": false
  },
  {
    "id": 32,
    "topic": "Similarità",
    "question": "Due matrici simili hanno necessariamente:",
    "options": [
      "stesso determinante",
      "stessi autovalori",
      "stessa traccia",
      "stessa matrice"
    ],
    "correctLetters": [
      "A",
      "B",
      "C"
    ],
    "correctIndexes": [
      0,
      1,
      2
    ],
    "correctAnswers": [
      "stesso determinante",
      "stessi autovalori",
      "stessa traccia"
    ],
    "explanation": "Matrici simili hanno stesso polinomio caratteristico, quindi stessi autovalori, stessa traccia e stesso determinante; non devono essere uguali.",
    "multiple": true
  },
  {
    "id": 33,
    "topic": "Similarità",
    "question": "Due matrici quadrate con stessi autovalori e stesso determinante sono necessariamente simili?",
    "options": [
      "Sì, sempre",
      "No, non basta",
      "Sì, se sono dello stesso ordine",
      "Sì, se hanno determinante non nullo"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "No, non basta"
    ],
    "explanation": "Stessi autovalori e stesso determinante non bastano: bisogna considerare anche la struttura degli autospazi/Jordan.",
    "multiple": false
  },
  {
    "id": 34,
    "topic": "Autovalori reali",
    "question": "Una matrice reale 3x3:",
    "options": [
      "ha sempre almeno un autovalore reale",
      "è sempre diagonalizzabile",
      "è sempre simmetrica",
      "ha sempre tre autovalori reali distinti"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "ha sempre almeno un autovalore reale"
    ],
    "explanation": "Il polinomio caratteristico ha grado dispari, quindi ha almeno una radice reale.",
    "multiple": false
  },
  {
    "id": 35,
    "topic": "Isometrie",
    "question": "Sia f:R^n→R^n un'isometria lineare. Quali affermazioni sono vere?",
    "options": [
      "f conserva le lunghezze",
      "f è suriettiva",
      "f ha sempre determinante 0",
      "f manda ogni vettore in sé stesso"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "f conserva le lunghezze",
      "f è suriettiva"
    ],
    "explanation": "Un'isometria lineare conserva le lunghezze e, in dimensione finita da R^n a R^n, è biettiva quindi suriettiva.",
    "multiple": true
  },
  {
    "id": 36,
    "topic": "Proiezioni",
    "question": "Sia U⊂R^3 un piano passante per l'origine. La proiezione ortogonale p_U:",
    "options": [
      "ha autovalore 1 sui vettori di U",
      "ha autovalore 0 sui vettori di U^⊥",
      "è sempre l'identità su tutto R^3",
      "non è lineare"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "ha autovalore 1 sui vettori di U",
      "ha autovalore 0 sui vettori di U^⊥"
    ],
    "explanation": "La proiezione lascia fissi i vettori di U e manda a zero quelli del complemento ortogonale.",
    "multiple": true
  },
  {
    "id": 37,
    "topic": "Complemento ortogonale",
    "question": "Se U⊂R^7 ha dimensione 3, allora dim U^⊥ vale:",
    "options": [
      "3",
      "4",
      "7",
      "10"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "4"
    ],
    "explanation": "In R^n vale dim U + dim U^⊥ = n, quindi 3+dim U^⊥=7.",
    "multiple": false
  },
  {
    "id": 38,
    "topic": "Geometria affine",
    "question": "Quale equazione rappresenta un piano passante per l'origine in A^3?",
    "options": [
      "x+y-z=0",
      "x+y-z=1",
      "x^2+y=0",
      "x+y+z=4"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "x+y-z=0"
    ],
    "explanation": "Un piano passante per l'origine deve soddisfare l'equazione quando x=y=z=0.",
    "multiple": false
  },
  {
    "id": 39,
    "topic": "Piani",
    "question": "Il piano 2x-y+3z=1 ha vettore normale:",
    "options": [
      "(2,-1,3)",
      "(1,1,1)",
      "(x,y,z)",
      "(3,-1,2)"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "(2,-1,3)"
    ],
    "explanation": "Il vettore normale si ottiene dai coefficienti di x,y,z.",
    "multiple": false
  },
  {
    "id": 40,
    "topic": "Numeri complessi",
    "question": "Sia z=a+bi. Quale affermazione è vera?",
    "options": [
      "z=conj(z) se e solo se z è reale",
      "|z| può essere negativo",
      "z=-conj(z) se e solo se z è reale",
      "Il coniugato di z è b+ai"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "z=conj(z) se e solo se z è reale"
    ],
    "explanation": "Un complesso è reale se e solo se la parte immaginaria è zero, cioè z coincide con il suo coniugato.",
    "multiple": false
  },
  {
    "id": 41,
    "topic": "Vettori",
    "question": "Cinque vettori di R^4 sono:",
    "options": [
      "sempre linearmente indipendenti",
      "sempre linearmente dipendenti",
      "sempre una base di R^4",
      "sempre generatori di R^4"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "sempre linearmente dipendenti"
    ],
    "explanation": "In R^4 non possono esserci 5 vettori linearmente indipendenti.",
    "multiple": false
  },
  {
    "id": 42,
    "topic": "Sottospazi",
    "question": "Quale insieme è un sottospazio vettoriale di R^3?",
    "options": [
      "{(x,y,z):x+y+z=1}",
      "{(x,y,z):x+y+z=0}",
      "{(x,y,z):x^2+y=0}",
      "{(x,y,z):z>0}"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "{(x,y,z):x+y+z=0}"
    ],
    "explanation": "Un'equazione lineare omogenea definisce un sottospazio vettoriale.",
    "multiple": false
  },
  {
    "id": 43,
    "topic": "Dimensioni",
    "question": "Siano U,W⊂R^4, con dim U=2 e dim W=3. Quale affermazione è sempre vera?",
    "options": [
      "dim(U∩W)≥1",
      "U∩W={0}",
      "U+W è sempre somma diretta",
      "U=W"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "dim(U∩W)≥1"
    ],
    "explanation": "Per Grassmann dim(U∩W)=dim U+dim W-dim(U+W)≥2+3-4=1.",
    "multiple": false
  },
  {
    "id": 44,
    "topic": "Sottospazi",
    "question": "Sia W un sottospazio di V, con dim W=dim V<∞. Allora:",
    "options": [
      "W può essere proprio",
      "W=V",
      "W={0}",
      "W∩V={0}"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "W=V"
    ],
    "explanation": "In dimensione finita, un sottospazio con la stessa dimensione dello spazio coincide con lo spazio.",
    "multiple": false
  },
  {
    "id": 45,
    "topic": "Complementari",
    "question": "Sia U⊂V. Un sottospazio complementare W tale che V=U⊕W:",
    "options": [
      "è sempre unico",
      "non esiste mai",
      "in generale non è unico",
      "coincide sempre con U^⊥"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "in generale non è unico"
    ],
    "explanation": "I complementari esistono in dimensione finita, ma in generale non sono unici.",
    "multiple": false
  },
  {
    "id": 46,
    "topic": "Sistemi lineari",
    "question": "Sia A una matrice 4x6, b∈R^4, e siano rk(A)=rk(A|b)=4. Allora il sistema Ax=b:",
    "options": [
      "non ha soluzioni",
      "ha soluzione unica",
      "ha infinite soluzioni",
      "è impossibile perché A non è quadrata"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "ha infinite soluzioni"
    ],
    "explanation": "Il sistema è compatibile e ha 6 incognite con rango 4, quindi ha 6-4=2 parametri liberi.",
    "multiple": false
  },
  {
    "id": 47,
    "topic": "Sistemi omogenei",
    "question": "Sia A una matrice 5x5 con det A=0. Allora:",
    "options": [
      "Ax=0 ha solo la soluzione nulla",
      "Ax=0 ha infinite soluzioni",
      "Ax=b non ha mai soluzioni",
      "A è invertibile"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "Ax=0 ha infinite soluzioni"
    ],
    "explanation": "det A=0 implica rango non massimo, quindi il nucleo è non banale e il sistema omogeneo ha infinite soluzioni.",
    "multiple": false
  },
  {
    "id": 48,
    "topic": "Rango-nullità",
    "question": "Sia f:R^4→R^3 lineare con rk(f)=2. Allora dim Ker(f) vale:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "2"
    ],
    "explanation": "Per rango-nullità: 4=dim Ker(f)+2, quindi dim Ker(f)=2.",
    "multiple": false
  },
  {
    "id": 49,
    "topic": "Iniettività",
    "question": "Può esistere una funzione lineare iniettiva f:R^4→R^2?",
    "options": [
      "Sì, sempre",
      "Sì, se il rango è 4",
      "No, perché il codominio ha dimensione minore del dominio",
      "No, perché ogni funzione lineare è suriettiva"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "No, perché il codominio ha dimensione minore del dominio"
    ],
    "explanation": "Per essere iniettiva servirebbe rango 4, ma il rango è al massimo dim codominio = 2.",
    "multiple": false
  },
  {
    "id": 50,
    "topic": "Suriettività",
    "question": "Può esistere una funzione lineare suriettiva f:R^2→R^4?",
    "options": [
      "Sì, sempre",
      "Sì, se il nucleo è nullo",
      "No, perché l'immagine ha dimensione al massimo 2",
      "No, perché il dominio è uno spazio vettoriale"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "No, perché l'immagine ha dimensione al massimo 2"
    ],
    "explanation": "Il rango non può superare la dimensione del dominio, quindi l'immagine ha dimensione al massimo 2 e non può essere R^4.",
    "multiple": false
  },
  {
    "id": 51,
    "topic": "Funzioni additive",
    "question": "Sia f:V→W una funzione tale che f(v1+v2)=f(v1)+f(v2) per ogni v1,v2∈V. Quale affermazione è necessariamente vera?",
    "options": [
      "f(0_V)=0_W",
      "f è sicuramente lineare",
      "f è sicuramente suriettiva",
      "f è sicuramente iniettiva"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "f(0_V)=0_W"
    ],
    "explanation": "Ponendo v1=v2=0 si ottiene f(0)=f(0)+f(0), dunque f(0)=0.",
    "multiple": false
  },
  {
    "id": 52,
    "topic": "Applicazioni lineari",
    "question": "Siano v1,v2,v3∈V con v3=v1+v2. Se f è lineare e f(vi)=wi, allora deve valere:",
    "options": [
      "w3=w1+w2",
      "w1=w2+w3",
      "w3=0",
      "w1,w2,w3 devono essere indipendenti"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "w3=w1+w2"
    ],
    "explanation": "La linearità impone f(v1+v2)=f(v1)+f(v2).",
    "multiple": false
  },
  {
    "id": 53,
    "topic": "Matrici associate",
    "question": "Una matrice reale 2x3 rappresenta una funzione lineare:",
    "options": [
      "R^2→R^3",
      "R^3→R^2",
      "R^2→R^2",
      "R^3→R^3"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "R^3→R^2"
    ],
    "explanation": "Una matrice m x n rappresenta una funzione da R^n a R^m.",
    "multiple": false
  },
  {
    "id": 54,
    "topic": "Inverse",
    "question": "Se A e B sono matrici invertibili dello stesso ordine, allora:",
    "options": [
      "(AB)^{-1}=A^{-1}B^{-1}",
      "(AB)^{-1}=B^{-1}A^{-1}",
      "(AB)^{-1}=AB",
      "(AB)^{-1}=A^T B^T"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "(AB)^{-1}=B^{-1}A^{-1}"
    ],
    "explanation": "L'inversa del prodotto si prende invertendo l'ordine: (AB)^{-1}=B^{-1}A^{-1}.",
    "multiple": false
  },
  {
    "id": 55,
    "topic": "Determinante",
    "question": "Sia A quadrata. Se scambio due righe e poi moltiplico una colonna per -1, il determinante finale:",
    "options": [
      "resta uguale a det A",
      "diventa -det A",
      "diventa 0",
      "diventa 2det A"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "resta uguale a det A"
    ],
    "explanation": "Lo scambio cambia segno e la moltiplicazione per -1 cambia di nuovo segno: (-1)(-1)=1.",
    "multiple": false
  },
  {
    "id": 56,
    "topic": "Autovalori",
    "question": "Per una matrice quadrata A, 0 è autovalore di A se e solo se:",
    "options": [
      "det A=0",
      "A è diagonale",
      "A è simmetrica",
      "A è ortogonale"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "det A=0"
    ],
    "explanation": "0 è autovalore se det(A-0I)=det A=0.",
    "multiple": false
  },
  {
    "id": 57,
    "topic": "Similarità",
    "question": "Se A e B sono simili, quali affermazioni sono vere?",
    "options": [
      "Hanno la stessa traccia",
      "Hanno lo stesso determinante",
      "Sono sempre uguali",
      "Hanno sempre gli stessi autovettori"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "Hanno la stessa traccia",
      "Hanno lo stesso determinante"
    ],
    "explanation": "Matrici simili hanno stesso polinomio caratteristico, quindi stessa traccia e stesso determinante.",
    "multiple": true
  },
  {
    "id": 58,
    "topic": "Matrici diagonali",
    "question": "Sia D una matrice diagonale reale. Quali affermazioni sono vere?",
    "options": [
      "D è diagonalizzabile",
      "D è sempre invertibile",
      "Gli elementi diagonali sono gli autovalori",
      "D è sempre ortogonale"
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "correctAnswers": [
      "D è diagonalizzabile",
      "Gli elementi diagonali sono gli autovalori"
    ],
    "explanation": "Una matrice diagonale è già diagonalizzata e i suoi autovalori sono gli elementi sulla diagonale.",
    "multiple": true
  },
  {
    "id": 59,
    "topic": "Matrici ortogonali",
    "question": "Ogni matrice ortogonale reale ha tutti gli autovalori reali.",
    "options": [
      "Vero",
      "Falso"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "Falso"
    ],
    "explanation": "Una rotazione del piano è ortogonale ma può avere autovalori complessi non reali.",
    "multiple": false
  },
  {
    "id": 60,
    "topic": "Matrici ortogonali",
    "question": "Siano A,B ortogonali. Quali matrici sono sicuramente ortogonali?",
    "options": [
      "AB",
      "A+B",
      "A^T",
      "2A"
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "correctAnswers": [
      "AB",
      "A^T"
    ],
    "explanation": "Il prodotto di ortogonali è ortogonale e la trasposta di una ortogonale è ortogonale.",
    "multiple": true
  },
  {
    "id": 61,
    "topic": "Teorema spettrale",
    "question": "Sia A reale simmetrica. Quali affermazioni sono vere?",
    "options": [
      "Ha autovalori reali",
      "È ortogonalmente diagonalizzabile",
      "È sempre ortogonale",
      "Ha sempre determinante 1"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "Ha autovalori reali",
      "È ortogonalmente diagonalizzabile"
    ],
    "explanation": "Per il teorema spettrale reale, una matrice reale simmetrica ha autovalori reali ed è ortogonalmente diagonalizzabile.",
    "multiple": true
  },
  {
    "id": 62,
    "topic": "Diagonalizzazione",
    "question": "Una matrice reale con polinomio caratteristico p(t)=(t^2+1)(t-2) è diagonalizzabile su R?",
    "options": [
      "Sì, perché il polinomio ha grado 3",
      "Sì, perché ha determinante non nullo",
      "No, perché non tutti gli autovalori sono reali",
      "No, perché ha autovalori distinti"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "No, perché non tutti gli autovalori sono reali"
    ],
    "explanation": "Su R il polinomio caratteristico deve spezzarsi in fattori lineari; t^2+1 non ha radici reali.",
    "multiple": false
  },
  {
    "id": 63,
    "topic": "Molteplicità",
    "question": "Per un autovalore λ, vale sempre:",
    "options": [
      "g_λ≥a_λ",
      "g_λ≤a_λ",
      "g_λ=a_λ+1",
      "g_λ=0"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "g_λ≤a_λ"
    ],
    "explanation": "La molteplicità geometrica è sempre minore o uguale alla molteplicità algebrica.",
    "multiple": false
  },
  {
    "id": 64,
    "topic": "Jordan",
    "question": "La matrice A=[[2,1],[0,2]] è:",
    "options": [
      "diagonalizzabile",
      "non diagonalizzabile",
      "ortogonale",
      "simmetrica"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "non diagonalizzabile"
    ],
    "explanation": "È un blocco di Jordan di taglia 2: ha un solo autospazio di dimensione 1, quindi non è diagonalizzabile.",
    "multiple": false
  },
  {
    "id": 65,
    "topic": "Idempotenti",
    "question": "Sia A^2=A. Quali affermazioni sono vere?",
    "options": [
      "Gli autovalori possibili sono solo 0 e 1",
      "A è sempre nilpotente",
      "A è diagonalizzabile su R",
      "A è sempre ortogonale"
    ],
    "correctLetters": [
      "A",
      "C"
    ],
    "correctIndexes": [
      0,
      2
    ],
    "correctAnswers": [
      "Gli autovalori possibili sono solo 0 e 1",
      "A è diagonalizzabile su R"
    ],
    "explanation": "Il polinomio minimo divide x(x-1), che ha radici semplici; gli autovalori possibili sono 0 e 1.",
    "multiple": true
  },
  {
    "id": 66,
    "topic": "Involuzioni",
    "question": "Sia A^2=I. Quali affermazioni sono vere?",
    "options": [
      "Gli autovalori possibili sono ±1",
      "A è diagonalizzabile su R",
      "A è sempre simmetrica",
      "A è sempre nulla"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "Gli autovalori possibili sono ±1",
      "A è diagonalizzabile su R"
    ],
    "explanation": "Il polinomio minimo divide (x-1)(x+1), che ha radici reali semplici; quindi A è diagonalizzabile e gli autovalori sono ±1.",
    "multiple": true
  },
  {
    "id": 67,
    "topic": "Nilpotenti",
    "question": "Sia A nilpotente, cioè A^k=0 per qualche k. Se A è diagonalizzabile, allora:",
    "options": [
      "A=0",
      "A=I",
      "A è ortogonale",
      "A ha solo autovalori ±1"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "A=0"
    ],
    "explanation": "Una nilpotente ha solo autovalore 0; se è diagonalizzabile, la diagonale è tutta zero, quindi A=0.",
    "multiple": false
  },
  {
    "id": 68,
    "topic": "Proiezioni",
    "question": "Sia P la matrice della proiezione ortogonale su un sottospazio U. Quali affermazioni sono vere?",
    "options": [
      "P^2=P",
      "P^T=P",
      "P^2=0",
      "P è sempre invertibile"
    ],
    "correctLetters": [
      "A",
      "B"
    ],
    "correctIndexes": [
      0,
      1
    ],
    "correctAnswers": [
      "P^2=P",
      "P^T=P"
    ],
    "explanation": "Una proiezione è idempotente; se è ortogonale, la matrice è anche simmetrica.",
    "multiple": true
  },
  {
    "id": 69,
    "topic": "Proiezioni",
    "question": "Sia p_U:R^3→R^3 la proiezione ortogonale su una retta passante per l'origine. Rispetto a una base ortonormale adatta, la matrice associata è:",
    "options": [
      "diag(1,0,0)",
      "diag(1,1,0)",
      "diag(1,1,1)",
      "diag(0,0,0)"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "diag(1,0,0)"
    ],
    "explanation": "Sulla retta la proiezione ha autovalore 1; sulle due direzioni ortogonali ha autovalore 0.",
    "multiple": false
  },
  {
    "id": 70,
    "topic": "Complemento ortogonale",
    "question": "Se U⊂R^8 ha dimensione 5, allora dim U^⊥ vale:",
    "options": [
      "2",
      "3",
      "5",
      "8"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "3"
    ],
    "explanation": "dim U + dim U^⊥ = 8, quindi dim U^⊥=3.",
    "multiple": false
  },
  {
    "id": 71,
    "topic": "Cauchy-Schwarz",
    "question": "Nella disuguaglianza di Cauchy-Schwarz |u·v|≤||u||||v||, l'uguaglianza vale se:",
    "options": [
      "u e v sono linearmente dipendenti",
      "u e v sono sempre ortogonali",
      "u e v hanno sempre norma 1",
      "u·v=1"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "u e v sono linearmente dipendenti"
    ],
    "explanation": "L'uguaglianza in Cauchy-Schwarz vale esattamente quando i vettori sono linearmente dipendenti.",
    "multiple": false
  },
  {
    "id": 72,
    "topic": "Prodotto vettoriale",
    "question": "Nella base canonica di R^3, quanto vale e3×e2?",
    "options": [
      "e1",
      "-e1",
      "e2",
      "0"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "-e1"
    ],
    "explanation": "e2×e3=e1; invertendo l'ordine cambia il segno, quindi e3×e2=-e1.",
    "multiple": false
  },
  {
    "id": 73,
    "topic": "Prodotto vettoriale",
    "question": "Per v,w∈R^3, v×w=0 se:",
    "options": [
      "v,w sono linearmente dipendenti",
      "v,w sono sempre ortogonali",
      "v,w hanno norma 1",
      "v+w=0 è impossibile"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "v,w sono linearmente dipendenti"
    ],
    "explanation": "Il prodotto vettoriale è nullo se i vettori sono paralleli/dipendenti, incluso il caso di un vettore nullo.",
    "multiple": false
  },
  {
    "id": 74,
    "topic": "Prodotto misto",
    "question": "Se u·(v×w)≠0, allora:",
    "options": [
      "u,v,w sono linearmente indipendenti",
      "u,v,w sono linearmente dipendenti",
      "v×w=0",
      "u è nullo"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "u,v,w sono linearmente indipendenti"
    ],
    "explanation": "Il prodotto misto è il determinante dei tre vettori; se è non nullo, i vettori sono linearmente indipendenti.",
    "multiple": false
  },
  {
    "id": 75,
    "topic": "Geometria",
    "question": "Il piano x-y+2z=0 ha vettore normale:",
    "options": [
      "(1,-1,2)",
      "(1,1,1)",
      "(2,-1,1)",
      "(0,1,2)"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "(1,-1,2)"
    ],
    "explanation": "Il normale di ax+by+cz=d è (a,b,c).",
    "multiple": false
  },
  {
    "id": 76,
    "topic": "Geometria",
    "question": "Una retta perpendicolare al piano 2x+3y-z=4 ha direzione parallela a:",
    "options": [
      "(2,3,-1)",
      "(1,0,0)",
      "(0,1,0)",
      "(3,-1,2)"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "(2,3,-1)"
    ],
    "explanation": "Una retta perpendicolare a un piano ha direzione parallela al vettore normale del piano.",
    "multiple": false
  },
  {
    "id": 77,
    "topic": "Geometria",
    "question": "Due piani in R^3 sono paralleli se:",
    "options": [
      "i loro vettori normali sono proporzionali",
      "i loro vettori normali sono ortogonali",
      "hanno sempre la stessa equazione",
      "hanno sempre intersezione vuota"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "i loro vettori normali sono proporzionali"
    ],
    "explanation": "Piani paralleli hanno normali paralleli, quindi proporzionali.",
    "multiple": false
  },
  {
    "id": 78,
    "topic": "Geometria affine",
    "question": "Una sottovarietà affine P+U è anche un sottospazio vettoriale se e solo se:",
    "options": [
      "contiene l'origine",
      "non contiene l'origine",
      "ha dimensione 1",
      "è una retta"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "contiene l'origine"
    ],
    "explanation": "Un sottospazio vettoriale deve contenere l'origine; una sottovarietà affine che contiene l'origine coincide con il suo direttore traslato.",
    "multiple": false
  },
  {
    "id": 79,
    "topic": "Numeri complessi",
    "question": "Per z∈C, vale z=-conj(z) se e solo se:",
    "options": [
      "z è reale",
      "z è immaginario puro",
      "|z|=1",
      "z=1"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "z è immaginario puro"
    ],
    "explanation": "Se z=a+bi, z=-conj(z) diventa a+bi=-a+bi, quindi a=0: z è immaginario puro.",
    "multiple": false
  },
  {
    "id": 80,
    "topic": "Numeri complessi",
    "question": "Se un polinomio a coefficienti reali ha una radice non reale z, allora:",
    "options": [
      "anche conj(z) è radice",
      "anche -z è sempre radice",
      "il polinomio non ha radici reali",
      "il polinomio è di grado 1"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "anche conj(z) è radice"
    ],
    "explanation": "Le radici non reali dei polinomi a coefficienti reali compaiono in coppie coniugate.",
    "multiple": false
  },
  {
    "id": 81,
    "topic": "Vettori",
    "question": "Tre vettori di R^5:",
    "options": [
      "generano sempre R^5",
      "non possono mai generare tutto R^5",
      "sono sempre linearmente dipendenti",
      "formano sempre una base"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "non possono mai generare tutto R^5"
    ],
    "explanation": "Per generare R^5 servono almeno 5 vettori; tre vettori generano al massimo uno spazio di dimensione 3.",
    "multiple": false
  },
  {
    "id": 82,
    "topic": "Polinomi",
    "question": "Lo spazio dei polinomi reali di grado al più 3, indicato con P_{≤3}, ha dimensione:",
    "options": [
      "3",
      "4",
      "5",
      "infinita"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "4"
    ],
    "explanation": "Una base è {1,x,x^2,x^3}, quindi la dimensione è 4.",
    "multiple": false
  },
  {
    "id": 83,
    "topic": "Matrici",
    "question": "Lo spazio vettoriale M_{2,3}(R) ha dimensione:",
    "options": [
      "2",
      "3",
      "5",
      "6"
    ],
    "correctLetters": [
      "D"
    ],
    "correctIndexes": [
      3
    ],
    "correctAnswers": [
      "6"
    ],
    "explanation": "Una matrice 2x3 ha 6 entrate libere, quindi la dimensione è 2·3=6.",
    "multiple": false
  },
  {
    "id": 84,
    "topic": "Matrici simmetriche",
    "question": "Lo spazio delle matrici simmetriche reali 3x3 ha dimensione:",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "6"
    ],
    "explanation": "In una simmetrica 3x3 ci sono 3 elementi diagonali e 3 sopra la diagonale: totale 6 parametri.",
    "multiple": false
  },
  {
    "id": 85,
    "topic": "Sottospazi",
    "question": "Siano U,W sottospazi di V. L'unione U∪W:",
    "options": [
      "è sempre un sottospazio",
      "non è mai un sottospazio",
      "in generale non è un sottospazio",
      "è sempre uguale a U+W"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "in generale non è un sottospazio"
    ],
    "explanation": "L'unione di sottospazi non è in generale chiusa per somma, salvo casi particolari come U⊂W o W⊂U.",
    "multiple": false
  },
  {
    "id": 86,
    "topic": "Sottospazi",
    "question": "L'intersezione di due sottospazi vettoriali:",
    "options": [
      "è sempre un sottospazio vettoriale",
      "non contiene mai lo zero",
      "è sempre uguale alla somma",
      "è sempre vuota"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "è sempre un sottospazio vettoriale"
    ],
    "explanation": "L'intersezione di sottospazi è ancora chiusa per combinazioni lineari e contiene lo zero.",
    "multiple": false
  },
  {
    "id": 87,
    "topic": "Dimensione",
    "question": "Sia W⊊V, con dim V=7. Allora:",
    "options": [
      "dim W=7",
      "dim W<7",
      "dim W>7",
      "W=V"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "dim W<7"
    ],
    "explanation": "In dimensione finita, un sottospazio proprio ha dimensione strettamente minore.",
    "multiple": false
  },
  {
    "id": 88,
    "topic": "Basi",
    "question": "Le coordinate di un vettore rispetto a una base sono:",
    "options": [
      "sempre infinite",
      "uniche",
      "non determinate",
      "uguali in ogni base"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "uniche"
    ],
    "explanation": "Rispetto a una base, ogni vettore si scrive in modo unico come combinazione lineare dei vettori della base.",
    "multiple": false
  },
  {
    "id": 89,
    "topic": "Sistemi lineari",
    "question": "Se un sistema lineare Ax=b ha almeno due soluzioni distinte, allora:",
    "options": [
      "ha esattamente due soluzioni",
      "ha infinite soluzioni",
      "non ha soluzioni",
      "A è necessariamente invertibile"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "ha infinite soluzioni"
    ],
    "explanation": "La differenza di due soluzioni appartiene al nucleo. Se il nucleo contiene un vettore non nullo, ci sono infinite soluzioni.",
    "multiple": false
  },
  {
    "id": 90,
    "topic": "Sistemi lineari",
    "question": "Se A è quadrata e det A≠0, allora Ax=b:",
    "options": [
      "non ha mai soluzioni",
      "ha sempre un'unica soluzione per ogni b",
      "ha sempre infinite soluzioni",
      "è sempre omogeneo"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "ha sempre un'unica soluzione per ogni b"
    ],
    "explanation": "det A≠0 significa che A è invertibile, quindi Ax=b ha soluzione unica x=A^{-1}b.",
    "multiple": false
  },
  {
    "id": 91,
    "topic": "Cramer",
    "question": "La regola di Cramer si può usare direttamente quando:",
    "options": [
      "A è quadrata e det A≠0",
      "A è rettangolare",
      "det A=0",
      "il sistema è incompatibile"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "A è quadrata e det A≠0"
    ],
    "explanation": "Cramer richiede una matrice dei coefficienti quadrata e invertibile.",
    "multiple": false
  },
  {
    "id": 92,
    "topic": "Rango",
    "question": "Per ogni matrice A, vale:",
    "options": [
      "rk(A^T)=rk(A)",
      "rk(A^T)=0 sempre",
      "rk(A^T)=rk(A)+1",
      "A^T è sempre invertibile"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "rk(A^T)=rk(A)"
    ],
    "explanation": "Il rango per righe e il rango per colonne coincidono; trasporre scambia righe e colonne.",
    "multiple": false
  },
  {
    "id": 93,
    "topic": "Traccia",
    "question": "Per matrici quadrate dello stesso ordine, quale affermazione è vera?",
    "options": [
      "tr(A+B)=tr(A)+tr(B)",
      "tr(AB)=tr(A)tr(B) sempre",
      "tr(A)=det(A) sempre",
      "la traccia esiste anche per matrici non quadrate"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "tr(A+B)=tr(A)+tr(B)"
    ],
    "explanation": "La traccia è lineare: la traccia della somma è la somma delle tracce.",
    "multiple": false
  },
  {
    "id": 94,
    "topic": "Similarità",
    "question": "Se A e B sono simili, allora:",
    "options": [
      "hanno la stessa traccia",
      "hanno sempre gli stessi autovettori",
      "sono sempre uguali",
      "hanno sempre le stesse righe"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "hanno la stessa traccia"
    ],
    "explanation": "Matrici simili hanno lo stesso polinomio caratteristico, quindi anche la stessa traccia.",
    "multiple": false
  },
  {
    "id": 95,
    "topic": "Trasposta",
    "question": "Se A è invertibile, allora:",
    "options": [
      "(A^T)^{-1}=(A^{-1})^T",
      "(A^T)^{-1}=A sempre",
      "(A^T)^{-1}=0",
      "A^T non è invertibile"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "(A^T)^{-1}=(A^{-1})^T"
    ],
    "explanation": "Trasposta e inversa commutano: (A^T)^{-1}=(A^{-1})^T.",
    "multiple": false
  },
  {
    "id": 96,
    "topic": "Matrici",
    "question": "Se AB=0, allora:",
    "options": [
      "necessariamente A=0",
      "necessariamente B=0",
      "non è detto che A=0 o B=0",
      "A e B sono sempre invertibili"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "non è detto che A=0 o B=0"
    ],
    "explanation": "Per matrici possono esistere divisori dello zero: due matrici non nulle possono avere prodotto nullo.",
    "multiple": false
  },
  {
    "id": 97,
    "topic": "Gruppi",
    "question": "L'insieme GL_n(R) delle matrici invertibili n x n:",
    "options": [
      "è un gruppo rispetto al prodotto",
      "è un sottospazio vettoriale di M_n(R)",
      "contiene la matrice nulla",
      "è chiuso rispetto alla somma"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "è un gruppo rispetto al prodotto"
    ],
    "explanation": "Le matrici invertibili formano un gruppo per il prodotto, ma non un sottospazio perché non contengono 0 e non sono chiuse per somma.",
    "multiple": false
  },
  {
    "id": 98,
    "topic": "Nilpotenti",
    "question": "Se A è nilpotente, cioè A^k=0 per qualche k, allora:",
    "options": [
      "l'unico autovalore possibile è 0",
      "tutti gli autovalori sono 1",
      "A è sempre invertibile",
      "det A≠0"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "l'unico autovalore possibile è 0"
    ],
    "explanation": "Se Av=λv, allora A^k v=λ^k v=0; poiché v≠0, λ=0.",
    "multiple": false
  },
  {
    "id": 99,
    "topic": "Triangolari",
    "question": "Gli autovalori di una matrice triangolare sono:",
    "options": [
      "gli elementi sulla diagonale",
      "gli elementi fuori diagonale",
      "sempre tutti uguali a zero",
      "sempre tutti distinti"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "gli elementi sulla diagonale"
    ],
    "explanation": "Il polinomio caratteristico di una triangolare ha radici uguali agli elementi diagonali.",
    "multiple": false
  },
  {
    "id": 100,
    "topic": "Determinante",
    "question": "Il determinante di una matrice triangolare è:",
    "options": [
      "la somma degli elementi diagonali",
      "il prodotto degli elementi diagonali",
      "sempre zero",
      "sempre uno"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "il prodotto degli elementi diagonali"
    ],
    "explanation": "Per matrici triangolari, il determinante è il prodotto degli elementi sulla diagonale.",
    "multiple": false
  },
  {
    "id": 101,
    "topic": "Diagonalizzazione",
    "question": "Una matrice n x n è diagonalizzabile se:",
    "options": [
      "ha n autovettori linearmente indipendenti",
      "ha determinante diverso da zero",
      "ha almeno un autovalore",
      "è quadrata"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "ha n autovettori linearmente indipendenti"
    ],
    "explanation": "Diagonalizzabile significa che esiste una base di autovettori, cioè n autovettori linearmente indipendenti.",
    "multiple": false
  },
  {
    "id": 102,
    "topic": "Autospazi",
    "question": "La molteplicità geometrica di un autovalore λ è:",
    "options": [
      "dim Ker(A-λI)",
      "il determinante di A-λI",
      "sempre uguale a n",
      "sempre uguale a zero"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "dim Ker(A-λI)"
    ],
    "explanation": "La molteplicità geometrica è la dimensione dell'autospazio relativo a λ.",
    "multiple": false
  },
  {
    "id": 103,
    "topic": "Autovettori",
    "question": "Autovettori relativi ad autovalori distinti sono:",
    "options": [
      "sempre linearmente indipendenti",
      "sempre ortogonali",
      "sempre paralleli",
      "sempre nulli"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "sempre linearmente indipendenti"
    ],
    "explanation": "Autovettori associati ad autovalori distinti sono linearmente indipendenti.",
    "multiple": false
  },
  {
    "id": 104,
    "topic": "Simmetriche",
    "question": "Se A è reale simmetrica, allora gli autospazi relativi ad autovalori distinti sono:",
    "options": [
      "ortogonali",
      "uguali",
      "vuoti",
      "non sottospazi"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "ortogonali"
    ],
    "explanation": "Per matrici reali simmetriche, autovettori relativi ad autovalori distinti sono ortogonali.",
    "multiple": false
  },
  {
    "id": 105,
    "topic": "Teorema spettrale",
    "question": "Una matrice reale è ortogonalmente diagonalizzabile se e solo se:",
    "options": [
      "è simmetrica",
      "è invertibile",
      "ha determinante zero",
      "è triangolare"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "è simmetrica"
    ],
    "explanation": "Il teorema spettrale reale dice: A è ortogonalmente diagonalizzabile se e solo se A è simmetrica.",
    "multiple": false
  },
  {
    "id": 106,
    "topic": "Ortogonali",
    "question": "Se A è ortogonale, allora:",
    "options": [
      "det A=0",
      "det A=1 oppure det A=-1",
      "det A=2",
      "A non è invertibile"
    ],
    "correctLetters": [
      "B"
    ],
    "correctIndexes": [
      1
    ],
    "correctAnswers": [
      "det A=1 oppure det A=-1"
    ],
    "explanation": "Da A^T A=I segue det(A)^2=1, quindi det(A)=±1.",
    "multiple": false
  },
  {
    "id": 107,
    "topic": "Isometrie",
    "question": "Una isometria lineare f:R^n→R^n:",
    "options": [
      "conserva il prodotto scalare",
      "conserva le lunghezze",
      "è invertibile",
      "manda ogni vettore in sé stesso"
    ],
    "correctLetters": [
      "A",
      "B",
      "C"
    ],
    "correctIndexes": [
      0,
      1,
      2
    ],
    "correctAnswers": [
      "conserva il prodotto scalare",
      "conserva le lunghezze",
      "è invertibile"
    ],
    "explanation": "Una isometria lineare conserva prodotto scalare e norme; in dimensione finita è invertibile. Non deve essere per forza l'identità.",
    "multiple": true
  },
  {
    "id": 108,
    "topic": "Prodotto scalare",
    "question": "Se u·v=0, allora:",
    "options": [
      "u e v sono ortogonali",
      "u e v sono paralleli",
      "u=v sempre",
      "||u||=||v|| sempre"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "u e v sono ortogonali"
    ],
    "explanation": "Prodotto scalare nullo significa ortogonalità.",
    "multiple": false
  },
  {
    "id": 109,
    "topic": "Norma",
    "question": "Per ogni vettore v, vale:",
    "options": [
      "||v||≥0",
      "||v||<0 sempre",
      "||v||=0 anche se v≠0",
      "||v|| può essere complessa in R^n"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "||v||≥0"
    ],
    "explanation": "La norma è sempre reale non negativa ed è zero solo per il vettore nullo.",
    "multiple": false
  },
  {
    "id": 110,
    "topic": "Norma",
    "question": "Per ogni u,v∈R^n:",
    "options": [
      "||u+v||≤||u||+||v||",
      "||u+v||=||u||+||v|| sempre",
      "||u+v||<0",
      "||u+v||=||u||||v||"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "||u+v||≤||u||+||v||"
    ],
    "explanation": "È la disuguaglianza triangolare.",
    "multiple": false
  },
  {
    "id": 111,
    "topic": "Prodotto vettoriale",
    "question": "Il vettore u×v è:",
    "options": [
      "parallelo a u",
      "parallelo a v",
      "perpendicolare sia a u sia a v",
      "sempre nullo"
    ],
    "correctLetters": [
      "C"
    ],
    "correctIndexes": [
      2
    ],
    "correctAnswers": [
      "perpendicolare sia a u sia a v"
    ],
    "explanation": "Il prodotto vettoriale è ortogonale a entrambi i vettori di partenza.",
    "multiple": false
  },
  {
    "id": 112,
    "topic": "Prodotto vettoriale",
    "question": "L'area del parallelogramma generato da u,v∈R^3 è:",
    "options": [
      "||u×v||",
      "u·v",
      "det(u,v) sempre",
      "||u||+||v||"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "||u×v||"
    ],
    "explanation": "La norma del prodotto vettoriale misura l'area del parallelogramma generato dai due vettori.",
    "multiple": false
  },
  {
    "id": 113,
    "topic": "Prodotto misto",
    "question": "Il volume del parallelepipedo generato da u,v,w∈R^3 è:",
    "options": [
      "|u·(v×w)|",
      "u+v+w",
      "u·v",
      "||u||+||v||+||w||"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "|u·(v×w)|"
    ],
    "explanation": "Il valore assoluto del prodotto misto è il volume del parallelepipedo.",
    "multiple": false
  },
  {
    "id": 114,
    "topic": "Geometria",
    "question": "Una retta passante per P con direzione v≠0 si scrive:",
    "options": [
      "P+tv",
      "P+v+w senza parametri",
      "ax+by+cz+d=0 sempre come unica equazione",
      "v=0"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "P+tv"
    ],
    "explanation": "La forma parametrica di una retta è P+tv, con t parametro reale.",
    "multiple": false
  },
  {
    "id": 115,
    "topic": "Geometria",
    "question": "Il piano passante per P con normale n≠0 è dato da:",
    "options": [
      "n·(X-P)=0",
      "n·X=1 sempre",
      "X=P+tn",
      "X=0 sempre"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "n·(X-P)=0"
    ],
    "explanation": "I punti X del piano sono quelli per cui X-P è ortogonale al normale n.",
    "multiple": false
  },
  {
    "id": 116,
    "topic": "Geometria",
    "question": "Una retta con direzione v è parallela al piano di normale n se:",
    "options": [
      "v·n=0",
      "v è parallelo a n",
      "v=n sempre",
      "n=0"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "v·n=0"
    ],
    "explanation": "Una direzione parallela al piano è perpendicolare al vettore normale del piano.",
    "multiple": false
  },
  {
    "id": 117,
    "topic": "Distanze",
    "question": "La distanza del punto P=(x0,y0,z0) dal piano ax+by+cz+d=0 è:",
    "options": [
      "|ax0+by0+cz0+d|/sqrt(a^2+b^2+c^2)",
      "ax0+by0+cz0+d senza valore assoluto né denominatore",
      "sqrt(x0^2+y0^2+z0^2) sempre",
      "a+b+c+d"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "|ax0+by0+cz0+d|/sqrt(a^2+b^2+c^2)"
    ],
    "explanation": "La formula della distanza punto-piano è valore assoluto dell'equazione valutata nel punto diviso la norma del normale.",
    "multiple": false
  },
  {
    "id": 118,
    "topic": "Numeri complessi",
    "question": "Per z∈C, z=conj(z) se e solo se:",
    "options": [
      "z è reale",
      "z è immaginario puro",
      "|z|=0 sempre",
      "z=i"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "z è reale"
    ],
    "explanation": "Un complesso coincide con il suo coniugato se e solo se ha parte immaginaria nulla.",
    "multiple": false
  },
  {
    "id": 119,
    "topic": "Numeri complessi",
    "question": "Per ogni z∈C:",
    "options": [
      "|z|≥0",
      "|z| può essere negativo",
      "|z|=z sempre",
      "|z|=conj(z) sempre"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "|z|≥0"
    ],
    "explanation": "Il modulo è una distanza dall'origine, quindi è sempre reale e non negativo.",
    "multiple": false
  },
  {
    "id": 120,
    "topic": "Numeri complessi",
    "question": "Per risolvere un'equazione complessa con conj(z), conviene:",
    "options": [
      "porre z=x+iy e separare parte reale e immaginaria",
      "usare sempre direttamente il delta come nei polinomi reali",
      "cancellare il coniugato",
      "supporre sempre z reale"
    ],
    "correctLetters": [
      "A"
    ],
    "correctIndexes": [
      0
    ],
    "correctAnswers": [
      "porre z=x+iy e separare parte reale e immaginaria"
    ],
    "explanation": "Con il coniugato l'equazione non è un polinomio usuale in z; si pone z=x+iy e si separano parte reale e immaginaria.",
    "multiple": false
  }
];
