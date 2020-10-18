export const people = [
    {
        id: "0",
        name: "Heeyoung",
        age: 27,
        gender: "male"
    },
    {
        id: "1",
        name: "Nicolas",
        age: 23,
        gender: "male"
    },
    {
        id: "2",
        name: "Jisu",
        age: 18,
        gender: "female"
    },
    {
        id: "3",
        name: "JD",
        age: 31,
        gender: "male"
    },
    {
        id: "4",
        name: "flynn",
        age: 16,
        gender: "male"
    },
    {
        id: "5",
        name: "Dal",
        age: 25,
        gender: "female"
    },
    {
        id: "6",
        name: "Sunny",
        age: 12,
        gender: "female"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id))[0];
    return filteredPeople;
};