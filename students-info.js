/**
 * Count total number of a student
 * @param {object} obj receive the current object
 */
var countNumber = (obj) => {
 return obj.numbers.bn1 + obj.numbers.bn2 + obj.numbers.en1 + obj.numbers.en2 + obj.numbers.math + obj.numbers.bgs + obj.numbers.sci + obj.numbers.rel + obj.numbers.ict;
};
var students = [
 {
  name: "MD AFAEID SARKER",
  roll: 7,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 45,
   en2: 22,
   math: 19 + 30,
   bgs: 20 + 27,
   sci: 20 + 29,
   rel: 20 + 25,
   ict: 9 + 12,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "KAUSAR HOSSAIN",
  roll: 8,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 46,
   en2: 23,
   math: 16 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 25,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SAMID AL HOSSAIN",
  roll: 12,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 46,
   en2: 24,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 28,
   rel: 20 + 23,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD AZMAYEEN INKIAD",
  roll: 13,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 46,
   en2: 23,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SANIM AHMED",
  roll: 14,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 45,
   en2: 23,
   math: 19 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "AYON ROY",
  roll: 15,
  numbers: {
   bn1: 20 + 24,
   bn2: 22,
   en1: 46,
   en2: 24,
   math: 20 + 30,
   bgs: 18 + 26,
   sci: 20 + 28,
   rel: 18 + 23,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SHAJID KHAN SHIMANTO",
  roll: 16,
  numbers: {
   bn1: 19 + 24,
   bn2: 21,
   en1: 46,
   en2: 24,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 28,
   rel: 20 + 24,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
},

 {
  name: "PANTHO SHAHA",
  roll: 17,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 45,
   en2: 23,
   math: 20 + 30,
   bgs: 19 + 25,
   sci: 20 + 26,
   rel: 18 + 23,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
},

 {
  name: "MD MARUF BILLAH",
  roll: 19,
  numbers: {
   bn1: 19 + 24,
   bn2: 21,
   en1: 45,
   en2: 23,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 22,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "TAHSIN ISLAM RAFIN",
  roll: 22,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 44,
   en2: 23,
   math: 20 + 30,
   bgs: 19 + 27,
   sci: 20 + 26,
   rel: 20 + 21,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD ALVI KHAN",
  roll: 24,
  numbers: {
   bn1: 18 + 23,
   bn2: 22,
   en1: 46,
   en2: 20,
   math: 20 + 16,
   bgs: 20 + 27,
   sci: 20 + 26,
   rel: 20 + 22,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
 },
 {
  name: "MD NAHIDUL ALAM",
  roll: 25,
  numbers: {
   bn1: 18 + 23,
   bn2: 22,
   en1: 45,
   en2: 23,
   math: 20 + 30,
   bgs: 19 + 26,
   sci: 20 + 26,
   rel: 20 + 23,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD KHUSNOD FAIYAJ OIKKO",
  roll: 26,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 45,
   en2: 22,
   math: 18 + 30,
   bgs: 20 + 26,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MOHAMMAD ZAYADUR RAHMAN",
  roll: 34,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 46,
   en2: 23,
   math: 19 + 30,
   bgs: 20 + 27,
   sci: 19 + 26,
   rel: 20 + 22,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MITAB AHMED",
  roll: 35,
  numbers: {
   bn1: 20 + 23,
   bn2: 22,
   en1: 44,
   en2: 22,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 22,
   ict: 15,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MEHARAN MAZHAR ESHAN",
  roll: 40,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 45,
   en2: 24,
   math: 20 + 30,
   bgs: 19 + 27,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "AL SHAHARIA NIRAV",
  roll: 41,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 44,
   en2: 23,
   math: 20 + 30,
   bgs: 18 + 26,
   sci: 19 + 27,
   rel: 20 + 22,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "KAZI ALIMUL ISLAM",
  roll: 46,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 46,
   en2: 24,
   math: 17 + 30,
   bgs: 18 + 27,
   sci: 20 + 27,
   rel: 19 + 24,
   ict: 21,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SAYED AL AMIN",
  roll: 47,
  numbers: {
   bn1: 19 + 24,
   bn2: 21,
   en1: 45,
   en2: 24,
   math: 20 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 21,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SHADMAN ISLAM NIHAL",
  roll: 48,
  numbers: {
   bn1: 17 + 23,
   bn2: 21,
   en1: 45,
   en2: 23,
   math: 20 + 30,
   bgs: 19 + 26,
   sci: 20 + 27,
   rel: 20 + 21,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD REZOWAN AHMED",
  roll: 50,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 42,
   en2: 22,
   math: 17 + 30,
   bgs: 20 + 26,
   sci: 20 + 27,
   rel: 19 + 21,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
 },
 {
  name: "MD HABIBUR RAHMAN HAMIM",
  roll: 51,
  numbers: {
   bn1: 14 + 23,
   bn2: 22,
   en1: 42,
   en2: 24,
   math: 12 + 30,
   bgs: 19 + 27,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
 },
 {
  name: "MD SADID MASUM",
  roll: 53,
  numbers: {
   bn1: 17 + 24,
   bn2: 21,
   en1: 46,
   en2: 21,
   math: 10 + 17,
   bgs: 19 + 23,
   sci: 20 + 27,
   rel: 19 + 21,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
  },
 {
  name: "MD RAHAT-UL-ISLAM RONY BHUIYA",
  roll: 54,
  numbers: {
   bn1: 18 + 24,
   bn2: 21,
   en1: 45,
   en2: 23,
   math: 20 + 30,
   bgs: 19 + 26,
   sci: 20 + 27,
   rel: 20 + 23,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "S M SAJID AHMED AYON",
  roll: 55,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 43,
   en2: 22,
   math: 19 + 30,
   bgs: 19 + 27,
   sci: 20 + 27,
   rel: 19 + 24,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "JUHAYER JAHIN",
  roll: 56,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 42,
   en2: 24,
   math: 18 + 30,
   bgs: 17 + 25,
   sci: 19 + 27,
   rel: 19 + 23,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "TAOHIDUL ISLAM",
  roll: 61,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 42,
   en2: 24,
   math: 17 + 30,
   bgs: 18 + 26,
   sci: 19 + 27,
   rel: 20 + 24,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "MD HASIBUL ISLAM TAMIM",
  roll: 64,
  numbers: {
   bn1: 18 + 24,
   bn2: 21,
   en1: 43,
   en2: 23,
   math: 15 + 26,
   bgs: 17 + 27,
   sci: 19 + 26,
   rel: 19 + 23,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "KOUSHIKH MISSION",
  roll: 65,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 43,
   en2: 22,
   math: 16 + 24,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 18 + 21,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "MD SHIHAB RAHMAN",
  roll: 66,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 42,
   en2: 19,
   math: 18 + 30,
   bgs: 19 + 27,
   sci: 19 + 26,
   rel: 20 + 24,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "MOHAMMAD TANJIM HOSSAIN",
  roll: 70,
  numbers: {
   bn1: 18 + 23,
   bn2: 21,
   en1: 43,
   en2: 23,
   math: 17 + 22,
   bgs: 18 + 25,
   sci: 20 + 25,
   rel: 20 + 21,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "SHAIKAT BHOWMIK",
  roll: 75,
  numbers: {
   bn1: 18 + 23,
   bn2: 22,
   en1: 40,
   en2: 22,
   math: 19 + 30,
   bgs: 20 + 27,
   sci: 19 + 27,
   rel: 18 + 20,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "ABDULLAH AL NOMAN",
  roll: 79,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 45,
   en2: 22,
   math: 20 + 30,
   bgs: 20 + 26,
   sci: 20 + 25,
   rel: 20 + 23,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
   },
 {
  name: "MD JUBAYER ISLAM",
  roll: 80,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 45,
   en2: 22,
   math: 17 + 30,
   bgs: 20 + 25,
   sci: 19 + 27,
   rel: 20 + 21,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "SERAJUM MONIR HAMIM",
  roll: 81,
  numbers: {
   bn1: 17 + 24,
   bn2: 21,
   en1: 46,
   en2: 21,
   math: 17 + 30,
   bgs: 20 + 25,
   sci: 18 + 26,
   rel: 20 + 22,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "SHAHRIAR AL NAFEE",
  roll: 82,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 42,
   en2: 23,
   math: 15 + 30,
   bgs: 16 + 25,
   sci: 20 + 27,
   rel: 20 + 21,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "IFTEKHER AHMED TUHIN",
  roll: 83,
  numbers: {
   bn1: 17 + 24,
   bn2: 22,
   en1: 46,
   en2: 23,
   math: 20 + 30,
   bgs: 17 + 25,
   sci: 18 + 24,
   rel: 20 + 21,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "SAMI UDDIN",
  roll: 85,
  numbers: {
   bn1: 18 + 23,
   bn2: 20,
   en1: 42,
   en2: 19,
   math: 14 + 21,
   bgs: 18 + 23,
   sci: 19 + 22,
   rel: 18 + 21,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD JAYED SALMAN",
  roll: 86,
  numbers: {
   bn1: 17 + 22,
   bn2: 21,
   en1: 42,
   en2: 23,
   math: 16 + 30,
   bgs: 18 + 26,
   sci: 18 + 27,
   rel: 19 + 23,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD MAHIRUJJAMAN MAHI",
  roll: 88,
  numbers: {
   bn1: 18 + 22,
   bn2: 21,
   en1: 45,
   en2: 23,
   math: 15 + 29,
   bgs: 19 + 26,
   sci: 20 + 25,
   rel: 19 + 23,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "NAWFAT ISLAM HAQUE SINAN",
  roll: 90,
  numbers: {
   bn1: 19 + 24,
   bn2: 22,
   en1: 45,
   en2: 23,
   math: 18 + 30,
   bgs: 18 + 27,
   sci: 19 + 27,
   rel: 19 + 22,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD ASIF MASUD",
  roll: 92,
  numbers: {
   bn1: 19 + 23,
   bn2: 22,
   en1: 44,
   en2: 23,
   math: 19 + 30,
   bgs: 18 + 27,
   sci: 19 + 27,
   rel: 19 + 24,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD SAJID KHANDAKER OYSHARJO",
  roll: 96,
  numbers: {
   bn1: 18 + 24,
   bn2: 22,
   en1: 41,
   en2: 23,
   math: 16 + 30,
   bgs: 20 + 27,
   sci: 20 + 27,
   rel: 20 + 22,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "NUHAT SIDDIQUE SHOTEJ",
  roll: 97,
  numbers: {
   bn1: 18 + 22,
   bn2: 21,
   en1: 42,
   en2: 23,
   math: 17 + 30,
   bgs: 20 + 24,
   sci: 20 + 27,
   rel: 19 + 23,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD MUSTAFIZUR RAHMAN MAHIM",
  roll: 98,
  numbers: {
   bn1: 18 + 23,
   bn2: 21,
   en1: 39,
   en2: 23,
   math: 17 + 30,
   bgs: 18 + 26,
   sci: 20 + 26,
   rel: 20 + 20,
   ict: 16,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD NISHAT HOSSAIN",
  roll: 99,
  numbers: {
   bn1: 18 + 23,
   bn2: 21,
   en1: 43,
   en2: 23,
   math: 18 + 30,
   bgs: 17 + 27,
   sci: 20 + 27,
   rel: 20 + 21,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "FAHIAZ HOSSEN MRIDUL",
  roll: 101,
  numbers: {
   bn1: 19 + 23,
   bn2: 22,
   en1: 40,
   en2: 21,
   math: 16 + 30,
   bgs: 13 + 26,
   sci: 16 + 25,
   rel: 18 + 23,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD SAFFAT HASAN SOUAD",
  roll: 102,
  numbers: {
   bn1: 18 + 23,
   bn2: 20,
   en1: 41,
   en2: 22,
   math: 18 + 30,
   bgs: 14 + 26,
   sci: 20 + 27,
   rel: 17 + 22,
   ict: 17,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD MAZID RAHMAN",
  roll: 110,
  numbers: {
   bn1: 18 + 23,
   bn2: 20,
   en1: 43,
   en2: 22,
   math: 17 + 30,
   bgs: 14 + 25,
   sci: 19 + 27,
   rel: 15 + 21,
   ict: 18,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "M MASHODUL HAQ JIHAN",
  roll: 113,
  numbers: {
   bn1: 17 + 23,
   bn2: 21,
   en1: 41,
   en2: 23,
   math: 15 + 30,
   bgs: 16 + 27,
   sci: 20 + 27,
   rel: 19 + 22,
   ict: 19,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

 {
  name: "MD ABDULLAH RAHMAN FARAZI",
  roll: 118,
  numbers: {
   bn1: 17 + 23,
   bn2: 21,
   en1: 38,
   en2: 23,
   math: 17 + 30,
   bgs: 19 + 27,
   sci: 19 + 26,
   rel: 18 + 22,
   ict: 20,
  },
  totalNumber() {
   return countNumber(this)
  }
   },

];