import { ListType } from '../../../types/types';
import { Box } from '../../box/box';

import './list-type-bar.css';

interface Props {
  listType: ListType['type'];
  onListTypeClick: (type: ListType['type']) => void;
}

export const ListTypeBar = ({ onListTypeClick, listType }: Props) => {
  const handleListTypeClick = (type: ListType['type']) => {
    onListTypeClick(type);
  };

  return (
    <Box className="list-type-container">
      <button
        type="button"
        className={`list-type-action${listType === 'card' ? ' list-type-active' : ''}`}
        name="asc"
        onClick={() => handleListTypeClick('card')}
      >
        <svg
          className="list-type-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.75 1.875H1.875V9.75H9.75V1.875Z"
            stroke="#5D6570"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.125 1.875H14.25V9.75H22.125V1.875Z"
            stroke="#5D6570"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.125 14.25H14.25V22.125H22.125V14.25Z"
            stroke="#5D6570"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.75 14.25H1.875V22.125H9.75V14.25Z"
            stroke="#5D6570"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <button
        type="button"
        className={`list-type-action${listType === 'row' ? ' list-type-active' : ''}`}
        name="desc"
        onClick={() => handleListTypeClick('row')}
      >
        <svg
          className="list-type-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_297_13)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.31072 3.49805H0V8.21869H5.31072V3.49805ZM24.0002 3.49805H6.99819V8.21869H24.0002V3.49805ZM0 9.6235H5.31072V14.3442H0V9.6235ZM24.0002 9.6235H6.99819V14.3442H24.0002V9.6235ZM0 15.7488H5.31072V20.4696H0V15.7488ZM24.0002 15.7488H6.99819V20.4696H24.0002V15.7488Z"
              fill="#5D6570"
            />
          </g>
          <defs>
            <clipPath id="clip0_297_13">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </Box>
  );
};
