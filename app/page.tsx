import MainLayout from "@/components/MainLayout";
import PromptCard from "@/components/PromptCard";

export default function Home() {
  const prompts = [
    {
      title: "Plan Your Day",
      description:
        "Create a detailed schedule for your work and personal tasks today.",
    },
    {
      title: "Budget Tracker",
      description:
        "List your expenses and categorize them to identify areas to save money.",
    },
    {
      title: "Meal Planner",
      description:
        "Plan your meals for the week with a focus on healthy and balanced options.",
    },
    {
      title: "Project Brainstorm",
      description:
        "Outline the key steps and resources needed for your next big project.",
    },
    {
      title: "Workout Routine",
      description:
        "Design a workout plan tailored to your fitness goals and level.",
    },
  ];

  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {prompts.map((prompt, index) => (
          <PromptCard
            key={index}
            title={prompt.title}
            description={prompt.description}
          />
        ))}
      </div>
    </MainLayout>
  );
}
