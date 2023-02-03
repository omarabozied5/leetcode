// function filterRange(arr, a, b) 
// {
//     return arr.filter(item => (a <= item && b >= it))
// }

function filterRangeInPlace(arr,a,b)
{
    for (let i = 0 ; i = arr.length ; i++)
    {
        let val = arr[i];

        if (val < a || val > b )
        {
                arr.splice(i , 1)
                i--;
    
        }
    }
}
let arr = [10 , 20 , 30 ,40 ,50];
filterRangeInPlace(arr,25,50);
alert(arr)