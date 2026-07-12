export interface ProfileAsset {
  id: string;
  levelRequired: number;
  source: any;
  label: string;
  isGif: boolean;
}

// Seuils d'XP pour les niveaux 0 à 6
export const XP_LEVELS = [0, 20, 50, 120, 200, 325, 500];

export const getLevelFromXP = (xp: number): number => {
  let lvl = 0;
  for (let i = 0; i < XP_LEVELS.length; i++) {
    if (xp >= XP_LEVELS[i]) {
      lvl = i;
    } else {
      break;
    }
  }
  return lvl;
};

export const getXPForNextLevel = (lvl: number): number => {
  if (lvl >= XP_LEVELS.length - 1) return XP_LEVELS[XP_LEVELS.length - 1];
  return XP_LEVELS[lvl + 1];
};

export const getXPForCurrentLevel = (lvl: number): number => {
  return XP_LEVELS[lvl];
};

// ── Avatars (Pfps) par niveau ───────────────────────────────────────────────
export const AVATARS_COLLECTION: ProfileAsset[] = [
  // Niveau 0
  { id: 'kris', levelRequired: 0, label: 'Kris', isGif: false, source: require('../../Profil/Pfp/Niveau0/kris.png') },
  { id: 'kris2', levelRequired: 0, label: 'Kris 2', isGif: false, source: require('../../Profil/Pfp/Niveau0/Kris2.png') },
  { id: 'kris3', levelRequired: 0, label: 'Kris 3', isGif: false, source: require('../../Profil/Pfp/Niveau0/Kris3.png') },
  { id: 'kris4', levelRequired: 0, label: 'Kris 4', isGif: false, source: require('../../Profil/Pfp/Niveau0/Kris4.png') },
  { id: 'kris5', levelRequired: 0, label: 'Kris 5', isGif: false, source: require('../../Profil/Pfp/Niveau0/Kris5.png') },
  { id: 'ralsei', levelRequired: 0, label: 'Ralsei', isGif: false, source: require('../../Profil/Pfp/Niveau0/ralsei.png') },
  { id: 'ralsei2', levelRequired: 0, label: 'Ralsei 2', isGif: false, source: require('../../Profil/Pfp/Niveau0/ralsei2.png') },
  { id: 'ralsei3', levelRequired: 0, label: 'Ralsei 3', isGif: false, source: require('../../Profil/Pfp/Niveau0/ralsei3.png') },
  { id: 'ralsei4', levelRequired: 0, label: 'Ralsei 4', isGif: false, source: require('../../Profil/Pfp/Niveau0/ralsei4.png') },
  { id: 'ralsei5', levelRequired: 0, label: 'Ralsei 5', isGif: false, source: require('../../Profil/Pfp/Niveau0/ralsei5.png') },
  { id: 'susie1', levelRequired: 0, label: 'Susie', isGif: false, source: require('../../Profil/Pfp/Niveau0/Susie1.png') },
  { id: 'susie2', levelRequired: 0, label: 'Susie 2', isGif: false, source: require('../../Profil/Pfp/Niveau0/Susie2.png') },
  { id: 'susie3', levelRequired: 0, label: 'Susie 3', isGif: false, source: require('../../Profil/Pfp/Niveau0/Susie3.png') },
  { id: 'susie4', levelRequired: 0, label: 'Susie 4', isGif: false, source: require('../../Profil/Pfp/Niveau0/Susie4.png') },
  { id: 'susie5', levelRequired: 0, label: 'Susie 5', isGif: false, source: require('../../Profil/Pfp/Niveau0/Susie5.png') },

  // Niveau 1
  { id: 'jevil1', levelRequired: 1, label: 'Jevil', isGif: false, source: require('../../Profil/Pfp/Niveau1/Jevil1.png') },
  { id: 'jevil2', levelRequired: 1, label: 'Jevil 2', isGif: false, source: require('../../Profil/Pfp/Niveau1/Jevil2.png') },
  { id: 'jevil3', levelRequired: 1, label: 'Jevil 3', isGif: false, source: require('../../Profil/Pfp/Niveau1/Jevil3.png') },
  { id: 'king1', levelRequired: 1, label: 'King', isGif: false, source: require('../../Profil/Pfp/Niveau1/King1.png') },
  { id: 'king2', levelRequired: 1, label: 'King 2', isGif: false, source: require('../../Profil/Pfp/Niveau1/King2.png') },
  { id: 'lancer1', levelRequired: 1, label: 'Lancer', isGif: false, source: require('../../Profil/Pfp/Niveau1/Lancer1.png') },
  { id: 'lancer2', levelRequired: 1, label: 'Lancer 2', isGif: false, source: require('../../Profil/Pfp/Niveau1/Lancer2.png') },
  { id: 'lancer3', levelRequired: 1, label: 'Lancer 3', isGif: false, source: require('../../Profil/Pfp/Niveau1/Lancer3.png') },
  { id: 'lancer4', levelRequired: 1, label: 'Lancer 4', isGif: false, source: require('../../Profil/Pfp/Niveau1/Lancer4.png') },
  { id: 'lancer5', levelRequired: 1, label: 'Lancer 5', isGif: false, source: require('../../Profil/Pfp/Niveau1/Lancer5.png') },
  { id: 'rulskard', levelRequired: 1, label: 'Rouxls Kaard', isGif: false, source: require('../../Profil/Pfp/Niveau1/RulsKard.png') },
  { id: 'rulskard2', levelRequired: 1, label: 'Rouxls Kaard 2', isGif: false, source: require('../../Profil/Pfp/Niveau1/RulsKard2.png') },
  { id: 'rulskard3', levelRequired: 1, label: 'Rouxls Kaard 3', isGif: false, source: require('../../Profil/Pfp/Niveau1/RulsKard3.png') },
  { id: 'toriel1', levelRequired: 1, label: 'Toriel', isGif: false, source: require('../../Profil/Pfp/Niveau1/Toriel1.png') },
  { id: 'toriel2', levelRequired: 1, label: 'Toriel 2', isGif: false, source: require('../../Profil/Pfp/Niveau1/Toriel2.png') },

  // Niveau 2
  { id: 'berdly1', levelRequired: 2, label: 'Berdly', isGif: false, source: require('../../Profil/Pfp/Niveau2/berdly1.png') },
  { id: 'berdly2', levelRequired: 2, label: 'Berdly 2', isGif: false, source: require('../../Profil/Pfp/Niveau2/berdly2.png') },
  { id: 'berdly3', levelRequired: 2, label: 'Berdly 3', isGif: false, source: require('../../Profil/Pfp/Niveau2/berdly3.png') },
  { id: 'noelle', levelRequired: 2, label: 'Noelle', isGif: false, source: require('../../Profil/Pfp/Niveau2/Noelle.png') },
  { id: 'noelle2', levelRequired: 2, label: 'Noelle 2', isGif: false, source: require('../../Profil/Pfp/Niveau2/Noelle2.png') },
  { id: 'noelle3', levelRequired: 2, label: 'Noelle 3', isGif: false, source: require('../../Profil/Pfp/Niveau2/Noelle3.png') },
  { id: 'noelle4', levelRequired: 2, label: 'Noelle 4', isGif: false, source: require('../../Profil/Pfp/Niveau2/Noelle4.png') },
  { id: 'queen1', levelRequired: 2, label: 'Queen', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen1.png') },
  { id: 'queen2', levelRequired: 2, label: 'Queen 2', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen2.png') },
  { id: 'queen3', levelRequired: 2, label: 'Queen 3', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen3.png') },
  { id: 'queen4', levelRequired: 2, label: 'Queen 4', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen4.png') },
  { id: 'queen5', levelRequired: 2, label: 'Queen 5', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen5.png') },
  { id: 'queen6', levelRequired: 2, label: 'Queen 6', isGif: false, source: require('../../Profil/Pfp/Niveau2/Queen6.png') },
  { id: 'spamton1', levelRequired: 2, label: 'Spamton', isGif: false, source: require('../../Profil/Pfp/Niveau2/Spamton1.png') },
  { id: 'spamton2', levelRequired: 2, label: 'Spamton 2', isGif: false, source: require('../../Profil/Pfp/Niveau2/Spamton2.png') },
  { id: 'spamton3', levelRequired: 2, label: 'Spamton 3', isGif: false, source: require('../../Profil/Pfp/Niveau2/Spamton3.png') },
  { id: 'spamton4', levelRequired: 2, label: 'Spamton 4', isGif: false, source: require('../../Profil/Pfp/Niveau2/Spamton4.png') },
  { id: 'spamton5', levelRequired: 2, label: 'Spamton 5', isGif: false, source: require('../../Profil/Pfp/Niveau2/Spamton5.png') },

  // Niveau 3
  { id: 'enemie1_nv3', levelRequired: 3, label: 'Sweet', isGif: false, source: require('../../Profil/Pfp/Niveau3/enemie1.png') },
  { id: 'enemie2_nv3', levelRequired: 3, label: 'Cap\'n', isGif: false, source: require('../../Profil/Pfp/Niveau3/enemie2.png') },
  { id: 'enemie3_nv3', levelRequired: 3, label: 'K_K', isGif: false, source: require('../../Profil/Pfp/Niveau3/enemie3.png') },
  { id: 'enemie4_nv3', levelRequired: 3, label: 'Tasque Manager', isGif: false, source: require('../../Profil/Pfp/Niveau3/enemie4.png') },
  { id: 'enemie5_nv3', levelRequired: 3, label: 'Virovirokun', isGif: false, source: require('../../Profil/Pfp/Niveau3/enemie5.png') },
  { id: 'knight1_nv3', levelRequired: 3, label: 'Knight', isGif: false, source: require('../../Profil/Pfp/Niveau3/knight1.png') },
  { id: 'knight2_nv3', levelRequired: 3, label: 'Knight 2', isGif: false, source: require('../../Profil/Pfp/Niveau3/knight2.png') },
  { id: 'knight3_nv3', levelRequired: 3, label: 'Knight 3', isGif: false, source: require('../../Profil/Pfp/Niveau3/knight3.png') },
  { id: 'knight4_nv3', levelRequired: 3, label: 'Knight 4', isGif: false, source: require('../../Profil/Pfp/Niveau3/knight4.png') },
  { id: 'knight5_nv3', levelRequired: 3, label: 'Knight 5', isGif: false, source: require('../../Profil/Pfp/Niveau3/knight5.png') },
  { id: 'nuage1', levelRequired: 3, label: 'Werewire', isGif: false, source: require('../../Profil/Pfp/Niveau3/Nuage1.png') },
  { id: 'nuage2', levelRequired: 3, label: 'Maus', isGif: false, source: require('../../Profil/Pfp/Niveau3/Nuage2.png') },
  { id: 'nuage3', levelRequired: 3, label: 'Ambyu-Lance', isGif: false, source: require('../../Profil/Pfp/Niveau3/Nuage3.png') },
  { id: 'nuage4', levelRequired: 3, label: 'Virovirokun 2', isGif: false, source: require('../../Profil/Pfp/Niveau3/Nuage4.png') },
  { id: 'nuage5', levelRequired: 3, label: 'Tasque', isGif: false, source: require('../../Profil/Pfp/Niveau3/Nuage5.png') },
  { id: 'tenna1', levelRequired: 3, label: 'Tenna', isGif: false, source: require('../../Profil/Pfp/Niveau3/Tenna1.png') },
  { id: 'tenna2', levelRequired: 3, label: 'Tenna 2', isGif: false, source: require('../../Profil/Pfp/Niveau3/Tenna2.png') },
  { id: 'tenna3', levelRequired: 3, label: 'Tenna 3', isGif: false, source: require('../../Profil/Pfp/Niveau3/Tenna3.png') },
  { id: 'tenna4', levelRequired: 3, label: 'Tenna 4', isGif: false, source: require('../../Profil/Pfp/Niveau3/Tenna4.png') },
  { id: 'tenna5', levelRequired: 3, label: 'Tenna 5', isGif: false, source: require('../../Profil/Pfp/Niveau3/Tenna5.png') },

  // Niveau 4
  { id: 'enemie1_nv4', levelRequired: 4, label: 'Joker', isGif: false, source: require('../../Profil/Pfp/Niveau4/enemie1.png') },
  { id: 'enemie2_nv4', levelRequired: 4, label: 'Diamond', isGif: false, source: require('../../Profil/Pfp/Niveau4/enemie2.png') },
  { id: 'enemie3_nv4', levelRequired: 4, label: 'Heart', isGif: false, source: require('../../Profil/Pfp/Niveau4/enemie3.png') },
  { id: 'enemie4_nv4', levelRequired: 4, label: 'Spade', isGif: false, source: require('../../Profil/Pfp/Niveau4/enemie4.png') },
  { id: 'enemie5_nv4', levelRequired: 4, label: 'Clover', isGif: false, source: require('../../Profil/Pfp/Niveau4/enemie5.png') },
  { id: 'gerson1', levelRequired: 4, label: 'Gerson', isGif: false, source: require('../../Profil/Pfp/Niveau4/gerson1.png') },
  { id: 'gerson2', levelRequired: 4, label: 'Gerson 2', isGif: false, source: require('../../Profil/Pfp/Niveau4/gerson2.png') },
  { id: 'gerson3', levelRequired: 4, label: 'Gerson 3', isGif: false, source: require('../../Profil/Pfp/Niveau4/gerson3.png') },
  { id: 'gerson4', levelRequired: 4, label: 'Gerson 4', isGif: false, source: require('../../Profil/Pfp/Niveau4/gerson4.png') },
  { id: 'gerson5', levelRequired: 4, label: 'Gerson 5', isGif: false, source: require('../../Profil/Pfp/Niveau4/gerson5.png') },
  { id: 'jack1', levelRequired: 4, label: 'Jack', isGif: false, source: require('../../Profil/Pfp/Niveau4/jack1.png') },
  { id: 'jack2', levelRequired: 4, label: 'Jack 2', isGif: false, source: require('../../Profil/Pfp/Niveau4/jack2.png') },
  { id: 'jack3', levelRequired: 4, label: 'Jack 3', isGif: false, source: require('../../Profil/Pfp/Niveau4/jack3.png') },
  { id: 'jack4', levelRequired: 4, label: 'Jack 4', isGif: false, source: require('../../Profil/Pfp/Niveau4/jack4.png') },
  { id: 'jack5', levelRequired: 4, label: 'Jack 5', isGif: false, source: require('../../Profil/Pfp/Niveau4/jack5.png') },
  { id: 'titan1', levelRequired: 4, label: 'Titan', isGif: false, source: require('../../Profil/Pfp/Niveau4/titan1.png') },
  { id: 'titan2', levelRequired: 4, label: 'Titan 2', isGif: false, source: require('../../Profil/Pfp/Niveau4/titan2.png') },
  { id: 'titan3', levelRequired: 4, label: 'Titan 3', isGif: false, source: require('../../Profil/Pfp/Niveau4/titan3.png') },
  { id: 'titan4', levelRequired: 4, label: 'Titan 4', isGif: false, source: require('../../Profil/Pfp/Niveau4/titan4.png') },

  // Niveau 5
  { id: 'aqua1', levelRequired: 5, label: 'Aqua', isGif: false, source: require('../../Profil/Pfp/Niveau5/aqua1.png') },
  { id: 'aqua2', levelRequired: 5, label: 'Aqua 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/aqua2.png') },
  { id: 'blue1', levelRequired: 5, label: 'Blue', isGif: false, source: require('../../Profil/Pfp/Niveau5/blue1.png') },
  { id: 'blue2', levelRequired: 5, label: 'Blue 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/blue2.png') },
  { id: 'flowery1', levelRequired: 5, label: 'Flowery', isGif: false, source: require('../../Profil/Pfp/Niveau5/flowery1.png') },
  { id: 'flowery2', levelRequired: 5, label: 'Flowery 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/flowery2.png') },
  { id: 'green1', levelRequired: 5, label: 'Green', isGif: false, source: require('../../Profil/Pfp/Niveau5/green1.png') },
  { id: 'green2', levelRequired: 5, label: 'Green 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/green2.png') },
  { id: 'orange1', levelRequired: 5, label: 'Orange', isGif: false, source: require('../../Profil/Pfp/Niveau5/orange1.png') },
  { id: 'orange2', levelRequired: 5, label: 'Orange 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/orange2.png') },
  { id: 'pink1', levelRequired: 5, label: 'Pink', isGif: false, source: require('../../Profil/Pfp/Niveau5/pink1.png') },
  { id: 'pink2', levelRequired: 5, label: 'Pink 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/pink2.png') },
  { id: 'pink3', levelRequired: 5, label: 'Pink 3', isGif: false, source: require('../../Profil/Pfp/Niveau5/pink3.png') },
  { id: 'pink4', levelRequired: 5, label: 'Pink 4', isGif: false, source: require('../../Profil/Pfp/Niveau5/pink4.png') },
  { id: 'seth1', levelRequired: 5, label: 'Seth', isGif: false, source: require('../../Profil/Pfp/Niveau5/seth1.png') },
  { id: 'seth2', levelRequired: 5, label: 'Seth 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/seth2.png') },
  { id: 'yellow1', levelRequired: 5, label: 'Yellow', isGif: false, source: require('../../Profil/Pfp/Niveau5/yellow1.png') },
  { id: 'yellow2', levelRequired: 5, label: 'Yellow 2', isGif: false, source: require('../../Profil/Pfp/Niveau5/yellow2.png') },

  // Niveau 6
  { id: 'star1', levelRequired: 6, label: 'Star', isGif: false, source: require('../../Profil/Pfp/Niveau6/Star1.png') },
  { id: 'star2', levelRequired: 6, label: 'Star 2', isGif: false, source: require('../../Profil/Pfp/Niveau6/Star2.png') },
  { id: 'star3', levelRequired: 6, label: 'Star 3', isGif: false, source: require('../../Profil/Pfp/Niveau6/Star3.png') },
  { id: 'star4', levelRequired: 6, label: 'Star 4', isGif: false, source: require('../../Profil/Pfp/Niveau6/Star4.png') },
  { id: 'banana', levelRequired: 6, label: 'Banana', isGif: false, source: require('../../Profil/Pfp/Niveau6/banana.png') },
  { id: 'ice', levelRequired: 6, label: 'Ice', isGif: false, source: require('../../Profil/Pfp/Niveau6/ice.png') },
];

// ── Fonds par niveau ────────────────────────────────────────────────────────
export const BACKGROUNDS_COLLECTION: ProfileAsset[] = [
  // Niveau 0
  { id: 'school', levelRequired: 0, label: 'School', isGif: false, source: require('../../Profil/Fonds/Niveau0/School.png') },
  { id: 'school2', levelRequired: 0, label: 'School 2', isGif: false, source: require('../../Profil/Fonds/Niveau0/School2.png') },
  { id: 'dreemurhouse', levelRequired: 0, label: 'Dreemur House', isGif: false, source: require('../../Profil/Fonds/Niveau0/dreemurhouse.png') },

  // Niveau 1
  { id: 'cafe', levelRequired: 1, label: 'Cafe', isGif: false, source: require('../../Profil/Fonds/Niveau1/Cafe.png') },
  { id: 'castle_gif', levelRequired: 1, label: 'Castle', isGif: true, source: require('../../Profil/Fonds/Niveau1/Castle.gif') },
  { id: 'castletown_gif', levelRequired: 1, label: 'Castle Town', isGif: true, source: require('../../Profil/Fonds/Niveau1/castletown.gif') },

  // Niveau 2
  { id: 'city', levelRequired: 2, label: 'City', isGif: false, source: require('../../Profil/Fonds/Niveau2/city.png') },
  { id: 'manor', levelRequired: 2, label: 'Manor', isGif: false, source: require('../../Profil/Fonds/Niveau2/manor.png') },
  { id: 'manor2', levelRequired: 2, label: 'Manor 2', isGif: false, source: require('../../Profil/Fonds/Niveau2/manor2.png') },
  { id: 'noellroom', levelRequired: 2, label: 'Noelle Room', isGif: false, source: require('../../Profil/Fonds/Niveau2/noellroom.png') },

  // Niveau 3
  { id: 'boardgame', levelRequired: 3, label: 'Board Game', isGif: false, source: require('../../Profil/Fonds/Niveau3/boardgame.png') },
  { id: 'greenroom', levelRequired: 3, label: 'Green Room', isGif: false, source: require('../../Profil/Fonds/Niveau3/greenroom.png') },
  { id: 'susizilla', levelRequired: 3, label: 'Susiezilla', isGif: false, source: require('../../Profil/Fonds/Niveau3/susizilla.png') },
  { id: 'tvworld_gif', levelRequired: 3, label: 'TV World', isGif: true, source: require('../../Profil/Fonds/Niveau3/tvworld.gif') },

  // Niveau 4
  { id: 'fountain_gif', levelRequired: 4, label: 'Dark Fountain', isGif: true, source: require('../../Profil/Fonds/Niveau4/Fountain.gif') },
  { id: 'gerson_gif', levelRequired: 4, label: 'Gerson Fountain', isGif: true, source: require('../../Profil/Fonds/Niveau4/gerson.gif') },
  { id: 'sanctuary', levelRequired: 4, label: 'Sanctuary', isGif: false, source: require('../../Profil/Fonds/Niveau4/sanctuary.png') },
  { id: 'sanctuary2', levelRequired: 4, label: 'Sanctuary 2', isGif: false, source: require('../../Profil/Fonds/Niveau4/sanctuary2.png') },

  // Niveau 5
  { id: 'cemetery', levelRequired: 5, label: 'Cemetery', isGif: false, source: require('../../Profil/Fonds/Niveau5/cemetery.png') },
  { id: 'cowboygame_gif', levelRequired: 5, label: 'Cowboy Game', isGif: true, source: require('../../Profil/Fonds/Niveau5/cowboygame.gif') },
  { id: 'darkness', levelRequired: 5, label: 'Darkness', isGif: false, source: require('../../Profil/Fonds/Niveau5/darkness.png') },
  { id: 'garden_gif', levelRequired: 5, label: 'Garden', isGif: true, source: require('../../Profil/Fonds/Niveau5/garden.gif') },

  // Niveau 6
  { id: 'prophecie', levelRequired: 6, label: 'Prophecie', isGif: false, source: require('../../Profil/Fonds/Niveau6/Prophecie.png') },
  { id: 'battle_gif', levelRequired: 6, label: 'Battle', isGif: true, source: require('../../Profil/Fonds/Niveau6/battle.gif') },
  { id: 'prophecie2', levelRequired: 6, label: 'Prophecie 2', isGif: false, source: require('../../Profil/Fonds/Niveau6/prophecie2.png') },
  { id: 'technicalldifficulties', levelRequired: 6, label: 'Tech Difficulties', isGif: false, source: require('../../Profil/Fonds/Niveau6/technicalldifficulties.png') },
];
