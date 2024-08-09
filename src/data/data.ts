import { Status } from '../enum/status-enum';
import { CompanyProps, Option, OrderBy } from '../types/types';

import eliaellenBeauty from '../../public/logo/eliaellen-beauty.jpg';
import mcJayne from '../../public/logo/mc-jayne.jpeg';
import deiseCristina from '../../public/logo/deise-cristina-logo.jpg';
import pontoDaManicoba from '../../public/logo/ponto-da-manicoba.png';
import clubBurguer from '../../public/logo/club-burguer.png';
import leoCelular from '../../public/logo/leo-celular.jpg';
import ayabasBonecasAfricanas from '../../public/logo/ayabas-bonecas-africanas.jpeg';
import luizCarreto from '../../public/logo/luiz-carreto.jpg';

export const data: CompanyProps[] = [
  {
    id: 1,
    name: 'MC Jayne',
    type: 'Cantora',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: mcJayne,
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
    urlLogo: deiseCristina,
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
    urlLogo: pontoDaManicoba,
    site: 'https://app.cardapioweb.com/restaurante_ponto_da_manicoba',
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992036994',
  },
  {
    id: 5,
    name: 'Club Burguer',
    type: 'Hamburgueria',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: clubBurguer,
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575991475058',
    urlInstagram: 'https://www.instagram.com/cb.burguerr',
  },
  {
    id: 6,
    name: 'Léo Celular',
    type: 'Assistência',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: leoCelular,
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575982206751',
    urlInstagram: 'https://www.instagram.com/leocelular8',
  },
  {
    id: 7,
    name: 'Ayabas Bonecas Africanas',
    type: 'Artesanato',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: ayabasBonecasAfricanas,
    urlInstagram: 'https://www.instagram.com/ayabas_bonecas_africanas/',
  },
  {
    id: 8,
    name: 'Eliaellen Beauty',
    type: 'Estética',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: eliaellenBeauty,
    urlInstagram: 'https://www.instagram.com/eliaellen_beauty/',
  },
  {
    id: 9,
    name: 'Luiz Carreto',
    type: 'Carreto',
    status: Status.Active,
    city: 'Cachoeira',
    urlLogo: luizCarreto,
    urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992301480',
  },
];

export const allCities = data.map((item): Option => {
  return {
    label: item.city,
    value: item.city,
  };
});

export const getUniqueOptions = (options: Option[]): Option[] => {
  const optionsMap = new Map<Option['label'], Option['value']>();

  const result = options.reduce<Option[]>((acc, option) => {
    if (!optionsMap.has(option.label)) {
      optionsMap.set(option.label, option.value);
      acc.push(option);
    }

    return acc;
  }, []);

  return result;
};

export const getUniqueOptionsByAttribute = ({
  data,
  attribute,
  orderBy,
}: {
  data: CompanyProps[];
  attribute: keyof Pick<CompanyProps, 'city' | 'name' | 'type'>;
  orderBy?: OrderBy;
}): Option[] => {
  const optionsMap = new Map<string, string>();

  const result = data.reduce<Option[]>((acc, item) => {
    if (!optionsMap.has(item[attribute])) {
      const option = {
        label: item[attribute],
        value: item[attribute],
      };

      optionsMap.set(option.label, option.value);
      acc.push(option);
    }

    return acc;
  }, []);

  if (!orderBy) return result;
  if (orderBy === 'asc') {
    return result.sort((a, b) => a.value.localeCompare(b.value));
  }

  return result.sort((a, b) => b.value.localeCompare(a.value));
};

export const isExistisInArray = <T>(
  array: Array<T>,
  itemToSearch: T
): boolean => {
  return array.some((item) => item === itemToSearch);
};

export const isExistsValueInOptions = (
  options: Option[],
  itemToSearch: string
) => {
  return options.some((option) => option.value === itemToSearch);
};
