import { Team } from "../app"

test("test error character", () => {
    expect(() => {
        let team = new Team();
        let expected = {
            name: "Nadya",
            type: "Bowman",
            health: 100,
            level: 1,
            attack: 25,
            defence: 25,
        }
        team.add(expected);
        team.add(expected);

    }).toThrow('такой объект уже существует в команде');
});
test("test character", () => {
    let user = new Set();
    let team = new Team();
    let expected = {
        name: "Nadya",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    user.add(expected)
    team.add(expected);
    expect(team.members).toEqual(user)
});

test("addAll character", () => {
    let user = new Set();
    let team = new Team();
    let expected = {
        name: "Nadya",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    let expecteds = {
        name: "Anna",
        type: "Swordsman",
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    }
    user.add(expected)
    user.add(expecteds)
    team.addAll(expected, expecteds)
    expect(team.members).toEqual(user)
});
test('test compensation', () => {
    let another = []
    let team = new Team();
    let expected = {
        name: "Nadya",
        type: "Bowman",
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    }
    another.push(expected)
    team.add(expected)
    let comeback = team.toArray()
    expect(comeback).toEqual(another)
})


