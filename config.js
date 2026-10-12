// =====================================================================
//  BillBook settings — sirf yahi file badalni hai
// =====================================================================

// STEP 1: Firebase console → Project settings (⚙️) → "Your apps" → Web app
// wahan jo firebaseConfig dikhega, uski values yahan paste karo.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyC-JQQZ5HxNKEsked6GDO2f_oaK5_y2keE",
  authDomain: "jain-electric-bill.firebaseapp.com",
  projectId: "jain-electric-bill",
  storageBucket: "jain-electric-bill.firebasestorage.app",
  messagingSenderId: "433511749502",
  appId: "1:433511749502:web:74a3bdd62deec79277c52f"
};

// STEP 2 (kuch nahi karna): pehli baar login karte hi ye details database
// mein bhar jayengi. Baad mein app ke Settings tab se badal sakte ho.
window.SEED = {
  firm: {
    name: "Jain Electric Sales",
    address: "519/598, Badshahi Mandi\nPrayagraj",
    phone: "9935043777, 9616873544",
    email: "jainsales9116@gmail.com",
    gstin: "09AETPJ8618L1ZM",
    stateCode: "09",
    pan: "AETPJ8618L",
    bank: "BANK OF BARODA",
    acno: "77110500000346",
    ifsc: "Johnston Ganj, Prayagraj, Uttar Pradesh & BARB0VJVNMA",
    prefix: "RJES/",
    fy: "",
    nextNo: 1,
    decl: "We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct."
  },
  items: [
    { id: "contactor-3tf33", data: { name: "CONTACTOR 3TF33", hsn: "85369090", unit: "PCS", rate: 2910, gst: 18, stock: 0, low: 5 } }
  ]
};
