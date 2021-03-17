const dealer = (data, context) => {
  const responses = [];

  data.intentions.forEach(({ module, expression }) => {
    const response = require(`../modules/${module}`)({
      expression,
      lang: data.lang,
      context,
    });
    responses.push(response);
  });

  return responses;
};

module.exports = dealer;
