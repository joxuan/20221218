const firebaseConfig = {
    apiKey: "AIzaSyA976XMKcZdW0zXTd_GEzOKvmvEDjKHxyY",
    authDomain: "project-2505885857738810240.firebaseapp.com",
    projectId: "project-2505885857738810240",
    storageBucket: "project-2505885857738810240.appspot.com",
    messagingSenderId: "1076578207525",
    appId: "1:1076578207525:web:6a7e6d81271ade50827ccc"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

; (async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
