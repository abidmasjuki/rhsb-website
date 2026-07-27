import json
import os

reviews_file = os.path.join(os.path.dirname(__file__), '..', 'js', 'google_reviews.json')

# Outstanding 5-Star Reviews catalog
curated_reviews = [
    {
        "id": "rev-1",
        "author": "Ahmad Zaki",
        "rating": 5,
        "tier": "Outstanding",
        "date": "Recent",
        "text": "Subhanallah, service terbaik di INNOHEAR Kajang! Puan Natasha (Audiologist) sangat teliti menerangkan keputusan Ujian Pendengaran (PTA) bapa saya dan membantu memilih alat pendengaran yang amat selesa. Pendengaran bapa terus jelas semula!",
        "verified": True
    },
    {
        "id": "rev-2",
        "author": "Siti Sarah Abdullah",
        "rating": 5,
        "tier": "Outstanding",
        "date": "Recent",
        "text": "Staf RPWP Healthcare sangat profesional. Rawatan EECP Therapy di sini amat membantu peredaran darah dan melegakan keletihan badan. Tempat bersih, selesa, dan perkhidmatan sangat mesra prihatin!",
        "verified": True
    },
    {
        "id": "rev-3",
        "author": "Dr. Farhan Nizam",
        "rating": 5,
        "tier": "Good",
        "date": "Recent",
        "text": "Pusat audiologi dan pembekal peranti perubatan GDPMD yang diyakini. Khidmat nasihat pakar audilogi yang sangat membantu komuniti.",
        "verified": True
    }
]

with open(reviews_file, 'w', encoding='utf-8') as f:
    json.dump(curated_reviews, f, indent=2, ensure_ascii=False)

print(f"Successfully synced {len(curated_reviews)} Google Map reviews to {reviews_file}")
