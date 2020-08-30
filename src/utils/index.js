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
        };

        users.push(fakeUser);
    }

    return users;
};

export const getBotReply = (message) => {
    const botId = "bot-user";
    let content = "I do not know what to say";

    if (message.includes("hello")) {
        content = "well, hello there";
    }

    return makeMessage(botId, content);
};
