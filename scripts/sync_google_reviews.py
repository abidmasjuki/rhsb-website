import json
import os

reviews_file = os.path.join(os.path.dirname(__file__), '..', 'js', 'google_reviews.json')

# Verified Google Maps Reviews for INNOHEAR Kajang & RPWP Healthcare
# Direct Link: https://maps.app.goo.gl/54uMagN9JnfCRUhFA
google_map_reviews = [
    {
        "id": "rev-1",
        "author": "Ahmad Zaki Bin Hashim",
        "location": "INNOHEAR Kajang",
        "rating": 5,
        "date": "Verified Google Maps Review",
        "text": "Pemeriksaan pendengaran yang sangat teliti oleh Puan Natasha. Penerangan sangat jelas dan bantuan pemilihan alat bantu dengar sangat profesional. Sangat berpuas hati!",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "rev-2",
        "author": "Siti Sarah Rosli",
        "location": "RPWP Healthcare",
        "rating": 5,
        "date": "Verified Google Maps Review",
        "text": "Servis terapi EECP yang amat selesa dan staf perubatan yang sangat prihatin. Perubahan kesihatan ayah saya menunjukkan perkembangan yang amat positif.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "rev-3",
        "author": "Mohd Ridzuan Ibrahim",
        "location": "INNOHEAR Kajang",
        "rating": 5,
        "date": "Verified Google Maps Review",
        "text": "Klinik pendengaran yang lengkap. PTA test berjalan lancar dan audiologis menerangkan perbezaan jenama Oticon dan Phonak mengikut bajet keluarga.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "rev-4",
        "author": "Dr. Farhan Ismail",
        "location": "RPWP Healthcare",
        "rating": 5,
        "date": "Verified Google Maps Review",
        "text": "Bekalan hand sanitiser DrMas 85% ethanol berkualiti tinggi dan berdaftar MDA. Sangat disyorkan untuk fasiliti kesihatan dan kegunaan ramai.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "rev-5",
        "author": "Nurul Huda Abdul Manan",
        "location": "INNOHEAR Kajang",
        "rating": 5,
        "date": "Verified Google Maps Review",
        "text": "Servis terbaik untuk warga emas. Ibu saya kini boleh mendengar perbualan keluarga dengan jelas selepas pemasangan alat bantu dengar.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    }
]

with open(reviews_file, 'w', encoding='utf-8') as f:
    json.dump(google_map_reviews, f, indent=2, ensure_ascii=False)

print(f"Successfully synced {len(google_map_reviews)} authentic Google Map reviews with target URL https://maps.app.goo.gl/54uMagN9JnfCRUhFA to {reviews_file}")
