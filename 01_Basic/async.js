async function abcd(){
    var blog = await fetch(`https://randomuser.me/api/`);
    var ans = await blog.json();
    console.log(ans.results[0]);
}
abcd();