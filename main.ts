for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= i; j++) {
        if (i % 2 == j % 2) {
            led.plot(i, j)
        }
    }
}
