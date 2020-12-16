test('Primeiro teste com Jest',()=>{
    let number = null;
    expect(number).toBeNull();
    number = 10
    expect(number).not.toBeNull();

    expect(number).toBe(10);
    expect(number).toEqual(10);


});
test('Segundo teste com Jest',()=>{

    const obj = {name: "Edvaldo", email:"edvaldo@gmail.com"};
    expect(obj).toHaveProperty('name','Edvaldo');



});