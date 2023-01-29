var hammingWeight = function(n) {
    return String(n.toString(2))    //get binary representation and capture it as string
          .split('')    //split each char and get array of '0' and '1' s
          .reduce((a,b) => Number(a)+Number(b));
};