var rangesByBlock = {
  "Basic": [
    0,
    127
  ],
  "Latin": [
    128,
    591,
    7680,
    7935,
    11360,
    11391,
    42784,
    43007,
    43824,
    43887
  ],
  "IPA": [
    592,
    687
  ],
  "Spacing": [
    688,
    767
  ],
  "Combining": [
    768,
    879,
    6832,
    6911,
    7616,
    7679,
    8400,
    8447,
    65056,
    65071
  ],
  "Greek": [
    880,
    1023,
    7936,
    8191
  ],
  "Cyrillic": [
    1024,
    1327,
    11744,
    11775,
    42560,
    42655
  ],
  "Armenian": [
    1328,
    1423
  ],
  "Hebrew": [
    1424,
    1535
  ],
  "Arabic": [
    1536,
    1791,
    1872,
    1919,
    2208,
    2303,
    64336,
    65023,
    65136,
    65279,
    126464,
    126719
  ],
  "Syriac": [
    1792,
    1871
  ],
  "Thaana": [
    1920,
    1983
  ],
  "NKo": [
    1984,
    2047
  ],
  "Samaritan": [
    2048,
    2111
  ],
  "Mandaic": [
    2112,
    2143
  ],
  "Devanagari": [
    2304,
    2431,
    43232,
    43263
  ],
  "Bengali": [
    2432,
    2559
  ],
  "Gurmukhi": [
    2560,
    2687
  ],
  "Gujarati": [
    2688,
    2815
  ],
  "Oriya": [
    2816,
    2943
  ],
  "Tamil": [
    2944,
    3071
  ],
  "Telugu": [
    3072,
    3199
  ],
  "Kannada": [
    3200,
    3327
  ],
  "Malayalam": [
    3328,
    3455
  ],
  "Sinhala": [
    3456,
    3583,
    70112,
    70143
  ],
  "Thai": [
    3584,
    3711
  ],
  "Lao": [
    3712,
    3839
  ],
  "Tibetan": [
    3840,
    4095
  ],
  "Myanmar": [
    4096,
    4255,
    43488,
    43519,
    43616,
    43647
  ],
  "Georgian": [
    4256,
    4351,
    11520,
    11567
  ],
  "Hangul": [
    4352,
    4607,
    12592,
    12687,
    43360,
    43391,
    44032,
    55295
  ],
  "Ethiopic": [
    4608,
    5023,
    11648,
    11743,
    43776,
    43823
  ],
  "Cherokee": [
    5024,
    5119
  ],
  "Unified": [
    5120,
    5759,
    6320,
    6399
  ],
  "Ogham": [
    5760,
    5791
  ],
  "Runic": [
    5792,
    5887
  ],
  "Tagalog": [
    5888,
    5919
  ],
  "Hanunoo": [
    5920,
    5951
  ],
  "Buhid": [
    5952,
    5983
  ],
  "Tagbanwa": [
    5984,
    6015
  ],
  "Khmer": [
    6016,
    6143,
    6624,
    6655
  ],
  "Mongolian": [
    6144,
    6319
  ],
  "Limbu": [
    6400,
    6479
  ],
  "Tai": [
    6480,
    6527,
    6688,
    6831,
    43648,
    43743,
    119552,
    119647
  ],
  "New": [
    6528,
    6623
  ],
  "Buginese": [
    6656,
    6687
  ],
  "Balinese": [
    6912,
    7039
  ],
  "Sundanese": [
    7040,
    7103,
    7360,
    7375
  ],
  "Batak": [
    7104,
    7167
  ],
  "Lepcha": [
    7168,
    7247
  ],
  "Ol": [
    7248,
    7295
  ],
  "Vedic": [
    7376,
    7423
  ],
  "Phonetic": [
    7424,
    7615
  ],
  "General": [
    8192,
    8303
  ],
  "Superscripts": [
    8304,
    8351
  ],
  "Currency": [
    8352,
    8399
  ],
  "Letterlike": [
    8448,
    8527
  ],
  "Number": [
    8528,
    8591
  ],
  "Arrows": [
    8592,
    8703
  ],
  "Mathematical": [
    8704,
    8959,
    119808,
    120831
  ],
  "Miscellaneous": [
    8960,
    9215,
    9728,
    9983,
    10176,
    10223,
    10624,
    10751,
    11008,
    11263,
    127744,
    128511
  ],
  "Control": [
    9216,
    9279
  ],
  "Optical": [
    9280,
    9311
  ],
  "Enclosed": [
    9312,
    9471,
    12800,
    13055,
    127232,
    127743
  ],
  "Box": [
    9472,
    9599
  ],
  "Block": [
    9600,
    9631
  ],
  "Geometric": [
    9632,
    9727,
    128896,
    129023
  ],
  "Dingbats": [
    9984,
    10175
  ],
  "Supplemental": [
    10224,
    10239,
    10496,
    10623,
    10752,
    11007,
    11776,
    11903,
    129024,
    129279
  ],
  "Braille": [
    10240,
    10495
  ],
  "Glagolitic": [
    11264,
    11359
  ],
  "Coptic": [
    11392,
    11519,
    66272,
    66303
  ],
  "Tifinagh": [
    11568,
    11647
  ],
  "CJK": [
    11904,
    12031,
    12288,
    12351,
    12736,
    12783,
    13056,
    19903,
    19968,
    40959,
    63744,
    64255,
    65072,
    65103,
    131072,
    173791,
    173824,
    178207,
    194560,
    195103
  ],
  "Kangxi": [
    12032,
    12255
  ],
  "Ideographic": [
    12272,
    12287
  ],
  "Hiragana": [
    12352,
    12447
  ],
  "Katakana": [
    12448,
    12543,
    12784,
    12799
  ],
  "Bopomofo": [
    12544,
    12591,
    12704,
    12735
  ],
  "Kanbun": [
    12688,
    12703
  ],
  "Yijing": [
    19904,
    19967
  ],
  "Yi": [
    40960,
    42191
  ],
  "Lisu": [
    42192,
    42239
  ],
  "Vai": [
    42240,
    42559
  ],
  "Bamum": [
    42656,
    42751,
    92160,
    92735
  ],
  "Modifier": [
    42752,
    42783
  ],
  "Syloti": [
    43008,
    43055
  ],
  "Common": [
    43056,
    43071
  ],
  "Phags": [
    43072,
    43135
  ],
  "Saurashtra": [
    43136,
    43231
  ],
  "Kayah": [
    43264,
    43311
  ],
  "Rejang": [
    43312,
    43359
  ],
  "Javanese": [
    43392,
    43487
  ],
  "Cham": [
    43520,
    43615
  ],
  "Meetei": [
    43744,
    43775,
    43968,
    44031
  ],
  "High": [
    55296,
    56319
  ],
  "Low": [
    56320,
    57343
  ],
  "Private": [
    57344,
    63743
  ],
  "Alphabetic": [
    64256,
    64335
  ],
  "Variation": [
    65024,
    65039,
    917760,
    917999
  ],
  "Vertical": [
    65040,
    65055
  ],
  "Small": [
    65104,
    65135
  ],
  "Halfwidth": [
    65280,
    65519
  ],
  "Specials": [
    65520,
    65535
  ],
  "Linear": [
    65536,
    65791,
    67072,
    67455
  ],
  "Aegean": [
    65792,
    65855
  ],
  "Ancient": [
    65856,
    65999,
    119296,
    119375
  ],
  "Phaistos": [
    66000,
    66047
  ],
  "Lycian": [
    66176,
    66207
  ],
  "Carian": [
    66208,
    66271
  ],
  "Old": [
    66304,
    66351,
    66384,
    66431,
    66464,
    66527,
    68192,
    68255,
    68608,
    68687
  ],
  "Gothic": [
    66352,
    66383
  ],
  "Ugaritic": [
    66432,
    66463
  ],
  "Deseret": [
    66560,
    66639
  ],
  "Shavian": [
    66640,
    66687
  ],
  "Osmanya": [
    66688,
    66735
  ],
  "Elbasan": [
    66816,
    66863
  ],
  "Caucasian": [
    66864,
    66927
  ],
  "Cypriot": [
    67584,
    67647
  ],
  "Imperial": [
    67648,
    67679
  ],
  "Palmyrene": [
    67680,
    67711
  ],
  "Nabataean": [
    67712,
    67759
  ],
  "Phoenician": [
    67840,
    67871
  ],
  "Lydian": [
    67872,
    67903
  ],
  "Meroitic": [
    67968,
    68095
  ],
  "Kharoshthi": [
    68096,
    68191
  ],
  "Manichaean": [
    68288,
    68351
  ],
  "Avestan": [
    68352,
    68415
  ],
  "Inscriptional": [
    68416,
    68479
  ],
  "Psalter": [
    68480,
    68527
  ],
  "Rumi": [
    69216,
    69247
  ],
  "Brahmi": [
    69632,
    69759
  ],
  "Kaithi": [
    69760,
    69839
  ],
  "Sora": [
    69840,
    69887
  ],
  "Chakma": [
    69888,
    69967
  ],
  "Mahajani": [
    69968,
    70015
  ],
  "Sharada": [
    70016,
    70111
  ],
  "Khojki": [
    70144,
    70223
  ],
  "Khudawadi": [
    70320,
    70399
  ],
  "Grantha": [
    70400,
    70527
  ],
  "Tirhuta": [
    70784,
    70879
  ],
  "Siddham": [
    71040,
    71167
  ],
  "Modi": [
    71168,
    71263
  ],
  "Takri": [
    71296,
    71375
  ],
  "Warang": [
    71840,
    71935
  ],
  "Pau": [
    72384,
    72447
  ],
  "Cuneiform": [
    73728,
    74879
  ],
  "Egyptian": [
    77824,
    78895
  ],
  "Mro": [
    92736,
    92783
  ],
  "Bassa": [
    92880,
    92927
  ],
  "Pahawh": [
    92928,
    93071
  ],
  "Miao": [
    93952,
    94111
  ],
  "Kana": [
    110592,
    110847
  ],
  "Duployan": [
    113664,
    113823
  ],
  "Shorthand": [
    113824,
    113839
  ],
  "Byzantine": [
    118784,
    119039
  ],
  "Musical": [
    119040,
    119295
  ],
  "Counting": [
    119648,
    119679
  ],
  "Mende": [
    124928,
    125151
  ],
  "Mahjong": [
    126976,
    127023
  ],
  "Domino": [
    127024,
    127135
  ],
  "Playing": [
    127136,
    127231
  ],
  "Emoticons": [
    128512,
    128591
  ],
  "Ornamental": [
    128592,
    128639
  ],
  "Transport": [
    128640,
    128767
  ],
  "Alchemical": [
    128768,
    128895
  ],
  "Tags": [
    917504,
    917631
  ],
  "Supplementary": [
    983040,
    1114111
  ]
};
