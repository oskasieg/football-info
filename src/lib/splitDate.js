const splitDate = (string) => {
  const date = string.substr(0, string.indexOf('T'));
  const time = string.substr(string.indexOf('T') + 1, 8);

  return {
    date,
    time,
  };
};

export default splitDate;
