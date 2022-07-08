const contextMemory = [];

const get = () => contextMemory;

const add = (data) => {
  contextMemory.push(data);
  return contextMemory;
};

module.exports = { get, add };
