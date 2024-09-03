import React from 'react';

import DataTable from '@/components/data-table';
import { Character } from '@/types/character';

export default function App() {
  const columns: { id: number; label: string }[] = [
    {
      id: 1,
      label: 'Id',
    },
    {
      id: 2,
      label: 'Name',
    },
    {
      id: 3,
      label: 'Species',
    },
    {
      id: 4,
      label: 'Image',
    },
  ];

  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((Response) => Response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container py-8">
      <DataTable columns={columns} data={characters} />
    </div>
  );
}
