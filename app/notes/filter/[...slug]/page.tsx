import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./Notes.client";

type NotesByCategoryProps = {
  params: { slug: string[] };
  searchParams: {
    page?: string;
    query?: string;
  };
};

export default async function NotesByCategory({
  params,
  searchParams,
}: NotesByCategoryProps) {

  const { slug = ["all"] } = params;
  const tag = slug[0] === "all" ? undefined : slug[0];


  const pageNumber = Number(searchParams.page) || 1;
  const query = searchParams.query ?? "";

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", pageNumber, query, tag],
    queryFn: () => fetchNotes(pageNumber, query, tag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} page={pageNumber} query={query} />
    </HydrationBoundary>
  );
}
