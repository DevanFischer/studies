const maxEmotes = 20;

const allEmotes = [
  "denversAYE",
  "denversAyye",
  "denversBONK",
  "denversBassface",
  "denversDab",
  "denversEVIL",
  "denversGVO",
  "denversGift",
  "denversHYPE",
  "denversHeart",
  "denversHoop",
  "denversLUL",
  "denversLurk",
  "denversMonkaS",
  "denversOpe",
  "denversOrion",
  "denversPOG",
  "denversPika",
  "denversPirate",
  "denversRage",
  "denversRip",
  "denversSave",
  "denversShy",
  "denversSilly",
  "denversSith",
  "denversSnax",
  "denversThirst",
  "denversThirsty",
  "denversToxic",
  "denversVibez",
  "denversWUB",
  "denversWolfpack",
  "denversZoinks",
];

const patterns = {
  0: randHype(),
  1: "denversGVO",
  2: "denversPika",
  3: "denversThirsty denversThirsty",
  4: "denversSith denversSith denversSith denversSith",
};

// This function returns a random pattern of emotes from 'pattern'
// Accepts an argument, q, the index of the pattern
function getHype(q) {
  const options = Object.values(patterns);
  if (q in options) {
    return options[q];
  } else {
    randOption = options[Math.floor(Math.random() * options.length)];
    return randOption;
  }
}

// This function returns a string of, n, random eemotes.
// If 'n' is null default is 5.
// 'n' must be in range 0 - maxEmotes
function randHype(n) {
  let output = "";
  if (n >= maxEmotes) {
    for (let i = 0; i < maxEmotes; i++) {
      output += randEmote();
    }
  } else if (isNaN(n)) {
    for (let i = 0; i < 5; i++) {
      output += randEmote();
    }
  } else {
    for (let i = 0; i < n; i++) {
      output += randEmote();
    }
  }
  return output;
}

// This function returns a random emote from allEmotes
function randEmote() {
  return allEmotes[Math.floor(Math.random() * allEmotes.length)] + " ";
}
// randHype(q);
// getHype(q);

// This function returns all the emotes in the dictionary
function showAllEmotes() {
  let output = "";
  for (let i = 0; i < allEmotes.length; i++) {
    output += allEmotes[i] + " ";
  }
  return output;
}
// showAllEmotes();
