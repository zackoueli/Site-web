import "server-only";
import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { getStorage } from "firebase-admin/storage";

function getAdminApp() {
  const apps = getApps();
  if (apps.length) return apps[0];

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error("Variables Firebase manquantes (FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL / FIREBASE_PRIVATE_KEY).");
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
    storageBucket:
      process.env.FIREBASE_STORAGE_BUCKET || `${projectId}.appspot.com`,
  });
}

export function getDb() {
  return getFirestore(getAdminApp());
}

/** Bucket Storage par défaut du projet (Admin SDK — bypass des règles Storage). */
export function getBucket() {
  return getStorage(getAdminApp()).bucket();
}
