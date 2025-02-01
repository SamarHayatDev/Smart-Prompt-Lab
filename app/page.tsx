import MainLayout from "@/components/MainLayout";
import PromptCard from "@/components/PromptCard";
import { GET_PROMPTS } from "@/graphql/prompts/Query";
import { client } from "@/lib/apolloClient";

export default async function Home() {
  const { data } = await client.query({ query: GET_PROMPTS });

  const prompts = data?.prompts || [];

  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        {prompts.map(
          (prompt: {
            id: string;
            prompt_title: string;
            prompt_desc: string;
          }) => (
            <PromptCard
              key={prompt.id}
              title={prompt.prompt_title}
              description={prompt.prompt_desc}
            />
          )
        )}
      </div>
    </MainLayout>
  );
}
