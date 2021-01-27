
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let domain = ['.com', '.net', '.us', '.io'];

    for (let w = 0; w < pronoun.length; w++) {
        for (let x = 0; x < adj.length; x++) {
            for (let y = 0; y < noun.length; y++) {
                for (let z = 0; z < domain.length; z++) {
                    console.log(pronoun[w]+adj[x]+noun[y]+domain[z]);
                }
            }
        }
    }
