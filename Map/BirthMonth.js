let monthMap = new Map();
monthMap.set(1, 0);
monthMap.set(2, 0);
monthMap.set(3, 0);
monthMap.set(4, 0);
monthMap.set(5, 0);
monthMap.set(6, 0);
monthMap.set(7, 0);
monthMap.set(8, 0);
monthMap.set(9, 0);
monthMap.set(10, 0);
monthMap.set(11, 0);
monthMap.set(12, 0);
for (let i = 1; i <= 50; i++) {
    let birthMonth = Math.floor(Math.random() * 12) + 1;
    let value = monthMap.get(birthMonth);
    value++;
    monthMap.set(birthMonth, value);
}

for (let [key, value] of monthMap) {
    console.log("Indiviuals with birthday in month " + key + " = " + value);
}