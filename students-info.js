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
   bgs: 19 + 27,
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
   bgs: 19 + 27,
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
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD AZMAYEEN INKIAD",
  roll: 13,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SANIM AHMED",
  roll: 14,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "AYON ROY",
  roll: 15,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "SHAJID KHAN SHIMANTO",
  roll: 16,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},

 {
  name: "PANTHO SHAHA",
  roll: 17,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},

 {
  name: "MD MARUF BILLAH",
  roll: 19,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "TAHSIN ISLAM RAFIN",
  roll: 22,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
 {
  name: "MD ALVI KHAN",
  roll: 24,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
 },
 {
  name: "MD NAHIDUL ALAM",
  roll: 25,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "MD KHUSNOD FAIYAJ OIKKO",
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "MOHAMMAD ZAYADUR RAHMAN",
  roll: 34,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "MITAB AHMED",
  roll: 35,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "MEHARAN MAZHAR ESHAN",
  roll: 40,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "AL SHAHARIA NIRAV",
  roll: 41,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "KAZI ALIMUL ISLAM",
  roll: 46,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "SAYED AL AMIN",
  roll: 47,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
},
{
  name: "SHADMAN ISLAM NIHAL",
  roll: 48,
  numbers: {
   bn1: 0,
   bn2: 0,
   en1: 0,
   en2: 0,
   math: 0,
   bgs: 0,
   sci: 0,
   rel: 0,
   ict: 0,
  },
  totalNumber() {
   return countNumber(this)
  }
}

];

// exporting students data

export { students };