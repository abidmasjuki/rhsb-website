import json
import os

reviews_json_path = r"c:\Users\RH-Abid\My Drive\AI_Business_Empire\Antigravity\RHSB Website\js\google_reviews.json"

authentic_external_reviews = [
    {
        "id": "gmap-nik-asmira",
        "author": "Nik Asmira",
        "location": "Verified Customer • Google Maps Review (RPWP Healthcare | Innohear Kajang)",
        "rating": 5,
        "date": "setahun yang lalu",
        "text": "Alhamdulilah..saya suka berurusan Rpwp..sangat berpuas hati ..saya ada masalah telinga Rpwp memberi penerangan alat mane sesuai dengan saya melayani saya sampai saya betul serasi dengan alat. Dieorang tetap bersabar. Dan layanan yang baik mesra, jika saya tersangkut jem..rpwp bertimbang rasa .ape2 bagi saya Rpwp memang terbaik. Semoga Rpwp dimurahkan rezeki dan berkembang maju amiin.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "gmap-sharafini",
        "author": "sharafini Yahya",
        "location": "Verified Customer • Google Maps Review (RPWP Healthcare | Innohear Kajang)",
        "rating": 5,
        "date": "2 minggu yang lalu",
        "text": "Alhamdulillah..akhirnya dah dapat alat pendengaran disini.Pegawai (Puan Natasha) sangat membantu..memberikan penerangan yang sangat jelas dan mudah untuk difahami.. Terima kasih banyak2 ye RPWP😊😊😊😊",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "gmap-ahza",
        "author": "ahza gemilang",
        "location": "Verified Customer • Google Maps Review (RPWP Healthcare | Innohear Kajang)",
        "rating": 5,
        "date": "11 bulan yang lalu",
        "text": "Perkhidmatan terbaik yang pernah dijumpai. Kalau ada bintang lebih dari 5 pun saya akan berikan. Pernah buat Hearing Aid untuk Bapa di sini dan sehingga kini mereka masih follow up. Jika ada sebarang masalah, mereka dengan senang hati membantu.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    },
    {
        "id": "gmap-meeza",
        "author": "meeza hatta",
        "location": "Verified Customer • Google Maps Review (RPWP Healthcare | Innohear Kajang)",
        "rating": 5,
        "date": "setahun yang lalu",
        "text": "Anak saya buat pemeriksaan telinga disini. Mmg selesa, audiologist berpengalaman, anak pun happy sahaja. Staff yang ada pun peramah, kita pun selesa.",
        "url": "https://maps.app.goo.gl/54uMagN9JnfCRUhFA"
    }
]

with open(reviews_json_path, "w", encoding="utf-8") as f:
    json.dump(authentic_external_reviews, f, indent=2, ensure_ascii=False)

print(f"Saved {len(authentic_external_reviews)} authentic external reviews to {reviews_json_path}")
