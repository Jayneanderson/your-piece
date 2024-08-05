import { Box } from '../box/box';
import { Image } from '../image/image';
import { Title } from '../titles/title';

import curve from '../../assets/curve.svg';
import circle from '../../assets/banner-circle.svg';

import './banner.css';

export const Banner = () => {
  return (
    <section className="banner-container">
      <Box className="banner-content">
        <Box className="banner-circle-container">
          <Image
            className="banner-circle"
            srcSet={circle}
            alt="Imagem de um círculo com várias camadas com linear gradiente na cor cinza escuro no direito ficando mais claro gradualmente descendo para o lado esquerdo"
          />
        </Box>
        <Box className="banner-information-content">
          <Box className="banner-information">
            <Title className="banner-subtitle" size="1">
              Encontre pessoas e empresas no
            </Title>
            <Title className="banner-title" size="1">
              Seu Pedacinho
            </Title>
            <Image className="banner-curve" srcSet={curve} />
            <p className="banner-text">
              Pessoas e empresas de <strong>Cachoeira</strong> e região estão
              aqui
            </p>
          </Box>
          <Box>
            <button className="banner-start" type="button">
              Iniciar
            </button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};
