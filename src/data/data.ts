import { Status } from '../enum/status-enum';
import { JobType } from '../enum/type-enum';
import { CompanyProps, Option } from '../types/types';

export const data: CompanyProps[] = [
  {
    id: 1,
    name: 'MC Jayne',
    type: 'Cantora',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: './logo/mc-jayne.jpeg',
    site: 'https://onerpm.link/742253447290',
    urlFacebook: 'https://pt-br.facebook.com/mcjaynedivanacasa',
    urlInstagram: 'https://www.instagram.com/mc_jaynne/',
    urlYouTube: 'https://www.youtube.com/channel/UCRxY1JNWFt3aZhU0hKFM3Zw',
    urlTikTok: 'opa',
  },
  {
    id: 2,
    name: 'Deise Cristina',
    type: 'Escritora',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: './logo/deise-cristina-logo.jpg',
    site: 'https://linktr.ee/DeiseCristtina',
    urlFacebook: 'https://www.facebook.com/deise.cristtina',
    urlInstagram: 'https://www.instagram.com/deisecristtina.esc',
  },
  {
    id: 3,
    name: 'JB Bispo',
    type: JobType.NetworkAnalyst,
    status: Status.Active,
    city: 'Santo Amaro',
    urlLogo: './logo/ivan-bispo-logo.jpg',
    site: 'https://ivanjr.eti.br/',
    urlFacebook: 'https://www.facebook.com/JunniorBispoJB',
    urlInstagram: '',
  },
  {
    id: 4,
    name: 'Matheus',
    type: JobType.NetworkAnalyst,
    status: Status.Active,
    city: 'Algum local',
    urlLogo: './logo/ivan-bispo-logo.jpg',
    site: 'https://ivanjr.eti.br/',
    urlFacebook: 'https://www.facebook.com/JunniorBispoJB',
    urlInstagram: '',
  },
];

export const allCities = data.map((item): Option => {
  return {
    label: item.city,
    value: item.city,
  };
});

export const getUniqueCities = (options: Option[]): Option[] => {
  const citiesMap = new Map<Option['label'], Option['value']>();

  const result = options.reduce<Option[]>((acc, option) => {
    if (!citiesMap.has(option.label)) {
      citiesMap.set(option.label, option.value);
      acc.push(option);
    }

    return acc;
  }, []);

  return result;
};

export const isExistisInArray = <T>(
  array: Array<T>,
  itemToSearch: T
): boolean => {
  return array.some((item) => item === itemToSearch);
};
