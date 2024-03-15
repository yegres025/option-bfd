export const countryOptions = {
  rb: 'РБ',
  rf: 'РФ',
};

export const citiesOptions = {
  moscow: 'Москва',
  sochi: 'Сочи',
  minsk: 'Минск',
  gomel: 'Гомель',
};

export const univercityOptions = {
  humanitarian: 'гуманитарный',
  technical: 'технический',
};

export const accommodationOptions = {
  dormitory: 'общежитие',
  renta: 'аренда',
  notInterested: 'не интересует',
  mixed: 'общежитие + аренда',
};

export const defaultUnivercityKeys = {
  country: 'РФ',
  city: 'Москва'
}

export const OPTIONS = {
  [countryOptions.rb]: {
    [citiesOptions.minsk]: {
      [univercityOptions.technical]: [
        accommodationOptions.dormitory,
        accommodationOptions.notInterested,
      ],
      [univercityOptions.humanitarian]: [
        accommodationOptions.dormitory,
        accommodationOptions.notInterested,
      ],
    },
    [citiesOptions.gomel]: {
      [univercityOptions.technical]: [
        accommodationOptions.dormitory,
        accommodationOptions.notInterested,
      ],
      [univercityOptions.humanitarian]: [
        accommodationOptions.dormitory,
        accommodationOptions.notInterested,
      ],
    },
  },
  [countryOptions.rf]: {
    [citiesOptions.moscow]: {
      [univercityOptions.humanitarian]: [
        accommodationOptions.dormitory,
        accommodationOptions.renta,
        accommodationOptions.notInterested,
        accommodationOptions.mixed,
      ],
      [univercityOptions.technical]: [
        accommodationOptions.dormitory,
        accommodationOptions.renta,
        accommodationOptions.notInterested,
        accommodationOptions.mixed,
      ],
    },
    [citiesOptions.sochi]: {
      [univercityOptions.technical]: [
        accommodationOptions.dormitory,
        accommodationOptions.renta,
        accommodationOptions.notInterested,
        accommodationOptions.mixed,
      ],
      [univercityOptions.humanitarian]: [
        accommodationOptions.dormitory,
        accommodationOptions.renta,
        accommodationOptions.notInterested,
        accommodationOptions.mixed,
      ],
    },
  },
};
