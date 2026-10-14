# BillBook changelog

## v1.4 (14 Oct 2026)
- **Party account (khata)**: Account button in Parties shows bills, payments received and running balance; record payments (Cash/UPI/Bank/Cheque); opening balance; print statement and Excel.
- **Sr. No.** column in Items & Stock, Parties and the Excel Stock sheet.

## v1.3 (13 Oct 2026)
- Excel export: Invoice Value, Total Tax, B2B/B2C and a totals row.

## v1.2 (13 Oct 2026) — live
Same simple screen as before, with these fixes:
- **Print**: prints only the invoice on A4, straight to the printer dialog.
- **PDF**: clean one-page A4 PDF (html2canvas + jsPDF).
- **Invoice number**: "Auto invoice number" tick; untick to type your own. Duplicate numbers are blocked and the auto counter is not touched.
- **GSTIN**: checksum validation; state and PAN filled automatically; a saved party with that GSTIN fills name and address.
- **Business details**: "ARE YOU SURE YOU WANT TO CHANGE THE DETAILS?" confirmation before saving.
- **Multiple companies**: company dropdown at the top with "+ Add company". Each company has its own bills, parties, items, stock and numbering.
- **Install app**: Add to Home Screen button (manifest + service worker).
- **Sign out**: email and password fields are cleared.

The Tally-style version (v2.1) is kept aside and is not live.
