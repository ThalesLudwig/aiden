const contextMemory = [];

const persist = (context) => {
    contextMemory.push(context);
};

const context = (data) => {
    persist(data);
    return contextMemory;
};

module.exports = context;