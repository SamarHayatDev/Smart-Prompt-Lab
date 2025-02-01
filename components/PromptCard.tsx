import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";
import CopyPrompt from "./CopyPrompt";
import GoToChat from "./GoToChat";

interface PromptCardProps {
  title: string;
  description: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description }) => {
  return (
    <AlertDialog>
      <Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
        <AlertDialogTrigger asChild>
          {/* Wrap only the clickable parts inside AlertDialogTrigger */}
          <div className="flex flex-col flex-1 ">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="line-clamp-2">
                {description}
              </CardDescription>
            </CardContent>
          </div>
        </AlertDialogTrigger>
        <CardFooter className="flex items-end justify-end gap-5">
          <CopyPrompt text={description} />

          <GoToChat text={description} />
        </CardFooter>
      </Card>
      <AlertDialogContent>
        <div className="flex justify-between items-center relative">
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogTrigger asChild>
            <Button
              size={"icon"}
              variant="link"
              className="absolute -top-4 -right-4 bg-secondary dark:bg-secondary"
            >
              <X />
            </Button>
          </AlertDialogTrigger>
        </div>
        <AlertDialogFooter className="flex gap-5 justify-end">
          <CopyPrompt text={description} />
          <GoToChat text={description} />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PromptCard;
