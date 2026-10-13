# Changelog

## v2.1 — Fixes after first review (released to main, 2026-10-13)

### Fixed
- **Print** now opens the printer dialog with only the invoice on an A4 page (separate print frame). Keyboard focus returns to the app after printing.
- **PDF download** rebuilt (html2canvas + jsPDF): sharp, exactly one A4 page for normal invoices; long ones continue on the next page.
- **Logout** clears the email and password fields; the login form no longer auto-fills saved credentials.
- Letter shortcuts work again right after pressing Esc from a form.

### Added
- **Invoice number: Auto or Manual.** Untick "Auto invoice number" to type your own; duplicates are blocked and the auto counter is not changed.
- **GSTIN helper:** validates the GSTIN, fills state and shows PAN; if the GSTIN belongs to a saved party, name and address fill in automatically.
- **Confirmation pop-up** before changing business details ("Are you sure you want to change the details?").
- **Multiple companies:** company switcher in the top bar, "+ Add company". Each company has its own invoices, parties, items, stock and numbering. Existing data stays as the main company.
- **Install app / Add to Home Screen** button (web app manifest, icons, service worker). Works on the live https site.

### Notes
- Full name and address cannot be fetched from the GST portal without a paid GST verification API.
- New data paths: `companies/{id}`, `co/{id}/...` (covered by the existing Firestore rules).


## v2 — Tally-style workflow

**Why:** run day-to-day accounting from BillBook, the way Tally users work, while keeping phone billing simple.

### Added
- Keyboard-first layout on desktop: Gateway menu (left), function-key bar (right).
  - F8 Sales · F9 Purchase · F6 Receipt · F5 Payment · Ctrl+S Save · Esc back to Gateway
  - Single-letter shortcuts on the Gateway: D Day Book, L Ledger, O Outstanding, T Stock, G GST, I Items, A Parties, E Settings
  - Enter moves to the next field; item name + Enter + qty + Enter adds a line
- Purchase voucher: supplier invoice entry, input GST, stock goes up, new items auto-created
- Receipt and Payment vouchers (RCPT/ and PAY/ numbering) with printable/shareable voucher PDF
- Day Book: all vouchers by date range and type, Excel export
- Ledger: party statement with opening balance, running Dr/Cr balance, Excel export
- Outstanding: receivables and payables
- Stock Summary: monthly inward/outward, closing qty and value
- GST Reports: B2B, B2C, HSN summary, input tax credit, Excel export for CA
- Parties: type (customer/supplier) and opening balance (Dr/Cr)
- Items: purchase rate
- Demo mode: opens automatically when the file is opened from the computer (file://) or with ?demo; uses sample data stored only in the browser

### Changed
- Settings save now merges, so receipt/payment counters are kept
- New Firestore collections: `purchases`, `payments` (covered by existing rules)

