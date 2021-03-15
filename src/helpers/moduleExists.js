function moduleExists(module) {
  try {
    return require.resolve(module);
  } catch (e) {
    return false;
  }
}

module.exports = moduleExists;
