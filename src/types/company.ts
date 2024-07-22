import { Status } from '../enum/status-enum';

export type CompanyProps = {
  id: number;
  name: string;
  type: string;
  status: Status;
  urlLogo: string;
  city: string;
  site?: string;
  urlFacebook?: string;
  urlInstagram?: string;
  urlLinkedin?: string;
  urlTikTok?: string;
  urlYouTube?: string;
};

export type FilterProps = {
  name: CompanyProps['name'];
  type: CompanyProps['type'];
  city: CompanyProps['city'];
};
