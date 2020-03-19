 module.exports = function repeater(str, options) {
  const {
    repeatTimes, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|'
  } = options || { repeatTimes: 1 };
  const r1 = parseInt(repeatTimes) ? parseInt(repeatTimes) : 1;
  const r2 = parseInt(additionRepeatTimes) ? parseInt(additionRepeatTimes) : 1;
   if (options.addition !== undefined && !(typeof options.addition === 'string')) options.addition = options.addition + '';

  return [...Array(r1)].map(() => str + [...Array(r2)].map(() => options.addition ).join(additionSeparator)).join(separator);
};

