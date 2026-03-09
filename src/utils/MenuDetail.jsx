const restaurantsMenu = [
  {
    restaurantID: 1,
    restaurantName: "1135 AD",
    menu: [
      {
        category: "Rajasthani Specials",
        items: [
          { id: 101, name: "Dal Baati Churma", price: 250 ,image:"https://i.pinimg.com/1200x/a8/95/9c/a8959c05a923fb65f01074fc105b3b6a.jpg" },
          { id: 102, name: "Gatte Ki Sabzi", price: 180 ,image:"https://i.pinimg.com/1200x/6f/f1/03/6ff10371b2e9d3c815c48fb5be9c35b1.jpg"},
          { id: 103, name: "Ker Sangri", price: 200 ,image:"https://i.pinimg.com/736x/86/b1/86/86b18638c4313c2101e4f3bf8baae020.jpg"},
          { id: 104, name: "Bajra Roti", price: 60 ,image:"https://i.pinimg.com/1200x/55/d5/cf/55d5cfa8e8788ed31b9c6189130183ae.jpg"},
        ],
      },
      {
        category: "Thali",
        items: [
          { id: 105, name: "Rajasthani Thali", price: 350 ,image:"https://i.pinimg.com/736x/57/14/22/5714221c9e4d919e1dfd7260c21b9205.jpg"},
          { id: 106, name: "Special Royal Thali", price: 450 ,image:"https://i.pinimg.com/736x/74/83/d8/7483d8e35d841bcf251da99933b90579.jpg"},
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 107, name: "Paneer Tikka", price: 220 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 108, name: "Veg Seekh Kebab", price: 200 ,image:"https://i.pinimg.com/736x/52/0f/7a/520f7abfe0c8dcd30c1d11abb299dfdf.jpg"},
          { id: 109, name: "Hara Bhara Kebab", price: 180 ,image:"https://i.pinimg.com/1200x/a3/83/2c/a3832c42d9921c345066120151bd711f.jpg"},
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 110, name: "Paneer Butter Masala", price: 280 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 111, name: "Dal Tadka", price: 160 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 112, name: "Mixed Veg Curry", price: 200 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 113, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 114, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 115, name: "Missi Roti", price: 40 ,image:"https://i.pinimg.com/736x/77/5e/a9/775ea9f899a65087870504115b0e3c5e.jpg"},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 116, name: "Ghewar", price: 120 ,image:"https://i.pinimg.com/736x/5f/6e/31/5f6e31f0b7dfab82c84be95f52cfcbae.jpg"},
          { id: 117, name: "Malpua", price: 150 ,image:"https://i.pinimg.com/736x/ba/a3/7a/baa37a86d81c5017d7bb9d36f5f448f4.jpg"},
          { id: 118, name: "Rabri", price: 140 ,image:"https://i.pinimg.com/736x/e3/80/16/e3801693808a0d13580dea4c934980f2.jpg"},
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 119, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 120, name: "Buttermilk", price: 50 ,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg"},
          { id: 121, name: "Cold Drink", price: 40 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },

  {
    restaurantID: 2,
    restaurantName: "6 Ballygunge Place",
    menu: [
      {
        category: "Starters",
        items: [
          { id: 201, name: "Fish Fry", price: 220 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
          { id: 202, name: "Chicken Cutlet", price: 180 ,image:"https://i.pinimg.com/1200x/d9/e1/46/d9e146a1bae4385972410d685e5ecadb.jpg"},
          { id: 203, name: "Mutton Chop", price: 250 ,image:"https://i.pinimg.com/736x/2b/5d/f7/2b5df7c66c322d74ffe4e081a1a7d73a.jpg"},
          { id: 204, name: "Veg Chop", price: 120 ,image:"https://i.pinimg.com/736x/fc/ee/cd/fceecd5f3bd7d31e05979ed9ab75f3e1.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 205, name: "Kosha Mangsho", price: 320 ,image:"https://i.pinimg.com/736x/e9/a5/92/e9a592bc11a55224937245014387e1d0.jpg"},
          { id: 206, name: "Chicken Kosha", price: 280 ,image:"https://i.pinimg.com/736x/2f/8f/58/2f8f5861c274443291475c89cbf73fde.jpg"},
          { id: 207, name: "Fish Curry (Rohu)", price: 260 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
          { id: 208, name: "Chingri Malai Curry", price: 350 ,image:"https://i.pinimg.com/736x/e9/c3/0f/e9c30fe98367a4595ab77d94fbbe5466.jpg"},
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 209, name: "Aloo Posto", price: 180 ,image:"https://i.pinimg.com/1200x/18/70/13/18701355b2dce27c4cbb200fdf29be2c.jpg"},
          { id: 210, name: "Shukto", price: 160 ,image:"https://i.pinimg.com/736x/3a/f5/b2/3af5b26b1c76b23c112fb18e7e4681f5.jpg"},
          { id: 211, name: "Cholar Dal", price: 140 ,image:"https://i.pinimg.com/736x/22/e4/59/22e459bd50860a3373f137c00c391836.jpg"},
          { id: 212, name: "Paneer Curry", price: 220 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
        ],
      },
      {
        category: "Rice & Breads",
        items: [
          { id: 213, name: "Steamed Rice", price: 80 ,image:"https://i.pinimg.com/736x/55/65/8a/55658afe397ab3c50582ad6e745841ed.jpg"},
          { id: 214, name: "Luchi", price: 100 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 215, name: "Basanti Pulao", price: 200 ,image:"https://i.pinimg.com/736x/ef/7b/a6/ef7ba6ce2b4ab3fd21f4755050f461d1.jpg"},
          { id: 216, name: "Fried Rice", price: 180 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
        ],
      },
      {
        category: "Bengali Thali",
        items: [
          { id: 217, name: "Veg Thali", price: 250 ,image:"https://i.pinimg.com/736x/aa/df/81/aadf81c33d7a3426c9e653f6e198e7fb.jpg"},
          { id: 218, name: "Fish Thali", price: 320 ,image:"https://i.pinimg.com/736x/a3/55/1d/a3551d2dc28ab221616b1d3660fed478.jpg"},
          { id: 219, name: "Mutton Thali", price: 380 ,image:"https://i.pinimg.com/736x/64/b1/52/64b152db9ae61c6cd1968e33c1cbaf60.jpg"},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 220, name: "Rosogolla", price: 80 ,image:"https://i.pinimg.com/1200x/25/2a/a0/252aa0dd3e276d4ed8852894d1da4b5e.jpg"},
          { id: 221, name: "Mishti Doi", price: 90 ,image:"https://i.pinimg.com/736x/04/e0/90/04e090e5d25f62e1cd70a9ff1ca7168b.jpg"},
          { id: 222, name: "Sandesh", price: 100 ,image:"https://i.pinimg.com/736x/3e/14/dd/3e14dd758196c711aada5bdf14e37bae.jpg"},
          { id: 223, name: "Payesh", price: 120 ,image:"https://i.pinimg.com/736x/80/df/ba/80dfba7f59f4be6a0d269120f59a06d9.jpg"},
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 224, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 225, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 226, name: "Masala Chai", price: 40 ,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 3,
    restaurantName: "Agashiye",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 301, name: "Dhokla", price: 120 ,image:""},
          { id: 302, name: "Khandvi", price: 130 ,image:""},
          { id: 303, name: "Thepla", price: 110 ,image:""},
          { id: 304, name: "Gujarati Thali", price: 280 ,image:""},
          { id: 305, name: "Undhiyu", price: 200 ,image:""},
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 306, name: "Fafda Jalebi", price: 150 ,image:""},
          { id: 307, name: "Dal Dhokli", price: 180 ,image:""},
          { id: 308, name: "Sev Tameta", price: 160 ,image:""},
          { id: 309, name: "Khichdi", price: 140 ,image:""},
          { id: 310, name: "Handvo", price: 130 ,image:""},
        ],
      },
      {
        category: "Dessert & Drinks",
        items: [
          { id: 311, name: "Patra", price: 100 ,image:""},
          { id: 312, name: "Shrikhand", price: 120 ,image:""},
          { id: 313, name: "Buttermilk", price: 60 ,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg"},
          { id: 314, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 315, name: "Papad", price: 50 ,image:""},
        ],
      },
    ],
  },

  {
    restaurantID: 4,
    restaurantName: "Alhamdulillah Hotel",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 401, name: "Chicken Biryani", price: 220 ,image:""},
          { id: 402, name: "Mutton Biryani", price: 300 ,image:""},
          { id: 403, name: "Chicken Korma", price: 260 ,image:""},
          { id: 404, name: "Mutton Rogan Josh", price: 320 ,image:""},
          { id: 405, name: "Chicken Changezi", price: 280 ,image:""},
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 406, name: "Chicken 65", price: 200 ,image:""},
          { id: 407, name: "Tandoori Chicken", price: 280 ,image:""},
          { id: 408, name: "Seekh Kebab", price: 240 ,image:""},
          { id: 409, name: "Chicken Tikka", price: 260 ,image:""},
          { id: 410, name: "Mutton Kebab", price: 300 ,image:""},
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 411, name: "Butter Chicken", price: 280 ,image:""},
          { id: 412, name: "Chicken Curry", price: 240 ,image:""},
          { id: 413, name: "Mutton Curry", price: 320 ,image:""},
          { id: 414, name: "Egg Curry", price: 180 ,image:""},
          { id: 415, name: "Dal Fry", price: 150 ,image:""},
        ],
      },
      {
        category: "Breads & Rice",
        items: [
          { id: 416, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 417, name: "Garlic Naan", price: 50 ,image:""},
          { id: 418, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 419, name: "Jeera Rice", price: 140 ,image:""},
          { id: 420, name: "Plain Rice", price: 100 ,image:""},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 421, name: "Firni", price: 120 ,image:""},
          { id: 422, name: "Gulab Jamun", price: 100 ,image:""},
          { id: 423, name: "Double Ka Meetha", price: 130 ,image:""},
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 424, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 425, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 426, name: "Masala Chai", price: 40 ,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 5,
    restaurantName: "Bawarchi",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 501, name: "Chicken Biryani", price: 250 ,image:""},
          { id: 502, name: "Mutton Biryani", price: 320 ,image:""},
          { id: 503, name: "Special Chicken Biryani", price: 280 ,image:""},
          { id: 504, name: "Egg Biryani", price: 180 ,image:""},
          { id: 505, name: "Veg Biryani", price: 150 ,image:""},
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 506, name: "Chicken 65", price: 220 ,image:""},
          { id: 507, name: "Chilli Chicken", price: 240 ,image:""},
          { id: 508, name: "Tandoori Chicken", price: 300 ,image:""},
          { id: 509, name: "Chicken Lollipop", price: 230 ,image:""},
          { id: 510, name: "Mutton Seekh Kebab", price: 300 ,image:""},
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 511, name: "Butter Chicken", price: 280 ,image:""},
          { id: 512, name: "Chicken Curry", price: 240 ,image:""},
          { id: 513, name: "Mutton Curry", price: 320 ,image:""},
          { id: 514, name: "Kadai Chicken", price: 260 ,image:""},
          { id: 515, name: "Egg Curry", price: 180 ,image:""},
        ],
      },
      {
        category: "Breads & Rice",
        items: [
          { id: 516, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 517, name: "Garlic Naan", price: 50 ,image:""},
          { id: 518, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 519, name: "Plain Rice", price: 100 ,image:""},
          { id: 520, name: "Jeera Rice", price: 140 ,image:""},
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 521, name: "Raita", price: 50 ,image:""},
          { id: 522, name: "Salad", price: 60 ,image:""},
          { id: 523, name: "Mirchi Ka Salan", price: 80 ,image:""},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 524, name: "Double Ka Meetha", price: 120 ,image:""},
          { id: 525, name: "Gulab Jamun", price: 100 ,image:""},
          { id: 526, name: "Kheer", price: 110 ,image:""},
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 527, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 528, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 529, name: "Mineral Water", price: 20 ,image:""},
        ],
      },
    ],
  },

  {
    restaurantID: 6,
    restaurantName: "Benjarong",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 601, name: "Pad Thai Noodles", price: 280 ,image:""},
          { id: 602, name: "Green Curry (Chicken)", price: 300 ,image:""},
          { id: 603, name: "Red Curry (Veg)", price: 280 ,image:""},
          { id: 604, name: "Thai Fried Rice", price: 220 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 605, name: "Basil Chicken", price: 260 ,image:""},
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 606, name: "Veg Spring Rolls", price: 150 ,image:""},
          { id: 607, name: "Chicken Satay", price: 250 ,image:""},
          { id: 608, name: "Prawn Tempura", price: 320 ,image:""},
          { id: 609, name: "Corn Cakes", price: 180 ,image:""},
          { id: 610, name: "Thai Fish Cakes", price: 280 ,image:""},
        ],
      },
      {
        category: "Soups",
        items: [
          { id: 611, name: "Tom Yum Soup", price: 180 ,image:""},
          { id: 612, name: "Tom Kha Soup", price: 200 ,image:""},
          { id: 613, name: "Veg Clear Soup", price: 150 ,image:""},
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 614, name: "Green Curry (Veg)", price: 260 ,image:""},
          { id: 615, name: "Red Curry (Chicken)", price: 300 ,image:""},
          { id: 616, name: "Yellow Curry", price: 280 ,image:""},
          { id: 617, name: "Thai Basil Veg", price: 220 ,image:""},
          { id: 618, name: "Cashew Chicken", price: 260 ,image:""},
        ],
      },
      {
        category: "Rice & Noodles",
        items: [
          { id: 619, name: "Steamed Jasmine Rice", price: 120 ,image:""},
          { id: 620, name: "Thai Fried Rice", price: 220 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 621, name: "Pad See Ew", price: 250 ,image:""},
          { id: 622, name: "Drunken Noodles", price: 270 ,image:""},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 623, name: "Mango Sticky Rice", price: 200 ,image:""},
          { id: 624, name: "Coconut Ice Cream", price: 150 ,image:""},
          { id: 625, name: "Fried Banana", price: 140 ,image:""},
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 626, name: "Thai Iced Tea", price: 120 ,image:""},
          { id: 627, name: "Lemon Grass Drink", price: 100 ,image:""},
          { id: 628, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 7,
    restaurantName: "Britannia & Co.",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 701, name: "Berry Pulao", price: 280 },
          { id: 702, name: "Chicken Dhansak", price: 300 },
          { id: 703, name: "Mutton Dhansak", price: 350 },
          { id: 704, name: "Patra Ni Machhi", price: 320 },
          { id: 705, name: "Salli Boti", price: 340 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 706, name: "Mutton Cutlet", price: 220 },
          { id: 707, name: "Chicken Farcha", price: 260 },
          { id: 708, name: "Keema Pav", price: 180 },
          { id: 709, name: "Veg Cutlet", price: 150 },
          { id: 710, name: "Chicken Kebab", price: 240 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 711, name: "Salli Chicken", price: 280 },
          { id: 712, name: "Patra Chicken", price: 260 },
          { id: 713, name: "Mutton Curry", price: 320 },
          { id: 714, name: "Chicken Curry", price: 260 },
          { id: 715, name: "Veg Dhansak", price: 220 },
        ],
      },
      {
        category: "Rice & Breads",
        items: [
          { id: 716, name: "Steamed Rice", price: 100 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 717, name: "Parsi Pulao", price: 220 },
          { id: 718, name: "Brown Rice", price: 120 },
          { id: 719, name: "Pav Bread", price: 40 },
          { id: 720, name: "Butter Roti", price: 50 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 721, name: "Kachumber Salad", price: 60 },
          { id: 722, name: "Papad", price: 40 },
          { id: 723, name: "Mint Chutney", price: 30 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 724, name: "Caramel Custard", price: 120 },
          { id: 725, name: "Lagan Nu Custard", price: 140 },
          { id: 726, name: "Ravo", price: 100 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 727, name: "Raspberry Soda", price: 80 },
          { id: 728, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 729, name: "Tea", price: 40 },
        ],
      },
    ],
  },

  {
    restaurantID: 8,
    restaurantName: "Bukhara",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 801, name: "Dal Bukhara", price: 420 },
          { id: 802, name: "Murgh Malai Kebab", price: 380 },
          { id: 803, name: "Paneer Tikka", price: 320 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 804, name: "Tandoori Chicken", price: 420 },
          { id: 805, name: "Butter Chicken", price: 380 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 806, name: "Seekh Kebab", price: 340 },
          { id: 807, name: "Chicken Tikka", price: 360 },
          { id: 808, name: "Mutton Galouti Kebab", price: 400 },
          { id: 809, name: "Hara Bhara Kebab", price: 280 ,image:"https://i.pinimg.com/1200x/a3/83/2c/a3832c42d9921c345066120151bd711f.jpg"},
          { id: 810, name: "Tandoori Mushroom", price: 260 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 811, name: "Paneer Butter Masala", price: 340 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 812, name: "Dal Makhani", price: 320 },
          { id: 813, name: "Kadai Paneer", price: 330 },
          { id: 814, name: "Mix Veg Curry", price: 280 },
          { id: 815, name: "Malai Kofta", price: 340 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 816, name: "Butter Chicken", price: 380 },
          { id: 817, name: "Chicken Curry", price: 340 },
          { id: 818, name: "Mutton Rogan Josh", price: 420 },
          { id: 819, name: "Kadai Chicken", price: 360 },
          { id: 820, name: "Chicken Changezi", price: 350 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 821, name: "Butter Naan", price: 80 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 822, name: "Garlic Naan", price: 90 },
          { id: 823, name: "Tandoori Roti", price: 60 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 824, name: "Laccha Paratha", price: 100 },
          { id: 825, name: "Missi Roti", price: 80 ,image:"https://i.pinimg.com/736x/77/5e/a9/775ea9f899a65087870504115b0e3c5e.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 826, name: "Jeera Rice", price: 220 },
          { id: 827, name: "Veg Pulao", price: 260 },
          { id: 828, name: "Chicken Biryani", price: 360 },
          { id: 829, name: "Mutton Biryani", price: 420 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 830, name: "Boondi Raita", price: 120 },
          { id: 831, name: "Green Salad", price: 100 },
          { id: 832, name: "Papad", price: 50 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 833, name: "Gulab Jamun", price: 140 },
          { id: 834, name: "Rasmalai", price: 160 },
          { id: 835, name: "Kulfi", price: 150 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 836, name: "Lassi", price: 140 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 837, name: "Masala Chai", price: 80,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg" },
          { id: 838, name: "Cold Drink", price: 90 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 9,
    restaurantName: "Dakshin",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 901, name: "Masala Dosa", price: 180 },
          { id: 902, name: "Ghee Roast Dosa", price: 200 },
          { id: 903, name: "Idli Sambar", price: 120 },
          { id: 904, name: "Medu Vada", price: 140 },
          { id: 905, name: "Rava Dosa", price: 190 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 906, name: "Mini Idli with Sambar", price: 150 },
          { id: 907, name: "Goli Baje", price: 160 },
          { id: 908, name: "Mysore Bonda", price: 150 },
          { id: 909, name: "Paneer Pepper Fry", price: 220 },
          { id: 910, name: "Chicken Pepper Fry", price: 280 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 911, name: "Avial", price: 240 },
          { id: 912, name: "Vegetable Stew", price: 220 },
          { id: 913, name: "Sambar", price: 160 },
          { id: 914, name: "Rasam", price: 140 },
          { id: 915, name: "Kootu Curry", price: 200 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 916, name: "Chettinad Chicken Curry", price: 320 },
          { id: 917, name: "Fish Curry (Kerala Style)", price: 340 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
          { id: 918, name: "Mutton Pepper Fry", price: 380 },
          { id: 919, name: "Chicken Chettinad", price: 320 },
          { id: 920, name: "Prawn Curry", price: 360 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 921, name: "Steamed Rice", price: 120 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 922, name: "Curd Rice", price: 150 },
          { id: 923, name: "Lemon Rice", price: 160 },
          { id: 924, name: "Tamarind Rice", price: 160 },
          { id: 925, name: "Coconut Rice", price: 170 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 926, name: "Appam", price: 120 },
          { id: 927, name: "Malabar Parotta", price: 100 },
          { id: 928, name: "Neer Dosa", price: 140 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 929, name: "Kesari Bath", price: 120 },
          { id: 930, name: "Payasam", price: 140 },
          { id: 931, name: "Mysore Pak", price: 130 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 932, name: "Filter Coffee", price: 80 },
          { id: 933, name: "Buttermilk", price: 60 ,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg"},
          { id: 934, name: "Fresh Lime Soda", price: 90 },
        ],
      },
    ],
  },

  {
    restaurantID: 10,
    restaurantName: "Gopi Dining Hall",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1001, name: "Gujarati Thali", price: 250 },
          { id: 1002, name: "Special Unlimited Thali", price: 320 },
          { id: 1003, name: "Mini Thali", price: 180 },
          { id: 1004, name: "Kathiyawadi Thali", price: 300 },
          { id: 1005, name: "Jain Thali", price: 280 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1006, name: "Dhokla", price: 100 },
          { id: 1007, name: "Khandvi", price: 120 },
          { id: 1008, name: "Patra", price: 110 },
          { id: 1009, name: "Fafda", price: 130 },
          { id: 1010, name: "Sev Khamani", price: 120 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 1011, name: "Undhiyu", price: 200 },
          { id: 1012, name: "Sev Tameta", price: 180 },
          { id: 1013, name: "Dal Dhokli", price: 190 },
          { id: 1014, name: "Gujarati Kadhi", price: 150 },
          { id: 1015, name: "Aloo Rasawala", price: 160 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1016, name: "Thepla", price: 80 },
          { id: 1017, name: "Rotli", price: 40 },
          { id: 1018, name: "Bajra Roti", price: 60 ,image:"https://i.pinimg.com/1200x/55/d5/cf/55d5cfa8e8788ed31b9c6189130183ae.jpg"},
          { id: 1019, name: "Missi Roti", price: 70 ,image:"https://i.pinimg.com/736x/77/5e/a9/775ea9f899a65087870504115b0e3c5e.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 1020, name: "Steamed Rice", price: 100 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 1021, name: "Khichdi", price: 150 },
          { id: 1022, name: "Vegetable Pulao", price: 180 },
          { id: 1023, name: "Jeera Rice", price: 160 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1024, name: "Papad", price: 30 },
          { id: 1025, name: "Pickle", price: 30 },
          { id: 1026, name: "Chutney", price: 40 },
          { id: 1027, name: "Buttermilk", price: 50 ,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg"},
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1028, name: "Shrikhand", price: 120 },
          { id: 1029, name: "Basundi", price: 140 },
          { id: 1030, name: "Gulab Jamun", price: 100 },
          { id: 1031, name: "Jalebi", price: 110 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1032, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 1033, name: "Masala Chaas", price: 60 },
          { id: 1034, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 11,
    restaurantName: "Grand Hotel",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1101, name: "Chicken Biryani", price: 240 },
          { id: 1102, name: "Butter Chicken", price: 260 },
          { id: 1103, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 1104, name: "Veg Fried Rice", price: 180 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 1105, name: "Chicken Noodles", price: 200 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1106, name: "Chicken 65", price: 200 },
          { id: 1107, name: "Chilli Chicken", price: 220 },
          { id: 1108, name: "Paneer Tikka", price: 220 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 1109, name: "Veg Manchurian", price: 180 },
          { id: 1110, name: "Spring Rolls", price: 160 },
        ],
      },
      {
        category: "Main Course (Indian)",
        items: [
          { id: 1111, name: "Chicken Curry", price: 240 },
          { id: 1112, name: "Mutton Curry", price: 320 },
          { id: 1113, name: "Dal Tadka", price: 150 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 1114, name: "Kadai Paneer", price: 250 },
          { id: 1115, name: "Mix Veg Curry", price: 200 },
        ],
      },
      {
        category: "Chinese",
        items: [
          { id: 1116, name: "Veg Fried Rice", price: 180 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 1117, name: "Chicken Fried Rice", price: 220 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 1118, name: "Veg Noodles", price: 170 },
          { id: 1119, name: "Chicken Noodles", price: 200 },
          { id: 1120, name: "Chilli Paneer", price: 220 },
        ],
      },
      {
        category: "Breads & Rice",
        items: [
          { id: 1121, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 1122, name: "Garlic Naan", price: 50 },
          { id: 1123, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 1124, name: "Jeera Rice", price: 140 },
          { id: 1125, name: "Plain Rice", price: 100 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1126, name: "Raita", price: 50 },
          { id: 1127, name: "Green Salad", price: 60 },
          { id: 1128, name: "Papad", price: 30 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1129, name: "Gulab Jamun", price: 100 },
          { id: 1130, name: "Ice Cream", price: 120 },
          { id: 1131, name: "Kheer", price: 110 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1132, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 1133, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 1134, name: "Mineral Water", price: 20 },
        ],
      },
    ],
  },

  {
    restaurantID: 12,
    restaurantName: "Indian Accent",
    menu: [
      {
        category: "Chef's Specials",
        items: [
          { id: 1201, name: "Blue Cheese Naan with Truffle Oil", price: 450 },
          { id: 1202, name: "Meetha Achaar Pork Ribs", price: 650 },
          { id: 1203, name: "Butter Chicken Kulcha", price: 520 },
          { id: 1204, name: "Daal Makhani Cappuccino", price: 380 },
          { id: 1205, name: "Soft Shell Crab with Curry Foam", price: 720 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1206, name: "Golgappa Shots with Flavoured Water", price: 300 },
          { id: 1207, name: "Tandoori Broccoli with Almond Cream", price: 350 },
          { id: 1208, name: "Paneer Tikka with Quinoa Salad", price: 420 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 1209, name: "Duck Khurchan Tacos", price: 580 },
          {
            id: 1210,
            name: "Galouti Kebab with Ulte Tawe Ka Paratha",
            price: 480,
          },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 1211, name: "Paneer with Fig and Honey Sauce", price: 520 },
          { id: 1212, name: "Morel Mushroom Korma", price: 580 },
          { id: 1213, name: "Avocado Kofta Curry", price: 500 },
          { id: 1214, name: "Seasonal Vegetable Jalfrezi", price: 450 },
          { id: 1215, name: "Smoked Dal with Butter Foam", price: 420 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 1216, name: "Butter Chicken with Naan", price: 580 },
          { id: 1217, name: "Mutton Rogan Josh", price: 650 },
          { id: 1218, name: "Lamb Shank with Saffron Rice", price: 720 },
          { id: 1219, name: "Fish Curry with Coconut Foam", price: 600 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
          { id: 1220, name: "Chicken Chettinad (Fusion Style)", price: 580 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1221, name: "Truffle Naan", price: 250 },
          { id: 1222, name: "Garlic Naan", price: 180 },
          { id: 1223, name: "Butter Roti", price: 150 },
          { id: 1224, name: "Laccha Paratha", price: 200 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 1225, name: "Saffron Pulao", price: 320 },
          { id: 1226, name: "Vegetable Biryani", price: 420 },
          { id: 1227, name: "Chicken Biryani", price: 520 },
          { id: 1228, name: "Jeera Rice", price: 280 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1229, name: "Daulat Ki Chaat with Silver Leaf", price: 350 },
          { id: 1230, name: "Chocolate Samosa with Ice Cream", price: 380 },
          { id: 1231, name: "Rasmalai Cheesecake", price: 400 },
          { id: 1232, name: "Kulfi Sorbet", price: 320 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1233, name: "Masala Chai", price: 150 ,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg"},
          { id: 1234, name: "Fresh Lime Soda", price: 180 },
          { id: 1235, name: "Cold Coffee", price: 220 },
          { id: 1236, name: "Mineral Water", price: 100 },
        ],
      },
    ],
  },
  {
    restaurantID: 13,
    restaurantName: "Jewel of Nizam",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1301, name: "Hyderabadi Chicken Biryani", price: 320 },
          { id: 1302, name: "Mutton Biryani", price: 380 },
          { id: 1303, name: "Haleem", price: 220 },
          { id: 1304, name: "Pathar Ka Gosht", price: 400 },
          { id: 1305, name: "Nizami Chicken Korma", price: 360 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1306, name: "Chicken 65", price: 240 },
          { id: 1307, name: "Tandoori Chicken", price: 320 },
          { id: 1308, name: "Chicken Tikka", price: 280 },
          { id: 1309, name: "Mutton Seekh Kebab", price: 340 },
          { id: 1310, name: "Fish Fry", price: 300 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 1311, name: "Mutton Rogan Josh", price: 380 },
          { id: 1312, name: "Chicken Curry", price: 320 },
          { id: 1313, name: "Murgh Musallam", price: 420 },
          { id: 1314, name: "Mutton Korma", price: 400 },
          { id: 1315, name: "Fish Curry", price: 340 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 1316, name: "Paneer Butter Masala", price: 300 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 1317, name: "Dal Tadka", price: 200 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 1318, name: "Mixed Veg Curry", price: 240 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 1319, name: "Bagara Baingan", price: 260 },
          { id: 1320, name: "Mirchi Ka Salan", price: 220 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1321, name: "Butter Naan", price: 60 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 1322, name: "Garlic Naan", price: 70 },
          { id: 1323, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 1324, name: "Rumali Roti", price: 60 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 1325, name: "Chicken Biryani", price: 320 },
          { id: 1326, name: "Mutton Biryani", price: 380 },
          { id: 1327, name: "Veg Biryani", price: 260 },
          { id: 1328, name: "Jeera Rice", price: 200 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1329, name: "Raita", price: 60 },
          { id: 1330, name: "Salad", price: 70 },
          { id: 1331, name: "Pickle", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1332, name: "Double Ka Meetha", price: 150 },
          { id: 1333, name: "Qubani Ka Meetha", price: 180 },
          { id: 1334, name: "Gulab Jamun", price: 120 },
          { id: 1335, name: "Kheer", price: 130 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1336, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 1337, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 1338, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },

  {
    restaurantID: 14,
    restaurantName: "Karim’s",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1401, name: "Mutton Korma", price: 320 },
          { id: 1402, name: "Chicken Jahangiri", price: 300 },
          { id: 1403, name: "Mutton Burra", price: 380 },
          { id: 1404, name: "Chicken Biryani", price: 260 },
          { id: 1405, name: "Mutton Biryani", price: 320 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1406, name: "Seekh Kebab", price: 260 },
          { id: 1407, name: "Chicken Tikka", price: 280 },
          { id: 1408, name: "Mutton Seekh Kebab", price: 300 },
          { id: 1409, name: "Tandoori Chicken", price: 320 },
          { id: 1410, name: "Chicken Malai Tikka", price: 290 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 1411, name: "Mutton Rogan Josh", price: 350 },
          { id: 1412, name: "Chicken Curry", price: 260 },
          { id: 1413, name: "Mutton Nihari", price: 360 },
          { id: 1414, name: "Chicken Changezi", price: 280 },
          { id: 1415, name: "Brain Curry", price: 300 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 1416, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 1417, name: "Dal Makhani", price: 200 },
          { id: 1418, name: "Mixed Veg Curry", price: 220 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 1419, name: "Kadai Paneer", price: 250 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1420, name: "Rumali Roti", price: 40 },
          { id: 1421, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/736x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 1422, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 1423, name: "Khamiri Roti", price: 60 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 1424, name: "Chicken Biryani", price: 260 },
          { id: 1425, name: "Mutton Biryani", price: 320 },
          { id: 1426, name: "Jeera Rice", price: 150 },
          { id: 1427, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1428, name: "Raita", price: 50 },
          { id: 1429, name: "Green Salad", price: 60 },
          { id: 1430, name: "Onion Salad", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1431, name: "Shahi Tukda", price: 120 },
          { id: 1432, name: "Kheer", price: 110 },
          { id: 1433, name: "Firni", price: 130 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1434, name: "Lassi", price: 80 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 1435, name: "Cold Drink", price: 50,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg" },
          { id: 1436, name: "Masala Chai", price: 40,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg" },
        ],
      },
    ],
  },
  {
    restaurantID: 15,
    restaurantName: "Koshy’s",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1501, name: "Chicken Cutlet", price: 220,image:"https://i.pinimg.com/1200x/d9/e1/46/d9e146a1bae4385972410d685e5ecadb.jpg" },
          { id: 1502, name: "Mutton Curry with Bread", price: 280 },
          { id: 1503, name: "Masala Dosa", price: 140 },
          { id: 1504, name: "Club Sandwich", price: 180 },
          { id: 1505, name: "Filter Coffee", price: 80 },
        ],
      },
      {
        category: "Breakfast",
        items: [
          { id: 1506, name: "Idli Sambar", price: 100 },
          { id: 1507, name: "Plain Dosa", price: 120 },
          { id: 1508, name: "Masala Omelette", price: 130 },
          { id: 1509, name: "Toast Butter Jam", price: 90 },
          { id: 1510, name: "Upma", price: 110 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1511, name: "Veg Cutlet", price: 150 },
          { id: 1512, name: "Chicken Cutlet", price: 220 ,image:"https://i.pinimg.com/1200x/d9/e1/46/d9e146a1bae4385972410d685e5ecadb.jpg"},
          { id: 1513, name: "French Fries", price: 140 },
          { id: 1514, name: "Chicken Sandwich", price: 180 },
          { id: 1515, name: "Veg Sandwich", price: 150 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 1516, name: "Chicken Curry", price: 260 },
          { id: 1517, name: "Mutton Curry", price: 320 },
          { id: 1518, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 1519, name: "Veg Curry", price: 200 },
          { id: 1520, name: "Egg Curry", price: 180 },
        ],
      },
      {
        category: "Rice & Breads",
        items: [
          { id: 1521, name: "Steamed Rice", price: 100 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 1522, name: "Jeera Rice", price: 150 },
          { id: 1523, name: "Chapati", price: 30 },
          { id: 1524, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 1525, name: "Bread Basket", price: 120 },
        ],
      },
      {
        category: "Continental",
        items: [
          { id: 1526, name: "Grilled Chicken", price: 300 },
          { id: 1527, name: "Fish and Chips", price: 280 },
          { id: 1528, name: "Spaghetti Pasta", price: 250 },
          { id: 1529, name: "Veg Burger", price: 180 },
          { id: 1530, name: "Chicken Burger", price: 220 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1531, name: "Caramel Custard", price: 120 },
          { id: 1532, name: "Chocolate Cake", price: 150 },
          { id: 1533, name: "Ice Cream", price: 120 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1534, name: "Filter Coffee", price: 80 },
          { id: 1535, name: "Tea", price: 50 },
          { id: 1536, name: "Cold Coffee", price: 120 },
          { id: 1537, name: "Fresh Lime Soda", price: 90 },
        ],
      },
    ],
  },

  {
    restaurantID: 16,
    restaurantName: "Masala Library",
    menu: [
      {
        category: "Chef’s Signature",
        items: [
          { id: 1601, name: "Butter Chicken Foam with Naan Crisp", price: 580 },
          { id: 1602, name: "Ghewar Cheesecake", price: 420 ,image:"https://i.pinimg.com/736x/5f/6e/31/5f6e31f0b7dfab82c84be95f52cfcbae.jpg"},
          { id: 1603, name: "Dahi Bhalla Sphere", price: 350 },
          { id: 1604, name: "Galouti Kebab on Paratha Crisp", price: 520 },
          { id: 1605, name: "Dal Chawal Arancini", price: 400 },
        ],
      },
      {
        category: "Small Plates",
        items: [
          { id: 1606, name: "Truffle Khichdi Croquettes", price: 380 },
          { id: 1607, name: "Tandoori Broccoli with Almond Cream", price: 420 },
          { id: 1608, name: "Paneer Tikka with Molecular Foam", price: 480 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 1609, name: "Chicken Seekh Tacos", price: 520 },
          { id: 1610, name: "Soft Shell Crab with Curry Emulsion", price: 720 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 1611, name: "Avocado Kofta with Curry Leaf Sauce", price: 550 },
          { id: 1612, name: "Morel Mushroom Korma", price: 620 },
          { id: 1613, name: "Smoked Dal with Butter Foam", price: 480 },
          {
            id: 1614,
            name: "Seasonal Vegetables with Saffron Sauce",
            price: 520,
          },
          { id: 1615, name: "Paneer Lababdar Deconstructed", price: 560 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 1616, name: "Lamb Rogan Josh with Saffron Rice", price: 720 },
          { id: 1617, name: "Butter Chicken Reimagined", price: 650 },
          { id: 1618, name: "Chicken Chettinad Foam Curry", price: 620 },
          { id: 1619, name: "Grilled Fish with Coconut Emulsion", price: 680 },
          { id: 1620, name: "Duck Curry with Malabar Spices", price: 740 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1621, name: "Truffle Naan", price: 260 },
          { id: 1622, name: "Garlic Naan", price: 180 },
          { id: 1623, name: "Butter Roti", price: 150 },
          { id: 1624, name: "Laccha Paratha", price: 200 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 1625, name: "Saffron Pulao", price: 340 },
          { id: 1626, name: "Vegetable Biryani", price: 480 },
          { id: 1627, name: "Chicken Biryani", price: 580 },
          { id: 1628, name: "Jeera Rice", price: 300 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1629, name: "Chocolate Soil with Ice Cream", price: 420 },
          { id: 1630, name: "Rasmalai Tres Leches", price: 450 },
          { id: 1631, name: "Kulfi Sorbet", price: 380 },
          { id: 1632, name: "Gulab Jamun Cheesecake", price: 400 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1633, name: "Masala Chai", price: 150,image:"https://i.pinimg.com/736x/26/62/f4/2662f4da7c2dead31c12b3bf6bcdfb17.jpg" },
          { id: 1634, name: "Cold Coffee", price: 240 },
          { id: 1635, name: "Fresh Lime Soda", price: 180 },
          { id: 1636, name: "Mineral Water", price: 100 },
        ],
      },
    ],
  },
  {
    restaurantID: 17,
    restaurantName: "Mavalli Tiffin Room (MTR)",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1701, name: "Masala Dosa", price: 140 },
          { id: 1702, name: "Rava Idli", price: 120 },
          { id: 1703, name: "Bisibele Bath", price: 150 },
          { id: 1704, name: "Filter Coffee", price: 80 },
          { id: 1705, name: "Khara Bath", price: 130 },
        ],
      },
      {
        category: "Breakfast",
        items: [
          { id: 1706, name: "Idli Sambar", price: 100 },
          { id: 1707, name: "Plain Dosa", price: 120 },
          { id: 1708, name: "Set Dosa", price: 130 },
          { id: 1709, name: "Rava Dosa", price: 150 },
          { id: 1710, name: "Upma", price: 110 },
        ],
      },
      {
        category: "Tiffin Specials",
        items: [
          { id: 1711, name: "Khara Bath", price: 130 },
          { id: 1712, name: "Kesari Bath", price: 130 },
          { id: 1713, name: "Chow Chow Bath", price: 160 },
          { id: 1714, name: "Pongal", price: 140 },
          { id: 1715, name: "Vada Sambar", price: 120 },
        ],
      },
      {
        category: "Meals",
        items: [
          { id: 1716, name: "South Indian Meals", price: 220 },
          { id: 1717, name: "Mini Meals", price: 180 },
          { id: 1718, name: "Curd Rice", price: 120 },
          { id: 1719, name: "Lemon Rice", price: 130 },
          { id: 1720, name: "Tamarind Rice", price: 130 },
        ],
      },
      {
        category: "Rice Items",
        items: [
          { id: 1721, name: "Bisibele Bath", price: 150 },
          { id: 1722, name: "Vegetable Pulao", price: 160 },
          { id: 1723, name: "Jeera Rice", price: 140 },
          { id: 1724, name: "Plain Rice", price: 100 },
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 1725, name: "Medu Vada", price: 100 },
          { id: 1726, name: "Masala Vada", price: 110 },
          { id: 1727, name: "Mysore Bonda", price: 120 },
          { id: 1728, name: "Banana Bajji", price: 120 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1729, name: "Kesari Bath", price: 130 },
          { id: 1730, name: "Payasam", price: 140 },
          { id: 1731, name: "Mysore Pak", price: 150 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1732, name: "Filter Coffee", price: 80 },
          { id: 1733, name: "Tea", price: 50 },
          { id: 1734, name: "Buttermilk", price: 60 ,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg"},
          { id: 1735, name: "Fresh Lime Soda", price: 90 },
        ],
      },
    ],
  },

  {
    restaurantID: 18,
    restaurantName: "Mumtaz Restaurant",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1801, name: "Chicken Biryani", price: 240 },
          { id: 1802, name: "Mutton Biryani", price: 300 },
          { id: 1803, name: "Chicken 65", price: 200 },
          { id: 1804, name: "Haleem", price: 180 },
          { id: 1805, name: "Talawa Gosht", price: 260 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 1806, name: "Chicken Tikka", price: 220 },
          { id: 1807, name: "Chicken Lollipop", price: 210 },
          { id: 1808, name: "Mutton Seekh Kebab", price: 260 },
          { id: 1809, name: "Tandoori Chicken", price: 280 },
          { id: 1810, name: "Fish Fry", price: 240 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 1811, name: "Chicken Curry", price: 220 },
          { id: 1812, name: "Mutton Curry", price: 300 },
          { id: 1813, name: "Chicken Korma", price: 240 },
          { id: 1814, name: "Mutton Rogan Josh", price: 320 },
          { id: 1815, name: "Fish Curry", price: 260 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 1816, name: "Paneer Butter Masala", price: 200 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 1817, name: "Dal Tadka", price: 140 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 1818, name: "Mixed Veg Curry", price: 180 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 1819, name: "Bagara Baingan", price: 200 },
          { id: 1820, name: "Mirchi Ka Salan", price: 180 },
        ],
      },
      {
        category: "Rice & Biryani",
        items: [
          { id: 1821, name: "Chicken Biryani", price: 240 },
          { id: 1822, name: "Mutton Biryani", price: 300 },
          { id: 1823, name: "Egg Biryani", price: 200 },
          { id: 1824, name: "Veg Biryani", price: 180 },
          { id: 1825, name: "Jeera Rice", price: 140 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 1826, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 1827, name: "Garlic Naan", price: 50 },
          { id: 1828, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 1829, name: "Rumali Roti", price: 40 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1830, name: "Raita", price: 40 },
          { id: 1831, name: "Onion Salad", price: 40 },
          { id: 1832, name: "Pickle", price: 30 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1833, name: "Double Ka Meetha", price: 100 },
          { id: 1834, name: "Qubani Ka Meetha", price: 120 },
          { id: 1835, name: "Gulab Jamun", price: 90 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1836, name: "Lassi", price: 70 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 1837, name: "Cold Drink", price: 40 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 1838, name: "Mineral Water", price: 20 },
        ],
      },
    ],
  },
  {
    restaurantID: 19,
    restaurantName: "Murugan Idli Shop",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 1901, name: "Soft Idli (4 pcs)", price: 100 },
          { id: 1902, name: "Ghee Podi Idli", price: 130 },
          { id: 1903, name: "Medu Vada", price: 110 },
          { id: 1904, name: "Masala Dosa", price: 140 },
          { id: 1905, name: "Filter Coffee", price: 80 },
        ],
      },
      {
        category: "Idli Varieties",
        items: [
          { id: 1906, name: "Plain Idli", price: 100 },
          { id: 1907, name: "Mini Idli Sambar", price: 130 },
          { id: 1908, name: "Rava Idli", price: 120 },
          { id: 1909, name: "Kanchipuram Idli", price: 140 },
          { id: 1910, name: "Stuffed Idli", price: 150 },
        ],
      },
      {
        category: "Dosa Varieties",
        items: [
          { id: 1911, name: "Plain Dosa", price: 120 },
          { id: 1912, name: "Masala Dosa", price: 140 },
          { id: 1913, name: "Ghee Roast Dosa", price: 160 },
          { id: 1914, name: "Rava Dosa", price: 150 },
          { id: 1915, name: "Onion Dosa", price: 140 },
        ],
      },
      {
        category: "Vada & Snacks",
        items: [
          { id: 1916, name: "Medu Vada", price: 110 },
          { id: 1917, name: "Sambar Vada", price: 120 },
          { id: 1918, name: "Curd Vada", price: 130 },
          { id: 1919, name: "Masala Vada", price: 120 },
        ],
      },
      {
        category: "Rice Items",
        items: [
          { id: 1920, name: "Sambar Rice", price: 130 },
          { id: 1921, name: "Curd Rice", price: 120 },
          { id: 1922, name: "Lemon Rice", price: 130 },
          { id: 1923, name: "Tamarind Rice", price: 130 },
          { id: 1924, name: "Vegetable Pulao", price: 150 },
        ],
      },
      {
        category: "Meals",
        items: [
          { id: 1925, name: "Mini Meals", price: 180 },
          { id: 1926, name: "Full Meals", price: 220 },
          { id: 1927, name: "Curd Rice Meal", price: 150 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 1928, name: "Coconut Chutney", price: 30 },
          { id: 1929, name: "Tomato Chutney", price: 30 },
          { id: 1930, name: "Sambar", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 1931, name: "Kesari", price: 120 },
          { id: 1932, name: "Payasam", price: 130 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 1933, name: "Filter Coffee", price: 80 },
          { id: 1934, name: "Tea", price: 50 },
          { id: 1935, name: "Buttermilk", price: 60,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg" },
        ],
      },
    ],
  },

  {
    restaurantID: 20,
    restaurantName: "Oh! Calcutta",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2001, name: "Kolkata Mutton Biryani", price: 320 },
          { id: 2002, name: "Kosha Mangsho", price: 350 ,image:"https://i.pinimg.com/736x/e9/a5/92/e9a592bc11a55224937245014387e1d0.jpg"},
          { id: 2003, name: "Shorshe Ilish", price: 420 },
          { id: 2004, name: "Chingri Malai Curry", price: 400 ,image:"https://i.pinimg.com/736x/e9/c3/0f/e9c30fe98367a4595ab77d94fbbe5466.jpg"},
          { id: 2005, name: "Mishti Doi", price: 120 ,image:'https://i.pinimg.com/736x/04/e0/90/04e090e5d25f62e1cd70a9ff1ca7168b.jpg'},
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2006, name: "Fish Fry", price: 260 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
          { id: 2007, name: "Chicken Kabiraji", price: 280 },
          { id: 2008, name: "Mutton Chop", price: 300 ,image:"https://i.pinimg.com/736x/2b/5d/f7/2b5df7c66c322d74ffe4e081a1a7d73a.jpg"},
          { id: 2009, name: "Veg Chop", price: 180 ,image:"https://i.pinimg.com/736x/fc/ee/cd/fceecd5f3bd7d31e05979ed9ab75f3e1.jpg"},
          { id: 2010, name: "Paneer Cutlet", price: 200 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2011, name: "Kosha Mangsho", price: 350 ,image:"https://i.pinimg.com/736x/e9/a5/92/e9a592bc11a55224937245014387e1d0.jpg"},
          { id: 2012, name: "Chicken Kosha", price: 300 ,image:"https://i.pinimg.com/736x/2f/8f/58/2f8f5861c274443291475c89cbf73fde.jpg"},
          { id: 2013, name: "Shorshe Ilish", price: 420 },
          { id: 2014, name: "Chingri Malai Curry", price: 400,image:"https://i.pinimg.com/736x/e9/c3/0f/e9c30fe98367a4595ab77d94fbbe5466.jpg" },
          { id: 2015, name: "Fish Kalia", price: 360 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2016, name: "Aloo Posto", price: 200 ,image:"https://i.pinimg.com/1200x/18/70/13/18701355b2dce27c4cbb200fdf29be2c.jpg"},
          { id: 2017, name: "Shukto", price: 180,image:"https://i.pinimg.com/736x/3a/f5/b2/3af5b26b1c76b23c112fb18e7e4681f5.jpg" },
          { id: 2018, name: "Cholar Dal", price: 160 ,image:"https://i.pinimg.com/736x/22/e4/59/22e459bd50860a3373f137c00c391836.jpg"},
          { id: 2019, name: "Paneer Korma", price: 240 },
          { id: 2020, name: "Mixed Veg Curry", price: 200 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
        ],
      },
      {
        category: "Rice & Biryani",
        items: [
          { id: 2021, name: "Kolkata Chicken Biryani", price: 280 },
          { id: 2022, name: "Kolkata Mutton Biryani", price: 320 },
          { id: 2023, name: "Steamed Rice", price: 120 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 2024, name: "Basanti Pulao", price: 200 ,image:"https://i.pinimg.com/736x/ef/7b/a6/ef7ba6ce2b4ab3fd21f4755050f461d1.jpg"},
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2025, name: "Luchi", price: 120 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 2026, name: "Paratha", price: 100 },
          { id: 2027, name: "Butter Naan", price: 60 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2028, name: "Kachumber Salad", price: 60 },
          { id: 2029, name: "Papad", price: 40 },
          { id: 2030, name: "Pickle", price: 30 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2031, name: "Rasgulla", price: 120 },
          { id: 2032, name: "Sandesh", price: 140 ,image:"https://i.pinimg.com/736x/3e/14/dd/3e14dd758196c711aada5bdf14e37bae.jpg"},
          { id: 2033, name: "Mishti Doi", price: 120 ,image:"https://i.pinimg.com/736x/04/e0/90/04e090e5d25f62e1cd70a9ff1ca7168b.jpg"},
          { id: 2034, name: "Payesh", price: 130,image:'https://i.pinimg.com/736x/80/df/ba/80dfba7f59f4be6a0d269120f59a06d9.jpg' },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2035, name: "Sweet Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2036, name: "Cold Drink", price: 60,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg" },
          { id: 2037, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },
  {
    restaurantID: 21,
    restaurantName: "Paradise Biryani",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2101, name: "Hyderabadi Chicken Biryani", price: 280 },
          { id: 2102, name: "Mutton Biryani", price: 340 },
          { id: 2103, name: "Chicken Dum Biryani", price: 300 },
          { id: 2104, name: "Egg Biryani", price: 220 },
          { id: 2105, name: "Veg Biryani", price: 200 },
        ],
      },
      {
        category: "Biryani Specials",
        items: [
          { id: 2106, name: "Chicken 65 Biryani", price: 300 },
          { id: 2107, name: "Boneless Chicken Biryani", price: 320 },
          { id: 2108, name: "Special Mutton Biryani", price: 380 },
          { id: 2109, name: "Fish Biryani", price: 320 },
          { id: 2110, name: "Prawn Biryani", price: 360 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2111, name: "Chicken 65", price: 220 },
          { id: 2112, name: "Chicken Tikka", price: 260 },
          { id: 2113, name: "Tandoori Chicken", price: 300 },
          { id: 2114, name: "Mutton Seekh Kebab", price: 320 },
          { id: 2115, name: "Fish Fry", price: 260 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2116, name: "Chicken Curry", price: 260 },
          { id: 2117, name: "Mutton Curry", price: 340 },
          { id: 2118, name: "Butter Chicken", price: 300 },
          { id: 2119, name: "Chicken Korma", price: 280 },
          { id: 2120, name: "Fish Curry", price: 300 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2121, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2122, name: "Dal Tadka", price: 160 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 2123, name: "Mixed Veg Curry", price: 200 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 2124, name: "Kadai Paneer", price: 260 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2125, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2126, name: "Garlic Naan", price: 60 },
          { id: 2127, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2128, name: "Jeera Rice", price: 150 },
          { id: 2129, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2130, name: "Raita", price: 50 },
          { id: 2131, name: "Mirchi Ka Salan", price: 60 },
          { id: 2132, name: "Onion Salad", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2133, name: "Double Ka Meetha", price: 120 },
          { id: 2134, name: "Qubani Ka Meetha", price: 140 },
          { id: 2135, name: "Gulab Jamun", price: 100 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2136, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2137, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 2138, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },

  {
    restaurantID: 22,
    restaurantName: "Peacock Rooftop Restaurant",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2201, name: "Dal Baati Churma", price: 280 ,image:"https://i.pinimg.com/1200x/a8/95/9c/a8959c05a923fb65f01074fc105b3b6a.jpg"},
          { id: 2202, name: "Paneer Butter Masala", price: 260 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2203, name: "Chicken Tikka Masala", price: 320 },
          { id: 2204, name: "Veg Biryani", price: 240 },
          { id: 2205, name: "Margherita Pizza", price: 220 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2206, name: "Paneer Tikka", price: 260 ,image:"https://i.pinimg.com/1200x/b5/5d/6f/b55d6f1c767cd0d9b1a60646afeac3e1.jpg"},
          { id: 2207, name: "Hara Bhara Kebab", price: 220 ,image:"https://i.pinimg.com/1200x/a3/83/2c/a3832c42d9921c345066120151bd711f.jpg"},
          { id: 2208, name: "Chicken Tikka", price: 300 },
          { id: 2209, name: "Veg Spring Rolls", price: 200 },
          { id: 2210, name: "Chilli Chicken", price: 280 },
        ],
      },
      {
        category: "Main Course (Indian Veg)",
        items: [
          { id: 2211, name: "Paneer Butter Masala", price: 260 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2212, name: "Kadai Paneer", price: 280 },
          { id: 2213, name: "Dal Makhani", price: 220 },
          { id: 2214, name: "Mix Veg Curry", price: 240 },
          { id: 2215, name: "Gatte Ki Sabzi", price: 260 ,image:"https://i.pinimg.com/1200x/6f/f1/03/6ff10371b2e9d3c815c48fb5be9c35b1.jpg"},
        ],
      },
      {
        category: "Main Course (Indian Non-Veg)",
        items: [
          { id: 2216, name: "Butter Chicken", price: 320 },
          { id: 2217, name: "Chicken Curry", price: 300 },
          { id: 2218, name: "Mutton Rogan Josh", price: 380 },
          { id: 2219, name: "Laal Maas", price: 400 },
          { id: 2220, name: "Fish Curry", price: 340 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
        ],
      },
      {
        category: "Chinese",
        items: [
          { id: 2221, name: "Veg Fried Rice", price: 200 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 2222, name: "Chicken Fried Rice", price: 240 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 2223, name: "Veg Noodles", price: 200 },
          { id: 2224, name: "Chicken Noodles", price: 240 },
          { id: 2225, name: "Chilli Paneer", price: 260 },
        ],
      },
      {
        category: "Italian",
        items: [
          { id: 2226, name: "Margherita Pizza", price: 220 },
          { id: 2227, name: "Farmhouse Pizza", price: 260 },
          { id: 2228, name: "White Sauce Pasta", price: 240 },
          { id: 2229, name: "Red Sauce Pasta", price: 240 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2230, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2231, name: "Garlic Naan", price: 60 },
          { id: 2232, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 2233, name: "Laccha Paratha", price: 60 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2234, name: "Veg Biryani", price: 240 },
          { id: 2235, name: "Chicken Biryani", price: 300 },
          { id: 2236, name: "Jeera Rice", price: 160 },
          { id: 2237, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2238, name: "Gulab Jamun", price: 120 },
          { id: 2239, name: "Ice Cream", price: 140 },
          { id: 2240, name: "Chocolate Brownie", price: 180 },
          { id: 2241, name: "Rasmalai", price: 160 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2242, name: "Cold Coffee", price: 140 },
          { id: 2243, name: "Fresh Lime Soda", price: 100 },
          { id: 2244, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 2245, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },
  {
    restaurantID: 23,
    restaurantName: "Peter Cat",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2301, name: "Chelo Kebab", price: 420 },
          { id: 2302, name: "Chicken Stroganoff", price: 360 },
          { id: 2303, name: "Grilled Fish", price: 380 },
          { id: 2304, name: "Chicken Steak", price: 350 },
          { id: 2305, name: "Baked Chicken", price: 340 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2306, name: "Chicken Cutlet", price: 220 ,image:"https://i.pinimg.com/1200x/d9/e1/46/d9e146a1bae4385972410d685e5ecadb.jpg"},
          { id: 2307, name: "Fish Finger", price: 260 },
          { id: 2308, name: "Chicken Wings", price: 240 },
          { id: 2309, name: "Veg Cutlet", price: 180 },
          { id: 2310, name: "Garlic Bread", price: 160 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2311, name: "Chicken Stroganoff", price: 360 },
          { id: 2312, name: "Grilled Fish with Lemon Butter", price: 380 },
          { id: 2313, name: "Chicken Steak with Pepper Sauce", price: 350 },
          { id: 2314, name: "Mutton Cutlet with Gravy", price: 380 },
          { id: 2315, name: "Baked Chicken with Cheese", price: 340 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2316, name: "Veg Stroganoff", price: 300 },
          { id: 2317, name: "Grilled Veggies with Sauce", price: 280 },
          { id: 2318, name: "Paneer Steak", price: 300 },
          { id: 2319, name: "Mushroom in Cream Sauce", price: 280 },
          { id: 2320, name: "Veg Au Gratin", price: 320 },
        ],
      },
      {
        category: "Rice & Continental Specials",
        items: [
          { id: 2321, name: "Chelo Kebab Rice", price: 420 },
          { id: 2322, name: "Chicken Fried Rice", price: 240,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg" },
          { id: 2323, name: "Veg Fried Rice", price: 200 ,image:"https://i.pinimg.com/736x/ec/bd/ec/ecbdeca3a2f1ace8ce5ffa8492fd181e.jpg"},
          { id: 2324, name: "Butter Rice", price: 160 },
        ],
      },
      {
        category: "Pasta",
        items: [
          { id: 2325, name: "White Sauce Pasta", price: 280 },
          { id: 2326, name: "Red Sauce Pasta", price: 260 },
          { id: 2327, name: "Chicken Pasta", price: 320 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2328, name: "Garlic Bread", price: 160 },
          { id: 2329, name: "Dinner Rolls", price: 120 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2330, name: "French Fries", price: 140 },
          { id: 2331, name: "Mashed Potato", price: 160 },
          { id: 2332, name: "Coleslaw Salad", price: 150 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2333, name: "Caramel Custard", price: 140 },
          { id: 2334, name: "Chocolate Cake", price: 160 },
          { id: 2335, name: "Ice Cream", price: 120 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2336, name: "Cold Coffee", price: 140 },
          { id: 2337, name: "Fresh Lime Soda", price: 100 },
          { id: 2338, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 24,
    restaurantName: "Pista House",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2401, name: "Chicken Biryani", price: 260 },
          { id: 2402, name: "Mutton Biryani", price: 320 },
          { id: 2403, name: "Special Haleem", price: 200 },
          { id: 2404, name: "Chicken 65", price: 220 },
          { id: 2405, name: "Double Ka Meetha", price: 120 },
        ],
      },
      {
        category: "Biryani Specials",
        items: [
          { id: 2406, name: "Chicken Dum Biryani", price: 280 },
          { id: 2407, name: "Boneless Chicken Biryani", price: 300 },
          { id: 2408, name: "Special Mutton Biryani", price: 350 },
          { id: 2409, name: "Egg Biryani", price: 220 },
          { id: 2410, name: "Veg Biryani", price: 200 },
        ],
      },
      {
        category: "Haleem Specials",
        items: [
          { id: 2411, name: "Chicken Haleem", price: 200 },
          { id: 2412, name: "Mutton Haleem", price: 240 },
          { id: 2413, name: "Special Dry Fruit Haleem", price: 260 },
          { id: 2414, name: "Family Pack Haleem", price: 500 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2415, name: "Chicken 65", price: 220 },
          { id: 2416, name: "Chicken Tikka", price: 260 },
          { id: 2417, name: "Tandoori Chicken", price: 300 },
          { id: 2418, name: "Mutton Seekh Kebab", price: 320 },
          { id: 2419, name: "Fish Fry", price: 260 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2420, name: "Chicken Curry", price: 260 },
          { id: 2421, name: "Mutton Curry", price: 320 },
          { id: 2422, name: "Butter Chicken", price: 300 },
          { id: 2423, name: "Chicken Korma", price: 280 },
          { id: 2424, name: "Fish Curry", price: 300 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2425, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2426, name: "Dal Tadka", price: 160 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 2427, name: "Mixed Veg Curry", price: 200 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 2428, name: "Kadai Paneer", price: 260 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2429, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2430, name: "Garlic Naan", price: 60 },
          { id: 2431, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 2432, name: "Rumali Roti", price: 50 },
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2433, name: "Jeera Rice", price: 150 },
          { id: 2434, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2435, name: "Raita", price: 50 },
          { id: 2436, name: "Mirchi Ka Salan", price: 60 },
          { id: 2437, name: "Onion Salad", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2438, name: "Double Ka Meetha", price: 120 },
          { id: 2439, name: "Qubani Ka Meetha", price: 140 },
          { id: 2440, name: "Gulab Jamun", price: 100 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2441, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2442, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 2443, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },
  {
    restaurantID: 25,
    restaurantName: "Rajwadu",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2501, name: "Gujarati Thali", price: 280 },
          { id: 2502, name: "Special Unlimited Thali", price: 350 },
          { id: 2503, name: "Kathiyawadi Thali", price: 320 },
          { id: 2504, name: "Jain Thali", price: 300 },
          { id: 2505, name: "Mini Thali", price: 200 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2506, name: "Dhokla", price: 120 },
          { id: 2507, name: "Khandvi", price: 140 },
          { id: 2508, name: "Patra", price: 130 },
          { id: 2509, name: "Fafda", price: 150 },
          { id: 2510, name: "Sev Khamani", price: 140 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 2511, name: "Undhiyu", price: 240 },
          { id: 2512, name: "Sev Tameta", price: 200 },
          { id: 2513, name: "Dal Dhokli", price: 220 },
          { id: 2514, name: "Gujarati Kadhi", price: 180 },
          { id: 2515, name: "Aloo Rasawala", price: 190 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2516, name: "Rotli", price: 40 },
          { id: 2517, name: "Thepla", price: 90 },
          { id: 2518, name: "Bajra Roti", price: 80 ,image:"https://i.pinimg.com/1200x/55/d5/cf/55d5cfa8e8788ed31b9c6189130183ae.jpg"},
          { id: 2519, name: "Missi Roti", price: 80 ,image:"https://i.pinimg.com/736x/77/5e/a9/775ea9f899a65087870504115b0e3c5e.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2520, name: "Steamed Rice", price: 120 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
          { id: 2521, name: "Khichdi", price: 180 },
          { id: 2522, name: "Vegetable Pulao", price: 200 },
          { id: 2523, name: "Jeera Rice", price: 180 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2524, name: "Papad", price: 40 },
          { id: 2525, name: "Pickle", price: 40 },
          { id: 2526, name: "Chutney", price: 50 },
          { id: 2527, name: "Masala Chaas", price: 70 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2528, name: "Shrikhand", price: 140 },
          { id: 2529, name: "Basundi", price: 160 },
          { id: 2530, name: "Gulab Jamun", price: 120 },
          { id: 2531, name: "Jalebi", price: 130 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2532, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2533, name: "Masala Chaas", price: 70 },
          { id: 2534, name: "Cold Drink", price: 60,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg" },
        ],
      },
    ],
  },

  {
    restaurantID: 26,
    restaurantName: "Rawat Mishtan Bhandar",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2601, name: "Pyaaz Kachori", price: 80 },
          { id: 2602, name: "Dal Baati Churma", price: 260,image:"https://i.pinimg.com/1200x/a8/95/9c/a8959c05a923fb65f01074fc105b3b6a.jpg" },
          { id: 2603, name: "Mawa Kachori", price: 120 },
          { id: 2604, name: "Ghewar", price: 150 ,image:"https://i.pinimg.com/736x/5f/6e/31/5f6e31f0b7dfab82c84be95f52cfcbae.jpg"},
          { id: 2605, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
        ],
      },
      {
        category: "Snacks",
        items: [
          { id: 2606, name: "Pyaaz Kachori", price: 80 },
          { id: 2607, name: "Samosa", price: 40 },
          { id: 2608, name: "Mirchi Bada", price: 60 },
          { id: 2609, name: "Aloo Kachori", price: 70 },
          { id: 2610, name: "Bread Pakora", price: 50 },
        ],
      },
      {
        category: "Main Course",
        items: [
          { id: 2611, name: "Dal Baati Churma", price: 260 ,image:"https://i.pinimg.com/1200x/a8/95/9c/a8959c05a923fb65f01074fc105b3b6a.jpg"},
          { id: 2612, name: "Gatte Ki Sabzi", price: 220 ,image:"https://i.pinimg.com/1200x/6f/f1/03/6ff10371b2e9d3c815c48fb5be9c35b1.jpg"},
          { id: 2613, name: "Ker Sangri", price: 240 ,image:"https://i.pinimg.com/736x/86/b1/86/86b18638c4313c2101e4f3bf8baae020.jpg"},
          { id: 2614, name: "Aloo Pyaz Sabzi", price: 200 },
          { id: 2615, name: "Mix Veg Curry", price: 200 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2616, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 2617, name: "Missi Roti", price: 60 ,image:"https://i.pinimg.com/736x/77/5e/a9/775ea9f899a65087870504115b0e3c5e.jpg"},
          { id: 2618, name: "Bajra Roti", price: 70 ,image:"https://i.pinimg.com/1200x/55/d5/cf/55d5cfa8e8788ed31b9c6189130183ae.jpg"},
          { id: 2619, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2620, name: "Jeera Rice", price: 160 },
          { id: 2621, name: "Vegetable Pulao", price: 200 },
          { id: 2622, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Sweets",
        items: [
          { id: 2623, name: "Ghewar", price: 150 ,image:"https://i.pinimg.com/736x/5f/6e/31/5f6e31f0b7dfab82c84be95f52cfcbae.jpg"},
          { id: 2624, name: "Mawa Kachori", price: 120 },
          { id: 2625, name: "Rasgulla", price: 100 },
          { id: 2626, name: "Gulab Jamun", price: 100 },
          { id: 2627, name: "Jalebi", price: 110 },
        ],
      },
      {
        category: "Thali",
        items: [
          { id: 2628, name: "Rajasthani Thali", price: 300 ,image:"https://i.pinimg.com/736x/57/14/22/5714221c9e4d919e1dfd7260c21b9205.jpg"},
          { id: 2629, name: "Mini Thali", price: 220 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2630, name: "Papad", price: 30 },
          { id: 2631, name: "Pickle", price: 30 },
          { id: 2632, name: "Chutney", price: 40 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2633, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2634, name: "Buttermilk", price: 60,image:"https://i.pinimg.com/736x/51/80/a6/5180a6161d4a3daef0c1387874b6c66a.jpg" },
          { id: 2635, name: "Tea", price: 40 },
          { id: 2636, name: "Cold Drink", price: 50 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },
  {
    restaurantID: 27,
    restaurantName: "Sarvi Restaurant",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2701, name: "Chicken Biryani", price: 240 },
          { id: 2702, name: "Mutton Biryani", price: 300 },
          { id: 2703, name: "Chicken 65", price: 200 },
          { id: 2704, name: "Haleem", price: 180 },
          { id: 2705, name: "Talawa Gosht", price: 260 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2706, name: "Chicken Tikka", price: 220 },
          { id: 2707, name: "Tandoori Chicken", price: 280 },
          { id: 2708, name: "Chicken Lollipop", price: 210 },
          { id: 2709, name: "Mutton Seekh Kebab", price: 260 },
          { id: 2710, name: "Fish Fry", price: 240 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2711, name: "Chicken Curry", price: 220 },
          { id: 2712, name: "Mutton Curry", price: 300 },
          { id: 2713, name: "Chicken Korma", price: 240 },
          { id: 2714, name: "Mutton Rogan Josh", price: 320 },
          { id: 2715, name: "Brain Curry", price: 280 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2716, name: "Paneer Butter Masala", price: 200 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2717, name: "Dal Tadka", price: 140 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 2718, name: "Mixed Veg Curry", price: 180 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 2719, name: "Bagara Baingan", price: 200 },
          { id: 2720, name: "Mirchi Ka Salan", price: 180 },
        ],
      },
      {
        category: "Rice & Biryani",
        items: [
          { id: 2721, name: "Chicken Biryani", price: 240 },
          { id: 2722, name: "Mutton Biryani", price: 300 },
          { id: 2723, name: "Egg Biryani", price: 200 },
          { id: 2724, name: "Veg Biryani", price: 180 },
          { id: 2725, name: "Jeera Rice", price: 140 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2726, name: "Butter Naan", price: 40 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2727, name: "Garlic Naan", price: 50 },
          { id: 2728, name: "Tandoori Roti", price: 30 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
          { id: 2729, name: "Rumali Roti", price: 40 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2730, name: "Raita", price: 40 },
          { id: 2731, name: "Onion Salad", price: 40 },
          { id: 2732, name: "Pickle", price: 30 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2733, name: "Double Ka Meetha", price: 100 },
          { id: 2734, name: "Qubani Ka Meetha", price: 120 },
          { id: 2735, name: "Gulab Jamun", price: 90 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2736, name: "Lassi", price: 70 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2737, name: "Cold Drink", price: 40,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg" },
          { id: 2738, name: "Mineral Water", price: 20 },
        ],
      },
    ],
  },

  {
    restaurantID: 28,
    restaurantName: "Shah Ghouse",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2801, name: "Chicken Biryani", price: 260 },
          { id: 2802, name: "Mutton Biryani", price: 320 },
          { id: 2803, name: "Chicken 65", price: 220 },
          { id: 2804, name: "Haleem", price: 200 },
          { id: 2805, name: "Mutton Marag Soup", price: 180 },
        ],
      },
      {
        category: "Biryani Specials",
        items: [
          { id: 2806, name: "Chicken Dum Biryani", price: 280 },
          { id: 2807, name: "Special Chicken Biryani", price: 300 },
          { id: 2808, name: "Mutton Biryani", price: 320 },
          { id: 2809, name: "Double Masala Biryani", price: 340 },
          { id: 2810, name: "Egg Biryani", price: 220 },
        ],
      },
      {
        category: "Arabic Specials",
        items: [
          { id: 2811, name: "Chicken Mandi", price: 360 },
          { id: 2812, name: "Mutton Mandi", price: 420 },
          { id: 2813, name: "Chicken Shawarma", price: 150 },
          { id: 2814, name: "Chicken Mutabbaq", price: 180 },
          { id: 2815, name: "Grilled Chicken", price: 300 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 2816, name: "Chicken 65", price: 220 },
          { id: 2817, name: "Chicken Lollipop", price: 240 },
          { id: 2818, name: "Tandoori Chicken", price: 300 },
          { id: 2819, name: "Mutton Seekh Kebab", price: 320 },
          { id: 2820, name: "Fish Fry", price: 260 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2821, name: "Butter Chicken", price: 300 },
          { id: 2822, name: "Chicken Curry", price: 260 },
          { id: 2823, name: "Mutton Curry", price: 320 },
          { id: 2824, name: "Chicken Korma", price: 280 },
          { id: 2825, name: "Talawa Gosht", price: 320 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2826, name: "Paneer Butter Masala", price: 240 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2827, name: "Dal Tadka", price: 160 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
          { id: 2828, name: "Mixed Veg Curry", price: 200 ,image:"https://i.pinimg.com/1200x/c9/c0/ff/c9c0ff06039560305f4dfea7978fa3b4.jpg"},
          { id: 2829, name: "Bagara Baingan", price: 220 },
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2830, name: "Butter Naan", price: 50 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2831, name: "Garlic Naan", price: 60 },
          { id: 2832, name: "Rumali Roti", price: 50 },
          { id: 2833, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2834, name: "Jeera Rice", price: 160 },
          { id: 2835, name: "Plain Rice", price: 120 },
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2836, name: "Raita", price: 50 },
          { id: 2837, name: "Mirchi Ka Salan", price: 60 },
          { id: 2838, name: "Onion Salad", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2839, name: "Double Ka Meetha", price: 120 },
          { id: 2840, name: "Qubani Ka Meetha", price: 140 },
          { id: 2841, name: "Gulab Jamun", price: 100 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2842, name: "Lassi", price: 90 ,image:"https://i.pinimg.com/736x/fb/a0/bc/fba0bcbf553d18b190f8c1d4a68e2ada.jpg"},
          { id: 2843, name: "Cold Drink", price: 60 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
          { id: 2844, name: "Mineral Water", price: 30 },
        ],
      },
    ],
  },
  {
    restaurantID: 29,
    restaurantName: "The Fisherman’s Wharf",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 2901, name: "Goan Fish Curry", price: 360 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
          { id: 2902, name: "Prawn Curry", price: 420 },
          { id: 2903, name: "Fish Fry", price: 320 ,image:"https://i.pinimg.com/736x/52/dc/fe/52dcfe0613322e4d45cd46aac779e296.jpg"},
          { id: 2904, name: "Butter Garlic Prawns", price: 450 },
          { id: 2905, name: "Grilled Fish", price: 380 },
        ],
      },
      {
        category: "Seafood Starters",
        items: [
          { id: 2906, name: "Fish Fingers", price: 300 },
          { id: 2907, name: "Calamari Fry", price: 340 },
          { id: 2908, name: "Prawn Tempura", price: 380 },
          { id: 2909, name: "Crab Cakes", price: 420 },
          { id: 2910, name: "Butter Garlic Prawns", price: 450 },
        ],
      },
      {
        category: "Seafood Main Course",
        items: [
          { id: 2911, name: "Goan Fish Curry", price: 360 ,image:"https://i.pinimg.com/1200x/57/a7/90/57a790103d1c017313996cdaa1601cc6.jpg"},
          { id: 2912, name: "Prawn Masala", price: 420 },
          { id: 2913, name: "Crab Curry", price: 480 },
          { id: 2914, name: "Fish Moilee", price: 380 },
          { id: 2915, name: "Prawn Balchao", price: 420 },
        ],
      },
      {
        category: "Grills",
        items: [
          { id: 2916, name: "Grilled Fish with Lemon Butter", price: 380 },
          { id: 2917, name: "Grilled Prawns", price: 420 },
          { id: 2918, name: "Grilled Chicken", price: 300 },
          { id: 2919, name: "Fish Steak", price: 360 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 2920, name: "Butter Chicken", price: 320 },
          { id: 2921, name: "Chicken Curry", price: 280 },
          { id: 2922, name: "Mutton Curry", price: 360 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 2923, name: "Paneer Butter Masala", price: 260 ,image:"https://i.pinimg.com/1200x/be/ef/74/beef74528b9acc13872a1269d4bd5274.jpg"},
          { id: 2924, name: "Veg Curry", price: 220 },
          { id: 2925, name: "Dal Tadka", price: 180 ,image:"https://i.pinimg.com/736x/2a/8e/57/2a8e57bc82908377e58203bfd9f95e84.jpg"},
        ],
      },
      {
        category: "Rice",
        items: [
          { id: 2926, name: "Prawn Biryani", price: 420 },
          { id: 2927, name: "Fish Biryani", price: 380 },
          { id: 2928, name: "Jeera Rice", price: 180 },
          { id: 2929, name: "Steamed Rice", price: 140 ,image:"https://i.pinimg.com/1200x/6d/3a/c1/6d3ac1e22fdcc49f082bee877eea8bf5.jpg"},
        ],
      },
      {
        category: "Breads",
        items: [
          { id: 2930, name: "Butter Naan", price: 60 ,image:"https://i.pinimg.com/1200x/95/56/8d/95568da9b4500560dad637befc47d270.jpg"},
          { id: 2931, name: "Garlic Naan", price: 70 },
          { id: 2932, name: "Tandoori Roti", price: 40 ,image:"https://i.pinimg.com/736x/d5/a6/d1/d5a6d1f2510090efaff9cbf4fbd39838.jpg"},
        ],
      },
      {
        category: "Sides",
        items: [
          { id: 2933, name: "Raita", price: 60 },
          { id: 2934, name: "Salad", price: 80 },
          { id: 2935, name: "Pickle", price: 40 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 2936, name: "Bebinca", price: 180 },
          { id: 2937, name: "Chocolate Brownie", price: 200 },
          { id: 2938, name: "Ice Cream", price: 140 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 2939, name: "Fresh Lime Soda", price: 120 },
          { id: 2940, name: "Cold Coffee", price: 160 },
          { id: 2941, name: "Cold Drink", price: 80 ,image:"https://i.pinimg.com/736x/a7/8d/df/a78ddf0a23c024442d2164e8b9a4dfdd.jpg"},
        ],
      },
    ],
  },

  {
    restaurantID: 30,
    restaurantName: "The Table",
    menu: [
      {
        category: "Recommended",
        items: [
          { id: 3001, name: "Truffle Pasta", price: 520 },
          { id: 3002, name: "Grilled Salmon", price: 680 },
          { id: 3003, name: "Lamb Chops", price: 720 },
          { id: 3004, name: "Wood Fired Pizza", price: 420 },
          { id: 3005, name: "Chocolate Fondant", price: 280 },
        ],
      },
      {
        category: "Starters",
        items: [
          { id: 3006, name: "Burrata Salad", price: 380 },
          { id: 3007, name: "Caesar Salad", price: 320 },
          { id: 3008, name: "Grilled Chicken Salad", price: 360 },
          { id: 3009, name: "Avocado Toast", price: 340 },
          { id: 3010, name: "Soup of the Day", price: 280 },
        ],
      },
      {
        category: "Small Plates",
        items: [
          { id: 3011, name: "Tempura Prawns", price: 420 },
          { id: 3012, name: "Chicken Wings", price: 360 },
          { id: 3013, name: "Truffle Fries", price: 320 },
          { id: 3014, name: "Crispy Calamari", price: 420 },
        ],
      },
      {
        category: "Pizza (Wood Fired)",
        items: [
          { id: 3015, name: "Margherita Pizza", price: 380 },
          { id: 3016, name: "Farmhouse Pizza", price: 420 },
          { id: 3017, name: "Pepperoni Pizza", price: 460 },
          { id: 3018, name: "Truffle Mushroom Pizza", price: 480 },
        ],
      },
      {
        category: "Pasta",
        items: [
          { id: 3019, name: "Truffle Pasta", price: 520 },
          { id: 3020, name: "Penne Arrabbiata", price: 420 },
          { id: 3021, name: "Spaghetti Carbonara", price: 480 },
          { id: 3022, name: "Alfredo Pasta", price: 450 },
        ],
      },
      {
        category: "Main Course (Non-Veg)",
        items: [
          { id: 3023, name: "Grilled Salmon", price: 680 },
          { id: 3024, name: "Lamb Chops", price: 720 },
          { id: 3025, name: "Roasted Chicken", price: 520 },
          { id: 3026, name: "Beef Steak", price: 750 },
        ],
      },
      {
        category: "Main Course (Veg)",
        items: [
          { id: 3027, name: "Grilled Vegetables", price: 380 },
          { id: 3028, name: "Mushroom Risotto", price: 420 },
          { id: 3029, name: "Veg Lasagna", price: 400 },
          { id: 3030, name: "Paneer Steak", price: 420 },
        ],
      },
      {
        category: "Asian Specials",
        items: [
          { id: 3031, name: "Sushi Platter", price: 620 },
          { id: 3032, name: "Chicken Teriyaki", price: 480 },
          { id: 3033, name: "Veg Sushi", price: 520 },
          { id: 3034, name: "Thai Green Curry", price: 460 },
        ],
      },
      {
        category: "Breads & Sides",
        items: [
          { id: 3035, name: "Garlic Bread", price: 180 },
          { id: 3036, name: "Mashed Potato", price: 200 },
          { id: 3037, name: "French Fries", price: 180 },
        ],
      },
      {
        category: "Desserts",
        items: [
          { id: 3038, name: "Chocolate Fondant", price: 280 },
          { id: 3039, name: "Cheesecake", price: 300 },
          { id: 3040, name: "Tiramisu", price: 320 },
          { id: 3041, name: "Ice Cream", price: 180 },
        ],
      },
      {
        category: "Beverages",
        items: [
          { id: 3042, name: "Cold Coffee", price: 180 },
          { id: 3043, name: "Fresh Juice", price: 200 },
          { id: 3044, name: "Mocktail", price: 240 },
          { id: 3045, name: "Mineral Water", price: 60 },
        ],
      },
    ],
  },
];

export default restaurantsMenu;
