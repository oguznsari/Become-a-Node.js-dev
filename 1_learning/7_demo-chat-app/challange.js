MyFunction() {
    GetMessages((list) => {
        console.log(list);
    })
}

async MyFunction2() {
    let list = await GetMessages();
    console.log(list);
}