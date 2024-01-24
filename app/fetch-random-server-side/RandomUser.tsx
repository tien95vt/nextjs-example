async function getRandomUser() {
    console.log('getRandomUser RUN In server');
    // const res = await fetch("https://random-data-api.com/api/users/random_user", { cache: 'no-cache' });
    const res = await fetch("https://random-data-api.com/api/users/random_user");
    return await res.json();
}

async function RandomUser () {
    const userRandom = await getRandomUser();
    return (
        <h2>{`Username: ${userRandom.username}`}</h2>
    );
}

export default RandomUser;