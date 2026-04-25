const createLoginTracker = require('../index');

test("successful login within 3 attempts", () => {
    const login = createLoginTracker({
        username: "user1",
        password: "password123"
    });

    expect(login("password123")).toBe("Login successful");
});

test("fails and locks after 3 attempts", () => {
    const login = createLoginTracker({
        username: "user1",
        password: "password123"
    });

    login("wrong");
    login("wrong");
    login("wrong");

    expect(login("password123")).toBe(
        "Account locked due to too many failed login attempts"
    );
});