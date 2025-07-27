import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import type { ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface CallModalProps {
  trigger: ReactNode;
}

const CallModal = ({ trigger }: CallModalProps) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Open Pick an app?</DialogTitle>
            <DialogDescription>
              https://10minuteschool.com wants to open this application.
            </DialogDescription>
            <DialogDescription className="flex items-center gap-3">
              <Checkbox
                className="data-[state=checked]:bg-red-600 data-[state=checked]:text-white"
                id="terms"
              />
              <Label htmlFor="terms">
                Always allow 10minuteschool.com to open links of this type in
                the associated app
              </Label>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Open Pick an app</Button>
            <DialogClose asChild>
              <Button variant="destructive">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default CallModal;
