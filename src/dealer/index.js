const dealer = (data) => {
  const responses = [];

  data.intention.forEach(({ module, found }) => {
    const response = require(`../modules/${module}`)({
      expression: found,
      lang: data.lang,
    });
    responses.push(response);
  });

  return responses;
};

module.exports = dealer;
