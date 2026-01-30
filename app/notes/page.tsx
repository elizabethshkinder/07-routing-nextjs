import { dehydrate, HydrationBoundary, QueryClient, } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

type NotesProps = {
  searchParams: {
    page?: string;
    query?: string;
  };
};

export default async function Notes({ searchParams }: NotesProps) {
  const pageNumber = Number(searchParams.page) || 1;
  const query = searchParams.query ?? '';

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', pageNumber, query],
    queryFn: () => fetchNotes(pageNumber, query),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
