const dealer = (data, context) => {
  const responses = [];

  data.intention.forEach(({ module, found }) => {
    const response = require(`../modules/${module}`)({
      expression: found,
      lang: data.lang,
      context,
    });
    responses.push(response);
  });

  return responses;
};

module.exports = dealer;
