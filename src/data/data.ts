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
import misterDog from '../../public/logo/mister-dog.png';
import reiDoBurguer from '../../public/logo/rei-do-burguer.jpg';
import studioDanileSilva from '../../public/logo/studio-danile-silva.jpg';
import rosanyCostaBeauty from '../../public/logo/rosany-costa-beauty.jpeg';
import licorCachoeiraColonial from '../../public/logo/licor-cachoeira-colonial.png';
import ivanJrConsultoria from '../../public/logo/ivanjr-consultoria.jpeg';

export const data: CompanyProps[] = [];

data.push({
  id: data.length + 1,
  name: 'MC Jayne',
  type: 'Cantora',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: mcJayne,
  site: 'https://onerpm.link/742253447290',
  urlFacebook: 'https://pt-br.facebook.com/mcjaynedivanacasa',
  urlInstagram: 'https://www.instagram.com/mc_jaynne/',
  urlYouTube: 'https://www.youtube.com/channel/UCRxY1JNWFt3aZhU0hKFM3Zw',
});

data.push({
  id: data.length + 1,
  name: 'Deise Cristina',
  type: 'Escritora',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: deiseCristina,
  site: 'https://linktr.ee/DeiseCristtina',
  urlFacebook: 'https://www.facebook.com/deise.cristtina',
  urlInstagram: 'https://www.instagram.com/deisecristtina.esc',
});

data.push({
  id: data.length + 1,
  name: 'Licor Cachoeira Colonial',
  type: 'Bebidas',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: licorCachoeiraColonial,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=557534255490',
  urlInstagram: 'https://www.instagram.com/licorcachoeiracolonial/',
});

data.push({
  id: data.length + 1,
  name: 'Ivanjr - Consultoria em TIC',
  type: 'TI',
  status: Status.Active,
  city: 'Santo Amaro',
  urlLogo: ivanJrConsultoria,
  urlInstagram: 'https://www.instagram.com/ivannjr__/',
  urlLinkedin: 'https://www.linkedin.com/in/ivan-jr/',
});

// data.push({
//   id: data.length + 1,
//   name: 'Felipe Passos',
//   type: 'Design',
//   status: Status.Active,
//   city: 'Cachoeira',
//   urlLogo: ,
// });

data.push({
  id: data.length + 1,
  name: 'Ponto da Maniçoba',
  type: 'Restaurante',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: pontoDaManicoba,
  site: 'https://app.cardapioweb.com/restaurante_ponto_da_manicoba',
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992036994',
});

data.push({
  id: data.length + 1,
  name: 'Club Burguer',
  type: 'Hamburgueria',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: clubBurguer,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575991475058',
  urlInstagram: 'https://www.instagram.com/cb.burguerr',
});
data.push({
  id: data.length + 1,
  name: 'Léo Celular',
  type: 'Assistência',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: leoCelular,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575982206751',
  urlInstagram: 'https://www.instagram.com/leocelular8',
});
data.push({
  id: data.length + 1,
  name: 'Ayabas Bonecas Africanas',
  type: 'Artesanato',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: ayabasBonecasAfricanas,
  urlInstagram: 'https://www.instagram.com/ayabas_bonecas_africanas/',
});
data.push({
  id: data.length + 1,
  name: 'Eliaellen Beauty',
  type: 'Estética',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: eliaellenBeauty,
  urlInstagram: 'https://www.instagram.com/eliaellen_beauty/',
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=75992903788',
});
data.push({
  id: data.length + 1,
  name: 'Luiz Carreto',
  type: 'Carreto',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: luizCarreto,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992301480',
});
data.push({
  id: data.length + 1,
  name: 'Mister Dog',
  type: 'Hot Dog',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: misterDog,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575992106174',
  urlInstagram: 'https://www.instagram.com/mr.dog_cachoeira/',
  site: 'https://www.canva.com/design/DAFkWA8VtIU/DkEFzdj4B4_lWHvNp46KWw/view?website#4',
});
data.push({
  id: data.length + 1,
  name: 'Rei do Burguer',
  type: 'Hamburgueria',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: reiDoBurguer,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575991158242',
  urlInstagram: 'https://www.instagram.com/reidoburgercachoeira/',
});
data.push({
  id: data.length + 1,
  name: 'Studio Daline Silva',
  type: 'Manicure',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: studioDanileSilva,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575981267862',
  urlInstagram: 'https://www.instagram.com/studiodalinesilva/',
});
data.push({
  id: data.length + 1,
  name: 'Rosany Costa Beauty',
  type: 'Estética',
  status: Status.Active,
  city: 'São Félix',
  urlLogo: rosanyCostaBeauty,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=5575991369113',
  urlInstagram: 'https://www.instagram.com/rosanycostabeauty/',
});
data.push({
  id: data.length + 1,
  name: 'Licor Cachoeira Colonial',
  type: 'Bebidas',
  status: Status.Active,
  city: 'Cachoeira',
  urlLogo: licorCachoeiraColonial,
  urlWhatsApp: 'https://api.whatsapp.com/send?phone=557534255490',
  urlInstagram: 'https://www.instagram.com/licorcachoeiracolonial/',
});

console.log(data);

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
