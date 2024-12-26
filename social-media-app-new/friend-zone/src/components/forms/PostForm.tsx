import { PostFormValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { titleColors } from "@/constants";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "@/lib/react-query/queries";
import { Loader2 } from "lucide-react";

const PostForm = () => {
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof PostFormValidation>>({
    resolver: zodResolver(PostFormValidation),
    defaultValues: {
      title: "",
      description: "",
      titleColor: "",
    },
  });

  const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost();

  const handleSubmit = async (values: z.infer<typeof PostFormValidation>) => {
    await createPost({ ...values });
    navigate("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-9 w-full  max-w-5xl"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="shad-form_label">Title</FormLabel>
              <FormControl>
                <Input type="text" className="shad-input" {...field} />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  className="shad-textarea custom-scrollbar"
                  {...field}
                />
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="titleColor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title Color</FormLabel>
              <FormControl>
                <ToggleGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  type="single"
                  className="flex gap-3 justify-end"
                >
                  {titleColors.map((color) => (
                    <FormItem key={color}>
                      <FormControl>
                        <ToggleGroupItem
                          value={color}
                          aria-label={`Toggle ${color}`}
                          className="shad-toggle-item"
                          style={{ background: color }}
                        ></ToggleGroupItem>
                      </FormControl>
                    </FormItem>
                  ))}
                </ToggleGroup>
              </FormControl>
              <FormMessage className="shad-form_message" />
            </FormItem>
          )}
        />
        <div className="flex gap-4 items-center justify-end">
          <Button
            type="button"
            className="shad-button_dark_4"
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="shad-button_primary whitespace-nowrap"
            disabled={isLoadingCreate}
          >
            {isLoadingCreate && <Loader2 className="animate-spin" />}
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
