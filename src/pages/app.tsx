import { LoaderCircle } from 'lucide-react';

import { useQuery } from '@tanstack/react-query';

import DataTable from '@/components/data-table';

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

  const { data = [], isLoading } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      return await fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((response) => response.results);
    },
  });

  return (
    <div className="container py-8">
      {isLoading ? <LoaderCircle className="size-4 animate-spin" /> : <DataTable columns={columns} data={data} />}
    </div>
  );
}
