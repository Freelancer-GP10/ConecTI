import { getAuth } from "firebase/auth";
import { addDoc, collection, limit, orderBy, query, serverTimestamp } from "firebase/firestore";
import { useRef, useState } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { app, databaseApp } from "../js/firebaseConfig";


import { Menu } from "../componentes/menu-lateral";

// import "../css/global.css";
// import "../css/Chat.css";

const auth = getAuth(app);

export const Chat = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='App'>
            <header>
                <h1>ChaTI</h1>
                <SignOut />
            </header>

            {/* <Menu /> */}

            <section className="chat-content"> 
                {user ? <ChatRoom /> : <SignIn />}
            </section>

        </div>
    );
};

export const ChatRoom = () => {
    const dummy = useRef();
    const messagesRef = collection(databaseApp, "messages");
    const q = query(messagesRef, orderBy('createdAt', 'asc'), limit(105));

    const [messages, loading, error] = useCollectionData(q, { idField: "id" });

    console.log(messages)

    const [formValue, setFormValue] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const { photoURL, uid } = auth.currentUser;

        try {
            await addDoc(messagesRef, {
                text: formValue,
                uid,
                photoURL,
                createdAt: serverTimestamp(),
            });
            setFormValue("");
            dummy.current.scrollIntoView({ behavior: "smooth" });
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return (
        <>
            <main>
                {messages &&
                    messages.map((msg, index) => <ChatMessage key={index} message={msg} />)}
                <div ref={dummy}></div>
            </main>
            <form onSubmit={sendMessage}>
                <input
                    type="text"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                />
                <button type="submit" disabled={!formValue}>
                    Enviar
                </button>
            </form>
        </>
    );
};

export const ChatMessage = (props) => {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
            <p>{text}</p>
        </div>
    );
};

export const SignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return <button className="sign-in" onClick={() => signInWithGoogle()}>Entrar no chat</button>;
};

export const SignOut = () => {
    return (
        auth.currentUser && <button className="sign-out" onClick={() => auth.signOut()}>Sair</button>
    );

}
export default Chat;
