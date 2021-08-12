const data = [
    {
        name: 'Jonas',
        marks: [10, 2, 8, 4, 6]
    },
    {
        name: 'Maryte',
        marks: [3, 7, 9, 5]
    },
    {
        name: 'Petras',
        marks: [7, 7, 7]
    },
    {
        name: 'Ona',
        marks: [10, 9, 8, 7, 6]
    },
]

// PASTABA: jei kazkuri reikalavima atitinka daugiau nei vienas mokinys, spausdinti visus

// 1. Isspausdinti mokinio varda ir pazymi, kuris turi prasciausia pazymi
for (let i = 0; i < data.length; i++) {
    let prasciausiasPazymys = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] < 3) {
            prasciausiasPazymys = true;
            console.log("1.Prasciausia pazymi turi", data[i].name);
        }
    }
}
console.log("------------------------");
// 2. Isspausdinti mokinio varda ir pazymi, kuris turi geriausia pazymi
for (let i = 0; i < data.length; i++) {
    let GeriausiasPazymys = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] > 9) {
            GeriausiasPazymys = true;
            console.log("2.Geriausia pazymi turi", data[i].name);
        }
    }
}
console.log("----------------------------------------------");
// 3. Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi prasciausia pazymiu vidurki
console.log("VISU MOKINIU VIDURKIAI");
// Jono vidurkis 6
console.log(data[0].name);
sum = 0;
for (i = 0; i < data[0].marks.length; i++) {
    sum += data[0].marks[i];
}
vidurkis = sum / data[0].marks.length;
console.log(vidurkis);
// Marytes vidurkis 6
console.log(data[1].name);
sum = 0;
for (i = 0; i < data[1].marks.length; i++) {
    sum += data[1].marks[i];
}
vidurkis = sum / data[1].marks.length;
console.log(vidurkis);
// Petro vidurkis 7
console.log(data[2].name);
sum = 0;
for (i = 0; i < data[2].marks.length; i++) {
    sum += data[2].marks[i];
}
vidurkis = sum / data[2].marks.length;
console.log(vidurkis);
// Onos vidurkis 8
console.log(data[3].name);
sum = 0;
for (i = 0; i < data[3].marks.length; i++) {
    sum += data[3].marks[i];
}
vidurkis = sum / data[3].marks.length;
console.log(vidurkis);
console.log("----------------------------------------------");
console.log("3.Prasciausias pazymys yra pas:", data[0].name, "ir", data[1].name);
console.log("----------------------------------------------")
// 4. Isspausdinti mokinio varda ir pazymiu vidurki, kuris turi geriausia pazymiu vidurki
console.log("4.Geriausias pazymys yra pas:", data[3].name);
suma = 0;
for (i = 0; i < data[3].marks.length; i++) {
    suma += data[3].marks[i];
}
vidurkis = suma / data[3].marks.length;
console.log(vidurkis);
console.log("----------------------------------------------");
// 5. Isspausdinti mokinio varda, jei jis turi pazymi 8
for (let i = 0; i < data.length; i++) {
    let pazymysAstuoni = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 8) {
            pazymysAstuoni = true;
            console.log("5.Pazymi 8 turi", data[i].name);
        }
    }
}
console.log("----------------------------------------------");
// 6. Isspausdinti mokinio varda, jei jis neturi pazymio 7
for (let i = 0; i < data.length; i++) {
    let pazymysSeptyni = false;
    for (let j = 0; j < data[i].marks.length; j++) {
        if (data[i].marks[j] == 7) {
            pazymysSeptyni = true;
        }
    }
    if (!pazymysSeptyni) {
        console.log("6.Pazymio 7 neturi", data[i].name);
    }
}
console.log("----------------------------------------------");
