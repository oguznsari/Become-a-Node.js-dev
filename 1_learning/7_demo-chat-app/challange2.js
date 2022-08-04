MyFunction() {
    request((result, err) => console.log(result, err));
}

async MyFunction2() {
    try {
        let result = await request();
        console.log('result');
    } catch (error) {
        console.log(error);
    }
}