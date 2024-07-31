import { Status } from '../enum/status-enum';
import { CompanyProps, Option } from '../types/types';

const basePath = 'your-piece';

export const data: CompanyProps[] = [
  {
    id: 1,
    name: 'MC Jayne',
    type: 'Cantora',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/mc-jayne.jpeg`,
    site: 'https://onerpm.link/742253447290',
    urlFacebook: 'https://pt-br.facebook.com/mcjaynedivanacasa',
    urlInstagram: 'https://www.instagram.com/mc_jaynne/',
    urlYouTube: 'https://www.youtube.com/channel/UCRxY1JNWFt3aZhU0hKFM3Zw',
  },
  {
    id: 2,
    name: 'Deise Cristina',
    type: 'Escritora',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/deise-cristina-logo.jpg`,
    site: 'https://linktr.ee/DeiseCristtina',
    urlFacebook: 'https://www.facebook.com/deise.cristtina',
    urlInstagram: 'https://www.instagram.com/deisecristtina.esc',
  },
  // {
  //   id: 3,
  //   name: 'JB Bispo',
  //   type: JobType.NetworkAnalyst,
  //   status: Status.Active,
  //   city: 'Santo Amaro',
  //   urlLogo: `./${basePath}/logo/ivan-bispo-logo.jpg`,
  //   site: 'https://ivanjr.eti.br/',
  //   urlFacebook: 'https://www.facebook.com/JunniorBispoJB',
  //   urlInstagram: '',
  // },
  {
    id: 4,
    name: 'Ponto da Maniçoba',
    type: 'Restaurante',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/ponto-da-manicoba.png`,
    site: 'https://app.cardapioweb.com/restaurante_ponto_da_manicoba',
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992036994',
  },
  {
    id: 5,
    name: 'Club Burguer',
    type: 'Hamburgueria',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/club-burguer.png`,
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575991475058',
    urlInstagram: 'https://www.instagram.com/cb.burguerr',
  },
  {
    id: 6,
    name: 'Léo Celular',
    type: 'Assistência',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/leo-celular.jpg`,
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575982206751',
    urlInstagram: 'https://www.instagram.com/leocelular8',
  },
  {
    id: 7,
    name: 'Ayabas Bonecas Africanas',
    type: 'Artesanato',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/ayabas-bonecas-africanas.jpeg`,
    urlInstagram: 'https://www.instagram.com/ayabas_bonecas_africanas/',
  },
  {
    id: 8,
    name: 'Eliaellen Beauty',
    type: 'Estética',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: `./${basePath}/logo/eliaellen-beauty.jpg`,
    urlInstagram: 'https://www.instagram.com/eliaellen_beauty/',
  },
];

export const allCities = data.map((item): Option => {
  return {
    label: item.city,
    value: item.city,
  };
});

export const getUniqueOptions = (options: Option[]): Option[] => {
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
