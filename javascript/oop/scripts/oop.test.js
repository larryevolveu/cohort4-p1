//
// npm test -- -t whatever
//
import ooStuff from './oop.js';

test('Test oop', () => {
    const larry = new ooStuff.Person("Larry", 29);
    expect(larry.name).toBe("Larry");
    expect(larry.age).toBe(29);
});

test('Test oop birthday', () => {
    const family = [];
    family.push(new ooStuff.Person("Larry", 29));
    family.push(new ooStuff.Person("Lorraine", 28));

    expect(family[0].name).toBe("Larry");
    expect(family[0].age).toBe(29);

    expect(family[1].name).toBe("Lorraine");
    expect(family[1].age).toBe(28);
    
    family[0].birthday();
    expect(family[0].age).toBe(30);

    family[1].birthday();
    expect(family[1].age).toBe(29);

});
