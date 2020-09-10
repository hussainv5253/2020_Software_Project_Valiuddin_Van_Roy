
document.addEventListener("DOMContentLoaded",  event => {

    const app = firebase.app;


});

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.write(`Hello ${user.displayName}<br>`);
            console.log(user)

            const db = firebase.firestore();
            const usersRef = db.collection('users');
            const query = usersRef.where('username', '==', user.displayName)
        
            query.get()
                .then(users => {
                    if (users.length > 0) {
                        users.forEach(doc => {
                            data = doc.data()
                            document.write(`Rooms: ${data.rooms} <br>`)
                        })
                    } else {
                        document.write(`new user`)
                    }
                })
            

        })
        .catch(console.log)


    

}