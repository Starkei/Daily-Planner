class TaskService {
    static getTasksByUserID(userId) {
        const mock = {
            "12345": [
                { name: "Test1", checked: false },
                { name: "Test2", checked: false },
                { name: "Test3", checked: false },
            ],
            "232391728931": [],
        };
        return mock[userId];
    }
}

export { TaskService };
