data = {
    "start":"id1",
    "persons": {
        "id1": { "name": "Yves Mille / Perit", "birthyear":"9 oct. 1922" },
        "id2": { "name": "Helene Garnier / Mamie"},
        "id3": { "name": "Bon papa\nEtienne"},
        "id4": { "name": "Bonne maman\nBernadette"},
        "id5": { "name": "Philippe"},
        "id6": { "name": "Manell"},
        "id7": { "name": "Francois\nMichel"},
        "id8": { "name": "Rose France"},
        "id9": { "name": "Robert / Tadou"},

        "id10": { "name": "Dominique", "birthyear": "20 octobre 1943", "birthplace":"La fleche"},
        "id11": { "name": "Nicolas"},
        "id12": { "name": "Pascal"},
        "id13": { "name": "Jean-Francois"},
        "id14": { "name": "Frederique"},
        "id15": { "name": "Claire Michel"},
        "id16": { "name": "Luc"},

        "id20": { "name": "George"},
        "id21": { "name": "Francoise", "birthyear": "16 aout 1948",},
        "id22": { "name": "Anne"},
        "id23": { "name": "Edith"},
        "id24": { "name": "Claire"},
        "id25": { "name": "Isabelle"},
        "id26": { "name": "Benedicte"},

        "id30": { "name": "Florence", "birthyear": "9 dec. 1974", "birthplace":"Castres" },
        "id31": { "name": "Sebastien", "birthyear": "14 fev. 1979", "birthplace":"Castres"},
        "id32": { "name": "David",     "birthyear": "14 fev. 1979", "birthplace":"Castres"},
        "id33": { "name": "Raphael",   "birthyear": "2 jan. 1984", "birthplace":"Castelnaudary"},

        "id40": { "name": "Eloise",    "birthyear": "25 juin 2008"},
        "id41": { "name": "Chloé",     "birthyear": "3 mars 2011"},

        "id50": { "name": "Gilles"},
        "id51": { "name": "Soizik", "birthyear": 1950 },

        "id60": { "name": "Veronique / Maya"},
        "id61": { "name": "Blandine"},
        "id62": { "name": "Thomas"},

        "id70": { "name": "Marie-Joseph / Madou"},
        "id71": { "name": "Benoit", "birthyear": "11 Jan. 1945", "deathyear": 2013, "deathplace":"Puy de dome" },

        "id80": { "name": "David", "birthyear": "", "birthplace":""},
        "id81": { "name": "Bastien", "birthyear": "1973", "birthplace":""},
        "id82": { "name": "Celine", "birthyear": "20 oct. 1977", "birthplace":"La fleche"},

        "id90": { "name": "Yann", "birthyear": "", "birthplace":""},
        "id91": { "name": "Thibault", "birthyear": "", "birthplace":""},
        "id92": { "name": "Fanny", "birthyear": "", "birthplace":""},
        "id93": { "name": "Manon", "birthyear": "", "birthplace":""},

        "id100": { "name": "Leo", "birthyear": "", "birthplace":""},
        "id101": { "name": "Martin", "birthyear": "", "birthplace":""},
        "id102": { "name": "Felix", "birthyear": "", "birthplace":""},

        "id1000": { "name": "Benoit de Premorel"},
        "id1001": { "name": "Dominique"},
    },
    "unions": {
        // mille
        "u1": { "partner": ["id1", "id2"], "children": ["id20", "id21", "id22", "id23", "id24", "id25", "id26"] },
        //michel
        "u2": { "partner": ["id7", "id8"], "children": ["id10", "id11", "id12", "id13", "id14", "id15", "id16"] },
        "u3": { "partner": ["id10", "id21"], "children": ["id30", "id31", "id32", "id33"] },
        "u4": { "partner": ["id31", "id82"], "children": ["id40", "id41"] },

        // chabbert
        "u5": { "partner": ["id5", "id6"], "children": ["id50", "id51"] },
        "u6": { "partner": ["id51", "id71"], "children": ["id80", "id81", "id82"] },

        // froidevaux
        "u7": { "partner": ["id3", "id4"], "children": ["id70", "id71"]},

        // guerard
        "u8": { "partner": ["id70", "id9"], "children": ["id60", "id61", "id62"]},
        "u9": { "partner": ["id60", "id1000"], "children": ["id90", "id91", "id92"]},
        "u10": { "partner": ["id61", "id1001"], "children": ["id100", "id101", "id102"]},

        "u11": { "partner": ["id60"], "children":["id21"], "relationship":"linkother", "name": "babysitter" },
        "u12": { "partner": ["id7", "id3"], "relationship":"linkother", "name": "pharmacie" },
        "u13": { "partner": ["id20", "id10" ], "relationship":"linkother", "name": "copain" },
        "u14": { "partner": ["id20", "id71" ], "relationship":"linkother", "name": "copain" },
        "u15": { "partner": ["id20", "id51" ], "relationship":"linkother", "name": "compagnon" },
        "u16": { "partner": ["id24", "id61" ], "relationship":"linkother", "name": "copine" },
        "u17": { "partner": ["id62", "id25" ], "relationship":"linkother", "name": "copain" },
        "u18": { "partner": ["id2", "id6" ], "relationship":"linkother", "name": "amies" },
    }
}
