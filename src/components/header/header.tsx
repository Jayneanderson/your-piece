import { Box } from '../box/box';
import { Image } from '../image/image';
import { Title } from '../titles/title';
import './header.css';

export const Header = () => {
  return (
    <header className="header">
      <Box className="content">
        <Image className="logo" srcSet="/your-piece.svg" />
        <Title className="title">Seu Pedacinho</Title>
      </Box>
    </header>
  );
};
