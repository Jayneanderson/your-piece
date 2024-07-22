import { Status } from '../enum/status-enum';
import { JobType } from '../enum/type-enum';
import { CompanyProps } from '../types/company';

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
];
