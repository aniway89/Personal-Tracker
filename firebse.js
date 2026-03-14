    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
    import { getFirestore, doc, setDoc, getDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

    const firebaseConfig = {
      apiKey: "Apikey",
      authDomain: "AuthDomain",
      projectId: "ProjectId",
      storageBucket: "StorageBucket",
      messagingSenderId: "MessagingSenderId",
      appId: "AppId",
      measurementId: "MeasurementId"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    window.db = db; // Exposing for global access
    window.doc = doc;
    window.setDoc = setDoc;
    window.getDoc = getDoc;
    window.onSnapshot = onSnapshot;

    // Auto-sync logic will go here