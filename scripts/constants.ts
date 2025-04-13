export const CSV_COLUMNS_TO_INCLUDE = ['id', 'gender', 'age', 'variant', 'gameScore', 'gameLevel', 'gameRows', 'notifications', 'fss', 'mmtr', 'gameStart', 'gameEnd', 'overallStart', 'overallEnd', 'intervalMetrics'];

export const MMTR_ITEMS = [
  'MMTR_01_R',
  'MMTR_02_HO',
  'MMTR_03_HO',
  'MMTR_04',
  'MMTR_05_HO',
  'MMTR_06',
  'MMTR_07_HO',
  'MMTR_08_HO',
  'MMTR_09_HO',
  'MMTR_10_HO',
  'MMTR_11_HO',
  'MMTR_12',
  'MMTR_13_HO',
  'MMTR_14_HO',
  'MMTR_15_HO',
  'MMTR_16_HO',
  'MMTR_17',
  'MMTR_18_HO'
];

export const FSS_ITEMS = [
  'FSS_01',
  'FSS_02',
  'FSS_03',
  'FSS_04',
  'FSS_05',
  'FSS_06',
  'FSS_07',
  'FSS_08',
  'FSS_09',
  'FSS_10',
  'FSS_11',
  'FSS_12',
  'FSS_13',
  'FSS_14',
  'FSS_15',
  'FSS_16',
  'FSS_17',
  'FSS_18',
  'FSS_19',
  'FSS_20',
  'FSS_21',
  'FSS_22',
  'FSS_23',
  'FSS_24',
  'FSS_25',
  'FSS_26',
  'FSS_27',
  'FSS_28',
  'FSS_29',
  'FSS_30',
  'FSS_31',
  'FSS_32',
  'FSS_33',
  'FSS_34',
  'FSS_35',
  'FSS_36'
];

export const SPSS_VARIABLE_NAMES = [
  'ID',
  'SEX',
  'AGE',
  'GROUP',
  ...MMTR_ITEMS,
  'MMTR_TOTAL',
  ...FSS_ITEMS,
  'TETRIS_SCORE',
  'TETRIS_TOT',
  'TOTAL_DURATION'
];

export const VARIANT_VALUES = {
  'control': 1,
  'a': 2,
  'b': 3
};

export const MMTR_LEVEL_DIVIDER = 50;