var subtractProductAndSum = function(n) {
    let sum = 0;
    let prod = 1;
    for (let h of n.toString())
    {
        sum+= Number(h);
        prod*= Number(h);
    }
    return prod - sum
};