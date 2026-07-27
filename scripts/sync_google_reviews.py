import json
import os

reviews_file = os.path.join(os.path.dirname(__file__), '..', 'js', 'google_reviews.json')

# ONLY Nik Asmira's Verified Authentic External Customer Review from Google Maps
nik_asmira_review = [
    {
        "id": "gmap-nik-asmira",
        "author": "Nik Asmira",
        "location": "Verified Customer • Google Maps Review (RPWP Healthcare | Innohear Kajang)",
        "rating": 5,
        "date": "setahun yang lalu",
        "text": "Alhamdulilah..saya suka berurusan  Rpwp..sangat berpuas hati ..saya ada masalah telinga Rpwr memberi penerangan alat mane sesuai dengan saya melayani saya sampai saya betul serasi dengan alat sesuai dengan saya. Dieorang tetap bersabar. Dan layanan yang baik mesra, jika saya tersangkut jem..rpwp bertimbang rasa .ape2 bagi saya Rpwp memang terbaik. Semoga Rpwp dimurahkan rezeki dan berkembang maju amiin.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    }
]

with open(reviews_file, 'w', encoding='utf-8') as f:
    json.dump(nik_asmira_review, f, indent=2, ensure_ascii=False)

print(f"Successfully updated {reviews_file} with ONLY Nik Asmira's authentic review.")
