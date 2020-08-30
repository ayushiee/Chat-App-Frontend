import faker from "faker";

export const makeMessage = (userId, content) => ({ userId, content });

export const generateUsers = (count) => {
    if (count <= 0) {
        throw new Error("count should be greater than 0");
    }

    const users = new Array(0);

    for (let i = 0; i < count; i++) {
        const fakeUser = {
            userId: "user-me",
            name: faker.name.findName(),
            avatar: faker.image.image(),
            day: faker.date.weekday(),
        };

        users.push(fakeUser);
    }

    return users;
};

export const getBotReply = (message) => {
    const botId = "bot-user";
    let content = "I do not know what to say, ttyl?";

    if (message.includes("Hello")) {
        content = "Well, hello there";
    } else if (message.includes("Bye")) {
        content = "Bye";
    }

    return makeMessage(botId, content);
};
