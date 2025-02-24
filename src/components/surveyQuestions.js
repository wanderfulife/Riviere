export const questions = [
  {
    id: "Q1",
    text: "Quelle est votre situation professionnelle ?",
    options: [
      { id: 1, text: "Etudiant(e)", next: "Q2" },
      { id: 2, text: "Retraité(e)", next: "Q2" },
      { id: 3, text: "Actif", next: "Q2" },
      { id: 4, text: "Sans emploi", next: "Q2" }
    ]
  },
  {
    id: "Q2",
    text: "Vous êtes venu(e) :",
    options: [
      { id: 1, text: "Seul(e)", next: "Q3" },
      { id: 2, text: "A deux", next: "Q3" },
      { id: 3, text: "En famille", next: "Q3" },
      { id: 4, text: "En groupe d'amis", next: "Q3" },
      { id: 5, text: "Autre", next: "Q2_precision" }
    ]
  },
  {
    id: "Q2_precision",
    text: "Précisez :",
    freeText: true,
    next: "Q3"
  },
  {
    id: "Q3",
    text: "Où habitez-vous ?",
    options: [
      { id: 1, text: "Morlaix", next: "Q4" },
      { id: 2, text: "Morlaix Communauté", next: "Q3_precision" },
      { id: 3, text: "Département du Finistère", next: "Q4" },
      { id: 4, text: "Région Bretagne", next: "Q4" },
      { id: 5, text: "France", next: "Q4" },
      { id: 6, text: "International", next: "Q4" }
    ]
  },
  {
    id: "Q3_precision",
    text: "Précisez la commune :",
    options: [
      { id: 1, text: "Botsorhel", next: "Q4" },
      { id: 2, text: "Carantec", next: "Q4" },
      { id: 3, text: "Le Cloître-Saint-Thégonnec", next: "Q4" },
      { id: 4, text: "Garlan", next: "Q4" },
      { id: 5, text: "Guerlesquin", next: "Q4" },
      { id: 6, text: "Guimaëc", next: "Q4" },
      { id: 7, text: "Henvic", next: "Q4" },
      { id: 8, text: "Lanmeur", next: "Q4" },
      { id: 9, text: "Lannéanou", next: "Q4" },
      { id: 10, text: "Locquénolé", next: "Q4" },
      { id: 11, text: "Locquirec", next: "Q4" },
      { id: 12, text: "Morlaix", next: "Q4" },
      { id: 13, text: "Pleyber-Christ", next: "Q4" },
      { id: 14, text: "Plouégat-Guérand", next: "Q4" },
      { id: 15, text: "Plouégat-Moysan", next: "Q4" },
      { id: 16, text: "Plouezoc'h", next: "Q4" },
      { id: 17, text: "Plougasnou", next: "Q4" },
      { id: 18, text: "Plougonven", next: "Q4" },
      { id: 19, text: "Plouigneau", next: "Q4" },
      { id: 20, text: "Plounéour-Ménez", next: "Q4" },
      { id: 21, text: "Plourin-lès-Morlaix", next: "Q4" },
      { id: 22, text: "Saint-Jean-du-Doigt", next: "Q4" },
      { id: 23, text: "Saint-Martin-des-Champs", next: "Q4" },
      { id: 24, text: "Sainte-Sève", next: "Q4" },
      { id: 25, text: "Saint-Thégonnec Loc-Eguiner", next: "Q4" },
      { id: 26, text: "Taulé", next: "Q4" }
    ]
  },
  {
    id: "Q4",
    text: "Pourquoi êtes-vous venu(e) en centre-ville aujourd'hui ?",
    options: [
      { id: 1, text: "Résident du centre-ville", next: "Q8" },
      { id: 2, text: "Travail", next: "Q5" },
      { id: 3, text: "Achats, services, démarches administratives", next: "Q5" },
      { id: 4, text: "Loisirs, sortie culturelle, tourisme, activité sportive, visite à un ami, crèche, école", next: "Q5" },
      { id: 5, text: "Autre", next: "Q4_precision" }
    ]
  },
  {
    id: "Q4_precision",
    text: "Précisez :",
    freeText: true,
    next: "Q5"
  },
  {
    id: "Q5",
    text: "Avant de venir ici, où étiez-vous ?",
    options: [
      { id: 1, text: "Domicile", next: "Q6" },
      { id: 2, text: "Travail", next: "Q6" },
      { id: 3, text: "Hôtel", next: "Q6" },
      { id: 4, text: "Chez des proches", next: "Q6" },
      { id: 5, text: "Autre", next: "Q5_precision" }
    ]
  },
  {
    id: "Q5_precision",
    text: "Précisez :",
    freeText: true,
    next: "Q6"
  },
  {
    id: "Q6",
    text: "A quelle fréquence vous rendez-vous dans le centre-ville de Morlaix ?",
    options: [
      { id: 1, text: "Tous les jours", next: "Q7" },
      { id: 2, text: "2 à 3 fois par semaine", next: "Q7" },
      { id: 3, text: "1 fois par semaine", next: "Q7" },
      { id: 4, text: "1 fois par mois", next: "Q7" },
      { id: 5, text: "Très rarement", next: "Q7" }
    ]
  },
  {
    id: "Q7",
    text: "A quel moment vous rendez-vous le plus en centre-ville ?",
    options: [
      { id: 1, text: "La semaine, en journée", next: "Q8" },
      { id: 2, text: "La semaine, en soirée", next: "Q8" },
      { id: 3, text: "Le week-end, en journée", next: "Q8" },
      { id: 4, text: "Le week-end, en soirée", next: "Q8" }
    ]
  },
  {
    id: "Q8",
    text: "Quelle est la durée prévue de votre stationnement ?",
    options: [
      { id: 1, text: "Moins de 15 minutes", next: "Q9" },
      { id: 2, text: "Moins de 30 minutes", next: "Q9" },
      { id: 3, text: "Moins d'une heure", next: "Q9" },
      { id: 4, text: "1 à 2 heures", next: "Q9" },
      { id: 5, text: "Une demi-journée", next: "Q9" },
      { id: 6, text: "Toute la journée", next: "Q9" }
    ]
  },
  {
    id: "Q9",
    text: "Où avez-vous stationné votre véhicule ?",
    options: [
      { id: 1, text: "Parking ou voirie gratuite", next: "Q10" },
      { id: 2, text: "Zone bleue", next: "Q10" },
      { id: 3, text: "Zone rouge", next: "Q10" },
      { id: 4, text: "Parking zone rouge", next: "Q10" },
      { id: 5, text: "Parking privé", next: "Q10" }
    ]
  },
  {
    id: "Q10",
    text: "Parmi les critères suivants, lequel guide en priorité votre choix de stationnement ?",
    options: [
      { id: 1, text: "Proximité", next: "Q11" },
      { id: 2, text: "Sécurité", next: "Q11" },
      { id: 3, text: "Prix / Gratuité", next: "Q11" },
      { id: 4, text: "Facilité pour trouver une place de stationnement", next: "Q11" },
      { id: 5, text: "Facilité pour manœuvrer", next: "Q11" }
    ]
  },
  {
    id: "Q11",
    text: "Combien de temps avez-vous mis pour trouver une place de stationnement en centre-ville ?",
    options: [
      { id: 1, text: "5 min ou moins", next: "Q12" },
      { id: 2, text: "6-15 min", next: "Q12" },
      { id: 3, text: "16 min ou plus", next: "Q12" }
    ]
  },
  {
    id: "Q12",
    text: "Combien de temps avez-vous marché entre le stationnement et votre destination ?",
    options: [
      { id: 1, text: "5 min ou moins", next: "Q13" },
      { id: 2, text: "6-15 min", next: "Q13" },
      { id: 3, text: "16 min ou plus", next: "Q13" }
    ]
  },
  {
    id: "Q13",
    text: "Quel est la durée maximale de marche que vous acceptez entre le stationnement et votre destination ?",
    options: [
      { id: 1, text: "5 min", next: "Q14" },
      { id: 2, text: "10 min", next: "Q14" },
      { id: 3, text: "15 min", next: "Q14" },
      { id: 4, text: "16 min ou plus", next: "Q14" }
    ]
  },
  {
    id: "Q14",
    text: "Utilisez-vous parfois d'autres moyens de transport pour venir dans le centre-ville ? Si oui, le(s)quel(s) ?",
    options: [
      { id: 1, text: "Non, jamais", next: "Q15a" },
      { id: 2, text: "Pied", next: "Q15a" },
      { id: 3, text: "Vélo", next: "Q15a" },
      { id: 4, text: "Transports en commun", next: "Q15a" },
      { id: 5, text: "Taxi", next: "Q15a" },
      { id: 6, text: "Voiture", next: "Q15a" },
      { id: 7, text: "Moto / Scooter", next: "Q15a" },
      { id: 8, text: "Train", next: "Q15a" },
      { id: 9, text: "Autre", next: "Q15a" }
    ],
    multipleChoice: true
  },
  {
    id: "Q14_precision",
    text: "Précisez :",
    freeText: true,
    next: "Q15a"
  },
  {
    id: "Q15a",
    text: "Sur une échelle de 0 (insatisfait) à 5 (très satisfait), comment jugez-vous l'offre de stationnement pour la voiture en centre-ville ?",
    options: [
      { id: 0, text: "0 - Insatisfait", next: "Q15b" },
      { id: 1, text: "1", next: "Q15b" },
      { id: 2, text: "2", next: "Q15b" },
      { id: 3, text: "3", next: "Q15b" },
      { id: 4, text: "4", next: "Q15b" },
      { id: 5, text: "5 - Très satisfait", next: "Q15b" }
    ]
  },
  {
    id: "Q15b",
    text: "Sur une échelle de 0 (insatisfait) à 5 (très satisfait), comment jugez-vous le prix du stationnement payant pour la voiture en centre-ville ?",
    options: [
      { id: 0, text: "0 - Insatisfait", next: "Q15c" },
      { id: 1, text: "1", next: "Q15c" },
      { id: 2, text: "2", next: "Q15c" },
      { id: 3, text: "3", next: "Q15c" },
      { id: 4, text: "4", next: "Q15c" },
      { id: 5, text: "5 - Très satisfait", next: "Q15c" }
    ]
  },
  {
    id: "Q15c",
    text: "Sur une échelle de 0 (insatisfait) à 5 (très satisfait), comment jugez-vous les conditions de circulation automobile en centre-ville ?",
    options: [
      { id: 0, text: "0 - Insatisfait", next: "Q16" },
      { id: 1, text: "1", next: "Q16" },
      { id: 2, text: "2", next: "Q16" },
      { id: 3, text: "3", next: "Q16" },
      { id: 4, text: "4", next: "Q16" },
      { id: 5, text: "5 - Très satisfait", next: "Q16" }
    ]
  },
  {
    id: "Q16",
    text: "Quelle est la mesure prioritaire qui vous ferait venir plus souvent dans le centre ?",
    options: [
      { id: 1, text: "Faciliter la circulation et le stationnement automobile", next: "end" },
      { id: 2, text: "Une meilleure desserte en transports collectifs", next: "end" },
      { id: 3, text: "Faciliter l'accès et le stationnement vélo", next: "end" },
      { id: 4, text: "Réduire les nuisances du trafic motorisé", next: "end" },
      { id: 5, text: "Des trottoirs plus larges et moins encombrés", next: "end" },
      { id: 6, text: "Davantage de végétation et d'espaces verts", next: "end" }
    ]
  }
];