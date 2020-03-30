//
// npm test people -- -t plumb
//
import people from './people'

test('test the createCard function', () => {
    const p1 = people.createCard("Larry", "p1");
    expect(p1.textContent).toBe("Larry");
    expect(p1.getAttribute("myKey")).toBe("p1");

    const p2 = people.createCard("Lorraine", "p2");
    expect(p2.textContent).toBe("Lorraine");
    expect(p2.getAttribute("myKey")).toBe("p2");
});


test('test the array createCards function', () => {
    const peopleList = [
        { name: "Larry", key: "p1" },
        { name: "Lorraine", key: "p2" },
        { name: "Jessica", key: "p3" },
    ];

    const group = document.createElement("div");
    const pCards = people.createCardFromArray(group, peopleList);
    expect(pCards.children.length).toBe(3);
    expect(pCards.children[0].textContent).toBe('Larry');
    expect(pCards.children[2].textContent).toBe('Jessica');
    expect(pCards.children[0].getAttribute("myKey")).toBe('p1');
    expect(pCards.children[1].getAttribute("myKey")).toBe('p2');

});
