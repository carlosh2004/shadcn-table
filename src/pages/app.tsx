import { useQuery } from '@tanstack/react-query';
import { ColumnDef } from '@tanstack/react-table';

import DataTable from '@/components/data-table/data-table';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Character } from '@/types/character';

export default function App() {
  const columns: ColumnDef<Character>[] = [
    {
      accessorKey: 'id',
      header: 'Id',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'species',
      header: 'Species',
    },
    {
      accessorKey: 'image',
      header: 'Image',
      cell: ({ row }) => (
        <Avatar>
          <AvatarImage src={row.original.image} alt={row.original.name} />
        </Avatar>
      ),
    },
  ];

  const { data = [] } = useQuery({
    queryKey: ['characters'],
    queryFn: async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      return data.results;
    },
  });

  return (
    <div className="container py-8">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
