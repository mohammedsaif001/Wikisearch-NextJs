import getWikiResults from "@/lib/getWikiResult";
import Item from "./components/Item";

type Props = {
  params: {
    searchTerm: string;
  };
};

export async function generateMetaData({ params: { searchTerm } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const displayTerm = searchTerm.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayTerm} Not Found`,
    };
  }

  return {
    title: displayTerm,
    description: `Search Results for ${displayTerm}`,
  };
}

const SearchTerm = async ({ params: { searchTerm } }: Props) => {
  const wikiData: Promise<SearchResult> = getWikiResults(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
      {results && Object.values(results).length > 0 ? (
        Object?.values(results)?.map((result) => {
          return <Item key={result.pageid} result={result} />;
        })
      ) : (
        <div className="mx-auto flex items-center justify-center h-44">
          <h2 className="text-red-600 font-bold text-2xl text-center ">{`${searchTerm} Not Found :(`}</h2>
        </div>
      )}
    </main>
  );
};
export default SearchTerm;
