it('should multiply 2 by 6', () => {
    expect(myFunc(2, 6)).toBe(12);
})

function myFunc(x, y) {
    return x * y;
}