import firebase from "firebase/compat/app";
import * as firebaseui from 'firebaseui'
import { useEffect } from "react";
import auth from "../../auth";

export default function Login() {

    useEffect(() => {
        var ui = new firebaseui.auth.AuthUI(auth);

        ui.start('#firebaseui-auth-container', {
            signInOptions: [
                {
                    provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
                    requireDisplayName: false,
                    disableSignUp: {
                        status: true
                    }
                }
            ],
            signInSuccessUrl: 'http://localhost:3000/',
        })
    }, []);

    return (<>
        <h1>Login</h1>
        <div id="firebaseui-auth-container"></div>
    </>
    );
}