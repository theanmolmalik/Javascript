var google = "Google";
var fb = null;

if(google)
{
    console.log(`Block 1`);
}

if(!!fb) // Converting falsy value to actual boolean false
{
    console.log(`Block 2`);
}

