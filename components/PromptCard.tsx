import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clipboard, MessageSquare, X } from "lucide-react";
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

interface PromptCardProps {
  title: string;
  description: string;
}

const PromptCard: React.FC<PromptCardProps> = ({ title, description }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Card className="w-full hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className=" line-clamp-2">
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex items-end justify-end gap-5">
            <Clipboard />
            <MessageSquare />
          </CardFooter>
        </Card>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-between items-center">
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            <AlertDialogDescription>{description}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogTrigger asChild>
            <Button variant="link">
              <X size={18} />
            </Button>
          </AlertDialogTrigger>
        </div>
        <AlertDialogFooter className="flex gap-5 justify-end">
          <Button variant="link">
            <Clipboard />
          </Button>
          <Button variant="link">
            <MessageSquare />
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default PromptCard;
