/*******************************
 * 1) Define Buff Arrays
 *******************************/
// =============================
// Attacker Buffs
// =============================
const attackerBuffs = [
  {name: 'Basic Power+', depth: 1, intensity: 2, canRepeat: true},
  {name: 'Skill Power+', depth: 1, intensity: 2, canRepeat: true},
  {name: 'Adjacent Damage Dealt +20%', depth: 2, intensity: 3, canRepeat: true},
  {
    name: 'Damage Dealt at Maximum Range +20%',
    depth: 2,
    intensity: 3,
    canRepeat: true
  },
  {name: 'Armor Ignore +25%', depth: 2, intensity: 3, canRepeat: true},
  {name: 'Critical Chance +20%', depth: 3, intensity: 5, canRepeat: true},
  {name: 'Evade Chance +10%', depth: 3, intensity: 5, canRepeat: true},
  {name: 'Power+', depth: 4, intensity: 4, canRepeat: true}, {
    name: 'Can use 2 Combat Arts at once',
    depth: 4,
    intensity: 6,
    canRepeat: false
  },
  {
    name: 'Basic Attack Multihit Hits+',
    depth: 4,
    intensity: 6,
    canRepeat: true
  },
  {
    name: 'After defeating an enemy, FP +1',
    depth: 4,
    intensity: 6,
    canRepeat: false
  },
  {
    name: 'Grants the ability to Charge Skills',
    depth: 5,
    intensity: 8,
    canRepeat: false
  }
];

// =============================
// Defender Buffs
// =============================
const defenderBuffs = [
  {name: 'Standard Armor+', depth: 1, intensity: 2, canRepeat: true},
  {name: 'Prismatic Armor+', depth: 1, intensity: 3, canRepeat: true},
  {name: 'Area Damage Taken -33%', depth: 3, intensity: 4, canRepeat: true}, {
    name:
        'After falling to 50% Health, grants Toughness +3 for the remainder of the round',
    depth: 3,
    intensity: 4,
    canRepeat: false
  },
  {
    name: '20% Chance to halve Damage Taken',
    depth: 3,
    intensity: 4,
    canRepeat: true
  },
  {
    name: 'Next Armor +1 at the beginning of each round',
    depth: 3,
    intensity: 4,
    canRepeat: false
  },
  {name: 'Armor+', depth: 4, intensity: 5, canRepeat: true}, {
    name: 'Bracing now grants Toughness +1',
    depth: 4,
    intensity: 5,
    canRepeat: false
  },
  {
    name: 'Resting now grants Damage Taken -25%',
    depth: 4,
    intensity: 5,
    canRepeat: false
  },
  {
    name: 'When drawing Aggro, Provokes instead',
    depth: 4,
    intensity: 5,
    canRepeat: false
  },
  {name: 'Toughness+', depth: 5, intensity: 7, canRepeat: false}, {
    name: 'Toughness +1 for every two enemies on the field (Max +3)',
    depth: 5,
    intensity: 6,
    canRepeat: false
  }
];

// =============================
// Supporter Buffs
// =============================
const supporterBuffs = [
  {name: 'Support Skill Cost-', depth: 1, intensity: 2, canRepeat: true},
  {name: 'Attacker/Defender Level +1', depth: 1, intensity: 3, canRepeat: true},
  {
    name: 'Attacker/Defender Memory +1',
    depth: 1,
    intensity: 3,
    canRepeat: true
  },
  {
    name: 'Attacker/Defender Options +1',
    depth: 1,
    intensity: 3,
    canRepeat: true
  },
  {name: 'Healing Effectiveness +33%', depth: 3, intensity: 3, canRepeat: true},
  {
    name: 'Supporter Actives restore 2 Health',
    depth: 3,
    intensity: 4,
    canRepeat: true
  },
  {
    name: 'Attackers gain Stamina/Focus Regen +1 on Even Rounds',
    depth: 3,
    intensity: 5,
    canRepeat: false
  },
  {
    name: 'Defenders activate Health Regen on Even Rounds',
    depth: 3,
    intensity: 5,
    canRepeat: false
  },
  {
    name: 'Transfer and Comfort can now be used regardless of range',
    depth: 4,
    intensity: 5,
    canRepeat: false
  },
  {name: 'Cost-', depth: 5, intensity: 7, canRepeat: true}, {
    name: '2 Supporter Actives usable for Zero FP each round',
    depth: 5,
    intensity: 8,
    canRepeat: false
  },
  {
    name: 'Once per encounter, if ally Health falls to 0, restores them to 50%',
    depth: 5,
    intensity: 8,
    canRepeat: true
  }
];

// =============================
// Fool Buffs
// =============================
const foolBuffs = [
  {name: 'Combat Arts+', depth: 1, intensity: 3, canRepeat: true},
  {name: 'Defender Actives+', depth: 1, intensity: 3, canRepeat: true},
  {name: 'Supporter Actives+', depth: 1, intensity: 3, canRepeat: true},
  {name: 'Even Round Power+', depth: 2, intensity: 3, canRepeat: true},
  {name: 'Odd Round Cost-', depth: 2, intensity: 3, canRepeat: true},
  {name: 'Post-Encounter Money +50', depth: 2, intensity: 4, canRepeat: true},
  {name: 'Skill Mastery+', depth: 3, intensity: 5, canRepeat: false},
  {name: 'Defender Passives+', depth: 3, intensity: 5, canRepeat: true}, {
    name: 'Zero FP Basic Attack every 2 rounds',
    depth: 4,
    intensity: 5,
    canRepeat: false
  },
  {
    name: '33% Chance to halve Damage Taken',
    depth: 5,
    intensity: 7,
    canRepeat: false
  },
  {name: 'Critical Chance +33%', depth: 5, intensity: 7, canRepeat: false},
  {name: 'Healing Effectiveness +50%', depth: 5, intensity: 8, canRepeat: true}
];

// =============================
// general Buffs
// =============================
const generalBuffs = [
  {name: 'Ammo Stock+/Coating Uses+', depth: 1, intensity: 2, canRepeat: true},
  {name: 'Starting FP+', depth: 2, intensity: 3, canRepeat: false},
  {name: 'Skill Mastery +5', depth: 2, intensity: 3, canRepeat: true},
  {name: 'Money +150', depth: 2, intensity: 4, canRepeat: true},
  {name: 'Level +2', depth: 2, intensity: 4, canRepeat: true},
  {name: 'Status Damage Taken -2', depth: 2, intensity: 2, canRepeat: true}, {
    name: 'Recovers 33% Max Health after encounter',
    depth: 3,
    intensity: 4,
    canRepeat: true
  },
  {
    name: 'Recovers 33% Max Stamina/Focus after encounter',
    depth: 3,
    intensity: 4,
    canRepeat: true
  },
  {
    name: 'Recovers 33% Max Purity after encounter',
    depth: 3,
    intensity: 5,
    canRepeat: true
  },
  {name: 'Memory+', depth: 3, intensity: 4, canRepeat: true},
  {name: 'Health +4', depth: 4, intensity: 5, canRepeat: true},
  {name: 'Stamina +2', depth: 4, intensity: 5, canRepeat: true},
  {name: 'Focus +2', depth: 4, intensity: 5, canRepeat: true},
  {name: 'FP +1 every 3rd Round', depth: 4, intensity: 4, canRepeat: false}
];

/************************************************
 * 2) LABYRINTH BUFFS: STATE + LOGIC
 ************************************************/
let currentRole = 'attacker';
let currentDepth = 2;
let roleBuffCount = 2;
let generalBuffCount = 2;

let chosenBuffs = [];  // final labyrinth buffs chosen

// Utility: shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Return correct role pool
function getRoleBuffPool(role) {
  switch (role) {
    case 'attacker':
      return attackerBuffs;
    case 'defender':
      return defenderBuffs;
    case 'supporter':
      return supporterBuffs;
    case 'fool':
      return foolBuffs;
    default:
      return [];
  }
}

// Filter out depth + duplicates
function getAvailableLabyrinthBuffs(pool, chosenSoFar) {
  return pool.filter(
      buff => buff.depth <= currentDepth &&
          !chosenSoFar.some(chosen => chosen.name === buff.name));
}

function pickUniqueLabyrinthBuffs(pool, count, chosenSoFar) {
  let available = getAvailableLabyrinthBuffs(pool, chosenSoFar);
  shuffleArray(available);
  if (count > available.length) {
    count = available.length;
  }
  return available.slice(0, count);
}

// Combine role + general picks
function getLabyrinthBuffChoices() {
  let result = [];
  let rolePool = getRoleBuffPool(currentRole);
  const rolePicked = pickUniqueLabyrinthBuffs(rolePool, roleBuffCount, result);
  result = result.concat(rolePicked);

  const generalPicked =
      pickUniqueLabyrinthBuffs(generalBuffs, generalBuffCount, result);
  result = result.concat(generalPicked);

  return result;
}

// Render labyrinth buffs
function renderBuffs() {
  const container = document.getElementById('buffsContainer');
  container.innerHTML = '';

  chosenBuffs.forEach((buff, index) => {
    const div = document.createElement('div');
    div.className = 'buff-card';
    div.innerHTML = `
      <h3>${buff.name}</h3>
      <p><strong>Depth:</strong> ${buff.depth}</p>
      <p><strong>Intensity:</strong> ${buff.intensity}</p>
      <p><strong>Repeat:</strong> ${buff.canRepeat ? 'Yes' : 'No'}</p>
      <button class="rerollOneBtn" data-index="${index}">Reroll</button>
    `;
    container.appendChild(div);
  });

  // Reroll single
  document.querySelectorAll('.rerollOneBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-index'), 10);
      rerollOneBuff(i);
    });
  });
}

function rerollAll() {
  chosenBuffs = getLabyrinthBuffChoices();
  renderBuffs();
}

function rerollOneBuff(index) {
  const oldBuff = chosenBuffs[index];
  chosenBuffs.splice(index, 1);

  const isRoleBuff = (index < roleBuffCount);
  const relevantPool = isRoleBuff ? getRoleBuffPool(currentRole) : generalBuffs;

  let candidates = getAvailableLabyrinthBuffs(relevantPool, chosenBuffs);
  shuffleArray(candidates);

  if (candidates.length > 0) {
    chosenBuffs.splice(index, 0, candidates[0]);
  } else {
    chosenBuffs.splice(index, 0, oldBuff);  // revert
  }
  renderBuffs();
}

/***********************************************************
 * 3) TWO GM INTENSITY POOLS
 ***********************************************************/
// The main GM Intensity Effects array
const gmIntensityEffects = [
  // name                  cost  IntDepth 2ndDepth canRepeat
  {
    name: 'Skill 3',
    intensityCost: 3,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: false,
    weight: 7
  },
  {
    name: 'Skill 4',
    intensityCost: 4,
    intensityDepth: 15,
    secondDepth: 27,
    canRepeat: false,
    weight: 5
  },
  {
    name: 'Skill 5',
    intensityCost: 6,
    intensityDepth: 30,
    secondDepth: 36,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Heavy 1',
    intensityCost: 4,
    intensityDepth: 15,
    secondDepth: 22,
    canRepeat: false,
    weight: 5
  },
  {
    name: 'Heavy 2',
    intensityCost: 7,
    intensityDepth: 35,
    secondDepth: 35,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Skill Booster',
    intensityCost: 7,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 5
  },
  {
    name: 'Heavy Booster',
    intensityCost: 9,
    intensityDepth: 30,
    secondDepth: 50,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Extra Passive',
    intensityCost: 8,
    intensityDepth: 1,
    secondDepth: 20,
    canRepeat: false,
    weight: 5
  },
  {
    name: 'Move Booster',
    intensityCost: 3,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Speed Booster',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Bleed/Drain Reducer',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Role Priority',
    intensityCost: 6,
    intensityDepth: 5,
    secondDepth: 15,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Cooldown Remover',
    intensityCost: 5,
    intensityDepth: 15,
    secondDepth: 25,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'FP Booster',
    intensityCost: 14,
    intensityDepth: 25,
    secondDepth: 50,
    canRepeat: false,
    weight: 1
  },
  {
    name: 'Divergence',
    intensityCost: 10,
    intensityDepth: 30,
    secondDepth: 40,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Fragmented Divergence',
    intensityCost: 16,
    intensityDepth: 40,
    secondDepth: 70,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Weapon Power',
    intensityCost: 5,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Weapon Power+',
    intensityCost: 9,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Basic Strike Booster 1',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 15,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Basic Strike Booster 2',
    intensityCost: 8,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'Range Booster',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Range Booster+',
    intensityCost: 6,
    intensityDepth: 10,
    secondDepth: 20,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'Standard Armor Booster',
    intensityCost: 5,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Standard Armor Booster+',
    intensityCost: 9,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Prismatic Armor Booster',
    intensityCost: 5,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Prismatic Armor Booster+',
    intensityCost: 9,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Semi-Weakness Sealing',
    intensityCost: 8,
    intensityDepth: 10,
    secondDepth: 30,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Weakness Sealing',
    intensityCost: 13,
    intensityDepth: 30,
    secondDepth: 40,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'Semi-Resistance Booster',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Semi-Resistance Booster+',
    intensityCost: 8,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Resistance Booster',
    intensityCost: 8,
    intensityDepth: 10,
    secondDepth: 35,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Resistance Booster+',
    intensityCost: 13,
    intensityDepth: 35,
    secondDepth: 50,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Armor Ignore Booster',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Armor Ignore Booster+',
    intensityCost: 8,
    intensityDepth: 15,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Toughness Booster',
    intensityCost: 8,
    intensityDepth: 10,
    secondDepth: 30,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Toughness Booster+',
    intensityCost: 14,
    intensityDepth: 30,
    secondDepth: 50,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Health Booster',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 4
  },
  {
    name: 'Health Booster+',
    intensityCost: 9,
    intensityDepth: 25,
    secondDepth: 40,
    canRepeat: true,
    weight: 3
  },
  {
    name: 'Health Bar Booster 1',
    intensityCost: 6,
    intensityDepth: 10,
    secondDepth: 35,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Health Bar Booster 2',
    intensityCost: 13,
    intensityDepth: 35,
    secondDepth: 55,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'Break/Burst Booster',
    intensityCost: 2,
    intensityDepth: 1,
    secondDepth: 1,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Break/Burst Booster+',
    intensityCost: 4,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: true,
    weight: 2
  },
  {
    name: 'Hazard Tile',
    intensityCost: 4,
    intensityDepth: 1,
    secondDepth: 11,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Hazard Tile Surplus',
    intensityCost: 7,
    intensityDepth: 20,
    secondDepth: 40,
    canRepeat: false,
    weight: 2
  },
  {
    name: 'Critical Chance +20%',
    intensityCost: 6,
    intensityDepth: 10,
    secondDepth: 35,
    canRepeat: false,
    weight: 3
  },
  {
    name: 'Critical Chance +30%',
    intensityCost: 13,
    intensityDepth: 35,
    secondDepth: 55,
    canRepeat: false,
    weight: 2
  }
];


// Weaker → stronger map for overshadow upgrades
const gmUpgrades = {
  'Divergence': 'Fragmented Divergence',
  'Weapon Power': 'Weapon Power+',
  'Basic Strike Booster 1': 'Basic Strike Booster 2',
  'Range Booster': 'Range Booster+',
  'Standard Armor Booster': 'Standard Armor Booster+',
  'Prismatic Armor Booster': 'Prismatic Armor Booster+',
  'Semi-Resistance Booster': 'Semi-Resistance Booster+',
  'Resistance Booster': 'Resistance Booster+',
  'Armor Ignore Booster': 'Armor Ignore Booster+',
  'Health Booster': 'Health Booster+',
  'Break/Burst Booster': 'Break/Burst Booster+',
  'Hazard Tile': 'Hazard Tile Surplus',
  'Critical Chance +20%': 'Critical Chance +30%'
};

// The GM’s Intensity
let currentGMIntensity = 0;
let firstPoolCount = 4;
let secondPoolCount = 4;

let gmFirstChosen = [];
let gmSecondChosen = [];

/***********************************************************
 * Weighted selection logic
 *  pickWeightedItems(pool, count) => returns "count" distinct
 *  items from "pool," according to each item.weight
 ***********************************************************/
function pickWeightedItems(pool, count) {
  // We'll copy the array so we can remove items as we pick them
  let localPool = [...pool];
  let chosen = [];

  for (let i = 0; i < count; i++) {
    if (localPool.length === 0) break;

    // Compute total weight
    let totalWeight = localPool.reduce((sum, e) => sum + (e.weight || 1), 0);
    // Pick a random value in [0, totalWeight)
    let r = Math.random() * totalWeight;

    // Walk through localPool until we find the item that fits 'r'
    let cumulative = 0;
    for (let j = 0; j < localPool.length; j++) {
      cumulative += (localPool[j].weight || 1);
      if (r < cumulative) {
        // choose this item
        chosen.push(localPool[j]);
        // remove it so we don't pick it again
        localPool.splice(j, 1);
        break;
      }
    }
  }
  return chosen;
}

/**
 * Decide if second pool is used either because user toggles it
 * OR we auto-enable it at intensity >= 35.
 */
function useSecondPoolNow() {
  const cb = document.getElementById('secondPoolCheckbox');
  return cb.checked || currentGMIntensity >= 35;
}

/**
 * Build the "first" pool, overshadow logic, but do NOT remove items that also
 * fit second pool. Then pick "firstPoolCount" from it with weighted selection.
 */
function buildFirstPool(currentIntensity) {
  // filter by e.intensityDepth <= currentIntensity
  let pool =
      gmIntensityEffects.filter(e => e.intensityDepth <= currentIntensity);

  // overshadow logic
  pool = removeOvershadowedItems(pool, 'intensityDepth', currentIntensity);

  return pool;
}

/**
 * Build the "second" pool similarly, overshadow logic, then pick
 * "secondPoolCount" with weighting.
 */
function buildSecondPool(currentIntensity) {
  let pool = gmIntensityEffects.filter(e => e.secondDepth <= currentIntensity);

  pool = removeOvershadowedItems(pool, 'secondDepth', currentIntensity);
  return pool;
}

/**
 * removeOvershadowedItems: if weaker & stronger are both valid in the same
 * pool, remove the weaker one.
 */
function removeOvershadowedItems(pool, depthKey, currentIntensity) {
  let arr = [...pool];
  for (const weaker of pool) {
    const upgradeName = gmUpgrades[weaker.name];
    if (upgradeName) {
      const stronger = arr.find(e => e.name === upgradeName);
      if (stronger && stronger[depthKey] <= currentIntensity) {
        // remove the weaker
        arr = arr.filter(e => e !== weaker);
      }
    }
  }
  return arr;
}

/**
 * Build up to X items from each pool with weighted picking.
 * If "useSecondPoolNow()" is false, second pool is empty.
 */
function updateGMEffects(currentIntensity) {
  // read the new numeric inputs
  const fCount = document.getElementById('firstPoolCountInput');
  const sCount = document.getElementById('secondPoolCountInput');
  firstPoolCount = parseInt(fCount.value, 10) || 1;
  secondPoolCount = parseInt(sCount.value, 10) || 1;

  // 1) FIRST POOL
  let p1 = buildFirstPool(currentIntensity);
  // Weighted pick "firstPoolCount" from p1
  gmFirstChosen = pickWeightedItems(p1, firstPoolCount);

  // 2) SECOND POOL (optional)
  gmSecondChosen = [];
  if (useSecondPoolNow()) {
    let p2 = buildSecondPool(currentIntensity);
    gmSecondChosen = pickWeightedItems(p2, secondPoolCount);
  }

  renderFirstPool();
  renderSecondPool();
}

/**
 * Render the first pool's chosen items
 */
function renderFirstPool() {
  const container = document.getElementById('gmFirstPoolContainer');
  container.innerHTML = '';

  gmFirstChosen.forEach((ef, idx) => {
    const div = document.createElement('div');
    div.className = 'buff-card';
    div.innerHTML = `
      <h3>${ef.name} (1st)</h3>
      <p><strong>Cost:</strong> ${ef.intensityCost}</p>
      <p><strong>Depth:</strong> ${ef.intensityDepth}</p>
      <p><strong>Weight:</strong> ${ef.weight || 1}</p>
      <button class="rerollFirstBtn" data-index="${idx}">Reroll</button>
    `;
    container.appendChild(div);
  });

  // single reroll
  document.querySelectorAll('.rerollFirstBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-index'), 10);
      rerollOneFromFirstPool(i);
    });
  });
}

/**
 * Render the second pool's chosen items
 */
function renderSecondPool() {
  const container = document.getElementById('gmSecondPoolContainer');
  container.innerHTML = '';

  gmSecondChosen.forEach((ef, idx) => {
    const div = document.createElement('div');
    div.className = 'buff-card';
    div.innerHTML = `
      <h3>${ef.name} (2nd)</h3>
      <p><strong>Cost:</strong> ${ef.intensityCost}</p>
      <p><strong>Depth:</strong> ${ef.secondDepth}</p>
      <p><strong>Weight:</strong> ${ef.weight || 1}</p>
      <button class="rerollSecondBtn" data-index="${idx}">Reroll</button>
    `;
    container.appendChild(div);
  });

  // single reroll
  document.querySelectorAll('.rerollSecondBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.getAttribute('data-index'), 10);
      rerollOneFromSecondPool(i);
    });
  });
}

/**
 * Reroll everything from scratch
 */
function rerollAllGM() {
  updateGMEffects(currentGMIntensity);
}

/**
 * Reroll a single effect in the first pool
 */
function rerollOneFromFirstPool(index) {
  // remove the old effect from the chosen array
  const oldEffect = gmFirstChosen[index];
  gmFirstChosen.splice(index, 1);

  // rebuild the entire first pool
  let p1 = buildFirstPool(currentGMIntensity);
  // filter out anything already chosen in gmFirstChosen
  const existingNames = gmFirstChosen.map(e => e.name);
  p1 = p1.filter(e => !existingNames.includes(e.name));

  // pick Weighted 1 from p1
  const [newPick] = pickWeightedItems(p1, 1);
  if (newPick) {
    gmFirstChosen.splice(index, 0, newPick);
  } else {
    // revert
    gmFirstChosen.splice(index, 0, oldEffect);
  }
  renderFirstPool();
}

/**
 * Reroll a single effect in the second pool
 */
function rerollOneFromSecondPool(index) {
  const oldEffect = gmSecondChosen[index];
  gmSecondChosen.splice(index, 1);

  let p2 = buildSecondPool(currentGMIntensity);
  const existingNames = gmSecondChosen.map(e => e.name);
  p2 = p2.filter(e => !existingNames.includes(e.name));

  const [newPick] = pickWeightedItems(p2, 1);
  if (newPick) {
    gmSecondChosen.splice(index, 0, newPick);
  } else {
    gmSecondChosen.splice(index, 0, oldEffect);
  }
  renderSecondPool();
}

/**
 * Called when user updates GM Intensity or toggles second pool or changes # per
 * pool
 */
function updateGMIntensity() {
  const gmIntensityInput = document.getElementById('gmIntensityInput');
  currentGMIntensity = parseInt(gmIntensityInput.value, 10) || 0;

  // Rebuild the displayed lists
  updateGMEffects(currentGMIntensity);
}

/***********************************************************
 * 4) PAGE INIT
 ***********************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Labyrinth Buffs
  document.getElementById('updateSettingsBtn').addEventListener('click', () => {
    const roleSelect = document.getElementById('roleSelect');
    const depthInput = document.getElementById('depthInput');
    const roleCountInput = document.getElementById('roleCountInput');
    const generalCountInput = document.getElementById('generalCountInput');

    currentRole = roleSelect.value;
    currentDepth = parseInt(depthInput.value, 10) || 1;
    roleBuffCount = parseInt(roleCountInput.value, 10) || 1;
    generalBuffCount = parseInt(generalCountInput.value, 10) || 0;

    rerollAll();
  });
  document.getElementById('rerollAllBtn').addEventListener('click', rerollAll);

  // GM Intensity
  document.getElementById('updateGMIntensityBtn')
      .addEventListener('click', updateGMIntensity);
  document.getElementById('secondPoolCheckbox')
      .addEventListener('change', updateGMIntensity);
  document.getElementById('rerollAllGMBtn')
      .addEventListener('click', rerollAllGM);

  // Initialize labyrinth buffs
  chosenBuffs = getLabyrinthBuffChoices();
  renderBuffs();

  // Initialize GM effects
  updateGMEffects(currentGMIntensity);
});


/*
// Declare an array of arrays
const attacker = [];



// Add the first row
attacker.push([{"basic+":"basic2"}, {"skill+":"skill2"}]);

// Add the second row (with different number of elements)
attacker.push(["adjacent dd", "maximum range dd", "armor ignore"]);

// Example usage: print each row's elements
for (let i = 0; i < attacker.length; i++) {
  console.log(`Row ${i}: ${attacker[i].join(" | ")}`);
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

console.log("\ntest: ", attacker[0][1], "\n");

attacker[0].push({"range":"range2"});
console.log("rango?: ", attacker[0][2], "\n");

console.log("nothing: ", attacker[0][3], "\n");

console.log("thing: ", attacker[0][getRandomInt(attacker[0].length)], "\n");
*/

/*

On a webpage, have every intensity effect:

Checkbox the ones to add to the pool.
Then shuffle.

Take 3.

*/